module.exports = {
    id: "kleriker",
    volk: "Mensch",
    klasse: "Kleriker",
    generell: {
        ruestung: 16,
        lebenspunkte: 10,
        initiative: -1,
        uebung: 2
    },
    attribute: {
        sta: {
            basis: 2,
            athletik: false
        },
        ges: {
            basis: -1,
            akrobatik: false,
            fingerfertigkeit: false,
            heimlichkeit: false
        },
        kon: {
            basis: 2
        },
        int: {
            basis: 0,
            arkaneKunde: false,
            geschichte: false,
            nachforschungen: false,
            naturkunde: false,
            religion: true
        },
        wei: {
            basis: 3,
            heilkunde: false,
            mitTierenUmgehen: false,
            motivErkennen: true,
            ueberlebenskunst: false,
            wahrnehmung: false
        },
        char: {
            basis: 1,
            auftreten: false,
            einschuechtern: false,
            taeuschen: false,
            ueberzeugen: false
        }
    }
};