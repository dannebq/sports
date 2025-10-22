// Backend Web Scraper - Node.js server for scraping football results
// Run with: node backend-scraper.js

const http = require('http');
const https = require('https');
const fs = require('fs');

const PORT = 3000;
const SCRAPE_INTERVAL = 300000; // 5 minutes

// Configuration
const config = {
    sources: {
        allsvenskan: {
            url: 'https://www.flashscore.com/football/sweden/allsvenskan/results/',
            name: 'Allsvenskan'
        },
        premierleague: {
            url: 'https://www.flashscore.com/football/england/premier-league/results/',
            name: 'Premier League'
        }
    }
};

// In-memory cache
let cachedData = {
    events: [],
    results: [],
    lastUpdate: null
};

// Fetch HTML from URL
function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Simplified HTML parser (you'd need a proper HTML parser like cheerio in practice)
function parseHTML(html, league) {
    const events = [];
    const results = [];

    // This is a placeholder - actual implementation would use cheerio or similar
    // to properly parse the HTML structure
    console.log(`Parsing HTML for ${league} (${html.length} bytes)`);

    // Example parsing logic (would need to be adapted to actual HTML structure)
    // In a real implementation, you'd use cheerio:
    // const $ = cheerio.load(html);
    // $('.match').each((i, elem) => {
    //     const homeTeam = $(elem).find('.home').text();
    //     const awayTeam = $(elem).find('.away').text();
    //     const score = $(elem).find('.score').text();
    //     // ... extract and structure data
    // });

    return { events, results };
}

// Scrape all leagues
async function scrapeAllLeagues() {
    console.log(`[${new Date().toISOString()}] Starting scrape...`);

    try {
        const allsvenskanHTML = await fetchHTML(config.sources.allsvenskan.url);
        const premierLeagueHTML = await fetchHTML(config.sources.premierleague.url);

        const allsvenskanData = parseHTML(allsvenskanHTML, 'allsvenskan');
        const premierLeagueData = parseHTML(premierLeagueHTML, 'premierleague');

        cachedData.events = [
            ...allsvenskanData.events,
            ...premierLeagueData.events
        ];

        cachedData.results = [
            ...allsvenskanData.results,
            ...premierLeagueData.results
        ];

        cachedData.lastUpdate = new Date().toISOString();

        console.log(`Scraped: ${cachedData.events.length} events, ${cachedData.results.length} results`);

        // Save to file for frontend to load
        fs.writeFileSync('./scraped-data.js',
            `const scrapedData = ${JSON.stringify(cachedData, null, 2)};`
        );

        return cachedData;
    } catch (error) {
        console.error('Scraping error:', error);
        return null;
    }
}

// Create HTTP server
const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/api/results') {
        // Return cached data
        res.writeHead(200);
        res.end(JSON.stringify(cachedData));
    } else if (req.url === '/api/scrape') {
        // Trigger manual scrape
        scrapeAllLeagues().then(data => {
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, data }));
        }).catch(err => {
            res.writeHead(500);
            res.end(JSON.stringify({ success: false, error: err.message }));
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Backend scraper running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  GET  /api/results - Get cached results`);
    console.log(`  POST /api/scrape  - Trigger manual scrape`);
    console.log('');

    // Initial scrape
    scrapeAllLeagues();

    // Set up periodic scraping
    setInterval(scrapeAllLeagues, SCRAPE_INTERVAL);
    console.log(`Auto-scraping every ${SCRAPE_INTERVAL / 1000} seconds`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});
