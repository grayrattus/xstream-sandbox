import xs from 'xstream'

const promise = new Promise((resolve) => {
    setInterval(() => resolve(30), 5000);
});
const promise2 = new Promise((resolve) => {
    setInterval(() => resolve(55), 5000);
});

var streamWithPromise = xs.fromPromise(promise);
var streamWithPromise2 = xs.fromPromise(promise2);

let combinedStreams = xs.merge(streamWithPromise, streamWithPromise2);
const mapedStream = combinedStreams.map((value: any) => value * 10);

combinedStreams.addListener({
    next: i => console.log(i),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});

mapedStream.addListener({
    next: i => console.log(i),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});