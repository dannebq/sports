// Sample data for sports events, results, and start lists

const sportsData = {
    events: [
        {
            id: 1,
            name: "Men's Downhill",
            sport: "alpine",
            gender: "men",
            location: "Kitzbühel, Austria",
            date: "2025-01-25",
            status: "completed"
        },
        {
            id: 2,
            name: "Women's Slalom",
            sport: "alpine",
            gender: "women",
            location: "Flachau, Austria",
            date: "2025-01-24",
            status: "completed"
        },
        {
            id: 3,
            name: "Men's 15km Classic",
            sport: "crosscountry",
            gender: "men",
            location: "Davos, Switzerland",
            date: "2025-02-15",
            status: "upcoming"
        },
        {
            id: 4,
            name: "Women's Sprint Free",
            sport: "crosscountry",
            gender: "women",
            location: "Oslo, Norway",
            date: "2025-02-20",
            status: "upcoming"
        },
        {
            id: 5,
            name: "Men's Halfpipe",
            sport: "snowboard",
            gender: "men",
            location: "Laax, Switzerland",
            date: "2025-03-10",
            status: "upcoming"
        },
        {
            id: 6,
            name: "Women's Giant Slalom",
            sport: "alpine",
            gender: "women",
            location: "Kronplatz, Italy",
            date: "2025-01-23",
            status: "completed"
        }
    ],

    results: [
        // Men's Downhill - Event 1
        {
            eventId: 1,
            position: 1,
            bib: 7,
            athlete: "Marco Odermatt",
            country: "SUI",
            time: "1:42.34",
            diff: ""
        },
        {
            eventId: 1,
            position: 2,
            bib: 15,
            athlete: "Aleksander Aamodt Kilde",
            country: "NOR",
            time: "1:42.89",
            diff: "+0.55"
        },
        {
            eventId: 1,
            position: 3,
            bib: 3,
            athlete: "Vincent Kriechmayr",
            country: "AUT",
            time: "1:43.12",
            diff: "+0.78"
        },
        {
            eventId: 1,
            position: 4,
            bib: 22,
            athlete: "Matthias Mayer",
            country: "AUT",
            time: "1:43.45",
            diff: "+1.11"
        },
        {
            eventId: 1,
            position: 5,
            bib: 11,
            athlete: "Dominik Paris",
            country: "ITA",
            time: "1:43.67",
            diff: "+1.33"
        },
        {
            eventId: 1,
            position: 6,
            bib: 5,
            athlete: "Beat Feuz",
            country: "SUI",
            time: "1:43.89",
            diff: "+1.55"
        },
        {
            eventId: 1,
            position: 7,
            bib: 19,
            athlete: "Niels Hintermann",
            country: "SUI",
            time: "1:44.02",
            diff: "+1.68"
        },
        {
            eventId: 1,
            position: 8,
            bib: 8,
            athlete: "Travis Ganong",
            country: "USA",
            time: "1:44.23",
            diff: "+1.89"
        },

        // Women's Slalom - Event 2
        {
            eventId: 2,
            position: 1,
            bib: 2,
            athlete: "Mikaela Shiffrin",
            country: "USA",
            time: "1:38.45",
            diff: ""
        },
        {
            eventId: 2,
            position: 2,
            bib: 5,
            athlete: "Petra Vlhova",
            country: "SVK",
            time: "1:38.92",
            diff: "+0.47"
        },
        {
            eventId: 2,
            position: 3,
            bib: 1,
            athlete: "Wendy Holdener",
            country: "SUI",
            time: "1:39.23",
            diff: "+0.78"
        },
        {
            eventId: 2,
            position: 4,
            bib: 11,
            athlete: "Katharina Liensberger",
            country: "AUT",
            time: "1:39.56",
            diff: "+1.11"
        },
        {
            eventId: 2,
            position: 5,
            bib: 7,
            athlete: "Sara Hector",
            country: "SWE",
            time: "1:39.78",
            diff: "+1.33"
        },

        // Women's Giant Slalom - Event 6
        {
            eventId: 6,
            position: 1,
            bib: 1,
            athlete: "Sara Hector",
            country: "SWE",
            time: "2:05.34",
            diff: ""
        },
        {
            eventId: 6,
            position: 2,
            bib: 3,
            athlete: "Lara Gut-Behrami",
            country: "SUI",
            time: "2:05.67",
            diff: "+0.33"
        },
        {
            eventId: 6,
            position: 3,
            bib: 5,
            athlete: "Federica Brignone",
            country: "ITA",
            time: "2:05.98",
            diff: "+0.64"
        },
        {
            eventId: 6,
            position: 4,
            bib: 2,
            athlete: "Mikaela Shiffrin",
            country: "USA",
            time: "2:06.12",
            diff: "+0.78"
        },
        {
            eventId: 6,
            position: 5,
            bib: 8,
            athlete: "Marta Bassino",
            country: "ITA",
            time: "2:06.45",
            diff: "+1.11"
        }
    ],

    startLists: [
        // Men's 15km Classic - Event 3
        {
            eventId: 3,
            startOrder: 1,
            bib: 1,
            athlete: "Johannes Hoesflot Klaebo",
            country: "NOR",
            startTime: "10:00:00"
        },
        {
            eventId: 3,
            startOrder: 2,
            bib: 2,
            athlete: "Alexander Bolshunov",
            country: "RUS",
            startTime: "10:00:30"
        },
        {
            eventId: 3,
            startOrder: 3,
            bib: 3,
            athlete: "Iivo Niskanen",
            country: "FIN",
            startTime: "10:01:00"
        },
        {
            eventId: 3,
            startOrder: 4,
            bib: 4,
            athlete: "Sjur Roethe",
            country: "NOR",
            startTime: "10:01:30"
        },
        {
            eventId: 3,
            startOrder: 5,
            bib: 5,
            athlete: "Dario Cologna",
            country: "SUI",
            startTime: "10:02:00"
        },
        {
            eventId: 3,
            startOrder: 6,
            bib: 6,
            athlete: "Emil Iversen",
            country: "NOR",
            startTime: "10:02:30"
        },
        {
            eventId: 3,
            startOrder: 7,
            bib: 7,
            athlete: "Martin Loewstroem Nyenget",
            country: "NOR",
            startTime: "10:03:00"
        },
        {
            eventId: 3,
            startOrder: 8,
            bib: 8,
            athlete: "Hans Christer Holund",
            country: "NOR",
            startTime: "10:03:30"
        },

        // Women's Sprint Free - Event 4
        {
            eventId: 4,
            startOrder: 1,
            bib: 1,
            athlete: "Jessie Diggins",
            country: "USA",
            startTime: "12:00:00"
        },
        {
            eventId: 4,
            startOrder: 2,
            bib: 2,
            athlete: "Therese Johaug",
            country: "NOR",
            startTime: "12:00:15"
        },
        {
            eventId: 4,
            startOrder: 3,
            bib: 3,
            athlete: "Ebba Andersson",
            country: "SWE",
            startTime: "12:00:30"
        },
        {
            eventId: 4,
            startOrder: 4,
            bib: 4,
            athlete: "Natalia Nepryaeva",
            country: "RUS",
            startTime: "12:00:45"
        },
        {
            eventId: 4,
            startOrder: 5,
            bib: 5,
            athlete: "Frida Karlsson",
            country: "SWE",
            startTime: "12:01:00"
        },

        // Men's Halfpipe - Event 5
        {
            eventId: 5,
            startOrder: 1,
            bib: 1,
            athlete: "Shaun White",
            country: "USA",
            startTime: "14:00:00"
        },
        {
            eventId: 5,
            startOrder: 2,
            bib: 2,
            athlete: "Yuto Totsuka",
            country: "JPN",
            startTime: "14:02:00"
        },
        {
            eventId: 5,
            startOrder: 3,
            bib: 3,
            athlete: "Scotty James",
            country: "AUS",
            startTime: "14:04:00"
        },
        {
            eventId: 5,
            startOrder: 4,
            bib: 4,
            athlete: "Ayumu Hirano",
            country: "JPN",
            startTime: "14:06:00"
        },
        {
            eventId: 5,
            startOrder: 5,
            bib: 5,
            athlete: "Jan Scherrer",
            country: "SUI",
            startTime: "14:08:00"
        },
        {
            eventId: 5,
            startOrder: 6,
            bib: 6,
            athlete: "Andre Hoeflich",
            country: "GER",
            startTime: "14:10:00"
        }
    ]
};
