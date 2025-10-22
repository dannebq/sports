# Web Scraping Setup Guide

This guide explains how to enable automatic web scraping of live football results at regular intervals.

## Overview

The website can automatically scrape and update match results from football websites at configurable intervals. By default, this feature is **disabled** and the site uses static data.

## ⚠️ Important Notes

**Web Scraping Considerations:**
- Be respectful - don't scrape too frequently
- Many websites use anti-bot measures that may block scraping
- Website HTML structures change frequently, breaking parsers
- Consider using official APIs when available
- Check websites' robots.txt and terms of service
- Browser-based scraping has CORS limitations

## Quick Start Guide

### Option 1: Browser-Based Scraping (Simple but Limited)

**Pros:** No server needed, works from static HTML
**Cons:** CORS issues, limited by browser security, less reliable

1. Open `config.js`
2. Set `enabled: true`
3. Choose a CORS proxy
4. Reload page

### Option 2: Backend Scraper (Recommended)

**Pros:** More reliable, no CORS issues, better control
**Cons:** Requires Node.js server

1. Install Node.js
2. Run `node backend-scraper.js`
3. Configure frontend to use backend
4. Access results via API

## Detailed Setup

### Browser-Based Scraping Setup

#### Step 1: Configure Scraping

Open `config.js` and update:

```javascript
const apiConfig = {
    // Enable scraping
    enabled: true,

    // Use browser method
    method: 'browser',

    // Choose a CORS proxy
    corsProxy: 'https://api.allorigins.win/raw?url=',
    // Alternatives:
    // 'https://corsproxy.io/?',
    // 'https://api.codetabs.com/v1/proxy?quest=',

    // Scrape interval (minimum 5 minutes recommended)
    refreshInterval: 300000,  // 5 minutes

    // Target websites
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
    }
};
```

#### Step 2: Reload Page

Open `index.html` in your browser. Scraping starts automatically.

#### Step 3: Monitor Console

Open browser DevTools (F12) to see scraping status:
- "Web scraping enabled"
- "Scraping [league] from [url]"
- "Scraped X events, Y matches"

### Backend Scraper Setup (Recommended)

#### Step 1: Install Dependencies

```bash
# Install Node.js from nodejs.org
# Then install cheerio for HTML parsing
npm install cheerio
```

#### Step 2: Update Backend Scraper

Edit `backend-scraper.js` and add cheerio parsing:

```javascript
const cheerio = require('cheerio');

function parseHTML(html, league) {
    const $ = cheerio.load(html);
    const events = [];
    const results = [];

    // Example: Parse matches from HTML
    $('.match-row').each((i, elem) => {
        const homeTeam = $(elem).find('.home-team').text().trim();
        const awayTeam = $(elem).find('.away-team').text().trim();
        const score = $(elem).find('.score').text().trim();

        // Extract and structure data
        // ...
    });

    return { events, results };
}
```

**Note:** You'll need to inspect the actual HTML structure of your target websites and adapt the selectors accordingly.

#### Step 3: Start Backend Server

```bash
node backend-scraper.js
```

Server runs on http://localhost:3000

#### Step 4: Configure Frontend

Update `config.js`:

```javascript
const apiConfig = {
    enabled: true,
    method: 'backend',

    // Backend API endpoint
    backendUrl: 'http://localhost:3000/api/results',

    refreshInterval: 300000,
};
```

Update `api-fetch.js` to fetch from backend:

```javascript
async fetchHTML(url) {
    if (apiConfig.method === 'backend') {
        // Fetch from local backend
        const response = await fetch(apiConfig.backendUrl);
        const data = await response.json();
        return data;
    }
    // ... existing browser method code
}
```

## Customizing Parsers

### Adding a New Website Source

1. Inspect the website's HTML structure
2. Identify CSS selectors for:
   - Match containers
   - Team names
   - Scores
   - Dates/times

3. Add to `config.js`:

```javascript
sources: {
    myLeague: {
        url: 'https://example.com/league/results',
        name: 'My League',
        parser: 'custom'
    }
}
```

4. Create parser in `api-fetch.js`:

```javascript
parseCustom(html, league) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const matches = doc.querySelectorAll('.your-match-selector');

    matches.forEach(match => {
        const homeTeam = match.querySelector('.home-selector').textContent;
        const awayTeam = match.querySelector('.away-selector').textContent;
        const score = match.querySelector('.score-selector').textContent;

        // Parse and add to results
    });

    return { events, results };
}
```

## Common Issues & Solutions

