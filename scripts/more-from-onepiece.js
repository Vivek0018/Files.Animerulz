let onepiece_file = new XMLHttpRequest();

onepiece_file.open("get", "/scripts/JSON/more-from-onepiece.json", true);
onepiece_file.send();

onepiece_file.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let anime = JSON.parse(this.responseText);
        let output = "";
        let loop_var = 1;
        let bg;
        let id;
        var rec_onclick;
        var screen_width = screen.width;
        var anime_rec_div_height;
        let present_anime = document.getElementById("active-page-tag");
        for(let item of anime){
            if(screen_width <= 660){
                anime_rec_div_height = ((screen_width/100) * 42) * 1.5  ;            }
            else {
                anime_rec_div_height = 300;
            }
            if ((item.name).toLowerCase() != (present_anime.textContent).toLowerCase()){
                id = "anime-" + loop_var;
                rec_onclick = "window.open('" + item.onclick_div + "','_self')"
                bg = "background:linear-gradient(0deg, rgba(0,0,0,0.7),rgba(0,0,0,0.3)),url('" + item.background + "'";
                output += '<div class="anime-rec-div anime-in-rec-div anime-'+ loop_var +'" id="'+ id +'" style="'+ bg + 
                ');background-repeat: no-repeat;background-size:100% '+ anime_rec_div_height +'px;"' +
                '><div class="anime-rec-play" onclick="' + rec_onclick + '">' + 
                '<svg class="svg-play-anime" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="onepiece_file://www.w3.org/1999/xlink"><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" fill="rgba(255,255,255,0.8)"/></svg>' + 
                '</div><div class="anime-rec-txt"><div class="anime-info-rec"><span class="dub">DUB</span><span class="dub">SUB</span><span class="epi epi-anime-rec" id="aot">' + 
                item.episodes + '</span></div><h2>' + 
                item.name + '</h2><div class="anime-info-rec-2"><span class="tv">T.V</span><span class="epi">' + item.time + 
                '</span></div></div></div>';
                loop_var ++;
            }
            if(loop_var == 7){
                break;
            }
        }
        document.querySelector(".more-from-this").innerHTML = output;
        // sleep(3000);
        var anime_rec_div = document.getElementsByClassName("anime-rec-div");
        for(let i = 0 ; i < anime_rec_div.length ; i ++ ){
            anime_rec_div[i].style.height = (anime_rec_div_height + 20) + "px";
        }
    }
};
