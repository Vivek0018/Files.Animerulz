const key_value_from_url = window.location.search;
const urlParams = new URLSearchParams(key_value_from_url);
let epi_num = urlParams.get("ep");
let epi_aud = urlParams.get("aud");

let short_anime_file = new XMLHttpRequest();
short_anime_file.open("get", "/scripts/JSON/short-anime.JSON", true);
short_anime_file.send();

document.getElementById("episode-number-in-video").innerHTML = epi_num;
let anime = document.getElementById("a-active-page-tag");

short_anime_file.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var episodes_section = document.getElementById("episodes-in-section");
        let short_anime_data = JSON.parse(this.responseText);
        let current_short_anime_data = short_anime_data[anime.textContent];
        anime = anime.textContent.replace(/\s/g, "");
        let current_short_anime_epi_num = current_short_anime_data['jap']['no_epi'];
        let temp = "";
        let temp_1 = "";
        let outputNew = "";
        let first;
        let second;
        let episodesNames = current_short_anime_data['episodes_names'];
        for(let i = 1 ; i <= current_short_anime_epi_num ; i ++){
            if(i % 2 == 0){
                first = 2;
                second = 1;
            }
            else{
                first = 1;
                second = 2;
            }
            if(i == epi_num){
                temp = ' <div class="episode-short"><div class="short-anime-ep active-episode"> ' + 
                '<div class="short-anime-num episode-alternate-' + first + '">' + i + '</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span> ' + 
                '<svg xmlns="http://www.w3.org/2000/svg" class="play-svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1zM5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM50 2.5C23.8 2.5 2.5 23.8 2.5 50c0 26.2 21.3 47.5 47.5 47.5 26.2 0 47.5-21.3 47.5-47.5C97.5 23.8 76.2 2.5 50 2.5zM67.2 52.8L41.6 69.8c-2.2 1.5-5.1-.1-5.1-2.8V32.9c0-2.6 2.9-4.2 5.1-2.8l25.6 17.1C69.2 48.6 69.2 51.4 67.2 52.8z"/></g></switch></svg> ' + 
                '</div></div></div>';
            }
            else{
                temp_1 = "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + i + "&aud=" + epi_aud + "', '_self')";
                temp = '<div class="episode-short" onclick="' + temp_1 + '"><div class="short-anime-ep"><div class="short-anime-num episode-alternate-' + first + '">' + i +'</div><div class="short-anime-name episode-alternate-' + second + '"><span>' + episodesNames[i-1] + '</span></div></div></div>'
            }
            outputNew += temp;
        }
        episodes_section.innerHTML = outputNew;

        if(epi_num != 1)
            document.getElementsByClassName("button-1")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + (epi_num - 1) + "&aud=" + epi_aud + "', '_self')"); 
        if(epi_num != current_short_anime_epi_num)
            document.getElementsByClassName("button-2")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + (Number(epi_num) + 1) + "&aud=" + epi_aud + "', '_self')"); 

         //for setting video and audio buttons
                 //for setting video and audio buttons
        let current_short_anime_epi_num_dub = current_short_anime_data["eng"]['no_epi'];
        var audios_div = document.getElementsByClassName("audios")[0];
        outputNew = "";

        if(epi_num <= current_short_anime_epi_num){
            outputNew += "<div class='audio' name='jap'>Subbed</div>";
            if(epi_num <= current_short_anime_epi_num_dub){
                outputNew += "<div class='audio' name='eng'>Dubbed</div>";
            }
            try{
                if( epi_num <= current_short_anime_data['hin']['no_epi'])
                    outputNew += "<div class='audio' name='hin'>Hindi</div>";
                if( epi_num <= current_short_anime_data['tel']['no_epi'])
                    outputNew += "<div class='audio' name='tel'>Telugu</div>";
                if( epi_num <= current_short_anime_data['tam']['no_epi'])
                    outputNew += "<div class='audio' name='tam'>Tamil</div>";
                if( epi_num <= current_short_anime_data['mal']['no_epi'])
                    outputNew += "<div class='audio' name='mal'>Malayalam</div>";
                if( epi_num <= current_short_anime_data['ben']['no_epi'])
                    outputNew += "<div class='audio' name='ben'>Bengali</div>";
            }
            catch{};
            audios_div.innerHTML = outputNew;
        }
        try{
            document.getElementsByName(epi_aud)[0].classList.add("active-aud");
        }
        catch{
            let anime_audios = document.getElementsByClassName("audio")[0];
            temp = "http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=" + anime_audios.getAttribute("name") ;
            window.open(temp, "_self");
        }
        
        try{
            if(epi_aud != 'jap')
                document.getElementsByName("jap")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=jap', '_self')");
            if(epi_aud != 'eng')
                document.getElementsByName("eng")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=eng', '_self')");
            }
        catch{};
        try{
            if(epi_aud != 'tel')
            document.getElementsByName("tel")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tel', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'hin')
            document.getElementsByName("hin")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=hin', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'tam')
            document.getElementsByName("tam")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=tam', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'mal')
            document.getElementsByName("mal")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=mal', '_self')");
        }
        catch{};
        try{
            if(epi_aud != 'ben')
            document.getElementsByName("ben")[0].setAttribute("onclick", "window.open('http://127.0.0.1:5500/" + anime + "/Watch-Now/?ep=" + epi_num + "&aud=ben', '_self')");
        }
        catch{};
        var video_player = document.getElementsByTagName('iframe')[0];
        if(epi_aud == "jap" || epi_aud == "eng"){
            let current_short_anime_data_video_link = current_short_anime_data[epi_aud]['link'];
            video_player.setAttribute("src", current_short_anime_data_video_link + epi_num);  
        } 
        else{
            video_player.setAttribute("src", current_short_anime_data[epi_aud]["links"][epi_num - 1]);
        }     
        try{
           document.getElementsByClassName("button-download-now")[0].setAttribute("onclick", "window.open('" + current_short_anime_data[epi_aud]["down_links"][epi_num - 1] + "')");
        }
        catch{};   
    }
}