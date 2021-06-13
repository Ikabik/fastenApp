'use strict'

let Counter = {

    sec: ko.observable(0),
    min: ko.observable(0),
    h: ko.observable(0),
    buttonClicked: false,


    counterFunctionality: function () {
        let Counter = this;
        let startStop; 

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
                console.log(Counter.sec(), Counter.min())
            }
            this.buttonClicked = true
            this.startStop= setInterval(count, 1000)
            document.getElementById('startEnd').textContent = 'Fasten beenden?'
            console.log('Hello')
        }
        else {
            clearInterval(this.startStop)
            this.buttonClicked = false
            document.getElementById('startEnd').textContent = 'Fasten starten!'
            console.log ('Noch mal')
        }

    }

}

ko.applyBindings(Counter);