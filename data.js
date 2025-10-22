// Football match data for Allsvenskan and Premier League

const sportsData = {
    events: [
        // Allsvenskan - Completed matches
        {
            id: 1,
            name: "Matchday 25",
            sport: "allsvenskan",
            league: "Allsvenskan",
            date: "2025-10-18",
            status: "completed"
        },
        {
            id: 2,
            name: "Matchday 24",
            sport: "allsvenskan",
            league: "Allsvenskan",
            date: "2025-10-12",
            status: "completed"
        },
        // Premier League - Completed matches
        {
            id: 3,
            name: "Matchday 9",
            sport: "premierleague",
            league: "Premier League",
            date: "2025-10-19",
            status: "completed"
        },
        {
            id: 4,
            name: "Matchday 8",
            sport: "premierleague",
            league: "Premier League",
            date: "2025-10-05",
            status: "completed"
        },
        // Upcoming fixtures
        {
            id: 5,
            name: "Matchday 26",
            sport: "allsvenskan",
            league: "Allsvenskan",
            date: "2025-10-26",
            status: "upcoming"
        },
        {
            id: 6,
            name: "Matchday 10",
            sport: "premierleague",
            league: "Premier League",
            date: "2025-10-27",
            status: "upcoming"
        }
    ],

    results: [
        // Allsvenskan Matchday 25 Results
        {
            eventId: 1,
            homeTeam: "Malmö FF",
            awayTeam: "Hammarby IF",
            homeScore: 2,
            awayScore: 1,
            stadium: "Eleda Stadion",
            attendance: "21,450"
        },
        {
            eventId: 1,
            homeTeam: "AIK",
            awayTeam: "Djurgårdens IF",
            homeScore: 1,
            awayScore: 1,
            stadium: "Friends Arena",
            attendance: "31,288"
        },
        {
            eventId: 1,
            homeTeam: "IF Elfsborg",
            awayTeam: "BK Häcken",
            homeScore: 3,
            awayScore: 0,
            stadium: "Borås Arena",
            attendance: "12,356"
        },
        {
            eventId: 1,
            homeTeam: "IFK Göteborg",
            awayTeam: "IFK Norrköping",
            homeScore: 0,
            awayScore: 2,
            stadium: "Gamla Ullevi",
            attendance: "15,678"
        },
        {
            eventId: 1,
            homeTeam: "Kalmar FF",
            awayTeam: "IFK Värnamo",
            homeScore: 2,
            awayScore: 2,
            stadium: "Guldfågeln Arena",
            attendance: "8,234"
        },

        // Allsvenskan Matchday 24 Results
        {
            eventId: 2,
            homeTeam: "Hammarby IF",
            awayTeam: "AIK",
            homeScore: 3,
            awayScore: 1,
            stadium: "Tele2 Arena",
            attendance: "28,500"
        },
        {
            eventId: 2,
            homeTeam: "BK Häcken",
            awayTeam: "Malmö FF",
            homeScore: 1,
            awayScore: 2,
            stadium: "Bravida Arena",
            attendance: "6,789"
        },
        {
            eventId: 2,
            homeTeam: "Djurgårdens IF",
            awayTeam: "IF Elfsborg",
            homeScore: 2,
            awayScore: 2,
            stadium: "Tele2 Arena",
            attendance: "19,234"
        },

        // Premier League Matchday 9 Results
        {
            eventId: 3,
            homeTeam: "Manchester City",
            awayTeam: "Arsenal",
            homeScore: 2,
            awayScore: 2,
            stadium: "Etihad Stadium",
            attendance: "53,451"
        },
        {
            eventId: 3,
            homeTeam: "Liverpool",
            awayTeam: "Chelsea",
            homeScore: 3,
            awayScore: 1,
            stadium: "Anfield",
            attendance: "53,287"
        },
        {
            eventId: 3,
            homeTeam: "Manchester United",
            awayTeam: "Tottenham Hotspur",
            homeScore: 1,
            awayScore: 2,
            stadium: "Old Trafford",
            attendance: "73,562"
        },
        {
            eventId: 3,
            homeTeam: "Newcastle United",
            awayTeam: "Brighton & Hove Albion",
            homeScore: 1,
            awayScore: 0,
            stadium: "St James' Park",
            attendance: "52,234"
        },
        {
            eventId: 3,
            homeTeam: "Aston Villa",
            awayTeam: "West Ham United",
            homeScore: 2,
            awayScore: 1,
            stadium: "Villa Park",
            attendance: "41,789"
        },
        {
            eventId: 3,
            homeTeam: "Brentford",
            awayTeam: "Wolverhampton Wanderers",
            homeScore: 3,
            awayScore: 2,
            stadium: "Gtech Community Stadium",
            attendance: "17,123"
        },

        // Premier League Matchday 8 Results
        {
            eventId: 4,
            homeTeam: "Arsenal",
            awayTeam: "Liverpool",
            homeScore: 2,
            awayScore: 3,
            stadium: "Emirates Stadium",
            attendance: "60,234"
        },
        {
            eventId: 4,
            homeTeam: "Chelsea",
            awayTeam: "Newcastle United",
            homeScore: 1,
            awayScore: 1,
            stadium: "Stamford Bridge",
            attendance: "39,876"
        },
        {
            eventId: 4,
            homeTeam: "Tottenham Hotspur",
            awayTeam: "Manchester City",
            homeScore: 1,
            awayScore: 2,
            stadium: "Tottenham Hotspur Stadium",
            attendance: "61,567"
        }
    ],

    startLists: [
        // Allsvenskan Matchday 26 Fixtures
        {
            eventId: 5,
            homeTeam: "Malmö FF",
            awayTeam: "AIK",
            kickoffTime: "15:00",
            stadium: "Eleda Stadion",
            date: "2025-10-26"
        },
        {
            eventId: 5,
            homeTeam: "Hammarby IF",
            awayTeam: "IF Elfsborg",
            kickoffTime: "15:00",
            stadium: "Tele2 Arena",
            date: "2025-10-26"
        },
        {
            eventId: 5,
            homeTeam: "BK Häcken",
            awayTeam: "Djurgårdens IF",
            kickoffTime: "17:30",
            stadium: "Bravida Arena",
            date: "2025-10-26"
        },
        {
            eventId: 5,
            homeTeam: "IFK Norrköping",
            awayTeam: "IFK Göteborg",
            kickoffTime: "15:00",
            stadium: "Östgötaporten",
            date: "2025-10-26"
        },
        {
            eventId: 5,
            homeTeam: "IFK Värnamo",
            awayTeam: "Kalmar FF",
            kickoffTime: "15:00",
            stadium: "Finnvedsvallen",
            date: "2025-10-26"
        },

        // Premier League Matchday 10 Fixtures
        {
            eventId: 6,
            homeTeam: "Arsenal",
            awayTeam: "Manchester United",
            kickoffTime: "16:30",
            stadium: "Emirates Stadium",
            date: "2025-10-27"
        },
        {
            eventId: 6,
            homeTeam: "Chelsea",
            awayTeam: "Manchester City",
            kickoffTime: "14:00",
            stadium: "Stamford Bridge",
            date: "2025-10-27"
        },
        {
            eventId: 6,
            homeTeam: "Liverpool",
            awayTeam: "Tottenham Hotspur",
            kickoffTime: "16:30",
            stadium: "Anfield",
            date: "2025-10-27"
        },
        {
            eventId: 6,
            homeTeam: "Brighton & Hove Albion",
            awayTeam: "Aston Villa",
            kickoffTime: "14:00",
            stadium: "Amex Stadium",
            date: "2025-10-27"
        },
        {
            eventId: 6,
            homeTeam: "West Ham United",
            awayTeam: "Newcastle United",
            kickoffTime: "14:00",
            stadium: "London Stadium",
            date: "2025-10-27"
        },
        {
            eventId: 6,
            homeTeam: "Wolverhampton Wanderers",
            awayTeam: "Brentford",
            kickoffTime: "12:30",
            stadium: "Molineux Stadium",
            date: "2025-10-27"
        }
    ]
};
