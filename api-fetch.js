// Web Scraper Module - Scrapes live football results from websites

class FootballWebScraper {
    constructor() {
        this.isLoading = false;
        this.lastFetch = null;
        this.refreshTimer = null;
    }

    // Initialize auto-scraping if enabled
    init() {
        if (!apiConfig.enabled) {
            console.log('Web scraping disabled. Using static data.');
            return;
        }

        console.log('Web scraping enabled. Starting auto-refresh...');
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
            console.log('Scraping already in progress...');
            return;
        }

        this.isLoading = true;
        this.showLoadingIndicator();

        try {
            const [allsvenskanData, premierLeagueData] = await Promise.all([
                this.scrapeLeague('allsvenskan'),
                this.scrapeLeague('premierleague')
            ]);

            if (allsvenskanData || premierLeagueData) {
                this.updateSportsData(allsvenskanData, premierLeagueData);
                this.lastFetch = new Date();
                console.log('Results scraped successfully at', this.lastFetch.toLocaleTimeString());

                // Trigger refresh of displays
                this.triggerDataRefresh();
            }
        } catch (error) {
            console.error('Error scraping results:', error);
            this.showErrorMessage('Failed to scrape results. Using cached data.');
        } finally {
            this.isLoading = false;
            this.hideLoadingIndicator();
        }
    }

    // Scrape matches for a specific league
    async scrapeLeague(league) {
        const source = apiConfig.sources[league];

        if (!source) {
            console.error(`No source configured for: ${league}`);
            return null;
        }

        console.log(`Scraping ${source.name} from ${source.url}`);

        try {
            const html = await this.fetchHTML(source.url);
            const results = this.parseHTML(html, source.parser, league);

            console.log(`Scraped ${results.events.length} events, ${results.results.length} matches from ${source.name}`);
            return results;
        } catch (error) {
            console.error(`Error scraping ${league}:`, error.message);
            return null;
        }
    }

    // Fetch HTML from URL (with CORS proxy if using browser method)
    async fetchHTML(url) {
        const method = apiConfig.method;
        let fetchUrl = url;

        if (method === 'browser') {
            // Use CORS proxy for browser-based scraping
            fetchUrl = apiConfig.corsProxy + encodeURIComponent(url);
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), apiConfig.options.timeout);

        try {
            const response = await fetch(fetchUrl, {
                method: 'GET',
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });

            clearTimeout(timeout);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const html = await response.text();
            return html;
        } catch (error) {
            clearTimeout(timeout);
            throw error;
        }
    }

    // Parse HTML based on website format
    parseHTML(html, parser, league) {
        switch (parser) {
            case 'flashscore':
                return this.parseFlashscore(html, league);
            case 'generic':
                return this.parseGeneric(html, league);
            default:
                throw new Error(`Unknown parser: ${parser}`);
        }
    }

    // Parse Flashscore format (simplified - actual implementation would be more complex)
    parseFlashscore(html, league) {
        const events = [];
        const results = [];
        const leagueName = apiConfig.sources[league].name;

        // Create a temporary DOM element to parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // NOTE: This is a simplified example. Actual Flashscore parsing would require
        // inspecting their HTML structure and adapting the selectors.
        // Flashscore uses dynamic content, so this approach might not work without modifications.

        // For demonstration, we'll parse a generic table structure
        // In reality, you'd need to inspect Flashscore's actual HTML structure

        try {
            // Example: Look for match containers
            const matchElements = doc.querySelectorAll('.event__match, .sportName, tr');

            let eventId = Date.now();
            let currentMatchday = 1;
            const matchesByRound = {};

            // This is pseudo-code - actual implementation depends on website structure
            matchElements.forEach((element, index) => {
                // Try to extract match data
                const homeTeam = element.querySelector('.event__participant--home, .team-home, td:nth-child(2)')?.textContent?.trim();
                const awayTeam = element.querySelector('.event__participant--away, .team-away, td:nth-child(4)')?.textContent?.trim();
                const scoreElement = element.querySelector('.event__score, .score, td:nth-child(3)')?.textContent?.trim();

                if (homeTeam && awayTeam && scoreElement) {
                    // Parse score
                    const scoreParts = scoreElement.match(/(\d+)\s*[-:]\s*(\d+)/);

                    if (scoreParts) {
                        const homeScore = parseInt(scoreParts[1]);
                        const awayScore = parseInt(scoreParts[2]);

                        if (!matchesByRound[currentMatchday]) {
                            matchesByRound[currentMatchday] = [];
                        }

                        matchesByRound[currentMatchday].push({
                            homeTeam,
                            awayTeam,
                            homeScore,
                            awayScore,
                            stadium: 'N/A',
                            attendance: 'N/A'
                        });
                    }
                }
            });

            // Create events and results from scraped data
            Object.keys(matchesByRound).forEach(matchday => {
                const matchdayMatches = matchesByRound[matchday];

                events.push({
                    id: eventId,
                    name: league === 'allsvenskan' ? `Round ${matchday}` : `Matchday ${matchday}`,
                    sport: league,
                    league: leagueName,
                    date: new Date().toISOString().split('T')[0],
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

        } catch (error) {
            console.error('Error parsing HTML:', error);
        }

        // If parsing failed or returned no results, return empty but valid structure
        if (events.length === 0) {
            console.warn(`No matches found for ${league}. HTML structure may have changed.`);
        }

        return { events, results };
    }

    // Generic parser for simple table structures
    parseGeneric(html, league) {
        const events = [];
        const results = [];
        const leagueName = apiConfig.sources[league].name;

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Look for tables with match data
        const tables = doc.querySelectorAll('table');

        let eventId = Date.now();
        const allMatches = [];

        tables.forEach(table => {
            const rows = table.querySelectorAll('tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');

                if (cells.length >= 3) {
                    const homeTeam = cells[0]?.textContent?.trim();
                    const score = cells[1]?.textContent?.trim();
                    const awayTeam = cells[2]?.textContent?.trim();

                    if (homeTeam && awayTeam && score) {
                        const scoreParts = score.match(/(\d+)\s*[-:]\s*(\d+)/);

                        if (scoreParts) {
                            allMatches.push({
                                homeTeam,
                                awayTeam,
                                homeScore: parseInt(scoreParts[1]),
                                awayScore: parseInt(scoreParts[2]),
                                stadium: 'N/A',
                                attendance: 'N/A'
                            });
                        }
                    }
                }
            });
        });

        // Group matches into one event
        if (allMatches.length > 0) {
            events.push({
                id: eventId,
                name: 'Recent Matches',
                sport: league,
                league: leagueName,
                date: new Date().toISOString().split('T')[0],
                status: 'completed'
            });

            allMatches.forEach(match => {
                results.push({
                    eventId: eventId,
                    ...match
                });
            });
        }

        return { events, results };
    }

    // Update the global sportsData object
    updateSportsData(allsvenskanData, premierLeagueData) {
        const newEvents = [];
        const newResults = [];

        if (allsvenskanData && allsvenskanData.events.length > 0) {
            newEvents.push(...allsvenskanData.events);
            newResults.push(...allsvenskanData.results);
        }

        if (premierLeagueData && premierLeagueData.events.length > 0) {
            newEvents.push(...premierLeagueData.events);
            newResults.push(...premierLeagueData.results);
        }

        // Merge with existing data (prefer scraped data if available)
        if (newEvents.length > 0) {
            sportsData.events = newEvents;
            sportsData.results = newResults;
            console.log(`Updated: ${newEvents.length} events, ${newResults.length} results`);
        } else {
            console.log('No new data scraped. Keeping existing data.');
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
            indicator.textContent = 'Scraping results...';
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
            method: apiConfig.method,
            isLoading: this.isLoading,
            lastFetch: this.lastFetch,
            nextFetch: this.lastFetch ? new Date(this.lastFetch.getTime() + apiConfig.refreshInterval) : null
        };
    }
}

// Create global instance
const footballFetcher = new FootballWebScraper();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => footballFetcher.init());
} else {
    footballFetcher.init();
}

// Expose to window for manual control
window.footballFetcher = footballFetcher;
