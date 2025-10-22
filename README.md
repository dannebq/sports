# Football Results Website

A minimalist, plain-text style website for displaying football match results and fixtures for Allsvenskan and Premier League.

## Features

- **Home Page**: Overview of leagues and upcoming fixtures
- **Results Page**: Display completed match results with filtering options
- **Fixtures Page**: View upcoming fixtures with kickoff times
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Filter System**: Filter by league and matchday

## Leagues Included

- **Allsvenskan**: Swedish top division
- **Premier League**: English top division

## File Structure

```
/
├── index.html          # Home page
├── results.html        # Match results page
├── startlists.html     # Fixtures page
├── styles.css          # Plain text stylesheet
├── data.js            # Match data, results, and fixtures
├── main.js            # JavaScript for home page
├── results.js         # JavaScript for results page
├── startlists.js      # JavaScript for fixtures page
└── README.md          # This file
```

## How to Use

1. Open `index.html` in a web browser to view the home page
2. Navigate to "Results" to see completed match results
3. Navigate to "Fixtures" to see upcoming fixtures
4. Use the filter dropdowns to narrow down by league or matchday

## Sample Data

The website includes sample data for:
- 4 completed matchdays (2 Allsvenskan, 2 Premier League)
- 2 upcoming matchdays (1 Allsvenskan, 1 Premier League)
- Realistic match results with scores, stadiums, and attendance
- Upcoming fixtures with kickoff times and venues

## Customization

To add your own data:

1. Open `data.js`
2. Add matchdays to the `events` array
3. Add results to the `results` array (use the event ID to link them)
4. Add fixtures to the `startLists` array (use the event ID to link them)

### Event Object Structure
```javascript
{
    id: 1,                          // Unique identifier
    name: "Matchday 25",            // Matchday name
    sport: "allsvenskan",           // League identifier
    league: "Allsvenskan",          // League display name
    date: "2025-10-18",            // Match date (YYYY-MM-DD)
    status: "completed"             // Status: "completed" or "upcoming"
}
```

### Result Object Structure
```javascript
{
    eventId: 1,                     // Links to event ID
    homeTeam: "Malmö FF",           // Home team name
    awayTeam: "Hammarby IF",        // Away team name
    homeScore: 2,                   // Home team score
    awayScore: 1,                   // Away team score
    stadium: "Eleda Stadion",       // Stadium name
    attendance: "21,450"            // Match attendance
}
```

### Fixture Object Structure
```javascript
{
    eventId: 5,                     // Links to event ID
    homeTeam: "Malmö FF",           // Home team name
    awayTeam: "AIK",                // Away team name
    kickoffTime: "15:00",           // Kickoff time (HH:MM)
    stadium: "Eleda Stadion",       // Stadium name
    date: "2025-10-26"             // Match date (YYYY-MM-DD)
}
```

## Design

The website features a plain-text, minimalist design:
- Monospace font (Courier New)
- Black and white color scheme
- Simple borders and dotted lines
- No gradients, shadows, or animations
- Classic newspaper/terminal style

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- No external dependencies required

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available for educational and personal use.
