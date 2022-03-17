if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceworker.js")
    .then((registration) => {
      console.log(registration);
    })
    .catch((err) => {
      console.log(err);
    });
}
