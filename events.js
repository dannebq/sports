// All events from all sports with standardized dates
const allEvents = [
    // Längdskidor Världscupen - Hela säsongen
    { date: '2025-11-28', sport: 'Längdskidor', event: 'Ruka, Finland - 10 km Interval Start C', link: 'schedule-worldcup.html' },
    { date: '2025-11-29', sport: 'Längdskidor', event: 'Ruka, Finland - Sprint C', link: 'schedule-worldcup.html' },
    { date: '2025-11-30', sport: 'Längdskidor', event: 'Ruka, Finland - 20 km Mass Start F', link: 'schedule-worldcup.html' },
    { date: '2025-12-05', sport: 'Längdskidor', event: 'Trondheim, Norge - Sprint C', link: 'schedule-worldcup.html' },
    { date: '2025-12-06', sport: 'Längdskidor', event: 'Trondheim, Norge - 20 km Skiathlon', link: 'schedule-worldcup.html' },
    { date: '2025-12-07', sport: 'Längdskidor', event: 'Trondheim, Norge - 10 km Interval Start F', link: 'schedule-worldcup.html' },
    { date: '2025-12-12', sport: 'Längdskidor', event: 'Davos, Schweiz - Team Sprint F', link: 'schedule-worldcup.html' },
    { date: '2025-12-13', sport: 'Längdskidor', event: 'Davos, Schweiz - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2025-12-14', sport: 'Längdskidor', event: 'Davos, Schweiz - 10 km Interval Start F', link: 'schedule-worldcup.html' },
    { date: '2025-12-28', sport: 'Längdskidor', event: 'Tour de Ski: Toblach, Italien - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2025-12-29', sport: 'Längdskidor', event: 'Tour de Ski: Toblach, Italien - 10 km Interval Start C', link: 'schedule-worldcup.html' },
    { date: '2025-12-31', sport: 'Längdskidor', event: 'Tour de Ski: Toblach, Italien - 5 km Heat Mass Start F', link: 'schedule-worldcup.html' },
    { date: '2026-01-01', sport: 'Längdskidor', event: 'Tour de Ski: Toblach, Italien - 20 km C Pursuit', link: 'schedule-worldcup.html' },
    { date: '2026-01-03', sport: 'Längdskidor', event: 'Tour de Ski: Val di Fiemme, Italien - Sprint C', link: 'schedule-worldcup.html' },
    { date: '2026-01-04', sport: 'Längdskidor', event: 'Tour de Ski: Val di Fiemme, Italien - Final Climb', link: 'schedule-worldcup.html' },
    { date: '2026-01-17', sport: 'Längdskidor', event: 'Oberhof, Tyskland - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2026-01-18', sport: 'Längdskidor', event: 'Oberhof, Tyskland - 10 km Interval Start C', link: 'schedule-worldcup.html' },
    { date: '2026-01-23', sport: 'Längdskidor', event: 'Goms, Schweiz - Team Sprint F', link: 'schedule-worldcup.html' },
    { date: '2026-01-24', sport: 'Längdskidor', event: 'Goms, Schweiz - Sprint C', link: 'schedule-worldcup.html' },
    { date: '2026-01-25', sport: 'Längdskidor', event: 'Goms, Schweiz - 20 km Mass Start C', link: 'schedule-worldcup.html' },
    { date: '2026-02-28', sport: 'Längdskidor', event: 'Falun, Sverige - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2026-03-01', sport: 'Längdskidor', event: 'Falun, Sverige - 20 km Skiathlon', link: 'schedule-worldcup.html' },
    { date: '2026-03-07', sport: 'Längdskidor', event: 'Lahti, Finland - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2026-03-08', sport: 'Längdskidor', event: 'Lahti, Finland - 10 km Interval Start C', link: 'schedule-worldcup.html' },
    { date: '2026-03-12', sport: 'Längdskidor', event: 'Drammen, Norge - Sprint C', link: 'schedule-worldcup.html' },
    { date: '2026-03-14', sport: 'Längdskidor', event: 'Oslo/Holmenkollen, Norge - 50 km Mass Start F', link: 'schedule-worldcup.html' },
    { date: '2026-03-20', sport: 'Längdskidor', event: 'Lake Placid, USA - 10 km Interval Start C', link: 'schedule-worldcup.html' },
    { date: '2026-03-21', sport: 'Längdskidor', event: 'Lake Placid, USA - Sprint F', link: 'schedule-worldcup.html' },
    { date: '2026-03-22', sport: 'Längdskidor', event: 'Lake Placid, USA - 20 km Mass Start F', link: 'schedule-worldcup.html' },

    // Handbollsligan - Hela schemat
    { date: '2025-10-23', time: '19:00', sport: 'Handbollsligan', event: 'IF Hallby HK - HF Karlskrona', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-05', time: '19:00', sport: 'Handbollsligan', event: 'Ystads IF HF - HK Malmö', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-05', time: '19:00', sport: 'Handbollsligan', event: 'Hammarby IF HF - IFK Skövde HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-05', time: '19:00', sport: 'Handbollsligan', event: 'IFK Kristianstad - IF Hallby HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-05', time: '19:00', sport: 'Handbollsligan', event: 'Eskilstuna Guif IF - Önnereds HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-05', time: '19:00', sport: 'Handbollsligan', event: 'OV Helsingborg HK - Amo HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-12', time: '19:00', sport: 'Handbollsligan', event: 'HK Malmö - Hammarby IF HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-13', time: '19:00', sport: 'Handbollsligan', event: 'IFK Skövde HK - VästeråsIrsta HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-14', time: '19:00', sport: 'Handbollsligan', event: 'Amo HK - HF Karlskrona', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-14', time: '19:00', sport: 'Handbollsligan', event: 'IF Hallby HK - Alingsås HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-14', time: '20:00', sport: 'Handbollsligan', event: 'Önnereds HK - OV Helsingborg HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-15', time: '16:00', sport: 'Handbollsligan', event: 'Eskilstuna Guif IF - IFK Kristianstad', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-15', time: '16:00', sport: 'Handbollsligan', event: 'IK Sävehof - Ystads IF HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-19', time: '19:00', sport: 'Handbollsligan', event: 'OV Helsingborg HK - HK Malmö', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-20', time: '19:00', sport: 'Handbollsligan', event: 'VästeråsIrsta HF - IF Hallby HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-21', time: '19:00', sport: 'Handbollsligan', event: 'Alingsås HK - IK Sävehof', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-21', time: '19:00', sport: 'Handbollsligan', event: 'IFK Skövde HK - HF Karlskrona', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-21', time: '19:00', sport: 'Handbollsligan', event: 'IFK Kristianstad - Önnereds HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-21', time: '19:00', sport: 'Handbollsligan', event: 'Hammarby IF HF - Amo HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-22', time: '16:30', sport: 'Handbollsligan', event: 'Ystads IF HF - Eskilstuna Guif IF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-26', time: '19:00', sport: 'Handbollsligan', event: 'Eskilstuna Guif IF - OV Helsingborg HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-27', time: '19:00', sport: 'Handbollsligan', event: 'IFK Skövde HK - Alingsås HK', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-28', time: '19:00', sport: 'Handbollsligan', event: 'Önnereds HK - Ystads IF HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-28', time: '19:00', sport: 'Handbollsligan', event: 'HF Karlskrona - IK Sävehof', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-29', time: '17:00', sport: 'Handbollsligan', event: 'Amo HK - IFK Kristianstad', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-29', time: '17:00', sport: 'Handbollsligan', event: 'IF Hallby HK - Hammarby IF HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-11-30', time: '16:00', sport: 'Handbollsligan', event: 'HK Malmö - VästeråsIrsta HF', link: 'schedule-handbollsligan.html' },
    { date: '2025-12-01', time: '19:00', sport: 'Handbollsligan', event: 'Alingsås HK - Eskilstuna Guif IF', link: 'schedule-handbollsligan.html' },

    // Vinterstudion November & December 2025
    { date: '2025-11-15', time: '09:30', sport: 'Vinterstudion', event: 'Skidskytte Idre - Sprint h/d (SVT1 09:30-13:45)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-16', time: '09:45', sport: 'Vinterstudion', event: 'Skidskytte Idre - Kortdistans h/d (SVT1 09:45-13:45)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-21', time: '08:40', sport: 'Vinterstudion', event: 'Längdskidor Gällivare - Sprint (SVT Play 08:40, SVT1 11:00)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-22', time: '09:30', sport: 'Vinterstudion', event: 'Längdskidor Gällivare - 10 km klassiskt h/d (SVT1 09:30-13:00)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-23', time: '09:45', sport: 'Vinterstudion', event: 'Längdskidor Gällivare - 10 km fristil h/d (SVT1 09:45-13:00)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-29', time: '12:45', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Stafett d/h (SVT1 12:45-18:30)', link: 'schedule-vinterstudion.html' },
    { date: '2025-11-30', time: '13:45', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Mixed stafett (SVT1 13:45-18:00)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-02', time: '15:20', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Individuell 15 km (d)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-03', time: '15:20', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Individuell 20 km (h)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-05', time: '15:50', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Sprint (d)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-06', time: '16:00', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Sprint (h)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-07', time: '13:00', sport: 'Vinterstudion', event: 'Skidskytte Östersund VC - Jaktstart d/h (SVT1 13:00-16:30)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-12', time: '11:15', sport: 'Vinterstudion', event: 'Skidskytte Hochfilzen VC - Sprint h/d', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-13', time: '11:30', sport: 'Vinterstudion', event: 'Ski Classics Bad Gastein / Skidskytte Hochfilzen - Individuell 7 km / Jaktstart (h) / Stafett (d)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-14', time: '11:30', sport: 'Vinterstudion', event: 'Ski Classics Bad Gastein / Skidskytte Hochfilzen - Criterium 36 km / Stafett (h) / Jaktstart (d)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-18', time: '14:05', sport: 'Vinterstudion', event: 'Skidskytte Annecy VC - Sprint (d)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-19', time: '14:05', sport: 'Vinterstudion', event: 'Skidskytte Annecy VC - Sprint (h)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-20', time: '12:00', sport: 'Vinterstudion', event: 'Skidskytte Annecy VC - Jaktstart d/h (SVT1 12:00-16:00)', link: 'schedule-vinterstudion.html' },
    { date: '2025-12-21', time: '12:00', sport: 'Vinterstudion', event: 'Skidskytte Annecy VC - Masstart d/h (SVT1 12:00-16:00)', link: 'schedule-vinterstudion.html' },

    // Green Bay Packers
    { date: '2025-09-07', sport: 'NFL', event: 'Green Bay Packers - Detroit Lions', link: 'schedule-packers.html' },
    { date: '2025-09-11', sport: 'NFL', event: 'Green Bay Packers - Washington Commanders', link: 'schedule-packers.html' },
    { date: '2025-09-21', sport: 'NFL', event: 'Cleveland Browns - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-09-28', sport: 'NFL', event: 'Dallas Cowboys - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-10-12', sport: 'NFL', event: 'Green Bay Packers - Cincinnati Bengals', link: 'schedule-packers.html' },
    { date: '2025-10-19', sport: 'NFL', event: 'Arizona Cardinals - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-10-26', sport: 'NFL', event: 'Pittsburgh Steelers - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-11-02', sport: 'NFL', event: 'Green Bay Packers - Carolina Panthers', link: 'schedule-packers.html' },
    { date: '2025-11-10', sport: 'NFL', event: 'Green Bay Packers - Philadelphia Eagles', link: 'schedule-packers.html' },
    { date: '2025-11-16', sport: 'NFL', event: 'New York Giants - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-11-23', sport: 'NFL', event: 'Green Bay Packers - Minnesota Vikings', link: 'schedule-packers.html' },
    { date: '2025-11-27', sport: 'NFL', event: 'Detroit Lions - Green Bay Packers (Thanksgiving)', link: 'schedule-packers.html' },
    { date: '2025-12-07', sport: 'NFL', event: 'Green Bay Packers - Chicago Bears', link: 'schedule-packers.html' },
    { date: '2025-12-14', sport: 'NFL', event: 'Denver Broncos - Green Bay Packers', link: 'schedule-packers.html' },
    { date: '2025-12-20', sport: 'NFL', event: 'Chicago Bears - Green Bay Packers', link: 'schedule-packers.html' },

    // Allsvenskan - Alla matcher
    { date: '2025-10-25', time: '15:00', sport: 'Allsvenskan', event: 'Djurgården - IFK Värnamo', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-25', time: '17:30', sport: 'Allsvenskan', event: 'Östers IF - Degerfors IF', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-26', time: '14:00', sport: 'Allsvenskan', event: 'Mjällby AIF - IFK Norrköping FK', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-26', time: '14:00', sport: 'Allsvenskan', event: 'IK Sirius FK - IF Elfsborg', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-26', time: '16:30', sport: 'Allsvenskan', event: 'AIK - BK Häcken', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-26', time: '16:30', sport: 'Allsvenskan', event: 'Halmstad - IFK Göteborg', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-27', time: '19:00', sport: 'Allsvenskan', event: 'IF Brommapojkarna - GAIS', link: 'schedule-allsvenskan.html' },
    { date: '2025-10-27', time: '19:10', sport: 'Allsvenskan', event: 'Malmö FF - Hammarby', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-01', time: '15:00', sport: 'Allsvenskan', event: 'BK Häcken - Malmö FF', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-01', time: '17:30', sport: 'Allsvenskan', event: 'IFK Norrköping FK - IK Sirius FK', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-02', time: '14:00', sport: 'Allsvenskan', event: 'IF Elfsborg - AIK', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-02', time: '14:00', sport: 'Allsvenskan', event: 'Halmstad - IF Brommapojkarna', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-02', time: '16:30', sport: 'Allsvenskan', event: 'Djurgården - IFK Göteborg', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-02', time: '16:30', sport: 'Allsvenskan', event: 'GAIS - Östers IF', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-03', time: '19:00', sport: 'Allsvenskan', event: 'Degerfors IF - Hammarby', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-03', time: '19:00', sport: 'Allsvenskan', event: 'IFK Värnamo - Mjällby AIF', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'AIK - Halmstad', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'Hammarby - IF Elfsborg', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'IF Brommapojkarna - Degerfors IF', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'IFK Göteborg - IFK Norrköping FK', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'Östers IF - Djurgården', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'Malmö FF - GAIS', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'Mjällby AIF - BK Häcken', link: 'schedule-allsvenskan.html' },
    { date: '2025-11-09', time: '15:00', sport: 'Allsvenskan', event: 'IK Sirius FK - IFK Värnamo', link: 'schedule-allsvenskan.html' },

    // Formel 1
    { date: '2025-10-24', time: '20:30', sport: 'Formel 1', event: 'Mexico City GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-10-25', time: '19:30', sport: 'Formel 1', event: 'Mexico City GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-10-26', time: '21:00', sport: 'Formel 1', event: 'Mexico City GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-07', time: '16:30', sport: 'Formel 1', event: 'São Paulo GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-08', time: '16:00', sport: 'Formel 1', event: 'São Paulo GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-09', time: '18:00', sport: 'Formel 1', event: 'São Paulo GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-21', time: '04:30', sport: 'Formel 1', event: 'Las Vegas GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-11-22', time: '04:30', sport: 'Formel 1', event: 'Las Vegas GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-23', time: '07:00', sport: 'Formel 1', event: 'Las Vegas GP - Race', link: 'schedule-f1.html' },
    { date: '2025-11-28', time: '15:30', sport: 'Formel 1', event: 'Qatar GP - Träning & Sprint Kval', link: 'schedule-f1.html' },
    { date: '2025-11-29', time: '16:00', sport: 'Formel 1', event: 'Qatar GP - Sprint & Kval', link: 'schedule-f1.html' },
    { date: '2025-11-30', time: '18:00', sport: 'Formel 1', event: 'Qatar GP - Race', link: 'schedule-f1.html' },
    { date: '2025-12-05', time: '11:30', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning', link: 'schedule-f1.html' },
    { date: '2025-12-06', time: '12:30', sport: 'Formel 1', event: 'Abu Dhabi GP - Träning & Kval', link: 'schedule-f1.html' },
    { date: '2025-12-07', time: '14:00', sport: 'Formel 1', event: 'Abu Dhabi GP - Race (Säsongsavslutning)', link: 'schedule-f1.html' },

    // Skidskytte - Hela världscupen
    { date: '2025-11-29', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-11-30', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-01', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-02', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-03', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-04', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-05', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-06', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-07', sport: 'Skidskytte', event: 'Östersund, Sverige - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-08', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-09', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-10', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-11', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-12', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-13', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-14', sport: 'Skidskytte', event: 'Hochfilzen, Österrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-15', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-16', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-17', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-18', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-19', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-20', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2025-12-21', sport: 'Skidskytte', event: 'Annecy-Le Grand Bornand, Frankrike - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-05', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-06', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-07', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-08', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-09', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-10', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-11', sport: 'Skidskytte', event: 'Oberhof, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-12', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-13', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-14', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-15', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-16', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-17', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-18', sport: 'Skidskytte', event: 'Ruhpolding, Tyskland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-19', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-20', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-21', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-22', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-23', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-24', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-01-25', sport: 'Skidskytte', event: 'Nove Mesto, Tjeckien - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-02', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-03', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-04', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-05', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-06', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-07', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-08', sport: 'Skidskytte', event: 'Kontiolahti, Finland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-09', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-10', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-11', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-12', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-13', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-14', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-15', sport: 'Skidskytte', event: 'Otepää, Estland - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-16', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-17', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-18', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-19', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-20', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-21', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },
    { date: '2026-03-22', sport: 'Skidskytte', event: 'Holmenkollen, Norge - Världscup', link: 'schedule-biathlon.html' },

    // Malmö FF
    { date: '2025-10-23', time: '21:00', sport: 'Malmö FF', event: 'Malmö FF - Dinamo Zagreb (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-10-27', sport: 'Malmö FF', event: 'Malmö FF - Hammarby IF', link: 'schedule-malmo.html' },
    { date: '2025-11-01', sport: 'Malmö FF', event: 'BK Häcken - Malmö FF', link: 'schedule-malmo.html' },
    { date: '2025-11-06', sport: 'Malmö FF', event: 'Malmö FF - Panathinaikos (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-11-09', sport: 'Malmö FF', event: 'Malmö FF - GAIS', link: 'schedule-malmo.html' },
    { date: '2025-11-27', sport: 'Malmö FF', event: 'Nottingham Forest - Malmö FF (Europa)', link: 'schedule-malmo.html' },
    { date: '2025-12-11', sport: 'Malmö FF', event: 'Porto - Malmö FF (Europa)', link: 'schedule-malmo.html' },
    { date: '2026-01-22', sport: 'Malmö FF', event: 'Malmö FF - Crvena Zvezda (Europa)', link: 'schedule-malmo.html' },
    { date: '2026-01-29', sport: 'Malmö FF', event: 'Genk - Malmö FF (Europa)', link: 'schedule-malmo.html' },

    // Ski Classics
    { date: '2025-12-13', sport: 'Ski Classics', event: 'Bad Gastein Pro Team Tempo, Österrike', link: 'schedule-skiclassics.html' },
    { date: '2025-12-14', sport: 'Ski Classics', event: 'Bad Gastein Criterium, Österrike', link: 'schedule-skiclassics.html' },
    { date: '2026-01-17', sport: 'Ski Classics', event: 'Engadin La Diagonela, Schweiz', link: 'schedule-skiclassics.html' },
    { date: '2026-01-25', sport: 'Ski Classics', event: 'Marcialonga, Italien', link: 'schedule-skiclassics.html' },
    { date: '2026-01-30', sport: 'Ski Classics', event: 'Bedrichov Sprint, Tjeckien', link: 'schedule-skiclassics.html' },
    { date: '2026-02-01', sport: 'Ski Classics', event: 'Jizerská50, Tjeckien', link: 'schedule-skiclassics.html' },
    { date: '2026-03-01', sport: 'Ski Classics', event: 'Vasaloppet, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-07', sport: 'Ski Classics', event: 'Grönklitt 50k ITT Damer, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-08', sport: 'Ski Classics', event: 'Grönklitt 50k ITT Herrar, Sverige', link: 'schedule-skiclassics.html' },
    { date: '2026-03-14', sport: 'Ski Classics', event: 'Birkebeinerrennet, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-21', sport: 'Ski Classics', event: 'Marcialonga Bodø, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-28', sport: 'Ski Classics', event: 'Reistadløpet, Norge', link: 'schedule-skiclassics.html' },
    { date: '2026-03-29', sport: 'Ski Classics', event: 'Grand Finale Summit 2 Senja, Norge', link: 'schedule-skiclassics.html' },
];

// Function to get today's events
function getTodaysEvents() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    return allEvents.filter(event => event.date === todayString);
}

// Function to get upcoming events (within 7 days, excluding today)
function getUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return allEvents.filter(event => {
        const eventDate = new Date(event.date + 'T00:00:00');
        return eventDate >= tomorrow && eventDate <= nextWeek;
    }).sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
}

// Function to display today's events on the page
function displayTodaysEvents() {
    const eventsContainer = document.getElementById('todays-events');
    if (!eventsContainer) return;

    const todaysEvents = getTodaysEvents();

    if (todaysEvents.length === 0) {
        eventsContainer.innerHTML = '<p style="font-style: italic;">Inga händelser idag</p>';
        return;
    }

    // Group events by sport
    const eventsBySport = {};
    todaysEvents.forEach(event => {
        if (!eventsBySport[event.sport]) {
            eventsBySport[event.sport] = [];
        }
        eventsBySport[event.sport].push(event);
    });

    let html = '<div class="event-list">';

    // Iterate through sports
    Object.keys(eventsBySport).forEach(sport => {
        html += `<div class="sport-group">`;
        html += `<h4 class="sport-header">${sport}</h4>`;

        eventsBySport[sport].forEach(event => {
            const timeDisplay = event.time ? `${event.time} ` : '';
            html += `
                <div class="event-item-grouped">
                    <span class="event-desc">${timeDisplay}${event.event}</span>
                </div>
            `;
        });

        html += `</div>`;
    });

    html += '</div>';

    eventsContainer.innerHTML = html;
}

// Function to display upcoming events on the page
function displayUpcomingEvents() {
    const eventsContainer = document.getElementById('upcoming-events');
    if (!eventsContainer) return;

    const upcomingEvents = getUpcomingEvents();

    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<p style="font-style: italic;">Inga kommande händelser inom 7 dagar</p>';
        return;
    }

    // Group events by date
    const eventsByDate = {};
    upcomingEvents.forEach(event => {
        if (!eventsByDate[event.date]) {
            eventsByDate[event.date] = [];
        }
        eventsByDate[event.date].push(event);
    });

    // Format date manually to avoid locale issues
    const days = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'];
    const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

    let html = '<div class="event-list">';

    // Iterate through dates in order
    Object.keys(eventsByDate).sort().forEach(dateKey => {
        const eventDate = new Date(dateKey + 'T00:00:00');
        const dateString = `${days[eventDate.getDay()]} ${eventDate.getDate()} ${months[eventDate.getMonth()]}`;

        html += `<div class="date-group">`;
        html += `<h4 class="date-header">${dateString}</h4>`;

        // Group events by sport within this date
        const eventsBySport = {};
        eventsByDate[dateKey].forEach(event => {
            if (!eventsBySport[event.sport]) {
                eventsBySport[event.sport] = [];
            }
            eventsBySport[event.sport].push(event);
        });

        // Iterate through sports
        Object.keys(eventsBySport).forEach(sport => {
            html += `<div class="sport-group">`;
            html += `<h5 class="sport-header">${sport}</h5>`;

            eventsBySport[sport].forEach(event => {
                const timeDisplay = event.time ? `${event.time} ` : '';
                html += `
                    <div class="event-item-grouped">
                        <span class="event-desc">${timeDisplay}${event.event}</span>
                    </div>
                `;
            });

            html += `</div>`;
        });

        html += `</div>`;
    });

    html += '</div>';

    eventsContainer.innerHTML = html;
}

// Run when page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        displayTodaysEvents();
        displayUpcomingEvents();
    });
}
