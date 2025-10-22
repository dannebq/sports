// API Fetch Module - Fetches live football results from external APIs

class FootballDataFetcher {
    constructor() {
        this.isLoading = false;
        this.lastFetch = null;
        this.refreshTimer = null;
    }

    // Initialize auto-fetch if enabled
    init() {
        if (!apiConfig.enabled) {
            console.log('API fetch disabled. Using static data.');
            return;
        }

        if (apiConfig.apiKey === 'YOUR_API_KEY_HERE') {
            console.warn('API key not configured. Please set your API key in config.js');
            return;
        }

        console.log('API fetch enabled. Starting auto-refresh...');
        this.startAutoRefresh();

        // Fetch immediately on load
        this.fetchAllResults();
    }

    // Start auto-refresh timer
    startAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }

        this.refreshTimer = setInterval(() => {
            this.fetchAllResults();
        }, apiConfig.refreshInterval);

        console.log(`Auto-refresh enabled: every ${apiConfig.refreshInterval / 1000} seconds`);
    }

    // Stop auto-refresh
    stopAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
            console.log('Auto-refresh stopped');
        }
    }

    // Fetch results for all leagues
    async fetchAllResults() {
        if (this.isLoading) {
            console.log('Fetch already in progress...');
            return;
        }

        this.isLoading = true;
        this.showLoadingIndicator();

        try {
            const [allsvenskanData, premierLeagueData] = await Promise.all([
                this.fetchLeagueMatches('allsvenskan'),
                this.fetchLeagueMatches('premierleague')
            ]);

            if (allsvenskanData || premierLeagueData) {
                this.updateSportsData(allsvenskanData, premierLeagueData);
                this.lastFetch = new Date();
                console.log('Results updated successfully at', this.lastFetch.toLocaleTimeString());

                // Trigger refresh of displays
                this.triggerDataRefresh();
            }
        } catch (error) {
            console.error('Error fetching results:', error);
            this.showErrorMessage('Failed to fetch live results. Using cached data.');
        } finally {
            this.isLoading = false;
            this.hideLoadingIndicator();
        }
    }

    // Fetch matches for a specific league
    async fetchLeagueMatches(league) {
        const provider = apiConfig.provider;
        const endpoints = apiConfig.endpoints[provider];

        if (!endpoints) {
            console.error(`Invalid provider: ${provider}`);
            return null;
        }

        const url = `${endpoints.baseUrl}${endpoints[league]}?status=${apiConfig.filters.status}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': apiConfig.apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return this.transformApiData(data, league);
        } catch (error) {
            console.error(`Error fetching ${league}:`, error.message);
            return null;
        }
    }

    // Transform API data to our format
    transformApiData(apiData, league) {
        if (!apiData || !apiData.matches) {
            return null;
        }

        const leagueName = league === 'allsvenskan' ? 'Allsvenskan' : 'Premier League';
        const matches = apiData.matches.slice(0, apiConfig.filters.limit);

        // Group matches by matchday/round
        const matchdayGroups = {};

        matches.forEach(match => {
            const matchday = match.matchday || match.season?.currentMatchday || 1;

            if (!matchdayGroups[matchday]) {
                matchdayGroups[matchday] = [];
            }

            matchdayGroups[matchday].push({
                homeTeam: match.homeTeam.name || match.homeTeam.shortName,
                awayTeam: match.awayTeam.name || match.awayTeam.shortName,
                homeScore: match.score.fullTime.home ?? 0,
                awayScore: match.score.fullTime.away ?? 0,
                stadium: match.venue || 'Unknown',
                attendance: match.attendance ? match.attendance.toString() : 'N/A',
                date: match.utcDate
            });
        });

        // Create events and results
        const events = [];
        const results = [];
        let eventId = Date.now(); // Use timestamp as base ID

        Object.keys(matchdayGroups).forEach(matchday => {
            const matchdayMatches = matchdayGroups[matchday];
            const firstMatch = matches.find(m => (m.matchday || 1) == matchday);

            events.push({
                id: eventId,
                name: league === 'allsvenskan' ? `Round ${matchday}` : `Matchday ${matchday}`,
                sport: league,
                league: leagueName,
                date: firstMatch ? firstMatch.utcDate.split('T')[0] : new Date().toISOString().split('T')[0],
                status: 'completed'
            });

            matchdayMatches.forEach(match => {
                results.push({
                    eventId: eventId,
                    ...match
                });
            });

            eventId++;
        });

        return { events, results };
    }

    // Update the global sportsData object
    updateSportsData(allsvenskanData, premierLeagueData) {
        const newEvents = [];
        const newResults = [];

        if (allsvenskanData) {
            newEvents.push(...allsvenskanData.events);
            newResults.push(...allsvenskanData.results);
        }

        if (premierLeagueData) {
            newEvents.push(...premierLeagueData.events);
            newResults.push(...premierLeagueData.results);
        }

        // Merge with existing data (prefer API data)
        if (newEvents.length > 0) {
            sportsData.events = newEvents;
            sportsData.results = newResults;
            console.log(`Updated: ${newEvents.length} events, ${newResults.length} results`);
        }
    }

    // Trigger refresh of all displays
    triggerDataRefresh() {
        // Trigger custom event for other scripts to listen to
        window.dispatchEvent(new CustomEvent('sportsDataUpdated'));

        // If display functions exist, call them
        if (typeof displayResults === 'function') {
            displayResults();
        }
        if (typeof displayStartLists === 'function') {
            displayStartLists();
        }
        if (typeof displayUpcomingEvents === 'function') {
            displayUpcomingEvents();
        }
    }

    // UI Helpers
    showLoadingIndicator() {
        let indicator = document.getElementById('loading-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'loading-indicator';
            indicator.style.cssText = 'position:fixed;top:10px;right:10px;padding:10px;background:#000;color:#fff;font-family:monospace;z-index:9999;';
            indicator.textContent = 'Fetching results...';
            document.body.appendChild(indicator);
        }
        indicator.style.display = 'block';
    }

    hideLoadingIndicator() {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }

    showErrorMessage(message) {
        console.error(message);
        // Could add a UI notification here
    }

    // Get status info
    getStatus() {
        return {
            enabled: apiConfig.enabled,
            isLoading: this.isLoading,
            lastFetch: this.lastFetch,
            nextFetch: this.lastFetch ? new Date(this.lastFetch.getTime() + apiConfig.refreshInterval) : null
        };
    }
}

// Create global instance
const footballFetcher = new FootballDataFetcher();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => footballFetcher.init());
} else {
    footballFetcher.init();
}

// Expose to window for manual control
window.footballFetcher = footballFetcher;
