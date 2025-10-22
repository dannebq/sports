# API Setup Guide

This guide explains how to enable automatic fetching of live football results at regular intervals.

## Overview

The website can automatically fetch and update match results from football APIs at configurable intervals. By default, this feature is **disabled** and the site uses static data.

## Quick Start

1. Get a free API key from football-data.org
2. Update `config.js` with your API key
3. Enable the feature
4. Refresh your browser

## Detailed Setup

### Step 1: Get an API Key

We recommend using **football-data.org** (free tier available):

1. Visit https://www.football-data.org/
2. Sign up for a free account
3. Go to your account settings
4. Copy your API token/key

**Free tier limits:**
- 10 requests per minute
- Covers major European leagues including Premier League
- Note: Allsvenskan may not be available on free tier

### Step 2: Configure the API

Open `config.js` and update the following:

```javascript
const apiConfig = {
    // Set to true to enable auto-fetch
    enabled: true,

    // Your API key from football-data.org
    apiKey: 'YOUR_API_KEY_HERE',  // Replace with your actual key

    // Refresh interval (in milliseconds)
    // Default: 300000 (5 minutes)
    // Minimum recommended: 60000 (1 minute to avoid rate limits)
    refreshInterval: 300000,

    // ... rest of config
};
```

### Step 3: Enable Auto-Fetch

Change `enabled: false` to `enabled: true` in `config.js`

### Step 4: Reload the Website

Open or refresh `index.html` in your browser. You should see:
- A "Refresh" button in the filter section
- "Last updated: [time]" status indicator
- Console messages about API fetching (open browser DevTools to see)

## Features

### Auto-Refresh
- Automatically fetches new results at the configured interval
- Updates all pages without requiring manual refresh
- Shows loading indicator during fetch

### Manual Refresh
- Click the "Refresh" button to fetch immediately
- Useful for getting latest results on demand

### Status Indicator
- Shows when data was last updated
- Displays "Using static data" if API is disabled

### Fallback to Static Data
- If API fetch fails, uses existing static data
- No disruption to user experience

## Configuration Options

### Refresh Interval

Adjust how often to fetch new data (in milliseconds):

```javascript
refreshInterval: 180000,  // 3 minutes
refreshInterval: 300000,  // 5 minutes (default)
refreshInterval: 600000,  // 10 minutes
```

**Important:** Respect API rate limits. The free tier allows 10 requests/minute.

### Match Filters

Control which matches to fetch:

```javascript
filters: {
    status: 'FINISHED',  // FINISHED, SCHEDULED, LIVE, IN_PLAY
    limit: 30           // Number of recent matches per league
}
```

## Supported APIs

### football-data.org (Default)

**Pros:**
- Free tier available
- Good documentation
- Covers Premier League
- Real-time updates

**Cons:**
- Swedish Allsvenskan not available on free tier
- Rate limits on free tier

**Leagues:**
- Premier League: ✅ Free tier
- Allsvenskan: ❌ Not available

### Custom API

You can use any football API by configuring custom endpoints:

```javascript
provider: 'custom',

endpoints: {
    'custom': {
        baseUrl: 'https://your-api.com/v1',
        allsvenskan: '/allsvenskan/matches',
        premierleague: '/premierleague/matches'
    }
}
```

## Browser Console Commands

Control the fetcher manually from browser console (F12):

```javascript
// Fetch results immediately
footballFetcher.fetchAllResults();

// Stop auto-refresh
footballFetcher.stopAutoRefresh();

// Start auto-refresh
footballFetcher.startAutoRefresh();

// Check status
footballFetcher.getStatus();
```

## Troubleshooting

### "API key not configured" message
- Make sure you've replaced `'YOUR_API_KEY_HERE'` with your actual API key
- API key should be a string in quotes

### No data updates
- Check browser console (F12) for error messages
- Verify your API key is valid
- Check if you've exceeded rate limits
- Ensure `enabled: true` in config.js

### CORS errors
- Some APIs require CORS configuration
- You may need to run through a local server or proxy
- For local testing, use a simple HTTP server:
  ```bash
  python -m http.server 8000
  # or
  npx http-server
  ```

### Rate limit errors
- Increase `refreshInterval` to fetch less frequently
- Free tier: max 10 requests/minute
- Each fetch makes 2 requests (one per league)

## Data Privacy

- API key is stored in `config.js` (client-side only)
- Never commit `config.js` with your real API key to public repositories
- Consider using environment variables for production deployments

## Disabling Auto-Fetch

To disable and return to static data:

1. Open `config.js`
2. Set `enabled: false`
3. Refresh the browser

The site will work normally with the static data in `data.js`

## Production Deployment

For production use:

1. **Never commit your API key** to version control
2. Use environment variables or a backend proxy
3. Implement proper error handling
4. Add rate limit management
5. Consider caching to reduce API calls
6. Monitor API usage

## Alternative: Backend Proxy

For better security and control, consider:

1. Create a simple backend (Node.js, Python, etc.)
2. Backend fetches from football API
3. Frontend fetches from your backend
4. This keeps API keys server-side and allows caching

Example backend structure:
```
backend/
  ├── server.js       # Express server
  ├── api-fetcher.js  # Fetches from football API
  └── cache.js        # Caches results
```

## Support

For issues or questions:
- Check football-data.org documentation: https://www.football-data.org/documentation/quickstart
- Review browser console for errors
- Verify API key and rate limits

## Future Enhancements

Potential improvements:
- Support for more football APIs
- WebSocket connections for real-time updates
- Push notifications for new results
- Historical data caching
- Offline support
