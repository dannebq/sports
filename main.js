// Main JavaScript for the home page

document.addEventListener('DOMContentLoaded', function() {
    displayUpcomingEvents();
});

function displayUpcomingEvents() {
    const eventsContainer = document.getElementById('upcoming-events');

    if (!eventsContainer) return;

    // Filter upcoming events and sort by date
    const upcomingEvents = sportsData.events
        .filter(event => event.status === 'upcoming')
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<div class="no-data">No upcoming events scheduled.</div>';
        return;
    }

    eventsContainer.innerHTML = upcomingEvents.map(event => `
        <div class="event-item">
            <div class="event-info">
                <h4>${event.name}</h4>
                <p>${event.location}</p>
            </div>
            <div class="event-date">${formatDate(event.date)}</div>
            <a href="startlists.html?event=${event.id}" class="btn">View Start List</a>
        </div>
    `).join('');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
