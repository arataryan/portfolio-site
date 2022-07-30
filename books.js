class Book{
    constructor(name, imageList, tagLine, description, link){
      this.name = name;
      this.imageList = imageList;
      this.tagLine = tagLine;
      this.description = description;
      this.link = link;
      this.backgroundButton = document.createElement("button");
      document.getElementById("books").appendChild(this.backgroundButton);
      this.backgroundButton.className = "backgroundButton";
      this.backgroundButton.idName = "backgroundButton";
    }

    CreateName(){
        var nameElement = document.createElement("p");
        nameElement.innerText = "\n- " + this.name + " -\n";
        this.backgroundButton.appendChild(nameElement);
        nameElement.className = "nameElement";

        var space = document.createElement("br");
        nameElement.appendChild(space);
    }

    CreateTagLine(){
      var tagLineElement = document.createElement("p");
      tagLineElement.innerText = this.tagLine;
      tagLineElement.className = "tagLineElement";
      this.backgroundButton.appendChild(tagLineElement);
    }

    CreateDescription(){
      var descElement = document.createElement("p");
      descElement.innerText = this.description;
      descElement.className = "descElement";
      this.backgroundButton.appendChild(descElement);
    }

//change links to actual links
    CreateLink(){
      var space = document.createElement("p");
      space.innerText = "\n";
      this.backgroundButton.appendChild(space);

      var link = document.createElement("p");
      link.innerText = "Link: ";
      this.backgroundButton.appendChild(link);

      var linkElement = document.createElement("a");
      linkElement.href="url";
      linkElement.innerText = this.link;
      linkElement.className = "link";
      this.backgroundButton.appendChild(linkElement);
    }

    CreateImages(){
        //here are the images
        for(var i = 0; i < this.imageList.length; i++){
          var image = document.createElement("img");
          image.className = "image";
          image.src = this.imageList[i];
          this.backgroundButton.appendChild(image);
        }
    }
  }

function InitBooks()
{
  var booksList = [];

//Structure of Book Object
  //name
  //imageList
  //tagline
  //description
  //link

  theJaguarPendant = new Book("- This page is under construction -",
  ["Images/Construction.jpg"],
  "",
  "",
  "",
  "");
   booksList.push(theJaguarPendant);

   InitBookMethods(booksList);
}

//runs book functions
function InitBookMethods(booksList){
  for(var i = 0; i < booksList.length; i++){
      booksList[i].CreateName();
      booksList[i].CreateTagLine();
      booksList[i].CreateDescription();
      if(booksList[i].imageList.length != 0) booksList[i].CreateImages();
      if(booksList[i].link != "") booksList[i].CreateLink();
  }

}
InitBooks();
