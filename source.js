'use strict'

/*let todoModel = {

    items: ko.observableArray([]),

    addItem: function (){
        let model = this;
        let item = {
            text: ko.observable(text.value),
            priority: ko.observable(priority.value)
        }

        model.items.push(item)
    },

    removeItem: function (item){
        let model = this;
        model.items.remove(item);
    }
};

ko.applyBindings(todoModel);*/
let Counter = {

        sec: ko.observable(0),
        min: ko.observable(0),
        h: ko.observable(0),

    counterFunctionality: function () {
        let Counter = this;

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
        setInterval(count, 1000)
    }

}

ko.applyBindings(Counter);