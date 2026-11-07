/* Kraut und Rüben – Pflanzendaten (Etappen 1 bis 3)
   Alle Texte in eigenen Worten; Werte aus den unter QUELLEN genannten Fachquellen.
   Diese Datei wird automatisch erzeugt. */
const PFLANZEN_STAND = "2026-11-07";
const QUELLEN = {
 "bzfe": {
  "titel": "aid/BZfE: Tabelle Aussaat- und Pflanzzeiten (Jörg Planer, 2017) – nicht mehr online; Nachfolger ist der BLE-Saat- und Pflanzkalender",
  "url": "https://www.landwirtschaft.de/garten/selbst-anbauen/obst-und-gemuese/saat-und-pflanzkalender"
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
 },
 "plantura_misch": {
  "titel": "Plantura: Mischkultur – Pflanzen mit Schutzwirkung (Tabelle)",
  "url": "https://www.plantura.garden/gartenpraxis/mischkultur/mischkultur"
 },
 "plantura_kraeuter": {
  "titel": "Plantura: Welche Kräuter passen zusammen?",
  "url": "https://www.plantura.garden/kraeuter/kraeuter-anbauen/welche-kraeuter-passen-zusammen"
 },
 "plantura_kombi": {
  "titel": "Plantura: Pflanzenkombinationen für Mischkulturen (u. a. Gurke, Dill, Borretsch)",
  "url": "https://www.plantura.garden/gartenpraxis/mischkultur/pflanzenkombinationen-fuer-mischkulturen"
 },
 "hornbach2": {
  "titel": "Hornbach: Beetnachbarn-Tabelle (Tomate, Kartoffel, Zucchini, Kürbis, Karotte)",
  "url": "https://media.hornbach.lu/cmsm/lu/de-lu/lu-2.pdf"
 },
 "samenhaus_misch": {
  "titel": "Samenhaus: Pflanzenschutz durch Mischkultur (Tagetes, Ringelblume an Erdbeeren)",
  "url": "https://www.samenhaus.de/gartenblog/?p=825"
 },
 "samenhaus2": {
  "titel": "Samenhaus: Saatgut-Keimfähigkeit (Chinakohl, Rettich u. a.)",
  "url": "https://www.samenhaus.de/gartenblog/?p=179"
 },
 "lwg_erdbeere": {
  "titel": "Bayerische Gartenakademie, Merkblatt 3182: Erdbeeren",
  "url": "https://www.lwg.bayern.de/mam/cms06/gartenakademie/dateien/erdbeeren_infoschrift_3182.pdf"
 },
 "plantura_erdbeere": {
  "titel": "Plantura: Erdbeeren pflanzen (Nachbau, Abstand)",
  "url": "https://www.plantura.garden/obst/erdbeeren/erdbeeren-pflanzen"
 },
 "obi_erdbeere": {
  "titel": "OBI Magazin: Erdbeeren (Anbaupause mindestens vier Jahre)",
  "url": "https://www.obi.at/magazin/garten/pflanzen/gemuesepflanzen/erdbeeren"
 },
 "plantura_schalotte": {
  "titel": "Plantura: Schalotten pflanzen und ernten",
  "url": "https://www.plantura.garden/gemuese/schalotten/schalotten-pflanzen"
 },
 "gartenjournal_schalotte": {
  "titel": "Gartenjournal: Schalotten ernten (ab Juli bis August)",
  "url": "https://www.gartenjournal.net/schalotten-ernten"
 },
 "oebz": {
  "titel": "ÖBZ Saatgutvielfalt: Salat und essbare Blüten (Ringelblume, Borretsch ab April ins Freiland)",
  "url": "https://saatgutvielfalt.oebz.de/wp-content/uploads/2022/02/Annette-Hollaender_2022-02-24_3x3_Salat-essbareBlueten.pdf"
 },
 "bingenheim_tagetes": {
  "titel": "Bingenheimer Saatgut: Tagetes (Wuchshöhe, Blütezeit Juni–Oktober)",
  "url": "https://www.bingenheimersaatgut.de/en/organic-seeds/flowers/summer-flowers/french-marigold-b415"
 },
 "kiepenkerl_ringelblume": {
  "titel": "Kiepenkerl (bei OBI): Bio-Ringelblume, Aussaat April–Juni",
  "url": "https://www.obi.at/p/4652723/kiepenkerl-saatgut-bio-ringelblume-oranja"
 },
 "lv_obst": {
  "titel": "Bayerischer Landesverband für Gartenbau: Obstanbau im Hausgarten (Unterlagen, Pflanzabstände, Befruchtung)",
  "url": "https://mv.gartenbauvereine.org/wp-content/uploads/2020/05/Obstanbau-im-Hausgarten.pdf"
 },
 "lwg_unterlage": {
  "titel": "Bayerische Gartenakademie (LWG), Merkblatt 3101: Veredlungsunterlagen von Obstgehölzen",
  "url": "https://www.lwg.bayern.de/mam/cms06/gartenakademie/dateien/3101_-_veredlungsunterlagen_von_obstgehoelzen.pdf"
 },
 "arche_befr": {
  "titel": "Arche Noah: Kurzinfo Veredelung (Befruchtungsverhältnisse der Obstarten)",
  "url": "https://www.arche-noah.at/media/kurzinfo_veredelung.pdf"
 },
 "lv_sommerschnitt": {
  "titel": "Bayerischer Landesverband für Gartenbau: Sommerschnitt von Obstgehölzen",
  "url": "https://mv.gartenbauvereine.org/wp-content/uploads/2020/05/Sommerschnitt.pdf"
 },
 "lwg_steinobst": {
  "titel": "Bayerische Gartenakademie: Steinobst – die besten Sorten (Sauerkirsche, Zwetschge)",
  "url": "https://lwg.bayern.de/mam/cms06/gartenakademie/dateien/3160_a_steinobst_bf.pdf"
 },
 "lwg_pfirsich": {
  "titel": "Bayerische Gartenakademie, Merkblatt 3173: Schnitt von Pfirsich",
  "url": "https://www.lwg.bayern.de/mam/cms06/gartenakademie/dateien/3173-schnitt_pfirsich.pdf"
 },
 "arche_pfirsich": {
  "titel": "Arche Noah: Pfirsich (Fruchten am einjährigen Holz, Kräuselkrankheit)",
  "url": "https://www.arche-noah.at/media/pfirsich.pdf"
 },
 "naturadb_pfirsich": {
  "titel": "NaturaDB: Pfirsich (Wuchsgrößen, Zwergsorten)",
  "url": "https://www.naturadb.de/pflanzen/prunus-persica/"
 },
 "toom_pflanzzeit": {
  "titel": "toom Ratgeber: Obstbaum pflanzen (Herbst Okt.–Nov., Frühjahr März–Apr.)",
  "url": "https://toom.de/selbermachen/garten-freizeit/pflanzen/obstgarten-anlegen/obstbaum-pflanzen/"
 },
 "samenhaus_feige": {
  "titel": "Samenhaus: Feigen im Garten (selbstfruchtende, winterharte Sorten)",
  "url": "https://www.samenhaus.de/gartenblog/?p=9359"
 },
 "zdf_feige": {
  "titel": "ZDFheute: Feigenbaum pflanzen (Reife Ende Juli/August bis Oktober)",
  "url": "https://www.zdfheute.de/ratgeber/feigenbaum-schneiden-pflege-standort-100.html"
 },
 "plantura_physalis": {
  "titel": "Plantura: Physalis anbauen",
  "url": "https://www.plantura.garden/obst/physalis/physalis-anbauen"
 },
 "lv_kuerbis": {
  "titel": "Bayerischer Landesverband für Gartenbau: Vielfalt der Kürbisgewächse (Melone)",
  "url": "https://mv.gartenbauvereine.org/wp-content/uploads/2020/05/VielfaltKuerbisgewaechse.pdf"
 },
 "samenhaus_melone": {
  "titel": "Samenhaus: Melonen anbauen (Abstand 80–100 cm)",
  "url": "https://www.samenhaus.de/gartenblog/?p=301"
 },
 "bund_gd": {
  "titel": "BUND: Gründüngungspflanzen (Tabelle mit Boden, Saatzeit, Saatmenge g/m²)",
  "url": "https://www.bund.net/fileadmin/user_upload_bund/publikationen/naturnahes-gaertnern/Gruenduengungspflanzen-BUND.pdf"
 },
 "vdl_gd": {
  "titel": "Verband der Landwirtschaft Luxemburg (VdL): Düngen durch Gründüngung (Saatzeiten, Pflanzenfamilien)",
  "url": "https://www.vdl.lu/sites/default/files/media/document/5.%20D%C3%BCngen%20durch%20Gr%C3%BCnd%C3%BCngung.pdf"
 },
 "nig_gd": {
  "titel": "Natur im Garten (Niederösterreich): Gründüngung (winterhart oder abfrierend, Mischungen)",
  "url": "https://www.naturimgarten.at/files/content/files/gruenduengung.pdf"
 },
 "oekotest_gd": {
  "titel": "Öko-Test: Gründüngung im Herbst – Wellnesskur für den Boden",
  "url": "https://www.oekotest.de/freizeit-technik/gruenduengung-im-herbst-wellnesskur-fuer-den-boden-so-gehts_14899_1.html"
 },
 "bioaustria_gd": {
  "titel": "Bio Austria: Gründüngungspflanzen (Saatzeiten, Saattiefe)",
  "url": "https://cdn.bio-austria.at/app/uploads/Gr%C3%BCnd%C3%BCngunspflanzen.pdf"
 },
 "dreschflegel_gd": {
  "titel": "Dreschflegel: Infoblatt Gründünger im Hausgarten",
  "url": "https://www.dreschflegel-Saatgut.de/infoblaetter/gruenduenger.pdf"
 },
 "lksh_zf": {
  "titel": "Landwirtschaftskammer Schleswig-Holstein: Zwischenfrüchte – Arten und Anbau (späteste Saattermine)",
  "url": "https://www.lksh.de/fileadmin/user_upload/Zwischenfruechte_Broschuere_Arten_und_Anbau.pdf"
 },
 "renatura_serradella": {
  "titel": "ReNatura: Produktdatenblatt Serradella (Aussaat März–August)",
  "url": "https://thehoneyfactory.de/app/uploads/2025/04/ReNatura_Produktdatenblatt_Serradella.pdf"
 },
 "nabu_staerkung": {
  "titel": "NABU: Pflanzenstärkungsmittel selbst herstellen (Jauche, Brühe, Kaltwasserauszug, Tee)",
  "url": "https://www.nabu.de/umwelt-und-ressourcen/oekologisch-leben/balkon-und-garten/pflege/giftfrei/pflegen/24744.html"
 },
 "testde_jauche": {
  "titel": "Stiftung Warentest: Schädlinge in Haus und Garten (Jauche, Brühe, Tee)",
  "url": "https://www.test.de/Schaedlinge-in-Haus-und-Garten-Das-grosse-Krabbeln-1132521-1132534/"
 },
 "plantura_jauche": {
  "titel": "Plantura: Brennnesseljauche, Brennnesselsud und Ackerschachtelhalmtee",
  "url": "https://www.plantura.garden/gartenpraxis/duenger/brennesseljauche-und-ackerschachtelhalmtee"
 },
 "utopia_jauche": {
  "titel": "Utopia: Brennnesseljauche selber machen (Verdünnung, kein Metallgefäß)",
  "url": "https://utopia.de/ratgeber/brennnesseljauche-selber-machen-anleitung-fuer-den-duenger-und-pflanzenschutz/"
 },
 "gj_jauche": {
  "titel": "Gartenjournal: Brennnesseljauche gegen Mehltau (Mengen frisch und getrocknet)",
  "url": "https://www.gartenjournal.net/brennnesseljauche-gegen-mehltau"
 },
 "samenhaus_jauche": {
  "titel": "Samenhaus: Pflanzenjauchen und Kaltwasserauszüge (Mengen je Pflanze)",
  "url": "https://www.samenhaus.de/gartenblog/?p=1146"
 },
 "oekotest_nessel": {
  "titel": "Öko-Test: Von wegen Unkraut – die Brennnessel ist im Garten nützlich (Wurzelsperre)",
  "url": "https://www.oekotest.de/freizeit-technik/Von-wegen-Unkraut-Die-Brennnessel-ist-im-Garten-nuetzlich_13824_1.html"
 },
 "palmengarten_nessel": {
  "titel": "Palmengarten Frankfurt: Ein Plädoyer für die Brennnessel (Raupenfutter)",
  "url": "https://ojs.ub.uni-frankfurt.de/Palmengarten/index.php/Palmengarten/article/download/2627/2622/3112"
 },
 "lfl_beinwell": {
  "titel": "Bayerische Landesanstalt für Landwirtschaft: Wildkräuter – Beinwell (Pfahlwurzel, Inhaltsstoffe)",
  "url": "https://www.lfl.bayern.de/mam/cms07/iab/dateien/wildkraeuter_beinwell_jutta_kotzi.pdf"
 },
 "apotheken_beinwell": {
  "titel": "Apotheken Umschau: Beinwell (nur äußerlich anwenden)",
  "url": "https://www.apotheken-umschau.de/heilpflanzen/beinwell"
 },
 "utopia_beinwell": {
  "titel": "Utopia: Beinwell – Anwendung, Jauche und Anpflanzen",
  "url": "https://utopia.de/ratgeber/beinwell-anwendung-wirkung-und-wie-du-ihn-anpflanzt_170461/"
 },
 "pabst_kornblume": {
  "titel": "Pabst Keimkraft (bei Hornbach): Kornblume 'Blauer Junge' – Aussaat, Saattiefe, Abstand",
  "url": "https://www.hornbach.de/p/kornblume-blauer-junge-samen-von-pabst-keimkraft/12422801/"
 },
 "quedlinburger_kornblume": {
  "titel": "Quedlinburger (bei toom): Kornblumen gefüllt – Saattiefe 1,5 cm",
  "url": "https://toom.de/p/kornblumen-gefuellt-mischung/4234098"
 },
 "plantura_kornblume": {
  "titel": "Plantura: Kornblume – Sorten, Aussaat, Verwendung",
  "url": "https://www.plantura.garden/blumen-stauden/kornblumen/kornblume-pflanzenportrait"
 },
 "naturadb_malve": {
  "titel": "NaturaDB: Wilde Malve (Malva sylvestris)",
  "url": "https://www.naturadb.de/pflanzen/malva-sylvestris/"
 },
 "plantura_malve": {
  "titel": "Plantura: Malvenarten (Wilde Malve, essbare Blätter und Blüten)",
  "url": "https://www.plantura.garden/blumen-stauden/malve/malvenarten"
 },
 "plantura_lavendel": {
  "titel": "Plantura: Lavendel pflanzen und säen",
  "url": "https://www.plantura.garden/blumen-stauden/lavendel/lavendel-pflanzen"
 },
 "boku_lavendel": {
  "titel": "Universität für Bodenkultur Wien: Lavandula angustifolia (Schnitt)",
  "url": "https://boku.ac.at/fileadmin/data/H03000/H85000/H85200/Pflanzenverwendung_Sabine_Plenk/Stauden_Garten_Grundsortiment/Lavandula_angustifolia.pdf"
 },
 "toom_lavendel": {
  "titel": "toom: Lavandula angustifolia im Topf (Rückschnitt, Verzehrhinweis)",
  "url": "https://toom.de/p/lavandula-angustifolia-12er-set-13-cm-topf/4584875"
 },
 "toom_sonnenblume": {
  "titel": "toom Ratgeber: Sonnenblumen säen und pflegen",
  "url": "https://toom.de/selbermachen/garten-freizeit/pflanzen/ein-mehrjaehrige/sonnenblumen/"
 },
 "hornbach_sonnenblume": {
  "titel": "Hornbach: Sonnenblumen – wann aussäen? (Saattiefe 2–3 cm)",
  "url": "https://www.hornbach.de/projekte/sonnenblumen-saeen/"
 },
 "selbst_sonnenblume": {
  "titel": "selbst.de: Sonnenblumen pflanzen, säen und ernten",
  "url": "https://www.selbst.de/sonnenblumen-so-retten-bambusstaebe-ihre-sonnenblumen-48215.html"
 },
 "selbst_gd": {
  "titel": "selbst.de: Gründüngung mit Gelbsenf (Fruchtfolge mit Kreuzblütlern)",
  "url": "https://selbst.de/gruenduengung-mit-gelbsenf-54764.html"
 },
 "ble": {
  "titel": "BLE/BZL: Saat- und Pflanzkalender, 2. Auflage 2024 (Abstände, Anzucht, Direktsaat, Pflanzung, Ernte)",
  "url": "https://www.landwirtschaft.de/garten/selbst-anbauen/obst-und-gemuese/saat-und-pflanzkalender"
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
 },
 "rosen": {
  "name": "Rosengewächse",
  "pause": null,
  "farbe": "#b83b5e"
 },
 "stachelbeer": {
  "name": "Stachelbeergewächse",
  "pause": null,
  "farbe": "#6d3fa0"
 },
 "heide": {
  "name": "Heidekrautgewächse",
  "pause": null,
  "farbe": "#3d5a9e"
 },
 "knoeterich": {
  "name": "Knöterichgewächse",
  "pause": null,
  "farbe": "#9c2f2f"
 },
 "raublatt": {
  "name": "Raublattgewächse",
  "pause": null,
  "farbe": "#4a78c2"
 },
 "kapuziner": {
  "name": "Kapuzinerkressengewächse",
  "pause": null,
  "farbe": "#e0702a"
 },
 "maulbeer": {
  "name": "Maulbeergewächse",
  "pause": null,
  "farbe": "#7a4b8c"
 },
 "nessel": {
  "name": "Brennnesselgewächse",
  "pause": null,
  "farbe": "#5b7d3a"
 },
 "malven": {
  "name": "Malvengewächse",
  "pause": null,
  "farbe": "#b0558f"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   9,
   10
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   4,
   5,
   6
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "hornbach",
   "bzfe"
  ],
  "hinweise": [
   "Vorziehen: Die alte BZfE-Tabelle nannte für Salatgurken nur die Direktsaat ab Mitte Mai; der BLE-Kalender führt auch die Anzucht im Topf (April bis Juni)."
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
   150,
   150
  ],
  "abstandHinweis": "etwa 2 m² pro Pflanze",
  "saattiefe": "ca. 2–3 cm",
  "keimung": "Dunkelkeimer",
  "vorziehen": [
   4,
   5,
   6
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   5,
   6
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   5,
   6,
   7,
   8,
   9
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   5
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   5,
   6
  ],
  "direktsaat": [
   6,
   7
  ],
  "pflanzen": [
   4,
   5,
   6,
   7
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   7,
   8
  ],
  "pflanzen": [
   5,
   6,
   7,
   8,
   9
  ],
  "ernte": [
   4,
   5,
   6,
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   3,
   4,
   5,
   7,
   8,
   9,
   10,
   11,
   12
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   50,
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   4,
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   20,
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
   "ble",
   "knoblauch",
   "sbb",
   "bund"
  ],
  "hinweise": [
   "Die Pflanzzeiten in der BZfE-Tabelle sind für Knoblauch nicht eindeutig lesbar; die App nutzt deshalb die Angaben von Plantura und Samenhaus.",
   "Nährstoffbedarf: Angaben schwanken zwischen Schwach- und Mittelzehrer.",
   "Der BLE-Kalender zeigt für Knoblauch eine Ernte von Oktober bis Januar. Knoblauch wird aber im Sommer geerntet, wenn das Laub welkt; die App bleibt deshalb bei Juli/August (Plantura, Samenhaus). Vermutlich ein Fehler im Kalender."
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
  "anleitung": "Je nach Sorte von Januar bis April vorziehen und von April bis August pflanzen. Tief setzen und später anhäufeln – so entsteht ein langer weißer Schaft. Winterlauch bleibt im Beet und wird bis ins Frühjahr geerntet.",
  "hinweise": [
   "Nährstoffbedarf: In der Tabelle des Südtiroler Bauernbunds fehlt Lauch; andere Quellen nennen ihn Stark- bzw. Mittelstarkzehrer.",
   "Keimfähigkeit: Bingenheimer Saatgut nennt 4–5 Jahre, andere Quellen 2–3 Jahre. Die App warnt ab dem 2. Jahr."
  ],
  "direktsaat": [],
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   7,
   8,
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   4,
   5,
   6
  ],
  "pflanzen": [
   5
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
  "saatgut": "schwer",
  "anleitung": "Ab April vorziehen oder ab Mitte Mai direkt säen. Mais wird vom Wind bestäubt: lieber mehrere kurze Reihen im Block als eine lange Reihe pflanzen. Kolben ernten, wenn die Fäden braun sind und beim Eindrücken milchiger Saft austritt.",
  "hinweise": [
   "Nährstoffbedarf: In der Tabelle des Südtiroler Bauernbunds fehlt Mais; er gilt allgemein als Starkzehrer.",
   "Mischkultur Mais–Tomate: Die BUND-Tabelle nennt Mais bei der Tomate als guten, die Tomate beim Mais aber als schlechten Nachbarn."
  ],
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   "ble",
   "bingenheim",
   "hornbach",
   "bzfe"
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
   15
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
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
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
   9,
   10
  ],
  "keimJahre": [
   3,
   3
  ],
  "saatgut": null,
  "quellen": [
   "ble",
   "sbb",
   "samenhaus",
   "bund",
   "bzfe"
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
 },
 {
  "id": "rucola",
  "name": "Rucola",
  "auch": [
   "Rauke",
   "Salatrauke"
  ],
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   15,
   0.5
  ],
  "abstandHinweis": "sehr dicht gesät; die Stückzahl ist nur grob",
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "keimt schnell",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   20,
   40
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "bzfe"
  ],
  "anleitung": "Von April bis September in Reihen säen, am besten alle drei bis vier Wochen ein neuer Satz. Nach vier bis sechs Wochen die Blätter schneiden, sie wachsen nach. Im Hochsommer blüht Rucola schnell und wird scharf; Vlies und feuchter Boden halten Erdflöhe fern.",
  "hinweise": [
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "endivie",
  "name": "Endivie",
  "auch": [
   "Frisée",
   "Escariol",
   "Winterendivie"
  ],
  "gruppe": "Gemüse",
  "familie": "korb",
  "zehrer": "mittel",
  "standort": "sonnig",
  "frost": "leicht",
  "abstand": [
   35,
   30
  ],
  "saattiefe": "ca. 0,5 cm (Richtwert)",
  "keimung": "",
  "vorziehen": [
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
   10,
   11
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": null,
  "hoehe": [
   30,
   40
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "bzfe"
  ],
  "anleitung": "Für die Herbsternte ab Mitte Juni vorziehen und im Juli oder August pflanzen, nicht zu tief setzen. Gleichmäßig feucht halten. Wer mildere Blätter möchte, bindet die Köpfe ein bis zwei Wochen vor der Ernte zusammen (Bleichen). Verträgt leichten Frost.",
  "hinweise": [
   "BZfE unterscheidet Sommerendivie (35 × 30 cm, Ernte Juli–August) und Herbstendivie (40 × 30 cm, Ernte September–November). Hier sind beide zusammengefasst.",
   "Nachbarn: Die BUND-Tabelle nennt „Bohnen“ als schlechte, Stangenbohnen aber als gute Nachbarn. Hier gilt deshalb nur die Buschbohne als ungünstig."
  ],
  "direktsaat": []
 },
 {
  "id": "chinakohl",
  "name": "Chinakohl",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   40,
   30
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "vorziehen": [
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
  "direktsaat": [
   7,
   8
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
   6
  ],
  "saatgut": null,
  "hoehe": [
   30,
   50
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "samenhaus",
   "samenhaus2",
   "bund",
   "bzfe"
  ],
  "anleitung": "Am sichersten ab Mitte Juli direkt säen oder vorgezogen pflanzen. Im Frühjahr gesät, bildet Chinakohl bei langen Tagen leicht Blüten statt Köpfen (er „schießt“). Gleichmäßig gießen und gegen Erdflöhe mit Vlies abdecken.",
  "hinweise": [
   "Keimfähigkeit: Samenhaus nennt an einer Stelle bis zu 5, an anderer 4–6 Jahre.",
   "Nachbarn: Die BUND-Tabelle führt Chinakohl nicht einzeln; die Angaben zu „Kohlgewächsen“ sind übernommen."
  ],
  "auch": []
 },
 {
  "id": "rosenkohl",
  "name": "Rosenkohl",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreicher, fester Boden",
  "frost": "hart",
  "abstand": [
   60,
   60
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   4,
   5,
   6
  ],
  "ernte": [
   1,
   2,
   10,
   11,
   12
  ],
  "keimJahre": [
   5,
   5
  ],
  "saatgut": "schwer",
  "hoehe": [
   60,
   100
  ],
  "einzeln": true,
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
  ],
  "anleitung": "Mitte März bis Mitte April vorziehen und ab Ende April bis Juni pflanzen. Rosenkohl steht lange im Beet und braucht viel Nährstoffe. Die Röschen werden von unten nach oben geerntet, von Oktober bis in den Winter; Frost macht sie milder.",
  "hinweise": [
   "Nachbarn: Die BUND-Tabelle führt Rosenkohl nicht einzeln; die Angaben zu „Kohlgewächsen“ sind übernommen."
  ],
  "auch": [],
  "direktsaat": []
 },
 {
  "id": "wirsing",
  "name": "Wirsing",
  "auch": [
   "Welschkohl"
  ],
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "stark",
  "standort": "sonnig, nährstoffreich",
  "frost": "hart",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "vorziehen": [
   2,
   3,
   4,
   5
  ],
  "pflanzen": [
   3,
   4,
   5,
   6,
   7
  ],
  "direktsaat": [
   3,
   4
  ],
  "ernte": [
   1,
   2,
   3,
   6,
   7,
   8,
   9,
   10,
   11,
   12
  ],
  "keimJahre": [
   4,
   5
  ],
  "saatgut": "schwer",
  "hoehe": [
   30,
   50
  ],
  "einzeln": true,
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "psr",
   "bzfe"
  ],
  "anleitung": "Je nach Sorte gibt es frühen Wirsing (Ernte Juni/Juli), Herbstwirsing (August bis Dezember) und späten Wirsing, der bis ins Frühjahr im Beet stehen bleibt. Vorziehen, mit 50–60 cm Abstand pflanzen und gleichmäßig feucht halten.",
  "hinweise": [
   "BZfE nennt drei Sätze (früh, Herbst, spät) mit 50 × 50 bis 60 × 60 cm; die Monate hier fassen sie zusammen.",
   "Keimfähigkeit: Bingenheimer Saatgut nennt nur allgemein „Kohl“ (4–5 Jahre)."
  ]
 },
 {
  "id": "rettich",
  "name": "Rettich",
  "gruppe": "Gemüse",
  "familie": "kreuz",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, tiefgründig, gleichmäßig feucht",
  "frost": "leicht",
  "abstand": [
   30,
   15
  ],
  "saattiefe": "ca. 1–2 cm (Richtwert)",
  "keimung": "",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8
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
   4,
   5
  ],
  "saatgut": "mittel",
  "hoehe": [
   20,
   40
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "samenhaus",
   "samenhaus2",
   "bund",
   "psr",
   "bzfe"
  ],
  "anleitung": "Sommerrettich von April bis Mitte Juni, Winterrettich von Mitte Juni bis Mitte August direkt säen. Gleichmäßig feucht halten, sonst wird er holzig und sehr scharf. Winterrettich vor stärkerem Frost ernten und kühl lagern.",
  "hinweise": [
   "Keimfähigkeit: Samenhaus nennt an einer Stelle bis zu 5, an anderer 3–4 Jahre.",
   "Nährstoffbedarf: In den genutzten Fachquellen nicht eingestuft; der Wert ist ein Richtwert.",
   "Nachbarn: Die BUND-Tabelle fasst „Radieschen/Rettich“ in einer Zeile zusammen; die Angaben gelten deshalb für beide."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "puffbohne",
  "name": "Puffbohne",
  "auch": [
   "Dicke Bohne",
   "Ackerbohne",
   "Saubohne"
  ],
  "gruppe": "Gemüse",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, auch schwerer Boden",
  "frost": "leicht",
  "abstand": [
   60,
   12
  ],
  "saattiefe": "ca. 5 cm (Richtwert)",
  "keimung": "keimt schon bei kühlem Boden",
  "direktsaat": [
   2,
   3,
   4
  ],
  "ernte": [
   6,
   7
  ],
  "keimJahre": [
   5,
   5
  ],
  "keimBis": true,
  "saatgut": null,
  "hoehe": [
   80,
   120
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "samenhaus",
   "bzfe"
  ],
  "anleitung": "Sehr früh direkt säen, ab Mitte Februar bis Anfang April – Puffbohnen vertragen Kälte. Bei Blattläusen die Triebspitzen auskneifen. Ernten, solange die Kerne noch grün und weich sind.",
  "hinweise": [
   "Familie, Zehrer und Anbaupause: Das SBB-Merkblatt nennt die Puffbohne nicht. Als Hülsenfrüchtler gilt sie üblicherweise als Schwachzehrer; die Anbaupause der Familie (3–6 Jahre) ist übernommen.",
   "Nachbarn: In den genutzten Fachquellen keine Angaben."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "fruehlingszwiebel",
  "name": "Frühlingszwiebel",
  "auch": [
   "Lauchzwiebel",
   "Bundzwiebel"
  ],
  "gruppe": "Gemüse",
  "familie": "lauch",
  "zehrer": "mittel",
  "standort": "sonnig",
  "frost": "leicht",
  "abstand": [
   30,
   3
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "direktsaat": [
   3,
   4,
   5,
   6,
   7,
   8
  ],
  "pflanzen": [
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "ernte": [
   3,
   4,
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
  "saatgut": null,
  "hoehe": [
   30,
   50
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "bingenheim",
   "bund",
   "bzfe"
  ],
  "anleitung": "Von Anfang März bis Anfang April dicht in Reihen säen oder ab Mitte April Jungpflanzen setzen. Geerntet wird frisch mit Laub, sobald die Schäfte bleistift- bis daumendick sind, von Juni bis in den Herbst.",
  "hinweise": [
   "Die BZfE-Tabelle führt sie als „Zwiebeln, Bund-“.",
   "Zehrer, Anbaupause, Keimfähigkeit und Nachbarn: Die Quellen nennen nur allgemein Zwiebeln; die Werte sind von der Küchenzwiebel übernommen."
  ],
  "vorziehen": [
   3,
   4,
   5,
   6,
   7,
   8
  ]
 },
 {
  "id": "schalotte",
  "name": "Schalotte",
  "gruppe": "Gemüse",
  "familie": "lauch",
  "zehrer": "mittel",
  "standort": "sonnig, warm, durchlässig",
  "frost": "leicht",
  "abstand": [
   25,
   15
  ],
  "abstandHinweis": "Plantura: 15–20 cm in der Reihe; Reihen 25–30 cm",
  "saattiefe": "so stecken, dass die Spitze knapp herausschaut",
  "keimung": "",
  "pflanzen": [
   3,
   4
  ],
  "ernte": [
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   30,
   50
  ],
  "einzeln": false,
  "quellen": [
   "plantura_schalotte",
   "gartenjournal_schalotte",
   "sbb",
   "bund"
  ],
  "anleitung": "Im März oder April die Zwiebelchen mit der Spitze nach oben in lockeren Boden stecken. Nur bei großer Trockenheit gießen, kurz vor der Ernte gar nicht. Aus jeder gesteckten Schalotte wächst ein Nest aus mehreren neuen. Ernten, wenn das Laub welkt, und vor dem Lagern gut trocknen lassen.",
  "hinweise": [
   "Erntebeginn: Plantura nennt August (90–120 Tage nach dem Stecken), Gartenjournal schon Juli.",
   "Zehrer, Anbaupause und Nachbarn: Die Quellen nennen nur allgemein Zwiebeln; die Werte sind von der Küchenzwiebel übernommen."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "rhabarber",
  "name": "Rhabarber",
  "gruppe": "Gemüse",
  "familie": "knoeterich",
  "zehrer": "stark",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, nährstoffreich, feucht",
  "frost": "hart",
  "abstand": [
   120,
   120
  ],
  "saattiefe": "–",
  "keimung": "wird meist durch Teilung vermehrt",
  "pflanzen": [
   3,
   10,
   11
  ],
  "ernte": [
   4,
   5,
   6
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   60,
   100
  ],
  "hoeheHinweis": "Blattstiele und Blätter; Blütenstände werden über 2 m hoch und sollten früh entfernt werden.",
  "einzeln": true,
  "quellen": [
   "ble",
   "bund",
   "bzfe"
  ],
  "anleitung": "Im Oktober/November oder im März pflanzen und im ersten Jahr nicht ernten. Ab dem zweiten Jahr von Ende April bis Ende Juni die Stiele abdrehen, nie mehr als etwa die Hälfte. Danach die Pflanze in Ruhe lassen, damit sie Kraft fürs nächste Jahr sammelt.",
  "hinweise": [
   "Nährstoffbedarf: In den genutzten Fachquellen nicht eingestuft; der Wert ist ein Richtwert. Rhabarber gilt allgemein als Starkzehrer.",
   "Rhabarber bleibt viele Jahre am selben Platz; eine Fruchtfolge entfällt."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "topinambur",
  "name": "Topinambur",
  "auch": [
   "Erdbirne"
  ],
  "gruppe": "Gemüse",
  "familie": "korb",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, anspruchslos",
  "frost": "hart",
  "abstand": [
   60,
   40
  ],
  "saattiefe": "Knollen ca. 10 cm tief legen (Richtwert)",
  "keimung": "",
  "pflanzen": [
   3,
   4,
   10,
   11
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
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   200,
   300
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "bzfe"
  ],
  "anleitung": "Knollen im März/April oder Oktober/November legen. Topinambur wird zwei bis drei Meter hoch und breitet sich stark aus – jede vergessene Knolle treibt wieder aus. Am besten einen festen Platz am Rand geben oder eine Wurzelsperre setzen. Geerntet wird ab September bis zum Frühjahr, wann immer der Boden offen ist.",
  "hinweise": [
   "Nährstoffbedarf: In den genutzten Fachquellen nicht eingestuft; der Wert ist ein Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "thymian",
  "name": "Thymian",
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "sonnig, trocken, durchlässig",
  "frost": "hart",
  "abstand": [
   20,
   20
  ],
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8
  ],
  "pflanzen": [
   4,
   5,
   9,
   10
  ],
  "ernte": [
   5,
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   10,
   30
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "plantura_misch",
   "bzfe"
  ],
  "anleitung": "Am einfachsten als Jungpflanze im Frühjahr oder Herbst setzen. Thymian mag es mager und trocken; Staunässe im Winter schadet ihm mehr als Kälte. Nach der Blüte leicht zurückschneiden, damit er nicht verholzt.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "auch": [],
  "vorziehen": []
 },
 {
  "id": "salbei",
  "name": "Salbei",
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "sonnig, warm, durchlässig",
  "frost": "hart",
  "abstand": [
   30,
   40
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "vorziehen": [
   4,
   5
  ],
  "pflanzen": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "direktsaat": [
   5,
   6,
   7
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   40,
   70
  ],
  "einzeln": true,
  "quellen": [
   "ble",
   "bund",
   "plantura_misch",
   "bzfe"
  ],
  "anleitung": "Vorziehen oder als Jungpflanze ab Mitte Mai setzen. Salbei braucht Sonne und durchlässigen Boden. Im Frühjahr kräftig zurückschneiden, aber nicht ins alte Holz. Vor Winternässe schützen.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "auch": []
 },
 {
  "id": "rosmarin",
  "name": "Rosmarin",
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "vollsonnig, warm, geschützt, durchlässig",
  "frost": "leicht",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "–",
  "keimung": "meist als Jungpflanze gekauft",
  "pflanzen": [
   4,
   5,
   6,
   7
  ],
  "ernte": [
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   100
  ],
  "einzeln": true,
  "quellen": [
   "ble",
   "plantura_misch",
   "hornbach2",
   "bzfe"
  ],
  "anleitung": "Ab Ende April an einen sonnigen, geschützten Platz pflanzen. Rosmarin ist nur bedingt winterhart: In rauen Lagen besser im Kübel ziehen und hell und kühl, aber frostfrei überwintern. Wenig gießen.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben.",
   "Winterhärte: Je nach Sorte und Lage unterschiedlich; hier vorsichtig als „verträgt leichten Frost“ eingestuft."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "oregano",
  "name": "Oregano",
  "auch": [
   "Dost",
   "Wilder Majoran"
  ],
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "sonnig, trocken",
  "frost": "hart",
  "abstand": [
   20,
   15
  ],
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer",
  "vorziehen": [
   2,
   3
  ],
  "pflanzen": [
   5,
   6
  ],
  "direktsaat": [
   4,
   5
  ],
  "ernte": [
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   60
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "bzfe"
  ],
  "anleitung": "Im Februar/März vorziehen oder ab April direkt säen; die feinen Samen nur andrücken. Zur Blütezeit hat Oregano das meiste Aroma, dann zum Trocknen ernten. Breitet sich mit der Zeit aus.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ]
 },
 {
  "id": "minze",
  "name": "Minze",
  "auch": [
   "Pfefferminze"
  ],
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "halbschattig, feucht",
  "frost": "hart",
  "abstand": [
   30,
   30
  ],
  "saattiefe": "–",
  "keimung": "Pfefferminze wird über Ausläufer vermehrt",
  "pflanzen": [
   4,
   5,
   9,
   10
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   30,
   80
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "bund",
   "plantura_kraeuter",
   "bzfe"
  ],
  "anleitung": "Im Frühjahr oder Herbst pflanzen, am besten mit Wurzelsperre oder in einen eingegrabenen Topf – Minze wuchert stark über Ausläufer. Laufend die Triebspitzen ernten. Alle paar Jahre an einen neuen Platz setzen.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "zitronenmelisse",
  "name": "Zitronenmelisse",
  "auch": [
   "Melisse"
  ],
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig",
  "frost": "hart",
  "abstand": [
   30,
   30
  ],
  "saattiefe": "nicht bedecken",
  "keimung": "Lichtkeimer",
  "pflanzen": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   80
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "plantura_kraeuter",
   "bzfe"
  ],
  "anleitung": "Als Jungpflanze ab Mitte Mai setzen. Vor der Blüte ernten, dann ist das Aroma am besten. Regelmäßig zurückschneiden; Melisse sät sich gern selbst aus.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "bohnenkraut",
  "name": "Bohnenkraut",
  "auch": [
   "Pfefferkraut"
  ],
  "gruppe": "Kräuter",
  "familie": "lippen",
  "zehrer": "schwach",
  "standort": "sonnig, warm",
  "frost": "empfindlich",
  "abstand": [
   25,
   25
  ],
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "direktsaat": [
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   20,
   40
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "plantura_misch",
   "bzfe"
  ],
  "anleitung": "Einjähriges Sommer-Bohnenkraut ab März unter Glas vorziehen oder ab Mitte Mai direkt säen. Gern zwischen die Bohnen setzen. Kurz vor der Blüte ernten und zum Trocknen bündeln.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben.",
   "Gemeint ist das einjährige Sommer-Bohnenkraut; das mehrjährige Bergbohnenkraut ist winterhart."
  ]
 },
 {
  "id": "koriander",
  "name": "Koriander",
  "gruppe": "Kräuter",
  "familie": "dolden",
  "zehrer": "mittel",
  "standort": "sonnig",
  "frost": "leicht",
  "abstand": [
   30,
   15
  ],
  "saattiefe": "ca. 1–2 cm (Richtwert)",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   4,
   5
  ],
  "ernte": [
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   40,
   60
  ],
  "einzeln": false,
  "quellen": [
   "ble",
   "sbb",
   "bund",
   "bzfe"
  ],
  "anleitung": "Im April/Mai direkt säen, Koriander lässt sich schlecht verpflanzen. Die Blätter nach etwa sechs Wochen ernten, bevor er blüht; im Hochsommer schießt er schnell. Die Samen reifen im Juli und August.",
  "hinweise": [
   "Ernte: Die BZfE-Tabelle nennt Mitte Juli bis Ende August (Samen); Blätter gibt es schon früher.",
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "kerbel",
  "name": "Kerbel",
  "gruppe": "Kräuter",
  "familie": "dolden",
  "zehrer": "schwach",
  "standort": "halbschattig, feucht",
  "frost": "leicht",
  "abstand": [
   10,
   1
  ],
  "abstandHinweis": "dicht gesät; die Stückzahl ist nur grob",
  "saattiefe": "nicht bedecken, nur andrücken",
  "keimung": "Lichtkeimer",
  "direktsaat": [
   3,
   4,
   5,
   6,
   7
  ],
  "ernte": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": [
   4,
   4
  ],
  "keimBis": true,
  "saatgut": null,
  "hoehe": [
   30,
   60
  ],
  "einzeln": false,
  "quellen": [
   "bzfe",
   "samenhaus",
   "plantura_misch",
   "plantura_kraeuter"
  ],
  "anleitung": "Von Mitte März bis Ende Juli alle paar Wochen direkt säen. Kerbel mag es halbschattig und feucht, in der Sonne blüht er schnell. Nach vier bis sechs Wochen die Blätter schneiden.",
  "hinweise": [
   "Ernte: BZfE nennt „ab Mitte April“ ohne Ende; hier bis Oktober angenommen.",
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "liebstoeckel",
  "name": "Liebstöckel",
  "auch": [
   "Maggikraut"
  ],
  "gruppe": "Kräuter",
  "familie": "dolden",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, nährstoffreich, feucht",
  "frost": "hart",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "–",
  "keimung": "meist als Jungpflanze gekauft",
  "pflanzen": [
   3,
   4,
   9,
   10
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   100,
   200
  ],
  "einzeln": true,
  "quellen": [
   "bzfe"
  ],
  "anleitung": "Im Frühjahr oder Herbst eine einzelne Pflanze setzen – eine reicht für die Küche, sie wird mit den Jahren sehr groß. Laufend junge Blätter ernten; stark würzig, sparsam verwenden.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "borretsch",
  "name": "Borretsch",
  "auch": [
   "Gurkenkraut"
  ],
  "gruppe": "Kräuter",
  "familie": "raublatt",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   40,
   30
  ],
  "abstandHinweis": "keine Angabe in der BZfE-Tabelle; Richtwert",
  "saattiefe": "ca. 1–2 cm (Richtwert)",
  "keimung": "Dunkelkeimer",
  "direktsaat": [
   4,
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
   3,
   3
  ],
  "keimBis": true,
  "saatgut": null,
  "hoehe": [
   50,
   80
  ],
  "einzeln": false,
  "quellen": [
   "oebz",
   "samenhaus",
   "plantura_kombi"
  ],
  "anleitung": "Ab April direkt ins Beet säen. Borretsch wird ausladend und sät sich gern selbst aus. Junge Blätter und die blauen Blüten sind essbar; die Blüten locken viele Bienen und Hummeln an – gut neben Gurken und Zucchini.",
  "hinweise": [
   "Nährstoffbedarf: Für Kräuter gibt es in den genutzten Fachquellen keine Einordnung; der Wert ist ein Richtwert.",
   "Zeiten: Borretsch steht nicht in der BZfE-Tabelle; Aussaat ab April nach ÖBZ Saatgutvielfalt."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "ringelblume",
  "name": "Ringelblume",
  "auch": [
   "Calendula"
  ],
  "gruppe": "Blumen",
  "familie": "korb",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig",
  "frost": "leicht",
  "abstand": [
   25,
   20
  ],
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "",
  "direktsaat": [
   3,
   4,
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   60
  ],
  "einzeln": false,
  "quellen": [
   "oebz",
   "kiepenkerl_ringelblume",
   "plantura_misch",
   "hornbach2",
   "samenhaus_misch"
  ],
  "anleitung": "Ab März bis Juni direkt säen und auf etwa 20–25 cm vereinzeln. Blüht von Juni bis in den Herbst; Verblühtes abschneiden verlängert die Blüte. Die Blütenblätter sind essbar. Sät sich gern selbst aus.",
  "hinweise": [
   "„Ernten“ meint hier die Blüten (Juni bis Oktober).",
   "Aussaatzeit: Die Angaben schwanken – Kiepenkerl nennt April bis Juni, andere Saatgutanbieter März bis August.",
   "Schutzwirkung: Plantura nennt die Ringelblume gegen Nematoden bei Kartoffeln und Kohl; belegt ist das eher als Erfahrungswert.",
   "Nährstoffbedarf: Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "tagetes",
  "name": "Tagetes",
  "auch": [
   "Studentenblume",
   "Samtblume"
  ],
  "gruppe": "Blumen",
  "familie": "korb",
  "zehrer": "schwach",
  "standort": "sonnig",
  "frost": "empfindlich",
  "abstand": [
   30,
   25
  ],
  "abstandHinweis": "Richtwert; je nach Sorte",
  "saattiefe": "dünn bedecken (Richtwert)",
  "keimung": "",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5,
   6
  ],
  "direktsaat": [
   5,
   6
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   80
  ],
  "hoeheHinweis": "Kleinblütige Sorten (Tagetes tenuifolia) 30–40 cm, hohe Sorten (Tagetes erecta) um 80 cm.",
  "einzeln": false,
  "quellen": [
   "bingenheim_tagetes",
   "plantura_misch",
   "hornbach2",
   "samenhaus_misch"
  ],
  "anleitung": "Im März/April vorziehen oder nach den Eisheiligen direkt säen; Tagetes ist frostempfindlich. Blüht von Juni bis Oktober. Wird gern zwischen Gemüse gesetzt – die Wurzeln sollen Nematoden im Boden zurückdrängen. Schnecken fressen Tagetes gern, sie kann deshalb auch als Ablenkung dienen.",
  "hinweise": [
   "„Ernten“ meint hier die Blüte.",
   "Schutzwirkung gegen Nematoden: Plantura und Samenhaus nennen sie; die Wirkung ist vor allem bei dichter Aussaat von Tagetes patula beschrieben.",
   "Nährstoffbedarf: Richtwert.",
   "Keimfähigkeit: In den genutzten Quellen nicht angegeben."
  ]
 },
 {
  "id": "kapuzinerkresse",
  "name": "Kapuzinerkresse",
  "gruppe": "Blumen",
  "familie": "kapuziner",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig, eher mager",
  "frost": "empfindlich",
  "abstand": [
   20,
   10
  ],
  "saattiefe": "ca. 2 cm (Richtwert)",
  "keimung": "große Samen, keimen zuverlässig",
  "direktsaat": [
   4,
   5,
   6
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
   5,
   5
  ],
  "keimBis": true,
  "saatgut": "leicht",
  "hoehe": [
   20,
   30
  ],
  "hoeheHinweis": "Rankende Sorten werden mehrere Meter lang.",
  "einzeln": false,
  "quellen": [
   "bzfe",
   "samenhaus",
   "bund",
   "hornbach2"
  ],
  "anleitung": "Ab April direkt säen, frostempfindlich. Auf magerem Boden blüht sie reicher, auf fettem bildet sie vor allem Blätter. Blätter, Blüten und junge Samen sind essbar und schmecken kresseartig scharf.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert.",
   "Samen selbst gewinnen: Die großen Samen lassen sich leicht sammeln; eine Einstufung in den genutzten Samenbau-Quellen fehlt."
  ],
  "auch": [],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "erdbeere",
  "name": "Erdbeere",
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "pause": "3–4 Jahre",
  "standort": "sonnig, humos, keine Staunässe",
  "frost": "hart",
  "abstand": [
   90,
   30
  ],
  "abstandHinweis": "Plantura: im Hausgarten 3-reihige Beete mit 40–45 cm Reihenabstand",
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   7,
   8
  ],
  "ernte": [
   6,
   7
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   15,
   30
  ],
  "einzeln": true,
  "quellen": [
   "ble",
   "lwg_erdbeere",
   "plantura_erdbeere",
   "obi_erdbeere",
   "bund",
   "bzfe"
  ],
  "anleitung": "Im Juli und August pflanzen, dann tragen die Pflanzen schon im nächsten Juni. Das Herz der Pflanze darf nicht mit Erde bedeckt sein. Nach etwa zwei bis drei Jahren lässt der Ertrag nach; dann ein neues Beet an anderer Stelle anlegen.",
  "hinweise": [
   "Standzeit: Die Bayerische Gartenakademie empfiehlt, ein Erdbeerbeet nur zwei Jahre zu nutzen; Plantura nennt etwa drei Jahre.",
   "Anbaupause: Plantura nennt 3–4 Jahre, OBI mindestens 4 Jahre ohne Erdbeeren an derselben Stelle.",
   "Abstand: BZfE nennt 90 × 30 cm, Plantura für Beete 40–45 cm zwischen den Reihen.",
   "Nachbarn: Die BUND-Tabelle nennt bei den Erdbeeren Kohl als schlechten, bei den Kohlgewächsen Erdbeeren als guten Nachbarn. Hier gilt die vorsichtigere Angabe (schlecht)."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "himbeere",
  "name": "Himbeere",
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, humos, locker, keine Staunässe",
  "frost": "hart",
  "abstand": [
   150,
   40
  ],
  "abstandHinweis": "Herbsthimbeeren: 200 × 40 cm",
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   5,
   6,
   10,
   11
  ],
  "ernte": [
   6,
   7,
   8,
   9,
   10,
   11
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   150,
   200
  ],
  "einzeln": true,
  "quellen": [
   "bzfe",
   "bund"
  ],
  "anleitung": "Im Oktober/November oder Mai/Juni flach pflanzen und ein Gerüst mit Drähten bauen. Sommerhimbeeren tragen am vorjährigen Holz (Ernte Mitte Juni bis Ende Juli), Herbsthimbeeren an den neuen Ruten (August bis November) – diese im Winter bodennah abschneiden.",
  "hinweise": [
   "Die Erntemonate fassen Sommer- und Herbsthimbeeren zusammen.",
   "Nährstoffbedarf: Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "brombeere",
  "name": "Brombeere",
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig, warm",
  "frost": "hart",
  "abstand": [
   200,
   200
  ],
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   4,
   5,
   10,
   11
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   150,
   300
  ],
  "einzeln": true,
  "quellen": [
   "bzfe"
  ],
  "anleitung": "Im Frühjahr oder Herbst an ein Spalier oder einen Zaun pflanzen. Brombeeren tragen an den Ruten des Vorjahres; abgeerntete Ruten nach der Ernte bodennah entfernen und die neuen anbinden. Dornenlose Sorten erleichtern die Arbeit.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "johannisbeere",
  "name": "Johannisbeere",
  "auch": [
   "Ribisel"
  ],
  "gruppe": "Obst",
  "familie": "stachelbeer",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, humos",
  "frost": "hart",
  "abstand": [
   150,
   100
  ],
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   100,
   150
  ],
  "einzeln": true,
  "quellen": [
   "bzfe"
  ],
  "anleitung": "Im Herbst oder zeitigen Frühjahr etwas tiefer pflanzen als im Topf. Rote und Weiße tragen am zwei- bis dreijährigen Holz, Schwarze vor allem an den einjährigen Trieben; alte Triebe regelmäßig bodennah herausschneiden.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "stachelbeere",
  "name": "Stachelbeere",
  "gruppe": "Obst",
  "familie": "stachelbeer",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, luftig",
  "frost": "hart",
  "abstand": [
   200,
   150
  ],
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   10,
   11
  ],
  "ernte": [
   6,
   7
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   100,
   150
  ],
  "einzeln": true,
  "quellen": [
   "bzfe"
  ],
  "anleitung": "Im Oktober/November pflanzen. Einen luftigen Strauch mit acht bis zehn Haupttrieben aufbauen; ein lichter Schnitt beugt dem Mehltau vor. Mehltau-widerstandsfähige Sorten wählen.",
  "hinweise": [
   "Abstand: Die BZfE-Tabelle nennt 150 × 200 cm (Reihe × Pflanze). Hier gespeichert als 2 m zwischen den Reihen und 1,5 m zwischen den Sträuchern, damit der Platzkreis nicht zu groß wird.",
   "Nährstoffbedarf: Richtwert."
  ],
  "auch": [],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "heidelbeere",
  "name": "Heidelbeere",
  "auch": [
   "Kulturheidelbeere",
   "Blaubeere"
  ],
  "gruppe": "Obst",
  "familie": "heide",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "sonnig, saurer Boden (Moorbeet- bzw. Rhododendronerde)",
  "frost": "hart",
  "abstand": [
   200,
   150
  ],
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft bzw. über Ableger oder Stecklinge vermehrt.",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   100,
   200
  ],
  "einzeln": true,
  "quellen": [
   "bzfe"
  ],
  "anleitung": "Kulturheidelbeeren brauchen sauren, humosen Boden; in normale Gartenerde gepflanzt kümmern sie. Deshalb ein Pflanzloch mit Rhododendronerde füllen oder im großen Kübel ziehen und mit Regenwasser gießen. Zwei Sorten nebeneinander verbessern den Ertrag.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "apfel",
  "name": "Apfel",
  "auch": [
   "Apfelbaum"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "sonnig, tiefgründiger, nicht zu trockener Boden",
  "frost": "hart",
  "abstand": [
   300,
   200
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   250,
   800
  ],
  "hoeheHinweis": "Hängt vor allem von der Unterlage ab: Spindel auf schwacher Unterlage bleibt klein, Halb- und Hochstämme werden groß.",
  "einzeln": true,
  "krone": [
   {
    "text": "schwach wachsend (z. B. Spindel auf M 9)",
    "d": 200
   },
   {
    "text": "mittelstark (z. B. Busch auf MM 106)",
    "d": 500
   },
   {
    "text": "stark (Halb-/Hochstamm auf Sämling)",
    "d": 1000
   }
  ],
  "befruchtung": "Braucht eine zweite, gleichzeitig blühende Apfelsorte in der Nähe (Fremdbefruchter). Stehen in der Nachbarschaft kaum Apfelbäume, zwei Sorten pflanzen.",
  "schnitt": "Hauptschnitt im Spätwinter (etwa Dezember bis Mitte März, nicht bei starkem Frost). Ein leichter Sommerschnitt bremst das Wachstum.",
  "quellen": [
   "lv_obst",
   "lwg_unterlage",
   "arche_befr",
   "toom_pflanzzeit"
  ],
  "anleitung": "Am besten im Herbst (Oktober/November) pflanzen, Topfware fast das ganze Jahr. Die Veredlungsstelle muss deutlich über der Erde bleiben. Bäume auf schwacher Unterlage brauchen dauerhaft einen Pfahl. Beim Kauf nach der Unterlage fragen – sie bestimmt, wie groß der Baum wird.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert.",
   "Pflanzzeit: Die meisten Quellen nennen den Herbst als beste Zeit; ein Merkblatt der Gartenakademie nennt keine Pflanzzeit. Topfware kann laut Händlerangaben fast ganzjährig gepflanzt werden."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "birne",
  "name": "Birne",
  "auch": [
   "Birnbaum"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "sonnig und warm, geschützt (blüht früh)",
  "frost": "hart",
  "abstand": [
   400,
   400
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   300,
   1000
  ],
  "hoeheHinweis": "Auf Quitte veredelt deutlich kleiner als auf Birnensämling.",
  "einzeln": true,
  "krone": [
   {
    "text": "schwach wachsend (Spindel/Busch auf Quitte A)",
    "d": 400
   },
   {
    "text": "stark (Halb-/Hochstamm auf Sämling)",
    "d": 800
   }
  ],
  "befruchtung": "Braucht eine zweite Birnensorte als Befruchter (Fremdbefruchter).",
  "schnitt": "Wie beim Apfel im Spätwinter; Birnen möglichst wenig schneiden.",
  "quellen": [
   "lv_obst",
   "lwg_unterlage",
   "arche_befr",
   "toom_pflanzzeit"
  ],
  "anleitung": "Im Herbst pflanzen. Birnen brauchen mehr Wärme als Äpfel; an einer warmen Hauswand gedeihen sie besonders gut, auch als Spalier. Die Unterlage Quitte A verträgt keinen kalkreichen Boden.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "suesskirsche",
  "name": "Süßkirsche",
  "auch": [
   "Kirsche",
   "Kirschbaum"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "sonnig, durchlässiger Boden (keine Staunässe)",
  "frost": "hart",
  "abstand": [
   500,
   400
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   6,
   7
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   300,
   1500
  ],
  "hoeheHinweis": "Ohne schwach wachsende Unterlage (z. B. GiSelA 5) werden Süßkirschen sehr groß.",
  "einzeln": true,
  "krone": [
   {
    "text": "schwach wachsend (z. B. GiSelA 5)",
    "d": 400
   },
   {
    "text": "stark (Halb-/Hochstamm)",
    "d": 1000
   }
  ],
  "befruchtung": "Meist Fremdbefruchter, außerdem passen nicht alle Sorten zueinander – beim Kauf nach einer passenden Befruchtersorte fragen. Einige neuere Sorten sind selbstfruchtbar, z. B. 'Sunburst', 'Sweetheart', 'Lapins'.",
  "schnitt": "Im Sommer direkt nach der Ernte; Süßkirschen brauchen nur selten einen Schnitt.",
  "quellen": [
   "lv_obst",
   "lwg_unterlage",
   "arche_befr",
   "toom_pflanzzeit",
   "lv_sommerschnitt"
  ],
  "anleitung": "Im Herbst pflanzen. Für den Hausgarten unbedingt eine schwach wachsende Unterlage wählen. Gegen Vögel hilft ein Netz zur Reife.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "sauerkirsche",
  "name": "Sauerkirsche",
  "auch": [
   "Weichsel",
   "Schattenmorelle"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "sonnig bis halbschattig, anspruchsloser als die Süßkirsche",
  "frost": "hart",
  "abstand": [
   400,
   300
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   250,
   500
  ],
  "einzeln": true,
  "krone": [
   {
    "text": "schwach wachsend (Spindel/Busch)",
    "d": 300
   },
   {
    "text": "stark (Halb-/Hochstamm)",
    "d": 500
   }
  ],
  "befruchtung": "Je nach Sorte selbstfruchtbar, teilweise oder gar nicht – z. B. ist 'Karneol' nur teilweise und 'Koröser Weichsel' nicht selbstfruchtbar. Beim Kauf nachfragen.",
  "schnitt": "Jedes Jahr nach der Ernte: abgetragene, überhängende Zweige auf einen jungen Trieb zurückschneiden, sonst verkahlen sie.",
  "quellen": [
   "lv_obst",
   "lwg_unterlage",
   "arche_befr",
   "toom_pflanzzeit",
   "lv_sommerschnitt",
   "lwg_steinobst"
  ],
  "anleitung": "Im Herbst pflanzen. Sauerkirschen tragen am einjährigen Holz – der regelmäßige Schnitt nach der Ernte hält sie fruchtbar.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert.",
   "Befruchtung: Manche Ratgeber nennen Sauerkirschen pauschal selbstfruchtbar; laut Arche Noah und Gartenakademie hängt das von der Sorte ab."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "pflaume",
  "name": "Pflaume / Zwetschge",
  "auch": [
   "Zwetschge",
   "Zwetschke",
   "Pflaumenbaum",
   "Mirabelle",
   "Reneklode"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "sonnig, warm, ausreichend feuchter Boden",
  "frost": "hart",
  "abstand": [
   400,
   300
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   7,
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   300,
   600
  ],
  "hoeheHinweis": "Die Krone wird meist 3–5 m breit.",
  "einzeln": true,
  "krone": [
   {
    "text": "schwach wachsend (z. B. Spindel auf Wangenheimer)",
    "d": 300
   },
   {
    "text": "mittel (Busch/Halbstamm auf St. Julien)",
    "d": 500
   },
   {
    "text": "stark (Halb-/Hochstamm)",
    "d": 600
   }
  ],
  "befruchtung": "Je nach Sorte selbstfruchtbar, teilweise oder nicht – viele Hauszwetschgen tragen allein. Beim Kauf nachfragen.",
  "schnitt": "Im Sommer nach der Ernte, spätestens bis Ende August.",
  "quellen": [
   "lv_obst",
   "lwg_unterlage",
   "arche_befr",
   "toom_pflanzzeit",
   "lwg_steinobst"
  ],
  "anleitung": "Im Herbst pflanzen. Frühe Zwetschgensorten reifen schon Anfang Juli, späte erst im September/Oktober – mit zwei Sorten verlängert sich die Erntezeit.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "pfirsich",
  "name": "Pfirsich",
  "auch": [
   "Nektarine",
   "Zwergpfirsich",
   "Pfirsichbaum"
  ],
  "gruppe": "Obst",
  "familie": "rosen",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "vollsonnig, warm und geschützt (z. B. vor einer Hauswand); blüht früh",
  "frost": "hart",
  "abstand": [
   300,
   300
  ],
  "saattiefe": "–",
  "keimung": "Wird als veredelter Baum gekauft (wurzelnackt oder im Topf).",
  "pflanzen": [
   3,
   4,
   10,
   11
  ],
  "ernte": [
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   100,
   500
  ],
  "hoeheHinweis": "Zwergsorten wie 'Bonanza' oder 'Calypso' bleiben etwa 1–1,5 m hoch und passen in einen Kübel; als Busch wird der Pfirsich 2–5 m hoch.",
  "einzeln": true,
  "krone": [
   {
    "text": "Zwergpfirsich (Strauch, auch im Kübel)",
    "d": 100
   },
   {
    "text": "Busch/kleiner Baum",
    "d": 300
   }
  ],
  "befruchtung": "Selbstfruchtbar – ein einzelner Baum trägt.",
  "schnitt": "Jedes Jahr kurz vor oder während der Blüte. Der Pfirsich trägt am einjährigen Holz; ohne jährlichen Schnitt verkahlt er von unten.",
  "quellen": [
   "arche_befr",
   "lwg_pfirsich",
   "arche_pfirsich",
   "naturadb_pfirsich",
   "toom_pflanzzeit"
  ],
  "anleitung": "Im Frühjahr oder Herbst an einen warmen, geschützten Platz pflanzen. Häufigstes Problem ist die Kräuselkrankheit (blasig gekräuselte Blätter im Frühjahr) – robuste Sorten wählen, z. B. 'Revita'. Zwergpfirsiche im Kübel frostfrei, aber kühl überwintern. Die frühe Blüte ist durch Spätfröste gefährdet – auch deshalb der geschützte Platz.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "feige",
  "name": "Feige",
  "auch": [
   "Feigenbaum"
  ],
  "gruppe": "Obst",
  "familie": "maulbeer",
  "zehrer": "mittel",
  "mehrjaehrig": true,
  "baum": true,
  "standort": "vollsonnig, warm, geschützt (am besten vor einer Südwand)",
  "frost": "leicht",
  "abstand": [
   300,
   300
  ],
  "saattiefe": "–",
  "keimung": "Wird als Pflanze gekauft oder über Steckhölzer vermehrt.",
  "pflanzen": [
   4,
   5
  ],
  "ernte": [
   8,
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": "vegetativ",
  "hoehe": [
   200,
   500
  ],
  "einzeln": true,
  "krone": [
   {
    "text": "kleiner Baum/Strauch (Richtwert)",
    "d": 300
   },
   {
    "text": "im Kübel",
    "d": 100
   }
  ],
  "befruchtung": "Nur selbstfruchtende Sorten pflanzen, z. B. 'Brown Turkey', 'Bornholmfeige', 'Dalmatie' – andere brauchen eine bestimmte Wespe, die es hier nicht gibt.",
  "schnitt": "Wenig nötig; erfrorene Triebe im Frühjahr entfernen.",
  "quellen": [
   "samenhaus_feige",
   "zdf_feige"
  ],
  "anleitung": "Im Frühjahr pflanzen, damit sie bis zum Winter einwurzelt. Junge Feigen brauchen in den ersten Jahren Winterschutz (Vlies, Mulch am Fuß). Feigen reifen nicht nach – erst ernten, wenn sie weich sind und sich leicht lösen. In milden Gegenden reift manchmal schon im Sommer eine erste Ernte.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert.",
   "Pflanzzeit: Für frostempfindlichere Gehölze wird meist das Frühjahr empfohlen; Händler bieten Feigen von März bis Oktober an.",
   "Winterhärte: Für 'Brown Turkey' nennen manche Quellen bis −15 bzw. −20 °C, Händler nur −5 bis −8 °C (ausgepflanzt im Weinbauklima). Sicherer ist die vorsichtige Angabe – also Winterschutz einplanen.",
   "Kronendurchmesser: Keine Quelle nennt einen festen Wert; 3 m ist ein Richtwert für einen ausgewachsenen Strauch bzw. kleinen Baum."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "physalis",
  "name": "Physalis",
  "auch": [
   "Andenbeere",
   "Kapstachelbeere"
  ],
  "gruppe": "Obst",
  "familie": "nachtschatten",
  "zehrer": "mittel",
  "standort": "sonnig, warm, geschützt",
  "frost": "empfindlich",
  "abstand": [
   100,
   60
  ],
  "abstandHinweis": "Quellen nennen 50 bis 100 cm.",
  "saattiefe": "ca. 0,5 cm (nur dünn bedecken)",
  "keimung": "Keimt bei etwa 20 °C",
  "vorziehen": [
   2,
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
  "keimJahre": null,
  "saatgut": "mittel",
  "hoehe": [
   100,
   150
  ],
  "hoeheHinweis": "Eine Stütze oder ein Gitter hilft.",
  "einzeln": true,
  "quellen": [
   "ble",
   "plantura_physalis",
   "sbb"
  ],
  "anleitung": "Ab Februar warm vorziehen und nach den Eisheiligen auspflanzen – Physalis braucht von der Aussaat bis zur Reife fünf bis sechs Monate. Reif ist die Frucht, wenn die Hülle trocken und papierartig ist. Sie ist mehrjährig und lässt sich hell und frostfrei überwintern; im Freiland wird sie meist einjährig gezogen. Als Nachtschattengewächs gilt dieselbe Anbaupause wie bei Tomate und Kartoffel.",
  "hinweise": [
   "Nährstoffbedarf: Richtwert.",
   "Saattiefe: Manche Quellen nennen Physalis einen Lichtkeimer, andere empfehlen etwa 0,5 cm Erde. Gemeinsam ist: nur dünn bedecken.",
   "Keimfähigkeit: keine verlässliche Angabe gefunden.",
   "Abstand: Der BLE-Kalender nennt 100 × 60 cm, andere Quellen 50–80 cm. Die App nimmt 100 × 60 cm."
  ],
  "direktsaat": []
 },
 {
  "id": "melone",
  "name": "Melone",
  "auch": [
   "Zuckermelone",
   "Honigmelone",
   "Netzmelone",
   "Cantaloupe"
  ],
  "gruppe": "Obst",
  "familie": "kuerbis",
  "zehrer": "stark",
  "standort": "vollsonnig, sehr warm; am sichersten im Gewächshaus oder Folientunnel",
  "frost": "empfindlich",
  "abstand": [
   100,
   90
  ],
  "abstandHinweis": "Quellen nennen 80–100 cm.",
  "saattiefe": "ca. 1–2 cm",
  "keimung": "Keimt bei etwa 20–25 °C; nicht pikieren, gleich in Töpfe säen",
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
   3,
   4
  ],
  "saatgut": "mittel",
  "hoehe": [
   30,
   50
  ],
  "hoeheHinweis": "Bleibt niedrig, die Ranken werden lang; im Gewächshaus auch nach oben leitbar.",
  "einzeln": true,
  "quellen": [
   "lv_kuerbis",
   "samenhaus_melone",
   "bingenheim",
   "sbb"
  ],
  "anleitung": "Ende März bis Mitte April einzeln in Töpfe säen und warm stellen. Ab Mitte Mai ins Gewächshaus, ins Freiland eher Anfang Juni und am besten auf schwarze Mulchfolie, die den Boden wärmt. Unter 10 °C leiden die Pflanzen. Pro Pflanze reifen etwa vier bis sechs Früchte; reif sind sie, wenn sie duften und sich der Stiel leicht löst.",
  "hinweise": [
   "Nährstoffbedarf: Kürbisgewächse gelten als Starkzehrer; für die Melone selbst nennt das SBB-Merkblatt keinen eigenen Wert.",
   "Auspflanzen: Das Merkblatt des Landesverbands nennt für Kürbisgewächse allgemein ab Mitte Mai; mehrere Ratgeber empfehlen für Melonen im Freiland erst Anfang Juni."
  ],
  "direktsaat": []
 },
 {
  "id": "kornblume",
  "name": "Kornblume",
  "auch": [
   "Centaurea cyanus",
   "Cyanus segetum"
  ],
  "gruppe": "Blumen",
  "familie": "korb",
  "zehrer": "schwach",
  "standort": "sonnig, durchlässig, eher mager",
  "frost": "hart",
  "abstand": [
   25,
   15
  ],
  "saattiefe": "ca. 0,5–1 cm",
  "keimung": "",
  "direktsaat": [
   3,
   4,
   5,
   6,
   9
  ],
  "ernte": [
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   90
  ],
  "einzeln": false,
  "quellen": [
   "pabst_kornblume",
   "quedlinburger_kornblume",
   "plantura_kornblume",
   "bund_gd"
  ],
  "anleitung": "Von März bis in den Frühsommer direkt ins Beet säen und auf etwa 15 cm vereinzeln; eine Herbstsaat im September überwintert und blüht schon ab Mai. Blüht von Juni bis September; Verblühtes abschneiden verlängert die Blüte. Die Blütenblätter sind essbar – als Farbtupfer im Salat, auf Kuchen oder getrocknet im Tee.",
  "hinweise": [
   "„Ernten“ meint hier die Blüten.",
   "Aussaatzeit: Pabst nennt März/April und September, andere Anbieter März bis Juni.",
   "Saattiefe: Pabst gibt 0,5 cm an, Quedlinburger 1,5 cm. Manche Ratgeber nennen die Kornblume Licht-, andere Dunkelkeimer – dünn bedecken ist ein guter Mittelweg.",
   "Nährstoffbedarf: Richtwert."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "sonnenblume",
  "name": "Sonnenblume",
  "auch": [
   "Helianthus annuus"
  ],
  "gruppe": "Blumen",
  "familie": "korb",
  "zehrer": "stark",
  "standort": "sonnig, windgeschützt, warm",
  "frost": "empfindlich",
  "abstand": [
   50,
   45
  ],
  "abstandHinweis": "Quellen nennen 30–60 cm; hohe Sorten brauchen mehr Platz.",
  "saattiefe": "ca. 2–3 cm",
  "keimung": "",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   5
  ],
  "direktsaat": [
   5,
   6
  ],
  "ernte": [
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   100,
   300
  ],
  "hoeheHinweis": "Je nach Sorte; Zwergsorten bleiben deutlich niedriger.",
  "einzeln": true,
  "quellen": [
   "toom_sonnenblume",
   "hornbach_sonnenblume",
   "selbst_sonnenblume",
   "bund_gd"
  ],
  "anleitung": "Sonnenblumen vertragen keinen Frost: nach den Eisheiligen direkt säen oder ab März im Haus vorziehen und Mitte Mai auspflanzen. Hohe Sorten an einen Stab binden. Für Kerne die Köpfe stehen lassen, bis sie sich hängen und die Rückseite braun ist; ein Netz oder Gazetuch schützt vor Vögeln. Die Kerne sind essbar und lassen sich im nächsten Jahr wieder aussäen.",
  "hinweise": [
   "„Ernten“ meint hier die Kerne.",
   "Aussaat: toom nennt April bis Juni, Utopia rät nicht vor Ende April, die meisten Ratgeber warten bis nach den Eisheiligen – die App nennt Mai/Juni als sicheren Zeitraum.",
   "Kernreife: Utopia nennt Ende August/Anfang September, selbst.de Oktober – je nach Sorte und Aussaat.",
   "Nährstoffbedarf: Starkzehrer ist ein Richtwert."
  ]
 },
 {
  "id": "lavendel",
  "name": "Lavendel",
  "auch": [
   "Echter Lavendel",
   "Lavandula angustifolia"
  ],
  "gruppe": "Blumen",
  "familie": "lippen",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "vollsonnig, mager, durchlässig, gern kalkhaltig – keine Staunässe",
  "frost": "hart",
  "abstand": [
   40,
   30
  ],
  "abstandHinweis": "Quellen nennen 20–45 cm.",
  "saattiefe": "nicht bedecken",
  "keimung": "Lichtkeimer; vorher 2–4 Wochen kühl lagern verbessert die Keimung",
  "vorziehen": [
   3,
   4
  ],
  "pflanzen": [
   4,
   5,
   9
  ],
  "ernte": [
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   60
  ],
  "einzeln": true,
  "schnitt": "Nach der Blüte um etwa ein Drittel kürzen, im Frühjahr beim Austrieb etwas kräftiger – aber nie ins alte, kahle Holz, dort treibt Lavendel oft nicht mehr aus.",
  "quellen": [
   "plantura_lavendel",
   "boku_lavendel",
   "toom_lavendel"
  ],
  "anleitung": "Am einfachsten als Jungpflanze im Frühjahr setzen. Wer sät, lagert die Samen vorher einige Wochen feucht im Kühlschrank und zieht ab März auf der Fensterbank vor. Lavendel liebt magere, trockene Plätze und braucht kaum Dünger. Die Blüten kurz vor dem vollen Aufblühen schneiden – frisch sparsam zum Würzen, getrocknet für Tee, Zucker oder Duftsäckchen. Gilt für den Echten Lavendel; Schopflavendel ist nicht frosthart.",
  "hinweise": [
   "„Ernten“ meint hier die Blüten.",
   "Keimung: Plantura empfiehlt, die Samen vorher 2–4 Wochen kühl zu lagern; andere Anleitungen säen ohne Kältebehandlung.",
   "Verzehr: Gekaufte Topfpflanzen tragen teils den Hinweis „nicht zum Verzehr geeignet“ (z. B. toom). Für die Küche Kräuter- oder Bioware kaufen oder selbst aussäen.",
   "Herbstpflanzung (September): möglich, in rauen Lagen ist das Frühjahr sicherer."
  ],
  "direktsaat": []
 },
 {
  "id": "malve",
  "name": "Wilde Malve",
  "auch": [
   "Malve",
   "Käsepappel",
   "Rosspappel",
   "Malva sylvestris"
  ],
  "gruppe": "Blumen",
  "familie": "malven",
  "zehrer": "schwach",
  "mehrjaehrig": true,
  "standort": "sonnig, eher trocken",
  "frost": "hart",
  "abstand": [
   50,
   40
  ],
  "abstandHinweis": "Richtwert; wird buschig und ausladend.",
  "saattiefe": "ca. 1 cm (Richtwert)",
  "keimung": "Dunkelkeimer",
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
   9,
   10
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   40,
   120
  ],
  "einzeln": true,
  "quellen": [
   "naturadb_malve",
   "plantura_malve"
  ],
  "anleitung": "Im Frühjahr im Topf vorziehen und ab Mitte Mai auspflanzen. Die Wilde Malve ist zweijährig bis kurzlebig und sät sich gern selbst aus. Junge Blätter und die rosa-violetten Blüten sind essbar und schmecken mild – im Salat, als Deko oder getrocknet als Tee. Eine gute Insektenpflanze.",
  "hinweise": [
   "„Ernten“ meint hier Blüten und junge Blätter.",
   "Lebensdauer: NaturaDB nennt sie zweijährig, Plantura zweijährig bis wenige Jahre alt.",
   "Aussaatzeit und Abstand: keine verlässliche Tabellenangabe gefunden; Richtwerte.",
   "Verwechslung: Die Becher- oder Strauchmalve (Lavatera) ist eine andere Pflanze."
  ],
  "direktsaat": []
 },
 {
  "id": "brennnessel",
  "name": "Brennnessel",
  "auch": [
   "Große Brennnessel",
   "Urtica dioica",
   "Nessel"
  ],
  "gruppe": "Kräuter",
  "familie": "nessel",
  "zehrer": "stark",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, nährstoffreich, frisch",
  "frost": "hart",
  "abstand": [
   50,
   50
  ],
  "abstandHinweis": "Richtwert; breitet sich über Ausläufer aus.",
  "saattiefe": "nur andrücken (Richtwert)",
  "keimung": "",
  "direktsaat": [
   3,
   4,
   5
  ],
  "pflanzen": [
   3,
   4,
   9,
   10
  ],
  "ernte": [
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   150
  ],
  "einzeln": false,
  "quellen": [
   "oekotest_nessel",
   "palmengarten_nessel",
   "nabu_staerkung",
   "plantura_jauche"
  ],
  "anleitung": "Meist wächst sie schon irgendwo – sonst ein Stück Wurzelstock im Frühjahr oder Herbst umsetzen. Am besten in eine Ecke mit Wurzelsperre, denn die Brennnessel wandert unterirdisch. Junge Triebspitzen sind ein Wildgemüse (wie Spinat). Für Jauche und Brühe vor der Blüte schneiden; ein Stück stehen lassen, weil viele Schmetterlingsraupen davon leben. Handschuhe tragen. Anleitungen: Wissen → Jauchen.",
  "hinweise": [
   "„Ernten“ meint hier Blätter und Triebe – für Jauche nur Pflanzen ohne Blüten und Samen nehmen.",
   "Ausbreitung: Öko-Test rät zu einer Wurzelsperre, damit sie an ihrem Platz bleibt.",
   "Zeiten und Abstand: Richtwerte – die Brennnessel wird selten gezielt angebaut."
  ],
  "vorziehen": []
 },
 {
  "id": "beinwell",
  "name": "Beinwell",
  "auch": [
   "Echter Beinwell",
   "Symphytum officinale",
   "Comfrey"
  ],
  "gruppe": "Kräuter",
  "familie": "raublatt",
  "zehrer": "stark",
  "mehrjaehrig": true,
  "standort": "sonnig bis halbschattig, feucht, nährstoffreich",
  "frost": "hart",
  "abstand": [
   50,
   50
  ],
  "saattiefe": "–",
  "keimung": "wird meist als Jungpflanze gekauft",
  "pflanzen": [
   3,
   4,
   9,
   10
  ],
  "ernte": [
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   80,
   150
  ],
  "einzeln": true,
  "quellen": [
   "utopia_beinwell",
   "lfl_beinwell",
   "apotheken_beinwell",
   "nabu_staerkung"
  ],
  "anleitung": "Als Jungpflanze im Frühjahr oder Herbst mit etwa 50 cm Abstand setzen. Die Blätter lassen sich mehrmals im Jahr abschneiden – für kaliumreiche Jauche (gut für Tomaten, Kartoffeln, Kürbis) oder als Mulch unter Starkzehrern. Bienen und Hummeln lieben die Glockenblüten. Anleitungen: Wissen → Jauchen.",
  "hinweise": [
   "Nicht essen und keinen Tee daraus machen: Beinwell enthält Pyrrolizidinalkaloide, die die Leber schädigen können (Apotheken Umschau, LfL Bayern).",
   "Standort gut wählen: Beinwell bildet eine kräftige, fleischige Pfahlwurzel (LfL Bayern) – umsetzen ist mühsam.",
   "„Ernten“ meint hier die Blätter für Jauche und Mulch."
  ],
  "vorziehen": [],
  "direktsaat": []
 },
 {
  "id": "phacelia",
  "name": "Phacelia",
  "auch": [
   "Bienenfreund",
   "Büschelschön",
   "Phacelia tanacetifolia"
  ],
  "gruppe": "Gründüngung",
  "familie": "raublatt",
  "zehrer": "schwach",
  "standort": "sonnig bis halbschattig, alle Böden",
  "frost": "empfindlich",
  "abstand": null,
  "saattiefe": "ca. 1–2 cm, breitwürfig",
  "keimung": "Dunkelkeimer – gut einharken",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   80
  ],
  "einzeln": false,
  "gd": {
   "winter": "friert ab – die Reste schützen den Boden über Winter",
   "menge": "2–4 g/m²",
   "einarbeiten": "Vor der Samenbildung mähen; abgefrorene Reste im Frühjahr flach einharken.",
   "wirkung": "Feinwurzler für eine krümelige Bodenstruktur, starke Bienenweide"
  },
  "quellen": [
   "bund_gd",
   "vdl_gd",
   "nig_gd",
   "oekotest_gd",
   "bioaustria_gd"
  ],
  "anleitung": "Der Allrounder unter den Gründüngern: mit keinem Gemüse verwandt (nur mit Borretsch und Beinwell), deshalb passt Phacelia in jede Fruchtfolge. Nach der Ernte breitwürfig säen, einharken, feucht halten. Blüht nach etwa sechs bis acht Wochen und ist dann voller Bienen.",
  "hinweise": [
   "Aussaatzeit: BUND nennt Frühjahr bis Ende August, Natur im Garten März bis Anfang September, der VdL März/April bis August.",
   "Blütezeit nach Aussaat: Richtwert."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "gelbsenf",
  "name": "Gelbsenf",
  "auch": [
   "Senf",
   "Weißer Senf",
   "Sinapis alba"
  ],
  "gruppe": "Gründüngung",
  "familie": "kreuz",
  "zehrer": "mittel",
  "standort": "sonnig, mittelschwere Böden",
  "frost": "empfindlich",
  "abstand": null,
  "saattiefe": "ca. 1–2 cm, breitwürfig",
  "keimung": "keimt sehr schnell",
  "direktsaat": [
   3,
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   60,
   100
  ],
  "einzeln": false,
  "gd": {
   "winter": "friert ab",
   "menge": "4–6 g/m²",
   "einarbeiten": "Vor der Blüte bzw. vor der Samenbildung mähen – sonst sät er sich stark aus.",
   "wirkung": "Wächst sehr schnell, deckt den Boden, Pfahlwurzel lockert"
  },
  "quellen": [
   "bund_gd",
   "vdl_gd",
   "nig_gd",
   "oekotest_gd",
   "selbst_gd"
  ],
  "anleitung": "Der schnellste Gründünger – auch spät im Jahr noch eine Hilfe. Achtung Fruchtfolge: Senf ist ein Kreuzblütler wie Kohl, Radieschen und Rucola. Nicht vor oder nach diesen säen, sonst können sich Kohlhernie und Schädlinge halten.",
  "hinweise": [
   "Späteste Aussaat: BUND nennt Ende August, der VdL September, Öko-Test sogar Oktober – je später, desto weniger Masse bildet er.",
   "Fruchtfolge: BUND und selbst.de warnen ausdrücklich vor Senf vor oder nach Kreuzblütlern."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "inkarnatklee",
  "name": "Inkarnatklee",
  "auch": [
   "Rosenklee",
   "Blutklee",
   "Trifolium incarnatum"
  ],
  "gruppe": "Gründüngung",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, mittlere Böden",
  "frost": "hart",
  "abstand": null,
  "saattiefe": "ca. 1–2 cm, breitwürfig",
  "keimung": "",
  "direktsaat": [
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   50
  ],
  "einzeln": false,
  "gd": {
   "winter": "winterhart – bleibt über Winter stehen",
   "menge": "4–8 g/m²",
   "einarbeiten": "Im Frühjahr zur Blüte (etwa Mai) mähen, antrocknen lassen und flach einarbeiten; danach rund zwei Wochen bis zur nächsten Kultur warten (Richtwert).",
   "wirkung": "Sammelt Stickstoff aus der Luft, lange Pfahlwurzel, Bienenweide"
  },
  "quellen": [
   "bund_gd",
   "vdl_gd",
   "nig_gd",
   "oekotest_gd",
   "bioaustria_gd"
  ],
  "anleitung": "Klassische Herbstsaat nach der Ernte. Als Hülsenfrüchtler bindet er Stickstoff, der der nächsten Kultur zugutekommt – ideal vor Starkzehrern wie Kohl, Tomate oder Kürbis. Er zählt aber zur Familie von Erbse und Bohne: Die Anbaupause gilt auch für ihn.",
  "hinweise": [
   "Aussaatzeit: BUND nennt Ende Juli bis Anfang September, Bio Austria Juli bis Mitte September, der VdL Juli bis September, Öko-Test sogar noch Oktober.",
   "Einarbeiten: Der Abstand bis zur Folgekultur ist ein Richtwert."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "serradella",
  "name": "Serradella",
  "auch": [
   "Ornithopus sativus"
  ],
  "gruppe": "Gründüngung",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, leichte sandige, eher saure Böden",
  "frost": "empfindlich",
  "abstand": null,
  "saattiefe": "ca. 1–2 cm, breitwürfig (Richtwert)",
  "keimung": "",
  "direktsaat": [
   4,
   5,
   6,
   7,
   8
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   30,
   60
  ],
  "einzeln": false,
  "gd": {
   "winter": "friert meist ab",
   "menge": "5–10 g/m² (BUND), Dreschflegel nennt etwa 3 g/m²",
   "einarbeiten": "Vor der Samenbildung mähen; abgefrorene Reste im Frühjahr einarbeiten.",
   "wirkung": "Sammelt Stickstoff, gut für Sandböden, Blüten für Insekten"
  },
  "quellen": [
   "bund_gd",
   "dreschflegel_gd",
   "renatura_serradella"
  ],
  "anleitung": "Der Stickstoffsammler für leichte, sandige Böden, wo Klee schlecht wächst. Wächst anfangs langsam. Als Hülsenfrüchtler mit Erbse und Bohne verwandt – Dreschflegel rät zu zwei Jahren Pause bis zu Erbsen oder Bohnen.",
  "hinweise": [
   "Aussaatzeit: Dreschflegel nennt April bis August, BUND Frühjahr bis Mitte August, ReNatura März bis August.",
   "Saatmenge: BUND 5–10 g/m², Dreschflegel etwa 3 g/m²."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "winterwicke",
  "name": "Winterwicke",
  "auch": [
   "Zottelwicke",
   "Wicke",
   "Vicia villosa"
  ],
  "gruppe": "Gründüngung",
  "familie": "huelsen",
  "zehrer": "schwach",
  "standort": "sonnig, leichte bis mittelschwere Böden",
  "frost": "hart",
  "abstand": null,
  "saattiefe": "ca. 2–3 cm (Richtwert)",
  "keimung": "große Samen",
  "direktsaat": [
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   50,
   100
  ],
  "hoeheHinweis": "rankt; meist zusammen mit Roggen oder Weidelgras als Stütze gesät.",
  "einzeln": false,
  "gd": {
   "winter": "winterhart – bleibt über Winter stehen",
   "menge": "15–20 g/m²",
   "einarbeiten": "Im Frühjahr vor oder zur Blüte mähen und einarbeiten (muss aktiv umgebrochen werden, friert nicht ab).",
   "wirkung": "Sammelt viel Stickstoff, feines Wurzelwerk"
  },
  "quellen": [
   "bund_gd",
   "vdl_gd",
   "nig_gd",
   "oekotest_gd"
  ],
  "anleitung": "Herbstsaat nach der Ernte, gern gemischt mit Welschem Weidelgras oder Roggen, an denen sie hochrankt (das „Landsberger Gemenge“ kombiniert Weidelgras, Inkarnatklee und Winterwicke). Hülsenfrüchtler – Anbaupause wie bei Erbse und Bohne.",
  "hinweise": [
   "Aussaatzeit: BUND nennt Anfang August bis Mitte September, der VdL August/September, Öko-Test noch Oktober."
  ],
  "vorziehen": [],
  "pflanzen": []
 },
 {
  "id": "weidelgras",
  "name": "Welsches Weidelgras",
  "auch": [
   "Italienisches Raygras",
   "Weidelgras",
   "Lolium multiflorum"
  ],
  "gruppe": "Gründüngung",
  "familie": "suessgras",
  "zehrer": "mittel",
  "standort": "sonnig bis halbschattig, frische Böden",
  "frost": "leicht",
  "abstand": null,
  "saattiefe": "ca. 1–2 cm, breitwürfig",
  "keimung": "",
  "direktsaat": [
   7,
   8,
   9
  ],
  "keimJahre": null,
  "saatgut": null,
  "hoehe": [
   40,
   80
  ],
  "einzeln": false,
  "gd": {
   "winter": "überwintert in milden Lagen; in rauen, schneereichen Lagen kann es auswintern",
   "menge": "ca. 3,5–5 g/m² (umgerechnet aus 35–50 kg/ha, LKSH)",
   "einarbeiten": "Im Frühjahr vor dem Ährenschieben mähen und gründlich einarbeiten – die Grasnarbe treibt sonst wieder aus (Richtwert).",
   "wirkung": "Dichte Durchwurzelung, hält Nährstoffe über Winter fest, schützt vor Erosion"
  },
  "quellen": [
   "lksh_zf",
   "nig_gd",
   "oekotest_gd"
  ],
  "anleitung": "Ein Gras für die Herbstbegrünung, oft im Gemenge mit Inkarnatklee und Winterwicke. Es verwertet übrigen Stickstoff sehr gut und hält ihn über Winter fest. Im Hausgarten eher für Flächen, die länger ruhen dürfen – auf kleinen Beeten ist ein Gras mühsamer einzuarbeiten als Phacelia oder Senf.",
  "hinweise": [
   "Späteste Aussaat: Die Landwirtschaftskammer Schleswig-Holstein nennt den 10. August, wenn es noch im Herbst genutzt wird, und den 20. September für eine Begrünung über Winter.",
   "Natur im Garten empfiehlt Gräser vor allem für längere Gründüngungen.",
   "Einarbeiten: Hinweis zum Wiederaustrieb ist ein Richtwert."
  ],
  "vorziehen": [],
  "pflanzen": []
 }
];
const MISCHKULTUR = [{"a": "basilikum", "b": "minze", "art": "schlecht", "quelle": "plantura_kraeuter"}, {"a": "basilikum", "b": "tomate", "art": "gut", "quelle": "hornbach"}, {"a": "basilikum", "b": "zitronenmelisse", "art": "schlecht", "quelle": "plantura_kraeuter"}, {"a": "blumenkohl", "b": "brokkoli", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "buschbohne", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "chinakohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "endivie", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "erdbeere", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "blumenkohl", "b": "fruehlingszwiebel", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "blumenkohl", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "blumenkohl", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "blumenkohl", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "ringelblume", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "blumenkohl", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "blumenkohl", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "blumenkohl", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "blumenkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "blumenkohl", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "blumenkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "blumenkohl", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "blumenkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "bohnenkraut", "b": "buschbohne", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Bohnen vor der Schwarzen Bohnenlaus schützen"}, {"a": "bohnenkraut", "b": "stangenbohne", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Bohnen vor der Schwarzen Bohnenlaus schützen"}, {"a": "borretsch", "b": "gurke", "art": "gut", "quelle": "plantura_kombi", "notiz": "lockt Bestäuber an"}, {"a": "brokkoli", "b": "buschbohne", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "chinakohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "endivie", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "erdbeere", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "brokkoli", "b": "fruehlingszwiebel", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "brokkoli", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "brokkoli", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "brokkoli", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "ringelblume", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "brokkoli", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "brokkoli", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "brokkoli", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "brokkoli", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "brokkoli", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "brokkoli", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "brokkoli", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "brokkoli", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "chinakohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "endivie", "art": "schlecht", "quelle": "bund", "notiz": "BUND nennt bei der Endivie „Bohnen“ als schlecht, die Stangenbohne aber als gut."}, {"a": "buschbohne", "b": "erbse", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "erdbeere", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "fenchel", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "fruehlingszwiebel", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "buschbohne", "b": "gruenkohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kartoffel", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "lauch", "art": "schlecht", "quelle": "bund"}, {"a": "buschbohne", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "buschbohne", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "buschbohne", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "chinakohl", "b": "endivie", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "erdbeere", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "chinakohl", "b": "fruehlingszwiebel", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "chinakohl", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "chinakohl", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "chinakohl", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "chinakohl", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "chinakohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "chinakohl", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "chinakohl", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "chinakohl", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "chinakohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "chinakohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "chinakohl", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "chinakohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "dill", "b": "erbse", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "fenchel", "art": "schlecht", "quelle": "bund"}, {"a": "dill", "b": "fruehlingszwiebel", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "dill", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "kartoffel", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "koriander", "art": "schlecht", "quelle": "bund"}, {"a": "dill", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "dill", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "dill", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "fenchel", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "gruenkohl", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "kohlrabi", "art": "schlecht", "quelle": "bund"}, {"a": "endivie", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "paprika", "art": "schlecht", "quelle": "bund"}, {"a": "endivie", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "endivie", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "endivie", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "fenchel", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "gruenkohl", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "lauch", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "erbse", "b": "stangenbohne", "art": "schlecht", "quelle": "bund", "notiz": "In der BUND-Tabelle bei der Stangenbohne als gut und schlecht genannt, bei der Erbse als schlecht."}, {"a": "erbse", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "erbse", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "fruehlingszwiebel", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "erdbeere", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "erdbeere", "b": "himbeere", "art": "schlecht", "quelle": "bund"}, {"a": "erdbeere", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "erdbeere", "b": "knoblauch", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "erdbeere", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "petersilie", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "ringelblume", "art": "gut", "quelle": "samenhaus_misch"}, {"a": "erdbeere", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "erdbeere", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "erdbeere", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "erdbeere", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "erdbeere", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "erdbeere", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "BUND-Tabelle: bei den Erdbeeren schlecht, bei den Kohlgewächsen gut genannt."}, {"a": "erdbeere", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "paprika", "art": "schlecht", "quelle": "bund"}, {"a": "fenchel", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "salbei", "art": "gut", "quelle": "bund"}, {"a": "fenchel", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "fenchel", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "fruehlingszwiebel", "b": "gruenkohl", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "gurke", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "kopfsalat", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "kuerbis", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "paprika", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "rote_bete", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "stangenbohne", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "fruehlingszwiebel", "b": "zucchini", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "gruenkohl", "b": "gurke", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "kartoffel", "art": "schlecht", "quelle": "bund"}, {"a": "gruenkohl", "b": "knoblauch", "art": "schlecht", "quelle": "bund"}, {"a": "gruenkohl", "b": "kopfkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "gruenkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "ringelblume", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "gruenkohl", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "gruenkohl", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "gruenkohl", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "gruenkohl", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "gruenkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "gruenkohl", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "gruenkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "gruenkohl", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "gruenkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "knoblauch", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kopfkohl", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "kuerbis", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "radieschen", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "rettich", "art": "schlecht", "quelle": "bund"}, {"a": "gurke", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "gurke", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "tomate", "art": "schlecht", "quelle": "hornbach"}, {"a": "gurke", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "gurke", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "kapuzinerkresse", "b": "kartoffel", "art": "gut", "quelle": "hornbach2"}, {"a": "kapuzinerkresse", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kapuzinerkresse", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "kapuzinerkresse", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kapuzinerkresse", "b": "tomate", "art": "gut", "quelle": "hornbach2"}, {"a": "kartoffel", "b": "kohlrabi", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "kopfkohl", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "minze", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "ringelblume", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "kartoffel", "b": "rosenkohl", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "rote_bete", "art": "schlecht", "quelle": "bund", "notiz": "In der BUND-Tabelle bei der Roten Bete als gut und schlecht genannt, bei der Kartoffel als schlecht."}, {"a": "kartoffel", "b": "sellerie", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kartoffel", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "kartoffel", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "kartoffel", "b": "wirsing", "art": "schlecht", "quelle": "bund"}, {"a": "kerbel", "b": "kopfsalat", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Salat vor Blattläusen schützen"}, {"a": "kerbel", "b": "petersilie", "art": "schlecht", "quelle": "plantura_kraeuter"}, {"a": "kerbel", "b": "pfluecksalat", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Salat vor Blattläusen schützen"}, {"a": "knoblauch", "b": "kopfkohl", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "knoblauch", "b": "rosenkohl", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "knoblauch", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "knoblauch", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "knoblauch", "b": "wirsing", "art": "schlecht", "quelle": "bund"}, {"a": "kohlrabi", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "kuerbis", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kohlrabi", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "kopfsalat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "mangold", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "pfluecksalat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "ringelblume", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "kopfkohl", "b": "rosenkohl", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "kopfkohl", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "kopfkohl", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "kopfkohl", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "kopfkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "kopfkohl", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "kopfkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfkohl", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "kopfkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "kopfsalat", "b": "lauch", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "minze", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "petersilie", "art": "schlecht", "quelle": "bund"}, {"a": "kopfsalat", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "kopfsalat", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "kopfsalat", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "mais", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "ringelblume", "art": "gut", "quelle": "hornbach2"}, {"a": "kuerbis", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "kuerbis", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "kuerbis", "b": "tomate", "art": "schlecht", "quelle": "bund"}, {"a": "kuerbis", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "rote_bete", "art": "schlecht", "quelle": "bund"}, {"a": "lauch", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "stangenbohne", "art": "schlecht", "quelle": "bund"}, {"a": "lauch", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "lauch", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "mais", "b": "rote_bete", "art": "schlecht", "quelle": "bund"}, {"a": "mais", "b": "sellerie", "art": "schlecht", "quelle": "bund"}, {"a": "mais", "b": "tomate", "art": "umstritten", "quelle": "bund", "notiz": "BUND-Tabelle widersprüchlich: bei der Tomate guter, beim Mais schlechter Nachbar."}, {"a": "mangold", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "mangold", "b": "spinat", "art": "schlecht", "quelle": "bund"}, {"a": "mangold", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "minze", "b": "moehre", "art": "gut", "quelle": "bund"}, {"a": "minze", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "paprika", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "rosmarin", "art": "gut", "quelle": "hornbach2"}, {"a": "moehre", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "moehre", "b": "zwiebel", "art": "umstritten", "quelle": "bund,lwg", "notiz": "BUND: gute Nachbarn. Bayerische Gartenakademie: nicht empfehlenswert (unterschiedlicher Nährstoff- und Wasserbedarf, Schutz vor Möhren-/Zwiebelfliege klappt nur selten)."}, {"a": "paprika", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "paprika", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "petersilie", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "petersilie", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "petersilie", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "radieschen", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "rettich", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "rhabarber", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "rote_bete", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "pfluecksalat", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "radieschen", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "rettich", "b": "zucchini", "art": "schlecht", "quelle": "hornbach2"}, {"a": "rhabarber", "b": "rosenkohl", "art": "gut", "quelle": "bund"}, {"a": "rhabarber", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "rhabarber", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "ringelblume", "b": "rosenkohl", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "ringelblume", "b": "wirsing", "art": "gut", "quelle": "plantura_misch", "notiz": "soll Nematoden zurückdrängen"}, {"a": "rosenkohl", "b": "rosmarin", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "rosenkohl", "b": "salbei", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "rosenkohl", "b": "schalotte", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "rosenkohl", "b": "sellerie", "art": "gut", "quelle": "bund"}, {"a": "rosenkohl", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "rosenkohl", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "rosenkohl", "b": "tagetes", "art": "gut", "quelle": "plantura_misch"}, {"a": "rosenkohl", "b": "thymian", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "rosenkohl", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "rosenkohl", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "Kohlarten untereinander (BUND: „andere Kohlarten“)"}, {"a": "rosenkohl", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "rosmarin", "b": "wirsing", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "rote_bete", "b": "schalotte", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "rote_bete", "b": "spinat", "art": "schlecht", "quelle": "bund"}, {"a": "rote_bete", "b": "zwiebel", "art": "gut", "quelle": "bund"}, {"a": "salbei", "b": "wirsing", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "schalotte", "b": "stangenbohne", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "schalotte", "b": "wirsing", "art": "schlecht", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "schalotte", "b": "zucchini", "art": "gut", "quelle": "bund", "notiz": "von der Küchenzwiebel übernommen"}, {"a": "sellerie", "b": "spinat", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "sellerie", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "spinat", "b": "stangenbohne", "art": "gut", "quelle": "bund"}, {"a": "spinat", "b": "tomate", "art": "gut", "quelle": "bund"}, {"a": "spinat", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "stangenbohne", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "stangenbohne", "b": "zucchini", "art": "gut", "quelle": "bund"}, {"a": "stangenbohne", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "tagetes", "b": "tomate", "art": "gut", "quelle": "plantura_misch"}, {"a": "tagetes", "b": "wirsing", "art": "gut", "quelle": "plantura_misch"}, {"a": "tagetes", "b": "zucchini", "art": "gut", "quelle": "hornbach2"}, {"a": "thymian", "b": "wirsing", "art": "gut", "quelle": "plantura_misch", "notiz": "soll den Kohlweißling fernhalten"}, {"a": "tomate", "b": "wirsing", "art": "gut", "quelle": "bund"}, {"a": "wirsing", "b": "zwiebel", "art": "schlecht", "quelle": "bund"}, {"a": "zucchini", "b": "zwiebel", "art": "gut", "quelle": "bund"}];
