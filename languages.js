let languages = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
function renderCategories() {
    let languageMap =  languages.map((language) => `<a href = "http://127.0.0.1:5501/index.html?language=${language}"> ${language} </a>`
    )
    document.getElementById("languages").innerHTML = languageMap;
}

renderCategories();