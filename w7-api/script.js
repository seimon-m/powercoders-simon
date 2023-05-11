function loadScript(url) {
    const script = document.createElement("script");
    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
        script.onload = () => {
            resolve("Script is loaded");
        };
        script.onerror = () => {
            reject("Error loading script");
        };
        script.src = url;
    });
}

loadScript("https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
