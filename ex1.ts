import xs from 'xstream'

const promise = new Promise((resolve) => {
  resolve(30);
});

var streamWithPromise = xs.fromPromise(promise);

streamWithPromise.addListener({
  next: i => console.log(i),
  error: err => console.error(err),
  complete: () => console.log('completed'),
})