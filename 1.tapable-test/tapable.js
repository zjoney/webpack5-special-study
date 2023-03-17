class hooks {
    constructor() {
        this.taps = [];
    }
    tap(option, callback) {
        if (option.before) {
            //
        }
        this.taps.push(callback)
    }
    call(option) {
        this.taps.forEach((callback) => {
            callback(option)
        })
    }
}
let a = new hooks();


a.tap(() => {
    console.log(121212)
})

a.call();
