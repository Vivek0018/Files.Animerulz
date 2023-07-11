const key_value_from_url = window.location.search;
const urlParams = new URLSearchParams(key_value_from_url);
let epi_num = urlParams.get("ep");
let epi_aud = urlParams.get("aud");

let long_anime_file = new XMLHttpRequest();
long_anime_file.open("get", "https://vivek0018.github.io/Files.Animerulz/scripts/JSON/long-anime.json", true);
long_anime_file.send();

document.getElementById("episode-number-in-video").innerHTML = epi_num;
let anime = document.getElementById("a-active-page-tag");
// let animeNew = anime.replace(" ","");

long_anime_file.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var episodes_section = document.getElementById("episodes-in-section");
        let long_anime_data = JSON.parse(this.responseText);
        let current_long_anime_data = long_anime_data[anime.textContent];
        let current_long_anime_epi_num = current_long_anime_data['jap']['no_epi'];
        var episodes_numbers = document.getElementById("episodes-numbers");
        let temp = "";
        let outputNew = "";
        let min_range;
        let max_range;
        
        min_range = Math.floor(epi_num / 100) * 100;
        // console.log(Math.floor(epi_num / 100));
        if(epi_num % 100 == 0)
            min_range -= 100;
        max_range = min_range + 100;
        if (max_range > current_long_anime_epi_num)
            max_range=current_long_anime_epi_num;
        min_range ++;
        episodes_numbers.innerHTML = " " + min_range + "-" + max_range;
        anime = anime.textContent.replace(/[^a-zA-Z0-9]/g, "");
        for(let i = min_range; i <= max_range; i++){
            if(i == epi_num){
                temp = "<div class='episode active' id='episode-" + i + "'>" + i + "</div>";
            }else{ 
                var temp_1 = 'window.open("http://127.0.0.1:5501/' + anime + "/Watch-Now/?ep=" + i + '&aud=' + epi_aud + '", "_self")';
                temp = "<div class='episode' id='episode-" + i + "' onclick='" + temp_1 + "'>" + i +"</div>" ;
                // temp = "<div class='episode' id='episode-" + i + "'>" + i +"</div>" ;
            }
            outputNew += temp;
        }
        episodes_section.innerHTML = outputNew;

        var tempNew;
        outputNew = "";
        let i = 1;
        for(i = 1 ; i < current_long_anime_epi_num ; i += 100){
            if(i + 100 <= current_long_anime_epi_num){
                if( epi_num >= i && epi_num < i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + max_range + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + (i + 99) + "</span></div>";
                }
            }
            else{
                if( epi_num >= i && epi_num <= i + 100)
                    temp = "<div class='active'><span> Episodes : " + min_range + "-" + current_long_anime_epi_num + "</span></div>";
                else {
                    temp_1 = "'https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self'";
                    tempNew = 'onclick="window.open(' + temp_1 + ')"';
                    temp = "<div " + tempNew + "><span> Episodes : " + i + "-" + current_long_anime_epi_num + "</span></div>";
                }
            }
            outputNew += temp;
        }

        var episodes_numbers_new = document.getElementsByClassName("episodes-selection-div")[0];
        episodes_numbers_new.innerHTML = outputNew;

        if(epi_num != 1)
            document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
        if(epi_num != current_long_anime_epi_num)
            document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

        //for setting video and audio buttons
        let current_long_anime_epi_num_dub = current_long_anime_data["eng"]['no_epi'];
        var audios_div = document.getElementsByClassName("audios")[0];
        outputNew = "";

        if(epi_num <= current_long_anime_epi_num){
            outputNew += "<div class='audio' name='jap'>Subbed</div>";
            if(epi_num <= current_long_anime_epi_num_dub){
                outputNew += "<div class='audio' name='eng'>Dubbed</div>";
            }
            try{
                if( epi_num <= current_long_anime_data['hin']['no_epi'])
                    outputNew += "<div class='audio' name='hin'>Hindi</div>";
                if( epi_num <= current_long_anime_data['tel']['no_epi'])
                    outputNew += "<div class='audio' name='tel'>Telugu</div>";
                if( epi_num <= current_long_anime_data['tam']['no_epi'])
                    outputNew += "<div class='audio' name='tam'>Tamil</div>";
                if( epi_num <= current_long_anime_data['mal']['no_epi'])
                    outputNew += "<div class='audio' name='mal'>Malayalam</div>";
                if( epi_num <= current_long_anime_data['ben']['no_epi'])
                    outputNew += "<div class='audio' name='ben'>Bengali</div>";
            }
            catch{};
            audios_div.innerHTML = outputNew;
        }
        try{
            document.getElementsByName(epi_aud)[0].classList.add("active-aud");
        }
        catch{
            // console.log("Hello");
            let anime_audios = document.getElementsByClassName("audio")[0];
            temp = "https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
            window.open(temp, "_self");
        }
        
        try{
            if(epi_aud != 'jap')
                document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
            if(epi_aud != 'eng')
                document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
            }
        catch{};
        try{
            if(epi_aud != 'tel')
            document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'hin')
            document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'tam')
            document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'mal')
            document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'ben')
            document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('https://animerulz.xyz/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
        }
        catch{};
        var video_player = document.getElementsByTagName('iframe')[0];
        if(epi_aud == "jap" || epi_aud == "eng"){
            let current_long_anime_data_video_link = current_long_anime_data[epi_aud]['link'];
            video_player.setAttribute("src", current_long_anime_data_video_link + epi_num);  
        }
        else{
            video_player.setAttribute("src", "https://sbrapid.com/e/" + current_long_anime_data[epi_aud]["links"][epi_num - 1] + ".html");
        }     
        try{
            if(epi_aud == "jap" || epi_aud == "eng")
                document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_long_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
            else 
                document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('https://sbrapid.com/d/" +  current_long_anime_data[epi_aud]["links"][epi_num - 1] + ".html')");
        }
        catch{};
    }
}

