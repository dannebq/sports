// All events from all sports with standardized dates
const allEvents = [
    // Längdskidor Världscupen
    { date: '2025-11-28', sport: 'Längdskidor', event: 'Ruka, Finland - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-11-29', sport: 'Längdskidor', event: 'Ruka, Finland - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-11-30', sport: 'Längdskidor', event: 'Ruka, Finland - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-05', sport: 'Längdskidor', event: 'Trondheim, Norge - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-06', sport: 'Längdskidor', event: 'Trondheim, Norge - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-07', sport: 'Längdskidor', event: 'Trondheim, Norge - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-12', sport: 'Längdskidor', event: 'Davos, Schweiz - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-13', sport: 'Längdskidor', event: 'Davos, Schweiz - Världscup', link: 'schedule-worldcup.html' },
    { date: '2025-12-14', sport: 'Längdskidor', event: 'Davos, Schweiz - Världscup', link: 'schedule-worldcup.html' },

    // Handbollsligan (subset of upcoming matches)
    { date: '2025-10-25', sport: 'Handbollsligan', event: 'Djurgården - IFK Värnamo', link: 'schedule-handbollsligan.html' },
    { date: '2025-10-25', sport: 'Handbollsligan', event: 'Östers IF - Degerfors IF', link: 'schedule-handbollsligan.html' },
    { date: '2025-10-26', sport: 'Handbollsligan', event: 'Flera matcher', link: 'schedule-handbollsligan.html' },
    { date: '2025-10-27', sport: 'Handbollsligan', event: 'Malmö FF - Hammarby', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-01', sport: 'Handbollsligan', event: 'Flera matcher', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-02', sport: 'Handbollsligan', event: 'Flera matcher', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-09', sport: 'Handbollsligan', event: 'Flera matcher', link: 'schedule-handbollsligan.html' },

    // Green Bay Packers
    { date: '2025-09-07', sport: 'NFL', event: 'Green Bay Packers - Detroit Lions', link: 'schedule-packers.html' },
    { date: '2025-09-11', sport: 'NFL', event: 'Green Bay Packers - Washington Commanders', link: 'schedule-packers.html' },
    { date: '2025-09-21', sport: 'NFL', event: 'Cleveland Browns - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-09-28', sport: 'NFL', event: 'Dallas Cowboys - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-10-12', sport: 'NFL', event: 'Green Bay Packers - Cincinnati Bengals', link: 'schedule-packers.html' },
    { date: '2025-10-19', sport: 'NFL', event: 'Arizona Cardinals - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-10-26', sport: 'NFL', event: 'Pittsburgh Steelers - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-11-02', sport: 'NFL', event: 'Green Bay Packers - Carolina Panthers', link: 'schedule-packers.html' },
    { date: '2025-11-10', sport: 'NFL', event: 'Green Bay Packers - Philadelphia Eagles', link: 'schedule-packers.html' },
    { date: '2025-11-16', sport: 'NFL', event: 'New York Giants - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-11-23', sport: 'NFL', event: 'Green Bay Packers - Minnesota Vikings', link: 'schedule-packers.html' },
    { date: '2025-11-27', sport: 'NFL', event: 'Detroit Lions - Green Bay Packers (Thanksgiving)', link: 'schedule-packers.html' },
    { date: '2025-12-07', sport: 'NFL', event: 'Green Bay Packers - Chicago Bears', link: 'schedule-packers.html' },
    { date: '2025-12-14', sport: 'NFL', event: 'Denver Broncos - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-12-20', sport: 'NFL', event: 'Chicago Bears - Green Bay Packers', link: 'schedule-packers.html' },

    // Allsvenskan
    { date: '2025-10-25', sport: 'Allsvenskan', event: 'Djurgården - IFK Värnamo', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-25', sport: 'Allsvenskan', event: 'Östers IF - Degerfors IF', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-26', sport: 'Allsvenskan', event: 'Flera matcher', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-27', sport: 'Allsvenskan', event: 'Malmö FF - Hammarby', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-01', sport: 'Allsvenskan', event: 'Flera matcher', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-02', sport: 'Allsvenskan', event: 'Flera matcher', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', sport: 'Allsvenskan', event: 'Flera matcher', link: 'schedule-allsvenskan.html' },

    // Formel 1
    { date: '2025-10-24', sport: 'Formel 1', event: 'Mexico City GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-10-25', sport: 'Formel 1', event: 'Mexico City GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-10-26', sport: 'Formel 1', event: 'Mexico City GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-07', sport: 'Formel 1', event: 'São Paulo GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-08', sport: 'Formel 1', event: 'São Paulo GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-09', sport: 'Formel 1', event: 'São Paulo GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-21', sport: 'Formel 1', event: 'Las Vegas GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-11-22', sport: 'Formel 1', event: 'Las Vegas GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-23', sport: 'Formel 1', event: 'Las Vegas GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-28', sport: 'Formel 1', event: 'Qatar GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-29', sport: 'Formel 1', event: 'Qatar GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-30', sport: 'Formel 1', event: 'Qatar GP - Race', link: 'schedule-f1.html' },
    { date: '2025-12-05', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-12-06', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-12-07', sport: 'Formel 1', event: 'Abu Dhabi GP - Race (Säsongsavslutning)', link: 'schedule-f1.html' },

    // Skidskytte (covering date ranges with individual dates)
    { date: '2025-11-29', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-11-30', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-01', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-02', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-03', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-04', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-05', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-06', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-07', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-08', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
];

// Function to get today's events
function getTodaysEvents() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    return allEvents.filter(event => event.date === todayString);
}

// Function to display today's events on the page
function displayTodaysEvents() {
    const eventsContainer = document.getElementById('todays-events');
    if (!eventsContainer) return;

    const todaysEvents = getTodaysEvents();

    if (todaysEvents.length === 0) {
        eventsContainer.innerHTML = '<p style="font-style: italic;">Inga händelser idag</p>';
        return;
    }

    let html = '<div class="event-list">';
    todaysEvents.forEach(event => {
        html += `
            <div class="event-item">
                <div class="event-info">
                    <h4>${event.sport}</h4>
                    <p>${event.event}</p>
                    <a href="${event.link}" class="btn">Se mer</a>
                </div>
            </div>
        `;
    });
    html += '</div>';

    eventsContainer.innerHTML = html;
}

// Run when page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', displayTodaysEvents);
}
