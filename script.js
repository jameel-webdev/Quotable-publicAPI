// https://api.quotable.io/quotes/random?limit=10
function ele(tagname, atname, atvalue) {
    let element = document.createElement(tagname);
    element.setAttribute(atname, atvalue);
    return element;
}
let container = ele("div", "class", "container");
let head = ele("h1", "class", "head");
head.innerHTML = `Simply Quotes!`;
let ul = ele("ul", "class", "cards");

async function pro() {
    let getApi = await fetch(`https://api.quotable.io/quotes/random?limit=10`);
    let getJson = await getApi.json();
    console.log(getJson);
    for (let i = 0; i < getJson.length; i++) {
        ul.innerHTML += `
                <li class="card">
                    <div>
                        <h3 class="card-title">Quote${(i + 1)}</h3>
                        <div class="card-content">
                            <p>${getJson[i].content}</p>
                        </div>
                    </div>
                    <div class="card-link-wrapper">
                        <cite class="card-link">${getJson[i].author}</cite>
                    </div>
                </li>`
    }
}
pro();
container.append(head, ul);
document.body.append(container);