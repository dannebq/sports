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
    { date: '2025-10-24', time: '20:30', sport: 'Formel 1', event: 'Mexico City GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-10-25', time: '19:30', sport: 'Formel 1', event: 'Mexico City GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-10-26', time: '21:00', sport: 'Formel 1', event: 'Mexico City GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-07', time: '16:30', sport: 'Formel 1', event: 'São Paulo GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-08', time: '16:00', sport: 'Formel 1', event: 'São Paulo GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-09', time: '18:00', sport: 'Formel 1', event: 'São Paulo GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-21', time: '04:30', sport: 'Formel 1', event: 'Las Vegas GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-11-22', time: '04:30', sport: 'Formel 1', event: 'Las Vegas GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-23', time: '07:00', sport: 'Formel 1', event: 'Las Vegas GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-28', time: '15:30', sport: 'Formel 1', event: 'Qatar GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-29', time: '16:00', sport: 'Formel 1', event: 'Qatar GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-30', time: '18:00', sport: 'Formel 1', event: 'Qatar GP - Race', link: 'schedule-f1.html' },
    { date: '2025-12-05', time: '11:30', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-12-06', time: '12:30', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-12-07', time: '14:00', sport: 'Formel 1', event: 'Abu Dhabi GP - Race (Säsongsavslutning)', link: 'schedule-f1.html' },

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

    // Malmö FF
    { date: '2025-10-23', time: '21:00', sport: 'Malmö FF', event: 'Malmö FF - Dinamo Zagreb (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-10-27', sport: 'Malmö FF', event: 'Malmö FF - Hammarby IF', link: 'schedule-malmo.html' },
    { date: '2025-11-01', sport: 'Malmö FF', event: 'BK Häcken - Malmö FF', link: 'schedule-malmo.html' },
    { date: '2025-11-06', sport: 'Malmö FF', event: 'Malmö FF - Panathinaikos (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-11-09', sport: 'Malmö FF', event: 'Malmö FF - GAIS', link: 'schedule-malmo.html' },
    { date: '2025-11-27', sport: 'Malmö FF', event: 'Nottingham Forest - Malmö FF (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-12-11', sport: 'Malmö FF', event: 'Porto - Malmö FF (Europa)', link: 'schedule-malmo.html' },
    { date: '2026-01-22', sport: 'Malmö FF', event: 'Malmö FF - Crvena Zvezda (Europa)', link: 'schedule-malmo.html' },
    { date: '2026-01-29', sport: 'Malmö FF', event: 'Genk - Malmö FF (Europa)', link: 'schedule-malmo.html' },

    // Ski Classics
    { date: '2025-12-13', sport: 'Ski Classics', event: 'Bad Gastein Pro Team Tempo, Österrike', link: 'schedule-skiclassics.html' },
    { date: '2025-12-14', sport: 'Ski Classics', event: 'Bad Gastein Criterium, Österrike', link: 'schedule-skiclassics.html' },
    { date: '2026-01-17', sport: 'Ski Classics', event: 'Engadin La Diagonela, Schweiz', link: 'schedule-skiclassics.html' },
    { date: '2026-01-25', sport: 'Ski Classics', event: 'Marcialonga, Italien', link: 'schedule-skiclassics.html' },
    { date: '2026-01-30', sport: 'Ski Classics', event: 'Bedrichov Sprint, Tjeckien', link: 'schedule-skiclassics.html' },
    { date: '2026-02-01', sport: 'Ski Classics', event: 'Jizerská50, Tjeckien', link: 'schedule-skiclassics.html' },
    { date: '2026-03-01', sport: 'Ski Classics', event: 'Vasaloppet, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-07', sport: 'Ski Classics', event: 'Grönklitt 50k ITT Damer, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-08', sport: 'Ski Classics', event: 'Grönklitt 50k ITT Herrar, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-14', sport: 'Ski Classics', event: 'Birkebeinerrennet, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-21', sport: 'Ski Classics', event: 'Marcialonga Bodø, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-28', sport: 'Ski Classics', event: 'Reistadløpet, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-29', sport: 'Ski Classics', event: 'Grand Finale Summit 2 Senja, Norge', link: 'schedule-skiclassics.html' },
];

// Function to get today's events
function getTodaysEvents() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    return allEvents.filter(event => event.date === todayString);
}

// Function to get upcoming events (within 7 days, excluding today)
function getUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return allEvents.filter(event => {
        const eventDate = new Date(event.date + 'T00:00:00');
        return eventDate >= tomorrow && eventDate <= nextWeek;
    }).sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
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
        const timeDisplay = event.time ? ` - ${event.time}` : '';
        html += `
            <div class="event-item">
                <div class="event-info">
                    <h4>${event.sport}${timeDisplay}</h4>
                    <p>${event.event}</p>
                </div>
            </div>
        `;
    });
    html += '</div>';

    eventsContainer.innerHTML = html;
}

// Function to display upcoming events on the page
function displayUpcomingEvents() {
    const eventsContainer = document.getElementById('upcoming-events');
    if (!eventsContainer) return;

    const upcomingEvents = getUpcomingEvents();

    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<p style="font-style: italic;">Inga kommande händelser inom 7 dagar</p>';
        return;
    }

    // Group events by date
    const eventsByDate = {};
    upcomingEvents.forEach(event => {
        if (!eventsByDate[event.date]) {
            eventsByDate[event.date] = [];
        }
        eventsByDate[event.date].push(event);
    });

    // Format date manually to avoid locale issues
    const days = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'];
    const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

    let html = '<div class="event-list">';

    // Iterate through dates in order
    Object.keys(eventsByDate).sort().forEach(dateKey => {
        const eventDate = new Date(dateKey + 'T00:00:00');
        const dateString = `${days[eventDate.getDay()]} ${eventDate.getDate()} ${months[eventDate.getMonth()]}`;

        html += `<div class="date-group">`;
        html += `<h4 class="date-header">${dateString}</h4>`;

        eventsByDate[dateKey].forEach(event => {
            const timeDisplay = event.time ? ` ${event.time}` : '';
            html += `
                <div class="event-item-grouped">
                    <span class="event-sport">${event.sport}${timeDisplay}:</span>
                    <span class="event-desc">${event.event}</span>
                </div>
            `;
        });

        html += `</div>`;
    });

    html += '</div>';

    eventsContainer.innerHTML = html;
}

// Run when page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        displayTodaysEvents();
        displayUpcomingEvents();
    });
}
