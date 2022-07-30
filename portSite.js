function GamesPage(){
    window.location.href = "games.html";
}

function BooksPage(){
    window.location.href = "books.html";
}

function InfoPage(){
    window.location.href = "info.html";
}

function HomePage(){
    window.location.href = "index.html";
}

var homeButton = document.getElementById("homeButton");
var gamesButton = document.getElementById("gamesButton");
var booksButton = document.getElementById("booksButton");
var infoButton = document.getElementById("infoButton");

homeButton.addEventListener("click", HomePage);
gamesButton.addEventListener("click", GamesPage);
booksButton.addEventListener("click", BooksPage);
infoButton.addEventListener("click", InfoPage);
