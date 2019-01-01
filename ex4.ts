import xs from 'xstream'

var producer = {
    start: function (listener: any) {
        this.id = setInterval(() => {
            this.arrayOfNumbers.push(this.arrayOfNumbers.length);
            listener.next(this.arrayOfNumbers)
        }, 1000)
    },

    stop: function () {
        clearInterval(this.id)
    },

    id: 0,
    arrayOfNumbers: Array<number>()
}

const memoryStream = xs.createWithMemory(producer);
memoryStream.addListener({
    next: i => console.log(i),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});