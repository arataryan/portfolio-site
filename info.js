var contact = document.getElementById("contact");
var email = document.getElementById("myEmail");
var linkedIn = document.getElementById("linkedInButton");
var twitter = document.getElementById("twitterButton");

contact.appendChild(email);
contact.appendChild(linkedIn);
contact.appendChild(twitter);

function TwitterButton(){
  window.location.href = "https://twitter.com/Studio_Yarn_";
}

function LinkedInButton(){
  window.location.href = "https://www.linkedin.com/in/ryan-arata-727921209/";
}

twitter.addEventListener("click", TwitterButton);
linkedIn.addEventListener("click", LinkedInButton);
