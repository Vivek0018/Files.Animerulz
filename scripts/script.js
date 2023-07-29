//for search box 


// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


inputBox.setAttribute("type", "search");
inputBox.style.width = "100%";
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    let count = 0;
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            if (count <= 5){
                count += 1;
                return data = `<li>${data}</li>`;
            }
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
            allList[i].setAttribute("id", "button-on-select");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    window.open("https://animerulz.xyz/" + selectData.replace(/[^a-zA-Z0-9]/g, ""), "_self");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
function show_search_box(){
    var search_field = document.getElementById("search-input");
    var search_field = document.getElementsByClassName("search-input")[0];
    if(search_field.style.display == "block"){
      search_field.style.display = "none";
    }
    else{
      search_field.style.display = "block";
      document.getElementsByTagName("input")[0].focus();
    }
    // if((navRect.top-windowVerticalScroll) < "-930"){
    //     search_field.style.display = "none";
    // }
    // else{
    //     search_field.style.display = "block";
    // }
    // search_field.style.transition = "all 5s";
}
// var image_in_video = document.getElementsByClassName("image-in-video-player")[0];
// var recom_anime = document.getElementsByClassName("recommendations")[0];
// var nav = document.getElementsByClassName("nav-bar")[0];
// var add_this = document.getElementById("addthis");
setTimeout(preloaderDisplayNone, 5000);
window.addEventListener("load", function(){
    this.setTimeout(preloaderDisplayNone, 1000);
});
    function preloaderDisplayNone(){
        try{
            var loader = document.getElementById("preloader");
            // if(loader != null && loader != undefined)
            loader.style.display = "none";    
        }
        catch{}
    }

//for navbar 
function nav_bar_cust(){
    window.onscroll = function(){
        const temp = document.getElementById("active-page-tag-season");
        // document.getElementsByTagName("html")[0].innerHTML = temp;
        var nav = document.getElementById("nav-bar-id");
        var search_bar = document.getElementById("search-input");
        var navRect = nav.getBoundingClientRect();
        var search_icon = document.getElementById("search-icon");
        var windowVerticalScroll = window.scrollY;
        var search_field = document.getElementById("search-input");
        if((navRect.top-windowVerticalScroll) < "-250"){
            nav.style.backgroundColor = "#000000";
        }
        else{
           nav.style.backgroundColor = "#00000066";
        }
        if((navRect.top-windowVerticalScroll) < "-930"){
           nav.style.marginTop = "-140px";
           search_bar.style.display = "none";
           // search_bar.style.transition = "display 0.5s";
        }
        else{
         nav.style.marginTop = "0";
        }
    };
}
//for checking whether it is download page or anime page
var temp = document.getElementsByClassName("anchor-for-back-page");

// if ((temp == null) ||(temp != null && temp.textContent.toLowerCase() != "watching online")){
// if(temp != null)    
nav_bar_cust();
    //for anime page
// }
// else{
try{
    document.getElementById("a-home-anchor-tag").setAttribute("href", "https://Animerulz.xyz/");
    var activeAnime = document.getElementById("a-active-page-tag");
    activeAnime.setAttribute("href", "https://Animerulz.xyz/" + activeAnime.textContent.replace(/[^a-zA-Z0-9]/g, ""));
}
catch{}
try{
    // console.log(localStorage.getItem("lastClickedButtonOnePiece")
    let check = document.getElementsByClassName("active-page-tag-season")[0];
    let activeAnimeNew;
    if(check === undefined){
        activeAnimeNew = document.getElementById("active-page-tag").textContent.replace(/[^a-zA-Z0-9]/g, "");
        // console.log(activeAnimeNew);
    }
    // console.log(document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0]);
    let activeAnimeNewEpi = localStorage.getItem("lastClickedButton" + activeAnimeNew).split("-")[2];
    if (activeAnimeNewEpi == undefined)
        activeAnimeNewEpi = 1;
    document.getElementsByClassName("btns-in-data")[0].getElementsByTagName("a")[0].setAttribute("href", "/" + activeAnimeNew +  "/Watch-Now/?ep=" + activeAnimeNewEpi + "&aud=" + localStorage.getItem("lastClickedButtonAudio" + activeAnimeNew)); 
    document.getElementsByClassName('button-read-manga')[0].setAttribute("onclick", "window.open('https://mangareader.to/')");
}
catch{}

try{
    if(document.getElementById("home-anchor-tag") != null)
    document.getElementsByClassName("nav-image")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/','_self')");
}
catch{}

try{
    document.getElementsByClassName("second-nav")[0].style.backgroundPositionX = "center";
}
catch{}


function removeAds(){
    const myIframe = document.getElementsByTagName("iframe")[0];
    console.log(myIframe);
    let myIframeBody = myIframe.contentWindow.getElementsByTagName("head")[0];
    console.log(myIframeBody);
}


// setInterval(removeAds, 5000);
