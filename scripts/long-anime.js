let video_container = document.getElementsByClassName("main-container-video-sec-1")[0];
      var element = document.createElement("div");
      video_container.prepend(element);
      video_container.getElementsByTagName("div")[0].setAttribute("class", "preloader-for-video");
      document.getElementsByClassName("preloader-for-video")[0].innerHTML = '<div class="preloader-for-video"><div class="spinner-box"><div class="circle-border"><div class="circle-core"></div></div>  </div></div>';

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
        // console.log(anime.textContent);
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
                temp = "<div class='episode active' id='" + anime + "-episode-" + i + "'>" + i + "</div>";
            }else{ 
                var temp_1 = 'window.open("https://animerulz.xyz/' + anime + "/Watch-Now/?ep=" + i + '&aud=' + epi_aud + '", "_self")';
                temp = "<div class='episode' id='" + anime + "-episode-" + i + "' onclick='" + temp_1 + "'>" + i +"</div>" ;
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

        try{
            if( epi_num <= current_long_anime_data['mul']['no_epi']){
                outputNew += "<div class='audio' name='mul'>Multi</div>";
                document.getElementsByClassName("multi-audio-des")[0].innerHTML = '<span><strong class="str-audio-mul">This Video Source has multi audio</strong> - Use <svg class="svg-mul-audio" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg> to change Audio track.</span>';
            }
        }
        catch{}
        if(epi_num <= current_long_anime_epi_num){
            outputNew += "<div class='audio' name='jap'>Subbed</div>";
            if(epi_num <= current_long_anime_epi_num_dub){
                outputNew += "<div class='audio' name='eng'>Dubbed</div>";
            }
            try{
                if( epi_num <= current_long_anime_data['hin']['no_epi'])
                    outputNew += "<div class='audio' name='hin'>Hindi</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['tel']['no_epi'])
                outputNew += "<div class='audio' name='tel'>Telugu</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['tam']['no_epi'])
                    outputNew += "<div class='audio' name='tam'>Tamil</div>";
            }
            catch{}
            try{
                if( epi_num <= current_long_anime_data['mal']['no_epi'])
                    outputNew += "<div class='audio' name='mal'>Malayalam</div>";
            }
            catch{}
            try{
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
//   console.log(video_player.offsetHeight, video_player.offsetWidth);
}


function scrollToDiv() {
    var mainDivision = document.getElementsByClassName("content")[0];
        var division = document.getElementsByClassName("active")[1];
        if(division == undefined)
            var division = document.getElementsByClassName("active-episode")[0];
        // console.log(division);
  
        // division.scrollIntoView({ behavior: 'auto' });
      mainDivision.scrollTo(0, division.offsetTop - mainDivision.offsetTop);
    //   console.log(division.offsetTop);
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
        localStorage.setItem('lastClickedButton' + anime , event.target.id);
        localStorage.setItem(event.target.id, "visited-episode");
        
        // Change the color of the clicked button
        event.target.classList.add("visited-episode");
        // event.target.style.color = "#ffffffcc";
      }
      function handleClickAudio(event) {
        // Store the clicked button's ID and color in local storage
        localStorage.setItem('lastClickedButtonAudio' + anime , event.target.id);
        
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
            if (localStorage.getItem(button.id) === "visited-episode") {
            button.classList.add("visited-episode");
            // button.target.style.color = "#ffffffcc";
            }
        });
        
        let active_epi = document.querySelector(".active.episode");
        // console.log(anime);
        localStorage.setItem('lastClickedButton' + anime, active_epi.id);
        localStorage.setItem(active_epi.id, "visited-episode");
        let active_aud = document.querySelector(".active-aud.audio");
        localStorage.setItem('lastClickedButtonAudio' + anime, active_aud.getAttribute("name"));
        // localStorage.setItem(active_epi.id, "visited-);
        // console.log(active_aud);
        // Retrieve the last clicked button and update its color
        var lastClickedButtonId = localStorage.getItem('lastClickedButton' + anime);
        if (lastClickedButtonId) {
            var lastClickedButton1 = document.getElementById(lastClickedButtonId);
            lastClickedButton1.classList.add("visited-episode");
        }
        // active_aud.style.backgroundColor = "#faa300";
    }

      setTimeout(setEpisodesData, 500);



    //   setInterval(pauseAdds, 100);
    

    //   function pauseAdds(){
    //     try{
    //         document.getElementsByTagName("iframe")[1].style.display = "none";
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    //   }

    var url = "https://www.example.com";
// var xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var content = xhr.responseText;
//         if (content.contains("ad")) {
//             console.log("Ad detected!");
//         } else {
//             console.log("No ads detected.");
//         }
//     }
// };
// xhr.send();

    // Function to log responses
    // function logResponse(response) {
    //   console.log('Response URL:', response.url);
    //   console.log('Response Status:', response.status);
    //   console.log('Response Headers:', response.headers);

    //   // You can handle the response body depending on its content type
    //   if (response.headers.get('content-type').includes('application/json')) {
    //     response.json().then(data => {
    //       console.log('Response JSON:', data);
    //     });
    //   } else {
    //     response.text().then(text => {
    //       console.log('Response Text:', text);
    //     });
    //   }
    // }

    // // Intercept fetch calls and log responses
    // (function() {
    //   const originalFetch = window.fetch;
    //   window.fetch = function(url, options) {
    //     return originalFetch(url, options).then(response => {
    //       logResponse(response.clone());
    //       return response;
    //     }).catch(error => {
    //       console.error('Fetch Error:', error);
    //       throw error;
    //     });
    //   };
    // })();

    // // Example fetch call to test the response tracking
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(JSON.stringify(data, null, 2));
    //   })
    //   .catch(error => {
    //     console.log('Error fetching data.');
    //   });


