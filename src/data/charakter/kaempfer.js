module.exports = {
    id: "kaempfer",
    volk: "Drachenblütige (Bronze)",
    klasse: "Kämpfer",
    generell: {
        ruestung: 16,
        lebenspunkte: 12,
        initiative: 1,
        uebung: 2
    },
    attribute: {
        sta: {
            basis: 3,
            athletik: false
        },
        ges: {
            basis: 1,
            akrobatik: true,
            fingerfertigkeit: false,
            heimlichkeit: false
        },
        kon: {
            basis: 2
        },
        int: {
            basis: -1,
            arkaneKunde: false,
            geschichte: false,
            nachforschungen: false,
            naturkunde: false,
            religion: false
        },
        wei: {
            basis: 0,
            heilkunde: false,
            mitTierenUmgehen: false,
            motivErkennen: false,
            ueberlebenskunst: false,
            wahrnehmung: false
        },
        char: {
            basis: 2,
            auftreten: false,
            einschuechtern: true,
            taeuschen: false,
            ueberzeugen: false
        }
    }
};