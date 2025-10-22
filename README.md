# Football Results Website

A minimalist, plain-text style website for displaying real football match results for Allsvenskan and Premier League.

## Features

- **Home Page**: Overview of leagues
- **Results Page**: Display completed match results with filtering options
- **Fixtures Page**: View upcoming fixtures with kickoff times (when available)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Filter System**: Filter by league and matchday
- **Real Data**: Contains actual match results from recent rounds/matchdays
- **Auto-Refresh**: Optional automatic fetching of live results at configurable intervals
- **Manual Refresh**: Refresh button to fetch latest results on demand

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
├── data.js            # Static match data (fallback)
├── config.js          # API configuration
├── api-fetch.js       # Auto-fetch functionality
├── main.js            # JavaScript for home page
├── results.js         # JavaScript for results page
├── startlists.js      # JavaScript for fixtures page
├── README.md          # This file
└── API-SETUP.md       # Guide for enabling auto-fetch
```

## How to Use

### Basic Usage (Static Data)

1. Open `index.html` in a web browser to view the home page
2. Navigate to "Results" to see completed match results
3. Navigate to "Fixtures" to see upcoming fixtures
4. Use the filter dropdowns to narrow down by league or matchday

### Advanced Usage (Live API Updates)

Want live, auto-updating results? See **[API-SETUP.md](API-SETUP.md)** for instructions on:
- Enabling automatic result fetching
- Configuring refresh intervals
- Getting a free API key
- Manual refresh controls

**Quick setup:**
1. Get free API key from football-data.org
2. Edit `config.js` and add your API key
3. Set `enabled: true` in config.js
4. Reload the page

## Real Match Data

The website currently displays **real match results** from:

### Allsvenskan 2024
- **Round 30** (November 10, 2024) - Final round of the season
  - AIK 5-1 Halmstads BK
  - Djurgårdens IF 3-1 IFK Norrköping
  - GAIS 2-1 IK Sirius
  - Kalmar FF 1-0 BK Häcken
  - Malmö FF 2-1 BP
  - Mjällby AIF 1-0 IFK Göteborg
  - IFK Värnamo 0-0 IF Elfsborg
  - Västerås SK 1-0 Hammarby IF

- **Round 28** (October 28, 2024) - Championship deciding match
  - Malmö FF 2-1 IFK Göteborg (Malmö wins 4th title in 5 years)

### Premier League 2024-25
- **Matchday 11** (November 9-10, 2024)
  - Brighton 2-1 Manchester City (City's 4th straight loss)
  - Liverpool 2-0 Aston Villa
  - Tottenham 1-2 Ipswich (Ipswich's first PL win of season)
  - Nottingham Forest 1-3 Newcastle

- **Matchday 10** (November 2-4, 2024) - 10 matches
  - Notable: Spurs 4-1 Aston Villa, Nottingham Forest 3-0 West Ham

- **Matchday 9** (October 26-27, 2024) - 9 matches
  - Notable: Brentford 4-3 Ipswich (7-goal thriller), Arsenal 2-2 Liverpool

## Customization

To add your own data or update with new matches:

1. Open `data.js`
2. Add matchdays to the `events` array
3. Add results to the `results` array (use the event ID to link them)
4. Add fixtures to the `startLists` array for upcoming matches (use the event ID to link them)

**Note**: The current data contains real match results from October-November 2024. The Allsvenskan 2024 season ended on November 10, 2024 with Malmö FF as champions.

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
