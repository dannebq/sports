// API Configuration for fetching live football results
// You can use football-data.org (free tier available) or other football APIs

const apiConfig = {
    // Enable/disable auto-fetch (set to true to enable live updates)
    enabled: false,

    // API provider: 'football-data' or 'custom'
    provider: 'football-data',

    // Your API key (get free key from https://www.football-data.org/)
    apiKey: 'YOUR_API_KEY_HERE',

    // Auto-refresh interval in milliseconds (default: 5 minutes)
    refreshInterval: 300000, // 5 minutes

    // API endpoints
    endpoints: {
        'football-data': {
            baseUrl: 'https://api.football-data.org/v4',
            allsvenskan: '/competitions/SL/matches',  // Swedish Allsvenskan
            premierleague: '/competitions/PL/matches'  // English Premier League
        },
        'custom': {
            baseUrl: 'YOUR_CUSTOM_API_URL',
            allsvenskan: '/allsvenskan/matches',
            premierleague: '/premierleague/matches'
        }
    },

    // Match status filters
    filters: {
        status: 'FINISHED', // FINISHED, SCHEDULED, LIVE, etc.
        limit: 30 // Number of recent matches to fetch
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = apiConfig;
}
