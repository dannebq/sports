// JavaScript for the results page

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    displayResults();
    updateLastFetchTime();
});

// Listen for data updates
window.addEventListener('sportsDataUpdated', function() {
    displayResults();
    updateLastFetchTime();
});

function initializeFilters() {
    const sportFilter = document.getElementById('sport-filter');
    const eventFilter = document.getElementById('event-filter');

    // Update event filter when sport changes
    sportFilter.addEventListener('change', function() {
        updateEventFilter();
        displayResults();
    });

    eventFilter.addEventListener('change', displayResults);

    // Initialize event filter
    updateEventFilter();
}

function updateEventFilter() {
    const sportFilter = document.getElementById('sport-filter');
    const eventFilter = document.getElementById('event-filter');
    const selectedSport = sportFilter.value;

    // Get events with results
    const eventsWithResults = [...new Set(sportsData.results.map(r => r.eventId))];

    let filteredEvents = sportsData.events.filter(event =>
        eventsWithResults.includes(event.id) && event.status === 'completed'
    );

    if (selectedSport) {
        filteredEvents = filteredEvents.filter(event => event.sport === selectedSport);
    }

    eventFilter.innerHTML = '<option value="">All Matchdays</option>' +
        filteredEvents.map(event =>
            `<option value="${event.id}">${event.league} - ${event.name}</option>`
        ).join('');
}

function displayResults() {
    const resultsDisplay = document.getElementById('results-display');
    const sportFilter = document.getElementById('sport-filter').value;
    const eventFilter = document.getElementById('event-filter').value;

    // Filter events
    let filteredEvents = sportsData.events.filter(event => {
        const hasResults = sportsData.results.some(r => r.eventId === event.id);
        if (!hasResults || event.status !== 'completed') return false;
        if (sportFilter && event.sport !== sportFilter) return false;
        if (eventFilter && event.id !== parseInt(eventFilter)) return false;
        return true;
    });

    if (filteredEvents.length === 0) {
        resultsDisplay.innerHTML = '<div class="no-data">No results found for the selected filters.</div>';
        return;
    }

    // Display results for each event
    resultsDisplay.innerHTML = filteredEvents.map(event => {
        const eventResults = sportsData.results.filter(r => r.eventId === event.id);

        return `
            <div class="results-container">
                <div style="padding: 10px; border-bottom: 1px solid #000;">
                    <strong>${event.league} - ${event.name}</strong><br>
                    ${formatDate(event.date)}
                </div>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Home</th>
                                <th>Score</th>
                                <th>Away</th>
                                <th>Stadium</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${eventResults.map(result => `
                                <tr>
                                    <td>${result.homeTeam}</td>
                                    <td class="time">${result.homeScore} - ${result.awayScore}</td>
                                    <td>${result.awayTeam}</td>
                                    <td>${result.stadium}</td>
                                    <td>${result.attendance}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function updateLastFetchTime() {
    const statusElement = document.getElementById('last-update');
    if (!statusElement) return;

    if (window.footballFetcher && footballFetcher.lastFetch) {
        const time = footballFetcher.lastFetch.toLocaleTimeString();
        statusElement.textContent = `Last updated: ${time}`;
    } else {
        statusElement.textContent = 'Using static data';
    }
}
