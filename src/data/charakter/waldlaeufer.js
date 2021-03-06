module.exports = {
    id: "waldlaeufer",
    volk: "Waldelf",
    klasse: "Waldläufer",
    generell: {
        ruestung: 15,
        lebenspunkte: 12,
        initiative: 3,
        uebung: 2
    },
    attribute: {
        sta: {
            basis: 1,
            athletik: false
        },
        ges: {
            basis: 3,
            akrobatik: false,
            fingerfertigkeit: false,
            heimlichkeit: true
        },
        kon: {
            basis: 2
        },
        int: {
            basis: 0,
            arkaneKunde: false,
            geschichte: false,
            nachforschungen: true,
            naturkunde: false,
            religion: false
        },
        wei: {
            basis: 2,
            heilkunde: true,
            mitTierenUmgehen: false,
            motivErkennen: false,
            ueberlebenskunst: false,
            wahrnehmung: true
        },
        char: {
            basis: -1,
            auftreten: false,
            einschuechtern: false,
            taeuschen: false,
            ueberzeugen: false
        }
    }
};