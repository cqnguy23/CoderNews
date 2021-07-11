
let page = 1;
let q;
let queryPresent = false;
function getUrl() {
    let url = "https://newsapi.org/v2/top-headlines?apiKey=2a25c01929c345b4a768b0154c14ff98";

    const urlExtension = window.location.search.split("?")[1];
        if (!urlExtension) {url += "&country=us"}    
        else {
            url += "&" + urlExtension;
        }
    return url;
}
let articles = [];
let searchBar = document.getElementById("searchBar");
searchBar.addEventListener('submit',(event) => {
    findValue(searchBar.elements['value'].value)
    event.preventDefault();
})
async function getArticles() {
    try {
        let urlToGet = getUrl() + `&page=${page}`
        if (queryPresent) {
            urlToGet += q ;
        }
        let response = await fetch(urlToGet);
        const json = await response.json();
        if (page == 1) {
            articles = json.articles;
        }
        else {
            articles = articles.concat(json.articles);
        }
        document.getElementById("title").innerHTML = `<h1 style="text-align: center; color:red; margin-top: 15px"> CoderNews </h1>`;

        localStorage.setItem("willNotWork", articles);

        localStorage.setItem("willWork", JSON.stringify(articles));
    } catch (error) {
        console.log(error);
        articles = JSON.parse(localStorage.getItem("willWork"));
    }
    finally {
        let goodArticles = articles.filter((article) => article.author)
        let articleHTML = goodArticles.map(renderArticles);
        document.getElementById("content").innerHTML = articleHTML.join("");
    }
  
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

function renderNextPage() {
    ++page;
    getArticles();
    console.log("Invoke")
}

function findValue(value) {
    q = `&q=${value}`
    queryPresent = true;
    getArticles();
    console.log("Here")
}