### Issue: CORS Errors

**Problem:** "Access to fetch blocked by CORS policy"

**Solutions:**
1. Use a different CORS proxy
2. Switch to backend scraper method
3. Run a local proxy server

### Issue: No Data Scraped

**Problem:** "No matches found. HTML structure may have changed"

**Solutions:**
1. Inspect target website HTML structure
2. Update CSS selectors in parser
3. Check if website blocks automated access
4. Try a different source website

### Issue: Parser Not Working

**Problem:** Selectors don't match any elements

**Solutions:**
1. Use browser DevTools to inspect HTML
2. Update selectors to match current structure
3. Check if website uses JavaScript to load content (requires different approach)
4. Consider using backend with Puppeteer for JS-rendered sites

### Issue: Rate Limiting / IP Blocking

**Problem:** Website blocks your requests

**Solutions:**
1. Increase scrape interval (scrape less frequently)
2. Add random delays between requests
3. Rotate user agents
4. Use proxies (carefully and ethically)
5. Consider using official APIs instead

## Advanced: Handling Dynamic Content

Many modern websites (including Flashscore) load content via JavaScript. To scrape these:

### Using Puppeteer (Backend Only)

```bash
npm install puppeteer
```

```javascript
const puppeteer = require('puppeteer');

async function scrapeDynamic(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
        // Extract data from page
        const matches = [];
        document.querySelectorAll('.match').forEach(match => {
            matches.push({
                home: match.querySelector('.home').textContent,
                away: match.querySelector('.away').textContent,
                score: match.querySelector('.score').textContent
            });
        });
        return matches;
    });

    await browser.close();
    return data;
}
```

## Recommended Sources

### Easier to Scrape (Simple HTML)
- BBC Sport (simple table structure)
- ESPN (good HTML structure)
- Local league websites (often simpler)

### More Challenging (Dynamic Content)
- Flashscore (JavaScript-heavy)
- LiveScore (dynamic updates)
- Most modern sports sites

## Browser Console Commands

Control scraping from browser console (F12):

```javascript
// Scrape now
footballFetcher.fetchAllResults();

// Stop auto-scraping
footballFetcher.stopAutoRefresh();

// Start auto-scraping
footballFetcher.startAutoRefresh();

// Check status
footballFetcher.getStatus();
```

## Best Practices

1. **Respect robots.txt** - Check website's scraping policy
2. **Rate limiting** - Don't scrape more often than every 5 minutes
3. **User agents** - Identify your scraper appropriately
4. **Error handling** - Gracefully handle failures
5. **Caching** - Store results to reduce requests
6. **Fallback** - Keep static data as backup
7. **Monitoring** - Log errors and successful scrapes
8. **Updates** - Regularly check if parsers still work

## Ethical Considerations

- Only scrape publicly available data
- Respect website terms of service
- Don't overload servers with requests
- Consider using official APIs when available
- Attribute data sources appropriately
- Be prepared for your scraper to break when sites update

## Alternative Approach: Use APIs

If scraping proves too unreliable, consider:

1. **football-data.org** - Free API for football data
2. **API-Football** - Comprehensive football API
3. **TheSportsDB** - Free sports data API
4. **Official league APIs** - Some leagues provide APIs

See previous API-SETUP.md version for API integration guide.

## Production Deployment

For production:

1. **Use backend scraper** (not browser method)
2. **Implement caching** to reduce scraping frequency
3. **Add monitoring** to detect parser breakage
4. **Set up alerts** for scraping failures
5. **Use database** instead of in-memory cache
6. **Consider cloud functions** (AWS Lambda, Google Cloud Functions)
7. **Implement retry logic** with exponential backoff

Example production setup:
```
Frontend (Static HTML)
    ↓
Backend API (Node.js)
    ↓
Scraper Service (separate process)
    ↓
Database (PostgreSQL/MongoDB)
```

## Troubleshooting Checklist

- [ ] Is scraping enabled in config.js?
- [ ] Is CORS proxy working (for browser method)?
- [ ] Are CSS selectors correct for target website?
- [ ] Is website blocking automated access?
- [ ] Check browser console for errors
- [ ] Verify network requests in DevTools
- [ ] Test with simple HTML page first
- [ ] Try different source website
- [ ] Consider using backend method instead

## Support

Web scraping is inherently fragile and requires maintenance. Expect:
- Regular parser updates as websites change
- Occasional scraping failures
- Need for fallback to static data
- Potential IP blocks if scraping too aggressively

For more reliable data, consider using official APIs instead of scraping.
