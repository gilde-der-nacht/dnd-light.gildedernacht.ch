module.exports = {
    id: "zauberer",
    volk: "Tiefling",
    klasse: "Zauberer",
    generell: {
        ruestung: 12,
        lebenspunkte: 8,
        initiative: 2,
        uebung: 2
    },
    attribute: {
        sta: {
            basis: 1,
            athletik: false
        },
        ges: {
            basis: 2,
            akrobatik: false,
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
            basis: 3,
            auftreten: false,
            einschuechtern: false,
            taeuschen: true,
            ueberzeugen: true
        }
    }
};