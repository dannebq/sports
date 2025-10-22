// Configuration for web scraping football results
// Scrapes results from websites at configurable intervals

const apiConfig = {
    // Enable/disable auto-scraping (set to true to enable live updates)
    enabled: false,

    // Scraping method: 'browser' (with CORS proxy) or 'backend' (requires server)
    method: 'browser',

    // CORS proxy for browser-based scraping (free options available)
    corsProxy: 'https://api.allorigins.win/raw?url=',
    // Alternative proxies:
    // 'https://corsproxy.io/?',
    // 'https://api.codetabs.com/v1/proxy?quest=',

    // Auto-refresh interval in milliseconds (default: 5 minutes)
    // Note: Be respectful - don't scrape too frequently!
    refreshInterval: 300000, // 5 minutes

    // Target websites to scrape
    sources: {
        allsvenskan: {
            url: 'https://www.flashscore.com/football/sweden/allsvenskan/results/',
            name: 'Allsvenskan',
            parser: 'flashscore'
        },
        premierleague: {
            url: 'https://www.flashscore.com/football/england/premier-league/results/',
            name: 'Premier League',
            parser: 'flashscore'
        }
    },

    // Scraping options
    options: {
        maxResults: 30,        // Maximum number of results to scrape per league
        timeout: 10000,        // Request timeout in milliseconds
        retryAttempts: 2,      // Number of retry attempts on failure
        respectRobotsTxt: true // Be a good web citizen
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = apiConfig;
}
