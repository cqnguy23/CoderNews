let categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
function renderCategories() {
    let categoryMap =  categories.map((category) => `<a href = "http://127.0.0.1:5501/index.html?category=${category}"> ${category.toUpperCase()} </a>`
    )
    document.getElementById("categories").innerHTML = categoryMap.join("|");
}

renderCategories();