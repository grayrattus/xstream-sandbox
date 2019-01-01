import xs from 'xstream'

const promise = new Promise((resolve) => {
    setInterval(() => resolve(30), 1000);
});
const promise2 = new Promise((resolve) => {
    setInterval(() => resolve(55), 1000);
});

var streamWithPromise = xs.fromPromise(promise);
var streamWithPromise2 = xs.fromPromise(promise2);

streamWithPromise.addListener({
    next: i => console.log(i),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});

streamWithPromise2.addListener({
    next: i => console.log(i),
    error: err => console.error(err),
    complete: () => console.log('completed'),
});

const combinedStreams = xs.merge(streamWithPromise, streamWithPromise2);
