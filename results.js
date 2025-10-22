// JavaScript for the results page

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    displayResults();
});

function initializeFilters() {
    const sportFilter = document.getElementById('sport-filter');
    const eventFilter = document.getElementById('event-filter');
    const genderFilter = document.getElementById('gender-filter');

    // Update event filter when sport changes
    sportFilter.addEventListener('change', function() {
        updateEventFilter();
        displayResults();
    });

    eventFilter.addEventListener('change', displayResults);
    genderFilter.addEventListener('change', displayResults);

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

    eventFilter.innerHTML = '<option value="">All Events</option>' +
        filteredEvents.map(event =>
            `<option value="${event.id}">${event.name}</option>`
        ).join('');
}

function displayResults() {
    const resultsDisplay = document.getElementById('results-display');
    const sportFilter = document.getElementById('sport-filter').value;
    const eventFilter = document.getElementById('event-filter').value;
    const genderFilter = document.getElementById('gender-filter').value;

    // Filter events
    let filteredEvents = sportsData.events.filter(event => {
        const hasResults = sportsData.results.some(r => r.eventId === event.id);
        if (!hasResults || event.status !== 'completed') return false;
        if (sportFilter && event.sport !== sportFilter) return false;
        if (eventFilter && event.id !== parseInt(eventFilter)) return false;
        if (genderFilter && event.gender !== genderFilter) return false;
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
                    <strong>${event.name}</strong><br>
                    ${event.location} - ${formatDate(event.date)}
                </div>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Bib</th>
                                <th>Athlete</th>
                                <th>Country</th>
                                <th>Time</th>
                                <th>Diff</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${eventResults.map(result => `
                                <tr>
                                    <td class="position position-${result.position}">${result.position}.</td>
                                    <td class="bib-number">${result.bib}</td>
                                    <td>${result.athlete}</td>
                                    <td class="country">${result.country}</td>
                                    <td class="time">${result.time}</td>
                                    <td>${result.diff || '-'}</td>
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
