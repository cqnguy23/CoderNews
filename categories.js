let categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
function renderCategories() {
    let categoryMap = [];
    const urlExtension = window.location.search.split("?")[1];
    if (urlExtension) {
        let tag = urlExtension.split("=")[0];
        if (tag == "language") {
            categoryMap = categories.map((category) => `<a href = "http://127.0.0.1:5501/index.html?category=${category}&${urlExtension}"> ${category.toUpperCase()} </a>`
            )
        }
        else {
            categoryMap = categories.map((category) => `<a href = "http://127.0.0.1:5501/index.html?category=${category}"> ${category.toUpperCase()} </a>`)
        }
    }
    else {
        categoryMap = categories.map((category) => `<a href = "http://127.0.0.1:5501/index.html?category=${category}"> ${category.toUpperCase()} </a>`
        )
    }
    console.log(categoryMap)
    document.getElementById("categories").innerHTML = categoryMap.join("|");


}

renderCategories();