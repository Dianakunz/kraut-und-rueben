/* Kraut und Rüben – Pflanzendaten (Etappe 1)
   Alle Texte in eigenen Worten; Werte aus den unter QUELLEN genannten Fachquellen.
   Diese Datei wird automatisch erzeugt. */
const PFLANZEN_STAND = "2026-11-05";
const QUELLEN = {
 "bzfe": {
  "titel": "BZfE/aid: Tabelle Aussaat- und Pflanzzeiten (Abstände, Anzucht, Pflanzung, Direktsaat, Ernte)",
  "url": "https://www.bzfe.de/fileadmin/resources/Bildung/Tabelle_Aussaat_und_Pflanzzeiten.pdf"
 },
 "sbb": {
  "titel": "Südtiroler Bauernbund: Fruchtfolge (Anbaupausen nach Familien, Stark-/Mittel-/Schwachzehrer)",
  "url": "https://sbb.it/public/fileadmin/user_upload/Innovation/Hauptseite_Innovation/INNOProdukte/221123_Fruchtfolge.pdf"
 },
 "bingenheim": {
  "titel": "Bingenheimer Saatgut: Mindesthaltbarkeit und Keimfähigkeit von Saatgut",
  "url": "https://fachhandel.bingenheimersaatgut.de/dateien/Service_und_Download/25_26_MHD_Saatgutlagerung_Keimfaehigkeit.pdf"
 },
 "bund": {
  "titel": "BUND: Mischkultur – gute und schlechte Nachbarn",
  "url": "https://www.bund.net/fileadmin/user_upload_bund/publikationen/naturnahes-gaertnern/Mischkultur-Gemuese-BUND.pdf"
 },
 "lwg": {
  "titel": "Bayerische Gartenakademie (LWG), Merkblatt 2104: Mischkulturen im Gemüsegarten",
  "url": "https://www.lwg.bayern.de/mam/cms06/gartenakademie/dateien/2104-2020.pdf"
 },
 "psr": {
  "titel": "ProSpecieRara: Grundlagen Gemüse-Samenbau (Schwierigkeit der Samengewinnung)",
  "url": "https://www.prospecierara.ch/fileadmin/user_upload/prospecierara.ch/Pflanzen/Wissen/Grundlagen_Samenbau_ProSpecieRara.pdf"
 },
 "hornbach": {
  "titel": "Hornbach: Günstige und ungünstige Beetnachbarn (nur für Tomate–Basilikum und Tomate–Gurke)",
  "url": "https://media.hornbach.lu/cms/lu/de-lu/lu-mischkultur-beetnachbarn.pdf"
 },
 "knoblauch": {
  "titel": "Plantura und Samenhaus: Knoblauch stecken (Herbst Sept.–Okt., Frühjahr Feb.–Apr.; Ernte ab Juli)",
  "url": "https://www.plantura.garden/gemuese/knoblauch/knoblauch-pflanzen"
 },
 "samenhaus": {
  "titel": "Samenhaus: Keimfähigkeit von Gemüse- und Kräutersamen",
  "url": "https://www.samenhaus.de/gartenblog/?p=10692"
 }
};
const FAMILIEN = {
 "nachtschatten": {
  "name": "Nachtschattengewächse",
  "pause": "4 Jahre",
  "farbe": "#c8234a"
 },
 "kuerbis": {
  "name": "Kürbisgewächse",
  "pause": "4–5 Jahre",
  "farbe": "#d9822b"
 },
 "huelsen": {
  "name": "Hülsenfrüchtler",
  "pause": "3–6 Jahre",
  "farbe": "#7b5ea7"
 },
 "dolden": {
  "name": "Doldenblütler",
  "pause": "4–5 Jahre",
  "farbe": "#b7791f"
 },
 "kreuz": {
  "name": "Kreuzblütler",
  "pause": "4–5 Jahre",
  "farbe": "#2f6f9f"
 },
 "korb": {
  "name": "Korbblütler",
  "pause": "3 Jahre",
  "farbe": "#3f8a2a"
 },
 "fuchsschwanz": {
  "name": "Fuchsschwanzgewächse (früher Gänsefußgewächse)",
  "pause": "3–4 Jahre",
  "farbe": "#a3326f"
 },
 "lauch": {
  "name": "Lauchgewächse",
  "pause": "4 Jahre",
  "farbe": "#8a8f2a"
 },
 "suessgras": {
  "name": "Süßgräser",
  "pause": null,
  "farbe": "#c9a227"
 },
 "lippen": {
  "name": "Lippenblütler",
  "pause": null,
  "farbe": "#2a8f86"
 },
 "baldrian": {
  "name": "Baldriangewächse",
  "pause": null,
  "farbe": "#5f9e4a"
 }
};
const PFLANZEN = [
 {
  "id": "tomate",
  "name": "Tomate",
  "gruppe": "Gemüse",
  "familie": "nachtschatten",
  "zehrer": "stark",
  "standort": "sonnig, warm, am besten regengeschützt",
  "frost": "empfindlich",
  "abstand": [
   60,
   60
  ],
  "saattiefe": "ca. 0,5 cm",
  "keimung": "Dunkelkeimer (dünn mit Erde bedecken)",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": [
   5,
   10
  ],
  "saatgut": "leicht",
  "anleitung": "Ab Mitte März auf der warmen Fensterbank vorziehen und nach den Eisheiligen (Mitte Mai) auspflanzen. Etwas tiefer setzen als im Topf, an einen Stab binden und Seitentriebe regelmäßig ausgeizen. Gleichmäßig gießen, die Blätter dabei trocken halten – das beugt der Kraut- und Braunfäule vor.",
  "hinweise": [
   "Erntebeginn: Die BZfE-Tabelle nennt August, im Gewächshaus und bei frühen Sorten oft schon ab Juli."
  ],
  "auch": [],
  "direktsaat": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   100,
   200
  ],
  "hoeheHinweis": "Stabtomaten; Busch- und Balkontomaten bleiben mit 40–80 cm deutlich kleiner.",
  "einzeln": true
 },
 {
  "id": "paprika",
  "name": "Paprika",
  "auch": [
   "Chili"
  ],
  "gruppe": "Gemüse",
  "familie": "nachtschatten",
  "zehrer": "stark",
  "standort": "sonnig, sehr warm, geschützt",
  "frost": "empfindlich",
  "abstand": [
   40,
   40
  ],
  "saattiefe": "ca. 0,5 cm",
  "keimung": "Dunkelkeimer, braucht viel Wärme zum Keimen",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   7,
   8,
   9
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": null,
  "anleitung": "Früh vorziehen, da Paprika lange braucht; die Samen keimen nur bei hoher Temperatur zuverlässig. Erst nach den Eisheiligen an einen sehr warmen Platz pflanzen – im Gewächshaus oder an einer Hauswand gelingt sie am besten. Kälte und Nässe lassen die Pflanze stocken.",
  "hinweise": [
   "Ernte: Die BZfE-Tabelle nennt Ende Juli bis Anfang August als Erntebeginn; geerntet wird bis zum ersten Frost."
  ],
  "direktsaat": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   80
  ],
  "einzeln": true
 },
 {
  "id": "aubergine",
  "name": "Aubergine",
  "gruppe": "Gemüse",
  "familie": "nachtschatten",
  "zehrer": "stark",
  "standort": "sonnig, sehr warm, geschützt",
  "frost": "empfindlich",
  "abstand": [
   40,
   40
  ],
  "saattiefe": "ca. 0,5–1 cm",
  "keimung": "Dunkelkeimer, braucht viel Wärme",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   8,
   9
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Wie Paprika früh und warm vorziehen. Auberginen lieben Hitze: Im Freiland nur in sehr warmen Lagen, sonst im Gewächshaus oder großen Kübel an der Hauswand. Ernten, solange die Schale glänzt.",
  "auch": [],
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   60,
   100
  ],
  "einzeln": true
 },
 {
  "id": "gurke",
  "name": "Gurke",
  "auch": [
   "Salatgurke",
   "Einlegegurke"
  ],
  "gruppe": "Gemüse",
  "familie": "kuerbis",
  "zehrer": "stark",
  "standort": "sonnig bis halbschattig, warm, windgeschützt",
  "frost": "empfindlich",
  "abstand": [
   150,
   40
  ],
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4
  ],
  "direktsaat": [
   5,
   6
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Ab Mitte Mai direkt säen oder ab April in Töpfen vorziehen und nach den Eisheiligen pflanzen. Gurken mögen gleichmäßig feuchten, humusreichen Boden und lauwarmes Gießwasser. Kletternde Sorten an einem Netz oder Gitter hochleiten.",
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "hornbach"
  ],
  "hinweise": [
   "Vorziehen: Die BZfE-Tabelle nennt für Salatgurken nur die Direktsaat ab Mitte Mai; das Vorziehen im April ist gängige Praxis, steht dort aber nicht."
  ],
  "hoehe": [
   150,
   200
  ],
  "hoeheHinweis": "An der Rankhilfe gezogen; ohne Rankhilfe liegen die Triebe am Boden.",
  "einzeln": true
 },
 {
  "id": "zucchini",
  "name": "Zucchini",
  "gruppe": "Gemüse",
  "familie": "kuerbis",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich",
  "frost": "empfindlich",
  "abstand": [
   140,
   140
  ],
  "abstandHinweis": "etwa 2 m² pro Pflanze",
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4
  ],
  "direktsaat": [
   5,
   6
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Ab April vorziehen oder ab Mitte Mai direkt säen. Eine Pflanze braucht viel Platz und reichlich Kompost. Früchte jung ernten (etwa 15–20 cm), dann setzt die Pflanze laufend neue an.",
  "auch": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   50,
   80
  ],
  "einzeln": true
 },
 {
  "id": "kuerbis",
  "name": "Kürbis",
  "auch": [
   "Hokkaido",
   "Butternut"
  ],
  "gruppe": "Gemüse",
  "familie": "kuerbis",
  "zehrer": "stark",
  "standort": "sonnig, sehr nährstoffreich (z. B. am Kompost)",
  "frost": "empfindlich",
  "abstand": [
   150,
   150
  ],
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4,
   5
  ],
  "direktsaat": [
   5,
   6
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Ab Mitte April vorziehen oder ab Mitte Mai direkt säen. Kürbisse ranken weit und brauchen sehr viel Platz und Nährstoffe. Erntereif, wenn der Stiel verholzt und die Schale hart ist; vor dem ersten Frost ernten.",
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   60
  ],
  "hoeheHinweis": "Bleibt niedrig, die Ranken werden aber mehrere Meter lang.",
  "einzeln": true
 },
 {
  "id": "buschbohne",
  "name": "Buschbohne",
  "auch": [
   "Bohne"
  ],
  "gruppe": "Gemüse",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, warm",
  "frost": "empfindlich",
  "abstand": [
   45,
   7
  ],
  "pause": "3–4 Jahre",
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   5,
   6,
   7
  ],
  "ernte": [
   7,
   8,
   9
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "leicht",
  "anleitung": "Erst säen, wenn der Boden warm ist (ab Anfang Mai, besser nach den Eisheiligen). Gesät wird in Reihen oder in kleinen Gruppen (Horsten). Nach etwa zwei bis drei Monaten laufend ernten, solange die Hülsen zart sind.",
  "vorziehen": [],
  "pflanzen": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   50
  ],
  "einzeln": false
 },
 {
  "id": "stangenbohne",
  "name": "Stangenbohne",
  "auch": [
   "Bohne"
  ],
  "gruppe": "Gemüse",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, warm, windgeschützt",
  "frost": "empfindlich",
  "abstand": [
   80,
   80
  ],
  "abstandHinweis": "6–8 Pflanzen pro Stange",
  "pause": "3–4 Jahre",
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   5,
   6,
   7
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "leicht",
  "anleitung": "Ab Mitte Mai rund um eine 2–2,5 m lange Stange säen, mehrere Samen pro Stange. Die Ranken winden sich selbst nach oben. Regelmäßig ernten, dann tragen die Pflanzen bis in den Herbst.",
  "hinweise": [
   "Mischkultur Stangenbohne–Erbse: Die BUND-Tabelle führt die Erbse bei der Stangenbohne sowohl als guten als auch als schlechten Nachbarn; in der Zeile der Erbse steht sie als schlecht. Die App übernimmt „schlecht“."
  ],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   200,
   300
  ],
  "hoeheHinweis": "Je nach Stangenhöhe.",
  "einzeln": false
 },
 {
  "id": "erbse",
  "name": "Erbse",
  "auch": [
   "Zuckererbse",
   "Markerbse",
   "Palerbse"
  ],
  "gruppe": "Gemüse",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   40,
   4
  ],
  "pause": "5–6 Jahre",
  "saattiefe": "ca. 3–5 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   3,
   4,
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "leicht",
  "anleitung": "Schon ab Mitte März direkt ins Beet säen; Erbsen vertragen leichte Kälte. Höhere Sorten brauchen ein Rankgitter oder Reisig. Wie alle Hülsenfrüchte sammeln sie Stickstoff im Boden – gut für die Folgekultur.",
  "hinweise": [
   "Anbaupause: Für Erbsen nennt die Quelle 5–6 Jahre, für Bohnen nur 3–4 Jahre."
  ],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   150
  ],
  "hoeheHinweis": "Niedrige Sorten um 40–60 cm, hohe Sorten brauchen ein Rankgitter.",
  "einzeln": false
 },
 {
  "id": "moehre",
  "name": "Möhre",
  "auch": [
   "Karotte",
   "Gelbe Rübe"
  ],
  "gruppe": "Gemüse",
  "familie": "dolden",
  "zehrer": "mittel",
  "standort": "sonnig, lockerer Boden ohne frischen Mist",
  "frost": "leicht",
  "abstand": [
   25,
   4
  ],
  "abstandHinweis": "späte Sorten 25 × 7 cm",
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Dunkelkeimer, keimt langsam (2–3 Wochen)",
  "direktsaat": [
   3,
   4,
   5,
   6,
   7
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": [
   2,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Von März bis Juli direkt in Reihen säen; frühe Sorten früh, Lagermöhren ab Mai. Die Saat bis zum Keimen feucht halten und später auf einige Zentimeter vereinzeln. Ein Kulturschutznetz hält die Möhrenfliege fern.",
  "hinweise": [
   "Keimfähigkeit: Bingenheimer Saatgut nennt 4–5 Jahre, andere Quellen nur 1–2 Jahre. Die App warnt deshalb schon ab dem 2. Jahr.",
   "Mischkultur Möhre–Zwiebel: Die BUND-Tabelle nennt sie als gute Nachbarn. Die Bayerische Gartenakademie rät davon ab, weil Nährstoff- und Wasserbedarf nicht zusammenpassen und die Abwehr der Möhren- bzw. Zwiebelfliege nur selten klappt."
  ],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   50
  ],
  "einzeln": false
 },
 {
  "id": "pastinake",
  "name": "Pastinake",
  "gruppe": "Gemüse",
  "familie": "dolden",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, tiefgründiger Boden",
  "frost": "hart",
  "abstand": [
   35,
   20
  ],
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Dunkelkeimer, keimt langsam",
  "direktsaat": [
   3,
   4,
   5
  ],
  "ernte": [
   1,
   2,
   3,
   9,
   10,
   11,
   12
  ],
  "keimJahre": [
   1,
   1
  ],
  "saatgut": null,
  "anleitung": "Von März bis Mai direkt säen, nur frisches Saatgut verwenden. Pastinaken stehen lange im Beet und vertragen Frost; geerntet wird ab Ende September bis ins Frühjahr, nach Frost schmecken sie milder.",
  "hinweise": [
   "Saatgut nur ein Jahr verwenden – es verliert sehr schnell die Keimfähigkeit."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   80
  ],
  "einzeln": false
 },
 {
  "id": "rote_bete",
  "name": "Rote Bete",
  "auch": [
   "Rote Rübe",
   "Rande"
  ],
  "gruppe": "Gemüse",
  "familie": "fuchsschwanz",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   30,
   10
  ],
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   3,
   4,
   5,
   6,
   7
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Von Mitte März bis Anfang Juli direkt säen. Jedes „Samenkorn“ ist ein Knäuel aus mehreren Samen, daher später vereinzeln. Junge Knollen ab Juni ernten, Lagerware vor dem Frost.",
  "hinweise": [
   "Mischkultur Rote Bete–Kartoffel: Die BUND-Tabelle nennt die Kartoffel bei der Roten Bete sowohl als guten als auch als schlechten Nachbarn; in der Zeile der Kartoffel steht sie als schlecht. Die App übernimmt „schlecht“."
  ],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   40
  ],
  "einzeln": false
 },
 {
  "id": "radieschen",
  "name": "Radieschen",
  "auch": [
   "Radies"
  ],
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   10,
   5
  ],
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   2,
   3,
   4,
   5,
   6,
   7,
   8
  ],
  "ernte": [
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Von Mitte Februar (unter Vlies) bis August immer wieder in kleinen Mengen säen. Nach vier bis sechs Wochen ernten. Trockenheit und Hitze machen Radieschen scharf und holzig, deshalb gleichmäßig gießen.",
  "vorziehen": [],
  "pflanzen": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   10,
   20
  ],
  "einzeln": false
 },
 {
  "id": "kartoffel",
  "name": "Kartoffel",
  "gruppe": "Gemüse",
  "familie": "nachtschatten",
  "zehrer": "stark",
  "standort": "sonnig, lockerer Boden",
  "frost": "empfindlich",
  "abstand": [
   60,
   30
  ],
  "saattiefe": "Knollen ca. 10 cm tief legen",
  "keimung": "",
  "pflanzen": [
   4,
   5
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "anleitung": "Pflanzkartoffeln von Mitte April bis Ende Mai legen; vorgekeimt kommen sie schneller. Die Pflanzen mehrmals anhäufeln, damit sich viele Knollen bilden und keine grün werden. Frühkartoffeln ab Ende Juni, Lagerkartoffeln ab August ernten, wenn das Laub abstirbt.",
  "hinweise": [
   "Nährstoffbedarf: In der Tabelle des Südtiroler Bauernbunds fehlt die Kartoffel; andere Quellen ordnen sie einheitlich den Starkzehrern zu."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   50,
   80
  ],
  "einzeln": false
 },
 {
  "id": "kohlrabi",
  "name": "Kohlrabi",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   30,
   25
  ],
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   3,
   4,
   5
  ],
  "direktsaat": [
   6,
   7
  ],
  "pflanzen": [
   4,
   5,
   6
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Ab März vorziehen und ab Ende April pflanzen, im Sommer auch direkt säen. Kohlrabi wächst schnell und ist nach zwei bis drei Monaten erntereif. Gleichmäßig gießen, sonst platzen die Knollen.",
  "auch": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   40
  ],
  "einzeln": false
 },
 {
  "id": "brokkoli",
  "name": "Brokkoli",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich",
  "frost": "leicht",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "ca. 0,5–1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   3,
   4,
   5,
   6,
   7
  ],
  "pflanzen": [
   5,
   6,
   7,
   8
  ],
  "ernte": [
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Von Ende März bis Juli vorziehen und ab Mai pflanzen. Den Hauptkopf ernten, solange die Knospen geschlossen sind; danach treiben oft noch kleine Seitentriebe nach.",
  "auch": [],
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   60,
   90
  ],
  "einzeln": true
 },
 {
  "id": "blumenkohl",
  "name": "Blumenkohl",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   60,
   60
  ],
  "saattiefe": "ca. 0,5–1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   3,
   4,
   5
  ],
  "pflanzen": [
   5,
   6,
   7
  ],
  "ernte": [
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Von Ende März bis Mai vorziehen und von Mitte Mai bis Juli pflanzen. Blumenkohl ist anspruchsvoll: Wassermangel oder Kälteschocks führen zu kleinen Köpfen. Die Blume mit eingeknickten Blättern vor Sonne schützen, damit sie weiß bleibt.",
  "auch": [],
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   50,
   70
  ],
  "einzeln": true
 },
 {
  "id": "kopfkohl",
  "name": "Weiß- und Rotkohl",
  "auch": [
   "Weißkohl",
   "Rotkohl",
   "Blaukraut",
   "Spitzkohl",
   "Wirsing"
  ],
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig, sehr nährstoffreich",
  "frost": "leicht",
  "abstand": [
   60,
   50
  ],
  "abstandHinweis": "frühe Sorten 50 × 50 cm, Lagerkohl 60 × 60 cm",
  "saattiefe": "ca. 0,5–1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   1,
   2,
   3,
   4
  ],
  "pflanzen": [
   4,
   5,
   6
  ],
  "ernte": [
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Je nach Sorte von Januar (frühe Sorten, unter Glas) bis April vorziehen und von April bis Juni pflanzen. Kopfkohl braucht viel Dünger und Wasser. Ein Kulturschutznetz hält Kohlweißling und Kohlfliege fern.",
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   60
  ],
  "einzeln": true
 },
 {
  "id": "gruenkohl",
  "name": "Grünkohl",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig bis halbschattig",
  "frost": "hart",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   5,
   6
  ],
  "pflanzen": [
   6,
   7,
   8
  ],
  "ernte": [
   1,
   2,
   10,
   11,
   12
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Im Mai und Juni vorziehen und bis Anfang August pflanzen – gut als Nachkultur nach Frühkartoffeln oder Erbsen. Geerntet wird ab Ende Oktober den ganzen Winter, die Blätter von unten nach oben.",
  "auch": [],
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   60,
   120
  ],
  "einzeln": true
 },
 {
  "id": "kopfsalat",
  "name": "Kopfsalat",
  "auch": [
   "Salat",
   "Eissalat"
  ],
  "gruppe": "Gemüse",
  "familie": "korb",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   30,
   25
  ],
  "saattiefe": "nur andrücken oder ganz dünn bedecken",
  "keimung": "Lichtkeimer, keimt bei Hitze schlecht",
  "vorziehen": [
   3,
   4,
   5,
   6,
   7
  ],
  "direktsaat": [
   3,
   4,
   5,
   6,
   7
  ],
  "pflanzen": [
   4,
   5,
   6,
   7,
   8
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   2,
   3
  ],
  "saatgut": "leicht",
  "anleitung": "Von März bis Juli alle paar Wochen säen oder pflanzen, dann gibt es laufend Salat. Hoch pflanzen, sodass der Wurzelhals frei bleibt. Nach etwa sechs bis acht Wochen ernten, bevor er schießt.",
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   20,
   30
  ],
  "einzeln": false
 },
 {
  "id": "pfluecksalat",
  "name": "Pflück- und Blattsalat",
  "auch": [
   "Pflücksalat",
   "Eichblattsalat",
   "Lollo",
   "Schnittsalat"
  ],
  "gruppe": "Gemüse",
  "familie": "korb",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   35,
   35
  ],
  "abstandHinweis": "Pflücksalat zum Schneiden auch enger",
  "saattiefe": "nur andrücken oder ganz dünn bedecken",
  "keimung": "Lichtkeimer",
  "vorziehen": [
   3,
   4,
   5,
   6,
   7
  ],
  "direktsaat": [
   3,
   4,
   5,
   6,
   7
  ],
  "pflanzen": [
   4,
   5,
   6,
   7,
   8
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   2,
   3
  ],
  "saatgut": "leicht",
  "anleitung": "Anbau wie Kopfsalat. Von Pflücksalaten erntet man laufend die äußeren Blätter, das Herz wächst weiter – so reicht eine Pflanzung viele Wochen.",
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   20,
   40
  ],
  "einzeln": false
 },
 {
  "id": "feldsalat",
  "name": "Feldsalat",
  "auch": [
   "Rapunzel",
   "Nüsslisalat"
  ],
  "gruppe": "Gemüse",
  "familie": "baldrian",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig",
  "frost": "hart",
  "abstand": [
   15,
   2
  ],
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   7,
   8,
   9
  ],
  "ernte": [
   1,
   2,
   3,
   11,
   12
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "leicht",
  "anleitung": "Von Ende Juli bis Anfang September direkt säen – ideal als Nachkultur auf abgeernteten Beeten. Die Saat feucht halten. Feldsalat ist winterhart und wird von November bis ins Frühjahr geerntet.",
  "vorziehen": [],
  "pflanzen": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   10,
   15
  ],
  "einzeln": false
 },
 {
  "id": "spinat",
  "name": "Spinat",
  "gruppe": "Gemüse",
  "familie": "fuchsschwanz",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig",
  "frost": "hart",
  "abstand": [
   15,
   10
  ],
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   3,
   4,
   8,
   9
  ],
  "ernte": [
   5,
   6,
   9,
   10
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Im Frühjahr (März/April) oder im Spätsommer (August/September) direkt säen. In der Sommerhitze schießt Spinat schnell. Ernten, bevor er Blüten bildet.",
  "hinweise": [
   "Nährstoffbedarf: Der Südtiroler Bauernbund zählt Spinat zu den Schwachzehrern, andere Quellen zu den Mittel- oder sogar Starkzehrern. Die App folgt der Fachquelle."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   20,
   30
  ],
  "einzeln": false
 },
 {
  "id": "mangold",
  "name": "Mangold",
  "auch": [
   "Stielmangold",
   "Blattmangold"
  ],
  "gruppe": "Gemüse",
  "familie": "fuchsschwanz",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   40,
   30
  ],
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   4,
   5
  ],
  "ernte": [
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Von Mitte April bis Mai direkt säen und später vereinzeln. Immer die äußeren Blätter ernten, dann wächst Mangold bis in den Herbst nach.",
  "hinweise": [
   "Ernte: Die BZfE-Tabelle nennt nur Juli und August; da laufend nachgeerntet wird, zeigt die App Juli bis Oktober."
  ],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   60
  ],
  "einzeln": false
 },
 {
  "id": "zwiebel",
  "name": "Zwiebel",
  "auch": [
   "Steckzwiebel",
   "Speisezwiebel"
  ],
  "gruppe": "Gemüse",
  "familie": "lauch",
  "zehrer": "mittel",
  "standort": "sonnig, nicht zu feucht",
  "frost": "leicht",
  "abstand": [
   25,
   10
  ],
  "abstandHinweis": "aus Saat 25 × 8 cm",
  "saattiefe": "Saat ca. 1–2 cm; Steckzwiebeln so tief, dass die Spitze herausschaut",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   3,
   4
  ],
  "pflanzen": [
   3,
   4
  ],
  "ernte": [
   7,
   8,
   9
  ],
  "keimJahre": [
   2,
   3
  ],
  "saatgut": null,
  "anleitung": "Steckzwiebeln im März und April flach stecken, Saatzwiebeln von März bis Anfang April säen. Nicht zu viel düngen und ab Juli nicht mehr gießen. Ernten, wenn das Laub umknickt und vergilbt; danach gut trocknen lassen.",
  "hinweise": [
   "Mischkultur mit Möhre: siehe Hinweis bei der Möhre – die Quellen widersprechen sich."
  ],
  "vorziehen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   30,
   60
  ],
  "einzeln": false
 },
 {
  "id": "knoblauch",
  "name": "Knoblauch",
  "gruppe": "Gemüse",
  "familie": "lauch",
  "zehrer": "mittel",
  "standort": "sonnig, durchlässiger Boden",
  "frost": "hart",
  "abstand": [
   30,
   15
  ],
  "saattiefe": "Zehen ca. 3–5 cm tief",
  "keimung": "",
  "pflanzen": [
   2,
   3,
   4,
   9,
   10
  ],
  "ernte": [
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "anleitung": "Zehen im Herbst (September/Oktober) oder im zeitigen Frühjahr (Februar bis April) mit der Spitze nach oben stecken. Herbstknoblauch bringt meist größere Knollen. Ernten, wenn ein Großteil der Blätter gelb wird – meist ab Juli.",
  "quellen": [
   "knoblauch",
   "sbb",
   "bund"
  ],
  "hinweise": [
   "Die Pflanzzeiten in der BZfE-Tabelle sind für Knoblauch nicht eindeutig lesbar; die App nutzt deshalb die Angaben von Plantura und Samenhaus.",
   "Nährstoffbedarf: Angaben schwanken zwischen Schwach- und Mittelzehrer."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": [],
  "hoehe": [
   50,
   90
  ],
  "einzeln": false
 },
 {
  "id": "lauch",
  "name": "Lauch",
  "auch": [
   "Porree"
  ],
  "gruppe": "Gemüse",
  "familie": "lauch",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich",
  "frost": "hart",
  "abstand": [
   40,
   15
  ],
  "abstandHinweis": "Sommerlauch 25 × 10 cm",
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   1,
   2,
   3,
   4
  ],
  "pflanzen": [
   4,
   5,
   6,
   7,
   8
  ],
  "ernte": [
   1,
   2,
   3,
   4,
   6,
   7,
   8,
   9,
   10,
   11,
   12
  ],
  "keimJahre": [
   2,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Je nach Sorte von Januar bis April vorziehen und von April bis August pflanzen. Tief setzen und später anhäufeln – so entsteht ein langer weißer Schaft. Winterlauch bleibt im Beet und wird bis ins Frühjahr geerntet.",
  "hinweise": [
   "Nährstoffbedarf: In der Tabelle des Südtiroler Bauernbunds fehlt Lauch; andere Quellen nennen ihn Stark- bzw. Mittelstarkzehrer.",
   "Keimfähigkeit: Bingenheimer Saatgut nennt 4–5 Jahre, andere Quellen 2–3 Jahre. Die App warnt ab dem 2. Jahr."
  ],
  "direktsaat": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   50,
   80
  ],
  "einzeln": false
 },
 {
  "id": "schnittlauch",
  "name": "Schnittlauch",
  "gruppe": "Kräuter",
  "familie": "lauch",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, frisch",
  "frost": "hart",
  "abstand": [
   25,
   20
  ],
  "mehrjaehrig": true,
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   3,
   4
  ],
  "direktsaat": [
   4,
   8
  ],
  "pflanzen": [
   3,
   4,
   5,
   9,
   10
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": [
   2,
   3
  ],
  "saatgut": null,
  "anleitung": "Ausdauernde Staude: einmal pflanzen und jahrelang ernten. Regelmäßig handbreit über dem Boden schneiden, dann treibt er immer wieder nach. Alle paar Jahre teilen und neu setzen.",
  "auch": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   20,
   40
  ],
  "einzeln": false
 },
 {
  "id": "sellerie",
  "name": "Sellerie",
  "auch": [
   "Knollensellerie",
   "Stangensellerie"
  ],
  "gruppe": "Gemüse",
  "familie": "dolden",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich, feucht",
  "frost": "leicht",
  "abstand": [
   40,
   40
  ],
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5
  ],
  "ernte": [
   9,
   10,
   11
  ],
  "keimJahre": [
   3,
   4
  ],
  "saatgut": "schwer",
  "anleitung": "Von März bis April warm vorziehen – die feinen Samen nur andrücken. Ende Mai flach pflanzen, die Knolle soll nicht zu tief sitzen. Sellerie braucht viel Wasser und Dünger und steht vier bis fünf Monate im Beet.",
  "direktsaat": [],
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   40,
   70
  ],
  "einzeln": false
 },
 {
  "id": "fenchel",
  "name": "Knollenfenchel",
  "auch": [
   "Fenchel",
   "Gemüsefenchel"
  ],
  "gruppe": "Gemüse",
  "familie": "dolden",
  "zehrer": "stark",
  "standort": "sonnig, warm, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   45,
   20
  ],
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4,
   5,
   6
  ],
  "direktsaat": [
   4,
   5,
   6,
   7
  ],
  "pflanzen": [
   5,
   6,
   7
  ],
  "ernte": [
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   3,
   4
  ],
  "saatgut": "schwer",
  "anleitung": "Frühe Sorten ab April, späte ab Mai säen oder vorziehen. Fenchel neigt bei Trockenheit, Kälte und langen Tagen zum Schießen – Sommeraussaaten gelingen oft besser. Etwa drei Monate nach der Pflanzung ernten.",
  "hinweise": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   50,
   80
  ],
  "einzeln": false
 },
 {
  "id": "mais",
  "name": "Zuckermais",
  "auch": [
   "Mais"
  ],
  "gruppe": "Gemüse",
  "familie": "suessgras",
  "zehrer": "stark",
  "standort": "sonnig, warm",
  "frost": "empfindlich",
  "abstand": [
   40,
   30
  ],
  "saattiefe": "ca. 3–5 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4
  ],
  "direktsaat": [
   5,
   6
  ],
  "pflanzen": [
   5
  ],
  "ernte": [
   9,
   10
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "schwer",
  "anleitung": "Ab April vorziehen oder ab Mitte Mai direkt säen. Mais wird vom Wind bestäubt: lieber mehrere kurze Reihen im Block als eine lange Reihe pflanzen. Kolben ernten, wenn die Fäden braun sind und beim Eindrücken milchiger Saft austritt.",
  "hinweise": [
   "Nährstoffbedarf: In der Tabelle des Südtiroler Bauernbunds fehlt Mais; er gilt allgemein als Starkzehrer.",
   "Mischkultur Mais–Tomate: Die BUND-Tabelle nennt Mais bei der Tomate als guten, die Tomate beim Mais aber als schlechten Nachbarn."
  ],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   150,
   250
  ],
  "einzeln": false
 },
 {
  "id": "basilikum",
  "name": "Basilikum",
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "mittel",
  "standort": "sonnig, warm, geschützt",
  "frost": "empfindlich",
  "abstand": [
   25,
   25
  ],
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer, braucht Wärme",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": null,
  "quellen": [
   "bzfe",
   "bingenheim",
   "hornbach"
  ],
  "anleitung": "Von Mitte März bis Mitte April warm vorziehen und erst ab Mitte Mai ins Freie setzen – Basilikum verträgt keine Kälte. Morgens gießen, nicht über die Blätter. Triebspitzen ernten, dann verzweigt er sich.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine einheitliche Einordnung; Mittelzehrer ist ein Richtwert."
  ],
  "auch": [],
  "direktsaat": [],
  "hoehe": [
   30,
   60
  ],
  "einzeln": false
 },
 {
  "id": "petersilie",
  "name": "Petersilie",
  "gruppe": "Kräuter",
  "familie": "dolden",
  "zehrer": "mittel",
  "standort": "halbschattig bis sonnig, frisch",
  "frost": "hart",
  "abstand": [
   20,
   5
  ],
  "abstandHinweis": "BLE-Kalender: 20 × 15 cm",
  "saattiefe": "ca. 1 cm",
  "keimung": "Dunkelkeimer, keimt sehr langsam (3–4 Wochen)",
  "direktsaat": [
   3,
   4,
   5
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12
  ],
  "keimJahre": [
   2,
   5
  ],
  "saatgut": "mittel",
  "anleitung": "Von März bis Mai direkt säen und Geduld haben – Petersilie keimt sehr langsam. Den Boden bis zum Aufgang feucht halten. Nicht jedes Jahr an dieselbe Stelle säen, Petersilie ist mit sich selbst unverträglich.",
  "hinweise": [
   "Pflanzabstand: BZfE nennt 20 × 5 cm, der BLE-Kalender 20 × 15 cm.",
   "Keimfähigkeit: Bingenheimer Saatgut nennt 4–5 Jahre, andere Quellen 2–3 Jahre. Die App warnt ab dem 2. Jahr.",
   "Nährstoffbedarf: Mittelzehrer ist ein Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": [],
  "quellen": [
   "bzfe",
   "sbb",
   "bingenheim",
   "bund",
   "psr"
  ],
  "hoehe": [
   20,
   40
  ],
  "einzeln": false
 },
 {
  "id": "dill",
  "name": "Dill",
  "gruppe": "Kräuter",
  "familie": "dolden",
  "zehrer": "mittel",
  "standort": "sonnig, nicht zu trocken",
  "frost": "leicht",
  "abstand": [
   30,
   30
  ],
  "saattiefe": "nur dünn bedecken",
  "keimung": "Lichtkeimer",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": [
   3,
   3
  ],
  "saatgut": null,
  "quellen": [
   "bzfe",
   "sbb",
   "samenhaus",
   "bund"
  ],
  "anleitung": "Von April bis August direkt säen, am besten in mehreren Sätzen. Dill lässt sich schlecht verpflanzen. Laufend die Spitzen ernten; die Dolden mit Samen eignen sich zum Einlegen von Gurken.",
  "hinweise": [
   "Keimfähigkeit: Bingenheimer Saatgut nennt Dill nicht; Samenhaus gibt bis zu 3 Jahre an.",
   "Nährstoffbedarf: Mittelzehrer ist ein Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": [],
  "hoehe": [
   60,
   120
  ],
  "einzeln": false
 }
];
const MISCHKULTUR = [{"a": "basilikum", "b": "tomate", "art": "gut", "quelle": "hornbach"}, {"a": "blumenkohl", "b": "brokkoli", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "buschbohne", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "blumenkohl", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "blumenkohl", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "brokkoli", "b": "buschbohne", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "brokkoli", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "brokkoli", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "erbse", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "fenchel", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "gruenkohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kartoffel", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "lauch", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "dill", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "fenchel", "art": "schlecht", "quelle": "bund"}, {"a": "dill", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "kartoffel", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "fenchel", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "gruenkohl", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "lauch", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "stangenbohne", "art": "schlecht", "quelle": "bund", "notiz": "In der BUND-Tabelle bei der Stangenbohne als gut und schlecht genannt, bei der Erbse als schlecht."}, {"a": "erbse", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "fenchel", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "paprika", "art": "schlecht", "quelle": "bund"}, {"a": "fenchel", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "fenchel", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "gruenkohl", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "gruenkohl", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "gruenkohl", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "gruenkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "knoblauch", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kuerbis", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "radieschen", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "tomate", "art": "schlecht", "quelle": "hornbach"}, {"a": "gurke", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "kopfkohl", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "rote_bete", "art": "schlecht", "quelle": "bund", "notiz": "In der BUND-Tabelle bei der Roten Bete als gut und schlecht genannt, bei der Kartoffel als schlecht."}, {"a": "kartoffel", "b": "sellerie", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "kopfkohl", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "knoblauch", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "knoblauch", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "kopfsalat", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "petersilie", "art": "schlecht", "quelle": "bund"}, {"a": "kopfsalat", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "kuerbis", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "rote_bete", "art": "schlecht", "quelle": "bund"}, {"a": "lauch", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "lauch", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "mais", "b": "rote_bete", "art": "schlecht", "quelle": "bund"}, {"a": "mais", "b": "sellerie", "art": "schlecht", "quelle": "bund"}, {"a": "mais", "b": "tomate", "art": "umstritten", "quelle": "bund", "notiz": "BUND-Tabelle widersprüchlich: bei der Tomate guter, beim Mais schlechter Nachbar."}, {"a": "mangold", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "spinat", "art": "schlecht", "quelle": "bund"}, {"a": "moehre", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "zwiebel", "art": "umstritten", "quelle": "bund,lwg", "notiz": "BUND: gute Nachbarn. Bayerische Gartenakademie: nicht empfehlenswert (unterschiedlicher Nährstoff- und Wasserbedarf, Schutz vor Möhren-/Zwiebelfliege klappt nur selten)."}, {"a": "paprika", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "petersilie", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "petersilie", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "rote_bete", "b": "spinat", "art": "schlecht", "quelle": "bund"}, {"a": "rote_bete", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "spinat", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "spinat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "stangenbohne", "b": "zucchini", "art": "gut", "quelle": "bund"}, {"a": "stangenbohne", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "zucchini", "b": "zwiebel", "art": "gut", "quelle": "bund"}];
