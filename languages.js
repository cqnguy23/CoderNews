let languages = ["ar","de","en","es","fr","he","it","nl","no","pt","ru","se","ud","zh"]
function renderCategories() {
    let languageMap =  languages.map((language) => `<a href = "http://127.0.0.1:5501/index.html?language=${language}"> ${language.toUpperCase()} </a>`
    )
    document.getElementById("languages").innerHTML = languageMap.join("|");
}

renderCategories();