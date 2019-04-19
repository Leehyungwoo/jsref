({
    a: 10,
    changeV: function () {
        this.a = 5
        console.log(this.a)
    },
    init: function () {
        this.changeV()
    }

}.init())