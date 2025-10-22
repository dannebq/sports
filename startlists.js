// JavaScript for the start lists page

document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();

    // Check if there's an event ID in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event');

    if (eventId) {
        document.getElementById('event-filter').value = eventId;
    }

    displayStartLists();
});

function initializeFilters() {
    const sportFilter = document.getElementById('sport-filter');
    const eventFilter = document.getElementById('event-filter');
    const genderFilter = document.getElementById('gender-filter');

    // Update event filter when sport changes
    sportFilter.addEventListener('change', function() {
        updateEventFilter();
        displayStartLists();
    });

    eventFilter.addEventListener('change', displayStartLists);
    genderFilter.addEventListener('change', displayStartLists);

    // Initialize event filter
    updateEventFilter();
}

function updateEventFilter() {
    const sportFilter = document.getElementById('sport-filter');
    const eventFilter = document.getElementById('event-filter');
    const selectedSport = sportFilter.value;
    const currentSelection = eventFilter.value;

    // Get events with start lists
    const eventsWithStartLists = [...new Set(sportsData.startLists.map(s => s.eventId))];

    let filteredEvents = sportsData.events.filter(event =>
        eventsWithStartLists.includes(event.id)
    );

    if (selectedSport) {
        filteredEvents = filteredEvents.filter(event => event.sport === selectedSport);
    }

    eventFilter.innerHTML = '<option value="">All Events</option>' +
        filteredEvents.map(event =>
            `<option value="${event.id}" ${event.id == currentSelection ? 'selected' : ''}>${event.name}</option>`
        ).join('');
}

function displayStartLists() {
    const startlistDisplay = document.getElementById('startlist-display');
    const sportFilter = document.getElementById('sport-filter').value;
    const eventFilter = document.getElementById('event-filter').value;
    const genderFilter = document.getElementById('gender-filter').value;

    // Filter events
    let filteredEvents = sportsData.events.filter(event => {
        const hasStartList = sportsData.startLists.some(s => s.eventId === event.id);
        if (!hasStartList) return false;
        if (sportFilter && event.sport !== sportFilter) return false;
        if (eventFilter && event.id !== parseInt(eventFilter)) return false;
        if (genderFilter && event.gender !== genderFilter) return false;
        return true;
    });

    if (filteredEvents.length === 0) {
        startlistDisplay.innerHTML = '<div class="no-data">No start lists found for the selected filters.</div>';
        return;
    }

    // Display start lists for each event
    startlistDisplay.innerHTML = filteredEvents.map(event => {
        const eventStartList = sportsData.startLists
            .filter(s => s.eventId === event.id)
            .sort((a, b) => a.startOrder - b.startOrder);

        return `
            <div class="startlist-container">
                <div style="padding: 10px; border-bottom: 1px solid #000;">
                    <strong>${event.name}</strong><br>
                    ${event.location} - ${formatDate(event.date)}
                    ${event.status === 'upcoming' ? ' (Upcoming)' : ''}
                </div>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Bib</th>
                                <th>Athlete</th>
                                <th>Country</th>
                                <th>Start Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${eventStartList.map(entry => `
                                <tr>
                                    <td>${entry.startOrder}</td>
                                    <td class="bib-number">${entry.bib}</td>
                                    <td>${entry.athlete}</td>
                                    <td class="country">${entry.country}</td>
                                    <td class="time">${entry.startTime}</td>
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
