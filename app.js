const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
function move(){
  arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 270);
      clickCounter++;
      if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
      } else {
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
      
    });
  
    console.log(Math.floor(window.innerWidth / 270));
  });
}

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


//Create

var movieNominationAPI = 'http://localhost:3000/movieNomination'
var movieHotAPI = 'http://localhost:3000/movieHot'
var movieTheatraAPI = 'http://localhost:3000/movieTheatra'
var movieComingSoonAPI = 'http://localhost:3000/movieComingSoon'


function start(){
  getMovie0(renderMovie0);
  
  
  getMovie1(renderMovie1);
  getMovie2(renderMovie2);
  getMovie3(renderMovie3);

}
start()

function getMovie0(callback){
  fetch(movieNominationAPI).then((respose) => {return respose.json()})
  .then(callback)
}
function getMovie1(callback){
  fetch(movieHotAPI).then((respose) => {return respose.json()})
  .then(callback)
}
function getMovie2(callback){
  fetch(movieTheatraAPI).then((respose) => {return respose.json()})
  .then(callback)
}
function getMovie3(callback){
  fetch(movieComingSoonAPI).then((respose) => {return respose.json()})
  .then(callback)
}


function renderMovie0(movie) 
{
    var listMovie = document.getElementsByClassName('movie-list')[0];
    var htmls = movie.map(function(movie)
    {
        return `<div class="movie-list-item id-${movie.id}">
        <img class="movie-list-item-img" src="${movie.img}" alt="">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.desc}</p>
        <button class="movie-list-item-button"><a href="${movie.href}"target="_blank">WATCH TRAILER</a></button>
    </div>
        `

    });
    listMovie.innerHTML = htmls.join('');
    move()
}
function renderMovie1(movie) 
{
    var listMovie = document.getElementsByClassName('movie-list')[1];
    var htmls = movie.map(function(movie)
    {
        return `<div class="movie-list-item id-${movie.id}">
        <img class="movie-list-item-img" src="${movie.img}" alt="">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.desc}</p>
        <button class="movie-list-item-button"><a href="${movie.href}"target="_blank" >WATCH TRAILER</a></button>
    </div>
        `

    });
    listMovie.innerHTML = htmls.join('');
    move()
}
function renderMovie2(movie) 
{
    var listMovie = document.getElementsByClassName('movie-list')[2];
    var htmls = movie.map(function(movie)
    {
        return `<div class="movie-list-item id-${movie.id}">
        <img class="movie-list-item-img" src="${movie.img}" alt="">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.desc}</p>
        <button class="movie-list-item-button"><a href="${movie.href}"target="_blank">WATCH TRAILER</a></button>
    </div>
        `

    });
    listMovie.innerHTML = htmls.join('');
    move()
   }
function renderMovie3(movie) 
{
    var listMovie = document.getElementsByClassName('movie-list')[3];
    var htmls = movie.map(function(movie)
    {
        return `<div class="movie-list-item id-${movie.id}">
        <img class="movie-list-item-img" src="${movie.img}" alt="">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.desc}</p>
        <button class="movie-list-item-button"><a href="${movie.href}"target="_blank">WATCH TRAILER</a></button>
    </div>
        `

    });
    listMovie.innerHTML = htmls.join('');
    move()
}
