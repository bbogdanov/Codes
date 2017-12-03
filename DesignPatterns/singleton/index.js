var Singleton = (function () {
    var instance;

    function createInstance() {
        return new Singleton();
    }

    function Singleton() {
        this.counter = 0;

        this.increase = function () {
            this.counter++;
        }

        this.decrease = function () {
            this.counter--;
        };

        return this;
    }

    return {
        getInstance: function () {
            if(!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
}());

console.log(Singleton.getInstance() === Singleton.getInstance());