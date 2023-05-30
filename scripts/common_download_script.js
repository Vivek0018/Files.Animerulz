// var home_anchor = document.getElementById("a-home-anchor-tag");
// var anime_anchor = document.getElementById("a-active-page-tag");

// home_anchor.setAttribute("href", "https://animerulz.xyz/");
// if (anime_anchor != null){
//   var anime_anchor_cont = anime_anchor.textContent;
//   let anime_anchor_href;
//   if(anime_anchor_cont.toLowerCase() == "naruto")
//     anime_anchor.setAttribute("href", "http://127.0.0.1:5500/Naruto/"); 
// }

// var img_main = document.getElementsByClassName("nav-image")[0];
// img_main.setAttribute("onclick", "open_home()");

// function open_home(){
//   window.open("http://animerulz.xyz/", "_self");
// }


// //for nav bar
// var nav = document.getElementById("nav-bar-id");
// var search_bar = document.getElementById("search-input");
// var navRect = nav.getBoundingClientRect();
// var search_icon = document.getElementById("search-icon");
// var windowVerticalScroll = window.scrollY;
// var search_field = document.getElementById("search-input");
// if((navRect.top-windowVerticalScroll) < "-250"){
//     nav.style.backgroundColor = "#232643";
// }
// else{
//     nav.style.backgroundColor = "#23264380";
// }
// if((navRect.top-windowVerticalScroll) < "-930"){
//     nav.style.marginTop = "-140px";
//     search_bar.style.display = "none";
//     // search_bar.style.transition = "display 0.5s";
// }
// else{
//     nav.style.marginTop = "0";
// }



var video_player = document.getElementById("video-player");
// console.log(video_player.offsetHeight, video_player.offsetWidth);
if(screen.width <= 940){
  var video_player_width = video_player.offsetWidth;
  video_player.style.height = 0.559 * video_player_width + "px";
  console.log(video_player.offsetHeight, video_player.offsetWidth);
}

// function displaySVG(){
//   try{
//     var divisionTemp = document.getElementsByClassName("short-anime-ep")[0];
//     var SVG = document.getElementsByClassName("play-svg")[0];

//     divisionTemp.addEventListener(onmouseover, function(){
//       SVG.style.display = "block";
//     })
//   }
//   catch{}
// }

// displaySVG();

function scrollToDiv() {
  var mainDivision = document.getElementsByClassName("content")[0];
      var division = document.getElementsByClassName("active")[1];
      if(division == undefined)
          var division = document.getElementsByClassName("active-episode")[0];
      // console.log(division);

      // division.scrollIntoView({ behavior: 'auto' });
    mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
    console.log(division.offsetTop);
  // console.log(division);
    // var normalView = document.getElementsByClassName("")[0].scrollIntoView();
}

setTimeout(scrollToDiv, 500);

