module.exports = [
    /*
    Tags: Idee sollen einem Spieler schneller eine Idee geben um was es sich ungefähr handelt.

    '🗡️' Nahkampfangriff
    '🏹' Fernkampfangriff
    '🔥' Zauberangriff
    '🪄' Magisch
    '🛡️' Schadens-/Rüstungs-bonus
    '❤️‍🩹' Heilen
    '👁️' Erkennen/Entdecken/Herausfinden/Identifizieren
    '🎭' Täuschen/Verstecken
    '👪' Unterstützung/Miteinander
    '🪡' Erstellen/Erzeugen/Kreieren
    */
    {
        titel: "Dunkelsicht",
        quantitaet: Infinity,
        beschreibung: "Da du an zwielichtige Wälder und den Nachthimmel gewöhnt bist, besitzt du überlegene Sicht sowohl in Dunkelheit als auch in dämmrigem Licht. Du kannst dämmriges Licht im Umkreis von 18 Meter so behandeln, als wäre es helles Licht. Dunkelheit wird im Umkreis von 18 m wie dämmriges Licht behandelt. Allerdings kannst du im Dunkeln keine Farben erkennen, nur Graustufen.",
        charakterTag: "waldlaeufer",
        tags: ['👁️'],
    },
    {
        titel: "Deckmantel der Wildnis",
        quantitaet: Infinity,
        beschreibung: "Du kannst versuchen, dich zu verstecken, obwohl du nur von Blattwerk, starkem Regen, fallendem Schnee, Nebel oder anderen natürlichen Phänomenen leicht verschleiert wirst.", /* Wo ist der Vorteil? Sich vertstecken versuchen kann ja jeder zu jedem Zeitpunk */
        charakterTag: "waldlaeufer",
        tags: ['🎭'],
    },
    {
        titel: "Bevorzugtes Gelände: Küste",
        quantitaet: Infinity,
        beschreibung: "Wenn du einen Wurf auf Weisheit oder Intelligenz im Zusammenhang mit deinem bevorzugten Gelände ablegen musst, erhältst du +2 auf deinen Wurf.",
        charakterTag: "waldlaeufer",
        tags: ['👁️'],
    },
    {
        titel: "Langbogen + Kampfstil: Bogenschiessen",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 7\nSchaden: 1W8 + 3\nReichweite: 45 Meter (180 Meter mit Nachteil)",
        charakterTag: "waldlaeufer",
        tags: ['🏹'],
    },
    {
        titel: "Kurzschwert",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 5\nSchaden: 1W6 + 3",
        charakterTag: "waldlaeufer",
        tags: ['🗡️'],
    },
    {
        titel: "Erzfeind: Humanoide",
        quantitaet: Infinity,
        beschreibung: "Du bist bei Würfen auf Überlebenskunst im Vorteil, wenn es darum geht, deine Erzfeinde aufzuspüren, ausserdem bei Würfen auf Intelligenz, wenn es darum geht, dich an Informationen über deine Erzfeinde zu erinnern.",
        charakterTag: "waldlaeufer",
        tags: ['👁️'],
    },
    {
        titel: "Streitkolben",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 5\nSchaden: 1W6 + 3",
        charakterTag: "kleriker",
        tags: ['🗡️'],
    },
    {
        titel: "Göttliche Führung",
        quantitaet: Infinity,
        beschreibung: "Du berührst eine bereitwillige Kreatur (z.B. einen deiner Kameraden). Einmal innerhalb der nächsten Minute, kann das Ziel 1W4 würfeln und das Ergebnis auf einen Attributswurf seiner Wahl addieren. Es kann den Würfel vor oder nach dem Attributswurf werfen. Dann endet der Zauber.",
        charakterTag: "kleriker",
        tags: ['👪'],
    },
    {
        titel: "Heilige Flamme",
        quantitaet: Infinity,
        beschreibung: "Flammengleiches Licht senkt sich auf eine Kreatur innerhalb 18 Meter, zu der du direkten Sichtkontakt hast, herab. Die Kreatur muss einen Geschicklichkeitsrettungswurf schaffen, sonst erleidet sie 1W8 Schaden.",
        charakterTag: "kleriker",
        tags: ['🔥'],
    },
    {
        titel: "Domäne des Lichts: Wunde Heilen",
        quantitaet: 2,
        beschreibung: "Eine Kreatur (z.B. einen deiner Kameraden), die du berührst, erhält eine Anzahl von Lebenspunkte gleich 1W8 + 3 zurück. Der Zauber hat keine Auswirkungen auf Untote oder Konstrukte.",
        charakterTag: "kleriker",
        tags: ['❤️‍🩹'],
    },
    {
        titel: "Segnen",
        quantitaet: 2,
        beschreibung: "Du segnest bis zu drei Kreaturen deiner Wahl in Reichweite. Immer wenn ein Ziel einen Angriffs- oder Rettungswurf macht für die nächste Minute, kann es einen W4 werfen und das Ergebnis auf den Angriffswurf oder Rettungswurf addieren.", /* Reichweite? */
        charakterTag: "kleriker",
        tags: ['👪'],
    },
    {
        titel: "Schild des Glaubens",
        quantitaet: 2,
        beschreibung: "Ein schimmerndes Feld erscheint und umhüllt eine Kreatur deiner Wahl innerhalb 18 Meter. Es gewährt ihr für die nächsten 10 Minuten einen Bonus von +2 auf Rüstung.",
        charakterTag: "kleriker",
        tags: ['🛡️'],
    },
    {
        titel: "Kampfstab",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 4\nSchaden: 1W8 + 2",
        charakterTag: "druide",
        tags: ['🗡️'],
    },
    {
        titel: "Dunkelsicht",
        quantitaet: Infinity,
        beschreibung: "Das Leben unter Tage hat dazu geführt, dass Zwerge selbst bei schlechten Lichtverhältnissen hervorragend sehen können. Du kannst dämmriges Licht im Umkreis von 18 Meter so behandeln, als wäre es helles Licht. Dunkelheit wird im Umkreis von 18 Meter wie dämmriges Licht behandelt. Allerdings kannst du im Dunklen keine Farben erkennen, nur Graustufen.",
        charakterTag: "druide",
        tags: ['👁️'],
    },
    {
        titel: "Steingespür",
        quantitaet: Infinity,
        beschreibung: "Immer wenn du einen Wurf auf Geschichte ablegen sollst, der mit der Herkunft von Steinarbeiten zu tun hat, wirst du als geübt in der Fertigkeit angesehen und darfst statt dem üblichen Bonus +4 auf den Wurf addieren.",
        charakterTag: "druide",
        tags: ['👁️'],
    },
    {
        titel: "Druidenkunst",
        quantitaet: Infinity,
        beschreibung: "Wähle einen der folgenden Effekte: 1. Du kannst das Wetter der nächsten 24 Stunden vorhersagen. 2. Du sorgst dafür, dass augenblicklich eine Blume erblüht. 3. Du erschaffst fallende Blätter, einen Windhauch oder die Geräusche eines kleinen Tieres. 4. Du kannst augenblicklich ein Feuer entzünden oder löschen.",
        charakterTag: "druide",
        tags: ['👁️', '🪡', '🪄'],
    },
    {
        titel: "Gute Beeren",
        quantitaet: 2,
        beschreibung: "Bis zu zehn Beeren erscheinen in deiner Hand und werden für die Wirkungsdauer mit Magie erfüllt. Eine Kreatur kann eine Aktion verwenden, um eine Beere zu essen. Eine Beere zu essen stellt 1 Lebenspunkt wieder her, und die Beere bietet genug Nahrung, um eine Kreatur (z.B. einen deiner Kameraden) für einen Tag zu versorgen.",
        charakterTag: "druide",
        tags: ['❤️‍🩹'],
    },
    {
        titel: "Mit Tieren Sprechen",
        quantitaet: 2,
        beschreibung: "Du erhältst die Fähigkeit, für 10 Minuten Tiere zu verstehen und verbal mit ihnen zu kommunizieren. Das Wissen und das Bewusstsein vieler Tiere wird durch ihre Intelligenz eingeschränkt, aber Tiere können mindestens Informationen über nahe Orte und Monster übermitteln, auch was sie wahrnehmen können oder innerhalb des letzten Tages wahrgenommen haben.",
        charakterTag: "druide",
        tags: ['👁️', '🪄'],
    },
    {
        titel: "Zweihandschwert + Kampfstil: Kampf mit grossen Waffen",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 5\nSchaden: 2W6 + 3\nDu darfst 1er und 2er auf deinen Schadenswürfeln erneut werfen. Der zweite Wurf zählt.",
        charakterTag: "kaempfer",
        tags: ['🗡️'],
    },
    {
        titel: "Leichte Armbrust",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 3\nSchaden: 1W8 + 1\nReichweite: 24 Meter (96 Meter mit Nachteil)",
        charakterTag: "kaempfer",
        tags: ['🏹'],
    },
    {
        titel: "Schadensresistenz: Blitz",
        quantitaet: Infinity,
        beschreibung: "Du hast eine Resistenz gegen die Schadensart Blitz. Blitzschaden wird dir gegenüber halbiert.",
        charakterTag: "kaempfer",
        tags: ['🛡️'],
    },
    {
        titel: "Odemwaffe: Blitz",
        quantitaet: 2,
        beschreibung: "Du kannst deine Aktion verwenden, um einen Blitz zu speien. Wenn du deine Odemwaffe einsetzt, muss jede Kreatur in einer Linie von 9 Meter von dir weg einen Geschicklichkeitsrettungswurf ablegen (Schwierigkeitsgrad 12). Eine Kreatur erleidet 2W6 Schaden bei einem missglückten Rettungswurf und die Hälfte bei einem Erfolg.",
        charakterTag: "kaempfer",
        tags: ['🔥'],
    },
    {
        titel: "Tatendrang",
        quantitaet: 2,
        beschreibung: "Du kannst du dich für einen Augenblick über deine Grenzen hinwegsetzen. In deinem Zug kannst du eine weitere Aktion ausführen, zusätzlich zu deiner regulären Aktion und einer möglichen Bonusaktion.",
        charakterTag: "kaempfer",
        tags: [],
    },
    {
        titel: "Kletterausrüstung",
        quantitaet: Infinity,
        beschreibung: "Eine Kletterausrüstung beinhaltet spezielle Felshaken, Steigeisen, Handschuhe und einen Klettergurt. Du kannst eine Aktion verwenden, um dich zu verankern. Wenn du das tust, kannst du von dem Punkt, an dem du dich verankert hast, nicht weiter als 7 1/2 Meter fallen.",
        charakterTag: "kaempfer",
        tags: [],
    },
    {
        titel: "Dolch",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 3\nSchaden: 1W4 + 1\nReichweite: 6 Meter (18 Meter mit Nachteil)",
        charakterTag: "magier",
        tags: ['🗡️'],
    },
    {
        titel: "Kältestrahl",
        quantitaet: Infinity,
        beschreibung: "Ein eisiger Strahl aus blau-weissem Licht schiesst auf eine Kreatur in Reichweite zu. Lege einen Fernkampf-Zauberangriff (1W20 + 5) gegen das Ziel ab. Bei einem Treffer erleidet die Kreatur 1W8 Schaden, und ihre Bewegungsrate wird bis zum Beginn deines nächsten Zugs um 3 Meter verringert.",
        charakterTag: "magier",
        tags: ['🔥'],
    },
    {
        titel: "Licht",
        quantitaet: Infinity,
        beschreibung: "Berühre einen kleinen Gegenstand. Für die nächste Stunde strahlt dieser Gegenstand in einem Radius von 6 Metern helles Licht ab. Das Licht kann jede Farbe haben, die du willst.",
        charakterTag: "magier",
        tags: ['👁️'],
    },
    {
        titel: "Donnerschlag",
        quantitaet: Infinity,
        beschreibung: "Du erzeugst einen donnernden Klang, der bis zu 36 Meter weit zu hören ist. Jede Kreatur in Reichweite, ausser dir, muss einen Konstitutions-Rettungswurf bestehen oder 1W6 Schaden erleiden.",
        charakterTag: "magier",
        tags: ['🔥'],
    },
    {
        titel: "Identifizieren",
        quantitaet: 2,
        beschreibung: "Du berührst einen Gegenstand für eine Minute. Wenn es sich um einen magischen Gegenstand oder ein anderweitig mit Magie erfülltes Objekt handelt, erfährst du, welche Eigenschaften es hat, wie du sie nutzen kannst. Wenn der Gegenstand durch einen Zauber erschaffen wurde, erfährst du, um welchen Zauber es sich handelt.",
        charakterTag: "magier",
        tags: ['👁️'],
    },
    {
        titel: "Magierüstung",
        quantitaet: 2,
        beschreibung: "Du berührst eine bereitwillige Kreatur, die keine Rüstung trägt. Eine schützende magische Energie umgibt sie bis der Zauber endet. Die Basis-Rüstungsklasse des Ziels entspricht 13 + dessen Geschicklichkeitsmodifikator. Der Zauber endet, wenn das Ziel Rüstung anlegt oder du den Zauber mit einer Aktion aufhebst.",
        charakterTag: "magier",
        tags: ['🛡️'],
    },
    {
        titel: "Zweihandaxt",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 5\nSchaden: 1W12 + 3",
        charakterTag: "barbar",
        tags: ['🗡️'],
    },
    {
        titel: "Wurfspeere",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 3\nSchaden: 1W6 + 1\nReichweite: 9 Meter (36 Meter mit Nachteil)",
        charakterTag: "barbar",
        tags: ['🏹'],
    },
    {
        titel: "Kampfrausch",
        quantitaet: 2,
        beschreibung: "Für die nächste Minute machst du bei jedem Angriff 2 Schaden zusätzlich. Ausserdem nimmst du nur halben Schaden von nicht-magischem Schaden. Der Kampfrausch endet frühzeitig, falls du bewusstlos wirst oder dein Zug endet und du in diesem keine feindlich gesinnte Kreatur angegriffen oder in diesem Zug keinen Schaden erhalten hast.",
        charakterTag: "barbar",
        tags: ['🗡️', '🛡️'],
    },
    {
        titel: "Durchhaltevermögen",
        quantitaet: 2,
        beschreibung: "Wenn deine Lebenspunkte auf O fallen und du nicht stirbst, kannst du sie auf 1 setzen.",
        charakterTag: "barbar",
        tags: ['🛡️'],
    },
    {
        titel: "Wilde Angriffe",
        quantitaet: Infinity,
        beschreibung: "Wenn du einen Kritischen Treffer (eine 20ig würfelst) mit einer Nahkampfwaffe erzielst, kannst du einen der Schadenswürfel der Waffe erneut werfen und das Würfelergebnis zum Zusatzschaden des Kritischen Treffers hinzuzählen",
        charakterTag: "barbar",
        tags: ['🗡️'],
    },
    {
        titel: "Dunkelsicht",
        quantitaet: Infinity,
        beschreibung: "Dank deines orkischen Bluts besitzt du hervorragende Sicht in der Dunkelheit und in dämmrigem Licht. Du kannst im dämmrigen Licht 18 Meter weit sehen, als wäre es helles Licht, in Dunkelheit, als wäre es dämmriges Licht. Du kannst in der Dunkelheit keine Farben erkennen, nur unterschiedliche Graustufen.",
        charakterTag: "barbar",
        tags: ['👁️'],
    },
    {
        titel: "Dolch",
        quantitaet: Infinity,
        beschreibung: "Angriff: 1W20 + 5\nSchaden: 1W4 + 3\nReichweite: 6 Meter (18 Meter mit Nachteil)",
        charakterTag: "zauberer",
        tags: ['🗡️'],
    },
    {
        titel: "Einfache Illusion",
        quantitaet: Infinity,
        beschreibung: "Du erschaffst ein Geräusch oder ein Bild eines Gegenstands in Reichweite, das für 1 Minute anhält. Die Illusion endet auch, wenn du diesen Zauber noch einmal wirkst. Körperliche Interaktion mit dem Trugbild offenbart, dass es sich um eine Illusion handelt, weil Dinge es einfach durchdringen können.",
        charakterTag: "zauberer",
        tags: ['🎭'],
    },
    {
        titel: "Feuerpfeil",
        quantitaet: Infinity,
        beschreibung: "Du schleuderst einen Splitter aus Feuer auf eine Kreatur innerhalb 36 Metern. Lege einen Fernkampf-Zauberangriff (1W20 + 5) gegen das Ziel ab. Bei einem Treffer erleidet das Ziel 1W10 Schaden. Ein brennbarer Gegenstand, der von diesem Zauber getroffen wird, geht ihn Flammen auf wenn er nicht getragen oder in der Hand gehalten wird.", /* wie funktioniert der auch auf RK? */
        charakterTag: "zauberer",
        tags: ['🔥'],
    },
    {
        titel: "Taschenspielerei",
        quantitaet: Infinity,
        beschreibung: "Dieser Zauber ist ein kleinerer magischer Trick, den Zauberlehrlinge zum Üben verwenden. Beispiele: einen Funkenregen, einen Windhauch, schwache Musik, einen eigenartigen Geruch, ein kleines Feuer entzünden oder löschen, einen kleinen Gegenstand reinigen oder beschmutzen. Du kannst bis zu drei der Effekte gleichzeitig aktiviert haben.",
        charakterTag: "zauberer",
        tags: ['🪄'],
    },
    {
        titel: "Magisches Geschoss",
        quantitaet: 2,
        beschreibung: "Du erschaffst drei leuchtende Pfeile aus magischer Energie. Jeder Pfeil trifft eine Kreatur deiner Wahl in Reichweite, die du sehen kannst. Ein Pfeil fügt dem Ziel 1W4 + 1 Schaden zu. Die Pfeile schlagen alle gleichzeitig ein und du kannst sie auf eine oder mehrere Kreaturen losschicken.",
        charakterTag: "zauberer",
        tags: ['🔥'],
    },
    {
        titel: "Selbstverkleidung",
        quantitaet: 2,
        beschreibung: "Du lässt dich selbst - inklusive deiner Kleidung, Rüstung, Waffen und anderen Besitztümer an deiner Person - anders aussehen. Maximal bis zu einer Stunde oder bis du deine Aktion verwendest, um ihn aufzuheben. Du kannst deinen grundlegenden Körpertyp nicht ändern, also musst du eine Gestalt annehmen, die die gleiche grundsätzliche Anordnung von Gliedmassen hat.",
        charakterTag: "zauberer",
        tags: ['🎭'],
    }
];