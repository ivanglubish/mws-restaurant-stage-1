if (navigator.serviceWorker) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js')
    .then(function (registration) {
      console.log('registration worked', registration);
    })
    .catch(function (err) {
      console.log('registration failed', event);
    });
  });
}
