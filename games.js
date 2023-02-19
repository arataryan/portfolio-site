class Game{
    constructor(name, tagLine, description, steamLink, itchLink, videoList, imageList, headerPic, imageDescription=""){
      this.name = name;
      this.tagLine = tagLine;
      this.description = description;
      this.steamLink = steamLink;
      this.itchLink = itchLink;
      this.videoList = videoList;
      this.imageList = imageList;
      this.headerPic = headerPic;
      this.imageDescription = imageDescription;

      this.backgroundButton = document.createElement("button");
      document.getElementById("games").appendChild(this.backgroundButton);
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
    CreateSteamLink(){
      var space = document.createElement("p");
      space.innerText = "\n";
      this.backgroundButton.appendChild(space);

      var steam = document.createElement("p");
      steam.innerText = "Steam page: ";
      this.backgroundButton.appendChild(steam);

      var steamLinkElement = document.createElement("a");
      steamLinkElement.href = this.steamLink;
      steamLinkElement.innerText = this.steamLink;
      steamLinkElement.target="_blank";
      steamLinkElement.className = "steamLink";

      this.backgroundButton.appendChild(steamLinkElement);
    }

    CreateItchLink(){
      var space = document.createElement("p");
      space.innerText = "\n";
      this.backgroundButton.appendChild(space);

      var itch = document.createElement("p");
      itch.innerText = "itch.io page: ";
      this.backgroundButton.appendChild(itch);

      var itchLinkElement = document.createElement("a");
      itchLinkElement.href = this.itchLink;
      itchLinkElement.innerText = this.itchLink;
      itchLinkElement.className = "itchLink";
      itchLinkElement.target="_blank";
      this.backgroundButton.appendChild(itchLinkElement);
    }

    CreateVideo(){
      for(var i = 0; i < this.videoList.length; i++){
        var videoElement = document.createElement("iframe");
        videoElement.className = "videoElement";
        videoElement.src = this.videoList[i];
        this.backgroundButton.appendChild(videoElement);
        videoElement.allow = "autoplay";
        videoElement.autoplay = true;
        videoElement.preload="auto";


        var space = document.createElement("br");
        this.backgroundButton.appendChild(space);
      }
    }

    CreateImageDescription(){
      var imageDescription = document.createElement("p");
      imageDescription.innerText = this.imageDescription;
      imageDescription.className = "imageDescription";
      this.backgroundButton.appendChild(imageDescription);
    }

    CreateImages(){
      //the main class
        var container = document.createElement("div");
        container.className = "container"
        this.backgroundButton.appendChild(container);
      //main container
        var swiper = document.createElement("div");
        swiper.className = "swiper";
        container.appendChild(swiper);
      //swiper wrapper
        var swiperWrapper = document.createElement("div");
        swiperWrapper.className = "swiper-wrapper";
        swiper.appendChild(swiperWrapper);

      //here are the images
        for(var i = 0; i < this.imageList.length; i++){
          var swiperSlide = document.createElement("div");
          swiperSlide.className = "swiper-slide";
          swiperWrapper.appendChild(swiperSlide);

          var image = document.createElement("img");
          image.className = "image";
          image.src = this.imageList[i];

          swiperSlide.appendChild(image);

      //pagination
        var swiperPagination = document.createElement("div");
        swiperPagination.className = "swiper-pagination";
        swiper.appendChild(swiperPagination);

      //swiper buttons
        var swiperButtonPrev = document.createElement("div");
        swiperButtonPrev.className = "swiper-button-prev";

        var swiperButtonNext = document.createElement("div");
        swiperButtonNext.className = "swiper-button-next";

        swiper.appendChild(swiperButtonPrev);
        swiper.appendChild(swiperButtonNext);



        }
    }

    CreateHeaderImage(){
        var headerImage = document.createElement("img");
        headerImage.src = this.headerPic;
        headerImage.className = "headerImage";
        this.backgroundButton.appendChild(headerImage);
    }
}

function InitGames()
{
  var gamesList = [];

//Structure of Game Object
  //name
  //tagline
  //description
  //steamLink
  //itchLink
  //videoList
  //imageList
  //headerImage

  spirimon = new Game("Spirimon",
   "A spirit collecting/battling RPG inspired by the likes of Pokémon and similar JRPGs.",
   "Battle both evil necromancers and friendly mediums on your quest to eradicate the necromancer covens. Encounter a handful of wild spirits, each with their own moves, type, and stylish look. Switch to and from the spirit world with the click of a button. Enjoy the afterlife!",
   "",
   "https://arataryan.itch.io/spirimon",
   ["SpirimonBattleVideo.mp4"],
   ["Images/Spirimon1.png", "Images/Spirimon2.png", "Images/Spirimon3.png", "Images/Spirimon4.png", "Images/Spirimon5.png", "Images/Spirimon6.png", "Images/Spirimon8.png", "Images/Spirimon9.png"],
   "Images/SpirimonLogo.png");
   gamesList.push(spirimon);

  strawberrySamurai = new Game("Strawberry Samurai",
   "CMSCI Senior Project: A samurai action platformer about sentient fruit.",
   "Slice through enemy fruit to advance through Japanese-themed levels. Avoid platforming obstacles, defeat bosses, \n receive abilities, and enjoy hand-drawn environments. Oh, and bathe in the juice of your enemies.",
   "https://store.steampowered.com/app/1686280/Strawberry_Samurai/",
   "https://arataryan.itch.io/strawberry-samurai",
   ["OrangeHouses.mp4", "ChainedFruit.mp4"],
   [],
   "Images/StrawberrySamuraiHeaderShort.png");
   gamesList.push(strawberrySamurai);

   sounosCurse = new Game("Souno's Curse",
   "Worked with Kiro Team as an environmental artist on this project.",
   "Embark on a short and emotional journey through a cursed cave in this 2D hand-drawn platformer with \n action and metroidvania elements. Uncover a touching story about regrets and the value of living in the moment.",
   "https://store.steampowered.com/app/1711700/Sounos_curse/",
   "",
   ["SounosCurseTrailer.mp4"],
   ["Images/SC1.png", "Images/SC2.png", "Images/SC3.png", "Images/SC4.png", "Images/SC5.png", "Images/SC6.png", "Images/SC7.png", "Images/SC8.png"],
   "Images/Souno'sCurseHeader.png",
   "I worked on many of the ground assets. In the images below, I drew the \nmushrooms, grassy rocks, vines, plants, cave grass, torch pillars, white platform.");
   gamesList.push(sounosCurse);

   juvenilia = new Game("Juvenilia",
   "A story driven game where all character dialogue is poetry.",
   "Juvenilia is a poem-based narrative adventure game with a kooky, Tim Burton-inspired cast of characters. \n Join Lane, a self-conscious young violinist, as he brings music to a strange, emotionless new world.",
   "",
   "https://arataryan.itch.io/juvenilia",
   ["GraveyardFalling.mp4"],
   ["Images/Juvenilia1.jpg", "Images/Juvenilia2.jpg", "Images/Juvenilia5.jpg"],
   "Images/JuveniliaHeader.png");
   gamesList.push(juvenilia);

/*
   heartBreak = new Game("Heart Break",
   "Made in 4 days for the Coding Blocks Game Jam. \n -Winner of the Coding Blocks Game Jam- \n Theme: Everything is broken",
   "The townspeople of Heartsville are broken in two! Join Hart Jr. in recovering the missing heart pieces, \n while at the same time teaching the culprits, the Bleeding Heart Gang, a hearty lesson.  But watch out - the \n gang is no joke! Bounce on their heads to inflict some cardiovascular damage!",
   "",
   "https://arataryan.itch.io/heart-break",
   [],
   ["Images/HeartBreak1.png", "Images/HeartBreak2.png", "Images/HeartBreak3.png"],
   "");
   gamesList.push(heartBreak);

   bullyBash = new Game("Bully Bash",
   "First longer term project.",
   "Dip, dodge, and punch in this frantic, arena style beat 'em up. Free your new school from the clutches of your bullies! \n Using your fists, work your way to the top of the bully food chain by defeating your school's menacing gangs.",
   "",
   "https://arataryan.itch.io/bully-bash",
   [],
   ["Images/BullyBash1.png", "Images/BullyBash2.png", "Images/BullyBash3.png", "Images/BullyBash4.png"],
   "");
   gamesList.push(bullyBash);

   afterwards = new Game("Afterwards",
   "First game jam. \n Submission to the I Can't Write But I Want To Tell A Story game jam. \n The theme was 'lost'.",
   "A short, poem based, narrative game about the afterlife. Features graphics influenced by Limbo.",
   "",
   "https://arataryan.itch.io/afterwards",
   [],
   ["Images/Afterwards1.png", "Images/Afterwards2.png", "Images/Afterwards3.png"],
   "");
   gamesList.push(afterwards);

*/

   InitGameMethods(gamesList);
}

//runs game functions
function InitGameMethods(gamesList){
  for(var i = 0; i < gamesList.length; i++){
      //console.log(gamesList[i].name);
      if(gamesList[i].headerPic != "") gamesList[i].CreateHeaderImage();
      gamesList[i].CreateName();
      gamesList[i].CreateTagLine();
      gamesList[i].CreateDescription();
      if(gamesList[i].videoList.length != 0) gamesList[i].CreateVideo();
      if(gamesList[i].imageDescription != "") gamesList[i].CreateImageDescription();
      if(gamesList[i].imageList.length != 0) gamesList[i].CreateImages();
      if(gamesList[i].steamLink != "")gamesList[i].CreateSteamLink();
      if(gamesList[i].itchLink != "") gamesList[i].CreateItchLink();
  }

}
InitGames();
