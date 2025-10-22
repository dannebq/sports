# Sport Results Website

A modern, responsive website for displaying sport results and start lists, with a focus on winter sports like skiing.

## Features

- **Home Page**: Overview of featured sports and upcoming events
- **Results Page**: Display completed competition results with filtering options
- **Start Lists Page**: View start lists for upcoming and past events
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Filter System**: Filter by sport, event, and gender

## Sports Included

- Alpine Skiing (Downhill, Slalom, Giant Slalom, Super-G)
- Cross-Country Skiing (Sprint, Distance, Relay)
- Snowboarding (Halfpipe, Slopestyle, Cross)
- Athletics (Track & Field)

## File Structure

```
/
├── index.html          # Home page
├── results.html        # Results page
├── startlists.html     # Start lists page
├── styles.css          # Main stylesheet
├── data.js            # Sample data for events, results, and start lists
├── main.js            # JavaScript for home page
├── results.js         # JavaScript for results page
├── startlists.js      # JavaScript for start lists page
└── README.md          # This file
```

## How to Use

1. Open `index.html` in a web browser to view the home page
2. Navigate to "Results" to see completed competition results
3. Navigate to "Start Lists" to see upcoming event start lists
4. Use the filter dropdowns to narrow down results by sport, event, or gender

## Sample Data

The website includes sample data for:
- 6 events (3 completed, 3 upcoming)
- Results for Alpine Skiing events (Men's Downhill, Women's Slalom, Women's Giant Slalom)
- Start lists for Cross-Country and Snowboarding events

## Customization

To add your own data:

1. Open `data.js`
2. Add events to the `events` array
3. Add results to the `results` array (use the event ID to link them)
4. Add start lists to the `startLists` array (use the event ID to link them)

### Event Object Structure
```javascript
{
    id: 1,                          // Unique identifier
    name: "Men's Downhill",         // Event name
    sport: "alpine",                // Sport type
    gender: "men",                  // Gender category
    location: "Location",           // Event location
    date: "2025-01-25",            // Event date (YYYY-MM-DD)
    status: "completed"             // Status: "completed" or "upcoming"
}
```

### Result Object Structure
```javascript
{
    eventId: 1,                     // Links to event ID
    position: 1,                    // Final position
    bib: 7,                        // Bib number
    athlete: "Athlete Name",        // Athlete name
    country: "SUI",                // Country code (3 letters)
    time: "1:42.34",               // Time result
    diff: "+0.55"                  // Time difference from leader
}
```

### Start List Object Structure
```javascript
{
    eventId: 3,                     // Links to event ID
    startOrder: 1,                  // Start order position
    bib: 1,                        // Bib number
    athlete: "Athlete Name",        // Athlete name
    country: "NOR",                // Country code (3 letters)
    startTime: "10:00:00"          // Start time (HH:MM:SS)
}
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
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