var video_player = document.getElementById("video-player");
// console.log(video_player.offsetHeight, video_player.offsetWidth);
if(screen.width <= 940){
  var video_player_width = video_player.offsetWidth;
  video_player.style.height = 0.559 * video_player_width + "px";
  console.log(video_player.offsetHeight, video_player.offsetWidth);
}


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
  
let episode_div;
episode_div = document.querySelector(".main-container-video-sec-2 .body .body-cont .content");
if(screen.width >= 450)
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, 55px);");
else
    episode_div.setAttribute("style", "grid-template-columns: repeat(auto-fit, minmax(30px, 15%));");




//for storing local episode data

      // Function to handle button clicks
      function handleClick(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButton', event.target.id);
        localStorage.setItem(event.target.id, "visited-audio");
        
        // Change the color of the clicked button
        event.target.classList.add("visited-audio");
        // event.target.style.color = "#ffffffcc";
      }
  
      // Add click event listeners to all buttons
      function setEpisodesData(){
        var buttons = document.querySelectorAll('.episode');
        buttons.forEach(function(button) {
            button.addEventListener('click', handleClick);
            
            // Check if the button has a stored color and update it
            if (localStorage.getItem(button.id) === "visited-audio") {
            button.classList.add("visited-audio");
            // button.target.style.color = "#ffffffcc";
            }
        });
        
        let active_aud = document.querySelector(".active.episode");
        localStorage.setItem('lastClickedButton', active_aud.id);
        localStorage.setItem(active_aud.id, "visited-audio");
        console.log(active_aud);
        // Retrieve the last clicked button and update its color
        var lastClickedButtonId = localStorage.getItem('lastClickedButton');
        if (lastClickedButtonId) {
            var lastClickedButton = document.getElementById(lastClickedButtonId);
            lastClickedButton.classList.add("visited-audio");
        }
        active_aud.style.backgroundColor = "#faa300";
    }

      setTimeout(setEpisodesData, 500);
