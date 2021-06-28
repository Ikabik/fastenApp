'use strict'

let Counter = {

    sec: ko.observable(0),
    min: ko.observable(0),
    h: ko.observable(0),
    buttonClicked: false,


    counterFunctionality: function () {
        let Counter = this;

        if (this.buttonClicked === false) {
            function count() {
                let i = Counter.sec()
                i++
                Counter.sec(i)

                if (Counter.sec() === 60) {
                    let j = Counter.min()
                    j++
                    Counter.min(j)

                    Counter.sec(0)
                }
                if (Counter.min() === 60) {
                    let k = Counter.h()

                    k++
                    Counter.h(k)
                    Counter.min(0)
                }
            }
            this.buttonClicked = true
            this.startStop = setInterval(count, 1000)
            document.getElementById('startEnd').textContent = 'Fasten beenden?'

        }
        else {
            clearInterval(this.startStop)
            this.buttonClicked = false
            document.getElementById('startEnd').textContent = 'Fasten starten!'
        }

        Counter.wasIsPhase()

    },

    phases: [
        {
            name: 'ZuckerUp',
            endH: 3,
            text: "Die letzte Mahlzeit wird verdaut und Blutzuckerspiegel steigt",
        },
        {
            name: 'ZuckerDown',
            endH: 9,
            text: "Die Verdauung ist abgeschlossen und jetzt sinkt langsam der Blutzuckerspiegel ab. Hier könnte der Magen knurren...",
        },
        {
            name: 'EmptyDepos',
            endH: 11,
            text: "Jetzt greift der Körper auf die kurzfristig gespeicherte Energie zurück. Die Energie der letzten Mahlzeit wird ab jetzt verbrannt und somit nicht langfristig eingelagert",
        },
        {
            name: 'Fettverbrennung',
            endH: 12,
            text: "Nach der kurzfristigen Energie gehts jetzt ans Eingemachte: ca 11 Stunden nach der letzten Mahlzeit fängt der Körper an Fettreserven zu verbrennen",
        },
        {
            name: 'Ketose',
            endH: 14,
            text: "Die Fettverbrennung geht weiter und startet jetzt nebenbei die Ketose. Ketose versorgt die Nervenzellen mit Energie und hilft neue Hirnzellen zu bilden. Smart! ",
        },
        {
            name: 'Autophagie',
            endH: 24,
            text: "Ab ca 14 Stunden Fasten startet die Autophagie. Es wird recycelt, erneuert und aufgebaut: In den Zellen.",
        },
        {
            name: 'Timer vergessen',
            endH: 100,
            text: "Fastest du noch? Langsam wird es ungesund..."
        }
    ],

    phase: ko.observable(0),
    displayPhaseText: ko.observable(),

    wasIsPhase: function () {
        let Counter = this;
        let i = 0;
        
        if (Counter.phases[i].endH >= Counter.h()) {
            Counter.displayPhaseText(Counter.phases[i].text)
            console.log('Läuft hier')
            i++
        }
        else {
            console.log('WTF')
        }
    }

};

ko.applyBindings(Counter);