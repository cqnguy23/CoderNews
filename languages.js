let languages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"]

function renderLanguages() {
    const urlExtension = window.location.search.split("?")[1];
    let tag = urlExtension.split("=")[0];
    let value = urlExtension.split("=")[1];
    console.log(urlExtension);
    let languagesMap = [];
    if (tag == "category") {
        languagesMap = languages.map((languages) => `<a href = "http://127.0.0.1:5501/index.html?language=${languages}&${urlExtension}"> ${languages.toUpperCase()} </a>`
        )
    }
    else {
        languagesMap = languages.map((languages) => `<a href = "http://127.0.0.1:5501/index.html?language=${languages}"> ${languages.toUpperCase()} </a>`
        )
    }
    document.getElementById("languages").innerHTML = languagesMap.join("|");
}

renderLanguages();