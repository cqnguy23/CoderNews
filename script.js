

function getUrl() {
 let url = "https://newsapi.org/v2/top-headlines?apiKey=2a25c01929c345b4a768b0154c14ff98";
    const urlExtension = window.location.search.split("?")[1];
        if (!urlExtension) url += "&country=us"    
        else { url += "&" + urlExtension }
    console.log(url)
    return url;
}
async function getArticles() {
    const response = await fetch(getUrl());
    const json = await response.json();
    const {articles} = json;
    document.getElementById("title").innerHTML = `<h1 style="text-align: center; color:red; margin-top: 15px"> CoderNews </h1>`;
    console.log({articles})
    let goodArticles = articles.filter((article) => article.author)
    let articleHTML = goodArticles.map(renderArticles)
    document.getElementById("content").innerHTML = articleHTML.join("")
}

function renderArticles(article) {
    return `
        <div onmouseover="this.style.backgroundColor='beige';" onmouseout="this.style.backgroundColor='';" style="display: flex; flex-direction: column; align-items: center; width: 90vh; margin-top: 40px; border: 1px solid black">
            <h4 style= "width: 480px; margin-top: 15px"> ${article.title} </h4>
           <img src="${article.urlToImage}" width=480px height=240px">
           <div style="display: flex; justify-content: space-between; width:480px; margin-top: 10px" >
                <h5> ${article.author} </h4>
                <h6 class = "mb-0"> <a href="${article.url}">${article.source.name} </a> </h6>
            </div>
            <p style="width:480px "> ${article.content} </p>
        </div>
    `
}


getArticles();