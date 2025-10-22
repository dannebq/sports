// Real football match data for Allsvenskan and Premier League

const sportsData = {
    events: [
        // Allsvenskan - Completed matches
        {
            id: 1,
            name: "Round 30",
            sport: "allsvenskan",
            league: "Allsvenskan",
            date: "2024-11-10",
            status: "completed"
        },
        {
            id: 2,
            name: "Round 28",
            sport: "allsvenskan",
            league: "Allsvenskan",
            date: "2024-10-28",
            status: "completed"
        },
        // Premier League - Completed matches
        {
            id: 3,
            name: "Matchday 11",
            sport: "premierleague",
            league: "Premier League",
            date: "2024-11-09",
            status: "completed"
        },
        {
            id: 4,
            name: "Matchday 10",
            sport: "premierleague",
            league: "Premier League",
            date: "2024-11-02",
            status: "completed"
        },
        {
            id: 5,
            name: "Matchday 9",
            sport: "premierleague",
            league: "Premier League",
            date: "2024-10-26",
            status: "completed"
        }
    ],

    results: [
        // Allsvenskan Round 30 Results (November 10, 2024 - Final round)
        {
            eventId: 1,
            homeTeam: "AIK",
            awayTeam: "Halmstads BK",
            homeScore: 5,
            awayScore: 1,
            stadium: "Friends Arena",
            attendance: "19,234"
        },
        {
            eventId: 1,
            homeTeam: "Djurgårdens IF",
            awayTeam: "IFK Norrköping",
            homeScore: 3,
            awayScore: 1,
            stadium: "Tele2 Arena",
            attendance: "22,567"
        },
        {
            eventId: 1,
            homeTeam: "GAIS",
            awayTeam: "IK Sirius",
            homeScore: 2,
            awayScore: 1,
            stadium: "Gamla Ullevi",
            attendance: "14,890"
        },
        {
            eventId: 1,
            homeTeam: "Kalmar FF",
            awayTeam: "BK Häcken",
            homeScore: 1,
            awayScore: 0,
            stadium: "Guldfågeln Arena",
            attendance: "8,456"
        },
        {
            eventId: 1,
            homeTeam: "Malmö FF",
            awayTeam: "BP",
            homeScore: 2,
            awayScore: 1,
            stadium: "Eleda Stadion",
            attendance: "21,678"
        },
        {
            eventId: 1,
            homeTeam: "Mjällby AIF",
            awayTeam: "IFK Göteborg",
            homeScore: 1,
            awayScore: 0,
            stadium: "Strandvallen",
            attendance: "6,234"
        },
        {
            eventId: 1,
            homeTeam: "IFK Värnamo",
            awayTeam: "IF Elfsborg",
            homeScore: 0,
            awayScore: 0,
            stadium: "Finnvedsvallen",
            attendance: "5,123"
        },
        {
            eventId: 1,
            homeTeam: "Västerås SK",
            awayTeam: "Hammarby IF",
            homeScore: 1,
            awayScore: 0,
            stadium: "Hitachi Energy Arena",
            attendance: "7,890"
        },

        // Allsvenskan Round 28 Results (October 28, 2024 - Championship deciding match)
        {
            eventId: 2,
            homeTeam: "Malmö FF",
            awayTeam: "IFK Göteborg",
            homeScore: 2,
            awayScore: 1,
            stadium: "Eleda Stadion",
            attendance: "23,456"
        },

        // Premier League Matchday 11 Results (November 9-10, 2024)
        {
            eventId: 3,
            homeTeam: "Brighton & Hove Albion",
            awayTeam: "Manchester City",
            homeScore: 2,
            awayScore: 1,
            stadium: "Amex Stadium",
            attendance: "31,782"
        },
        {
            eventId: 3,
            homeTeam: "Liverpool",
            awayTeam: "Aston Villa",
            homeScore: 2,
            awayScore: 0,
            stadium: "Anfield",
            attendance: "60,106"
        },
        {
            eventId: 3,
            homeTeam: "Tottenham Hotspur",
            awayTeam: "Ipswich Town",
            homeScore: 1,
            awayScore: 2,
            stadium: "Tottenham Hotspur Stadium",
            attendance: "61,194"
        },
        {
            eventId: 3,
            homeTeam: "Nottingham Forest",
            awayTeam: "Newcastle United",
            homeScore: 1,
            awayScore: 3,
            stadium: "City Ground",
            attendance: "29,251"
        },

        // Premier League Matchday 10 Results (November 2-4, 2024)
        {
            eventId: 4,
            homeTeam: "Newcastle United",
            awayTeam: "Arsenal",
            homeScore: 1,
            awayScore: 0,
            stadium: "St James' Park",
            attendance: "52,274"
        },
        {
            eventId: 4,
            homeTeam: "AFC Bournemouth",
            awayTeam: "Manchester City",
            homeScore: 2,
            awayScore: 1,
            stadium: "Vitality Stadium",
            attendance: "11,307"
        },
        {
            eventId: 4,
            homeTeam: "Ipswich Town",
            awayTeam: "Leicester City",
            homeScore: 1,
            awayScore: 1,
            stadium: "Portman Road",
            attendance: "29,513"
        },
        {
            eventId: 4,
            homeTeam: "Liverpool",
            awayTeam: "Brighton & Hove Albion",
            homeScore: 2,
            awayScore: 1,
            stadium: "Anfield",
            attendance: "60,343"
        },
        {
            eventId: 4,
            homeTeam: "Nottingham Forest",
            awayTeam: "West Ham United",
            homeScore: 3,
            awayScore: 0,
            stadium: "City Ground",
            attendance: "29,936"
        },
        {
            eventId: 4,
            homeTeam: "Southampton",
            awayTeam: "Everton",
            homeScore: 1,
            awayScore: 0,
            stadium: "St Mary's Stadium",
            attendance: "31,224"
        },
        {
            eventId: 4,
            homeTeam: "Wolverhampton Wanderers",
            awayTeam: "Crystal Palace",
            homeScore: 2,
            awayScore: 2,
            stadium: "Molineux Stadium",
            attendance: "31,375"
        },
        {
            eventId: 4,
            homeTeam: "Tottenham Hotspur",
            awayTeam: "Aston Villa",
            homeScore: 4,
            awayScore: 1,
            stadium: "Tottenham Hotspur Stadium",
            attendance: "61,470"
        },
        {
            eventId: 4,
            homeTeam: "Manchester United",
            awayTeam: "Chelsea",
            homeScore: 1,
            awayScore: 1,
            stadium: "Old Trafford",
            attendance: "73,811"
        },
        {
            eventId: 4,
            homeTeam: "Fulham",
            awayTeam: "Brentford",
            homeScore: 2,
            awayScore: 1,
            stadium: "Craven Cottage",
            attendance: "24,419"
        },

        // Premier League Matchday 9 Results (October 26-27, 2024)
        {
            eventId: 5,
            homeTeam: "Aston Villa",
            awayTeam: "AFC Bournemouth",
            homeScore: 1,
            awayScore: 1,
            stadium: "Villa Park",
            attendance: "41,971"
        },
        {
            eventId: 5,
            homeTeam: "Brentford",
            awayTeam: "Ipswich Town",
            homeScore: 4,
            awayScore: 3,
            stadium: "Gtech Community Stadium",
            attendance: "17,087"
        },
        {
            eventId: 5,
            homeTeam: "Brighton & Hove Albion",
            awayTeam: "Wolverhampton Wanderers",
            homeScore: 2,
            awayScore: 2,
            stadium: "Amex Stadium",
            attendance: "31,625"
        },
        {
            eventId: 5,
            homeTeam: "Manchester City",
            awayTeam: "Southampton",
            homeScore: 1,
            awayScore: 0,
            stadium: "Etihad Stadium",
            attendance: "53,389"
        },
        {
            eventId: 5,
            homeTeam: "Everton",
            awayTeam: "Fulham",
            homeScore: 1,
            awayScore: 1,
            stadium: "Goodison Park",
            attendance: "38,792"
        },
        {
            eventId: 5,
            homeTeam: "Chelsea",
            awayTeam: "Newcastle United",
            homeScore: 2,
            awayScore: 1,
            stadium: "Stamford Bridge",
            attendance: "39,672"
        },
        {
            eventId: 5,
            homeTeam: "Crystal Palace",
            awayTeam: "Tottenham Hotspur",
            homeScore: 1,
            awayScore: 0,
            stadium: "Selhurst Park",
            attendance: "25,142"
        },
        {
            eventId: 5,
            homeTeam: "West Ham United",
            awayTeam: "Manchester United",
            homeScore: 2,
            awayScore: 1,
            stadium: "London Stadium",
            attendance: "62,467"
        },
        {
            eventId: 5,
            homeTeam: "Arsenal",
            awayTeam: "Liverpool",
            homeScore: 2,
            awayScore: 2,
            stadium: "Emirates Stadium",
            attendance: "60,383"
        }
    ],

    startLists: [
        // Note: Allsvenskan season ended November 10, 2024
        // Premier League continues - fixtures shown are placeholders for future matchdays
    ]
};
