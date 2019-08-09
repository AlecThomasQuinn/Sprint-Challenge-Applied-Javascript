// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {

        // logging the shape of the data
        console.log('have data:', response.data.articles);

        articlesBootstrap = response.data.articles.bootstrap;
        console.log(articlesBootstrap);
//        articlesBootstrap.forEach(article => {console.log(article.headline)});

        articlesBootstrap.forEach(article => {
            let newArticle = createArticle(article.headline, article.authorPhoto, article.authorName);
            cardContainer.appendChild(newArticle);
        });

        articlesJavascript = response.data.articles.javascript;
        articlesTechnology = response.data.articles.technology;
        articlesJquery = response.data.articles.jquery;
        articlesNode = response.data.articles.node;

        articlesJavascript.forEach(article => {
            let newArticle = createArticle(article.headline, article.authorPhoto, article.authorName);
            cardContainer.appendChild(newArticle);
        });

        articlesTechnology.forEach(article => {
            let newArticle = createArticle(article.headline, article.authorPhoto, article.authorName);
            cardContainer.appendChild(newArticle);
        });

        articlesJquery.forEach(article => {
            let newArticle = createArticle(article.headline, article.authorPhoto, article.authorName);
            cardContainer.appendChild(newArticle);
        });

        articlesNode.forEach(article => {
            let newArticle = createArticle(article.headline, article.authorPhoto, article.authorName);
            cardContainer.appendChild(newArticle);
        });
        
// there is a better, DRY way to do this either involving "map"
// or "forEach" that is beyond me atm, I will investigate further later
        

        })
    .catch( err => {
        console.log('have not data in Cards');
    })

function createArticle(headline, photo, name){
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const authorContain = document.createElement('div');
    const imgContain = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(cardHeadline);
    card.appendChild(authorContain);
        authorContain.appendChild(imgContain);
            imgContain.appendChild(authorImg);
        authorContain.appendChild(authorName);

    
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    authorContain.classList.add('author');
    imgContain.classList.add('img-container');

    cardHeadline.textContent = headline;
    authorImg.src = photo;
    authorName.textContent = `By ${name}`;

    return card;
};