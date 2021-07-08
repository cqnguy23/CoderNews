let languages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"]

function renderLanguages() {
    let languagesMap = [];
    const urlExtension = window.location.search.split("?")[1];
    if (urlExtension) {
        let tag = urlExtension.split("=")[0];
        if (tag == "category") {
            languagesMap = languages.map((languages) => `<a href = "http://127.0.0.1:5501/index.html?language=${languages}&${urlExtension}"> ${languages.toUpperCase()} </a>`
            )
        }
    }

    else {
        languagesMap = languages.map((languages) => `<a href = "http://127.0.0.1:5501/index.html?language=${languages}"> ${languages.toUpperCase()} </a>`
        )
    }
    document.getElementById("languages").innerHTML = languagesMap.join("|");
}

renderLanguages();