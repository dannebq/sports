// Hide past events from schedule tables
function hidePastEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison

    // Swedish month names mapping (full and abbreviated)
    const monthNames = {
        'januari': 0, 'jan': 0,
        'februari': 1, 'feb': 1,
        'mars': 2, 'mar': 2,
        'april': 3, 'apr': 3,
        'maj': 4,
        'juni': 5, 'jun': 5,
        'juli': 6, 'jul': 7,
        'augusti': 7, 'aug': 7,
        'september': 8, 'sep': 8,
        'oktober': 9, 'okt': 9,
        'november': 10, 'nov': 10,
        'december': 11, 'dec': 11
    };

    // Find all schedule tables
    const tables = document.querySelectorAll('.schedule-table tbody');

    tables.forEach(tbody => {
        const rows = tbody.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length === 0) return; // Skip if no cells

            const dateText = cells[0].textContent.trim(); // First column is always date
            let eventDate = null;

            // Try multiple date formats:

            // Format 1: "31 dec 2025" or "1 jan 2026"
            let match = dateText.match(/(\d{1,2})\s+(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\s+(\d{4})/i);
            if (match) {
                const day = parseInt(match[1]);
                const monthName = match[2].toLowerCase();
                const year = parseInt(match[3]);
                const month = monthNames[monthName];
                eventDate = new Date(year, month, day);
            }

            // Format 2: "Lördag 13 december" or "Söndag 7 september" (with day name)
            if (!eventDate) {
                match = dateText.match(/[a-zåäö]+\s+(\d{1,2})\s+(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i);
                if (match) {
                    const day = parseInt(match[1]);
                    const monthName = match[2].toLowerCase();
                    const month = monthNames[monthName];

                    // Determine year based on current date
                    let year = today.getFullYear();
                    eventDate = new Date(year, month, day);

                    // If date is in the past, assume it's next year
                    if (eventDate < today) {
                        year = today.getFullYear() + 1;
                        eventDate = new Date(year, month, day);
                    }
                }
            }

            // Format 3: "23 okt" or "27 okt" (short format without year)
            if (!eventDate) {
                match = dateText.match(/(\d{1,2})\s+(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i);
                if (match) {
                    const day = parseInt(match[1]);
                    const monthName = match[2].toLowerCase();
                    const month = monthNames[monthName];

                    // Determine year based on current date
                    let year = today.getFullYear();
                    eventDate = new Date(year, month, day);

                    // If date is in the past, assume it's next year
                    if (eventDate < today) {
                        year = today.getFullYear() + 1;
                        eventDate = new Date(year, month, day);
                    }
                }
            }

            // Format 4: "Ons 5 NOV" or "Tis 12 FEB" (day name + date + month in caps)
            if (!eventDate) {
                match = dateText.match(/[a-zåäö]+\s+(\d{1,2})\s+(JAN|FEB|MAR|APR|MAJ|JUN|JUL|AUG|SEP|OKT|NOV|DEC)/i);
                if (match) {
                    const day = parseInt(match[1]);
                    const monthName = match[2].toLowerCase();
                    const month = monthNames[monthName];

                    // Determine year based on current date
                    let year = today.getFullYear();
                    eventDate = new Date(year, month, day);

                    // If date is in the past, assume it's next year
                    if (eventDate < today) {
                        year = today.getFullYear() + 1;
                        eventDate = new Date(year, month, day);
                    }
                }
            }

            // If we successfully parsed a date, compare and hide if past
            if (eventDate) {
                eventDate.setHours(0, 0, 0, 0);

                // Hide row if event has passed
                if (eventDate < today) {
                    row.style.display = 'none';
                }
            }
        });
    });
}

// Run when page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', hidePastEvents);
}
