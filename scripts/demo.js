let http = new XMLHttpRequest();

http.open("get", "/updation-data.json", true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let anime = JSON.parse(this.responseText);
        let output = "";
        let loop_var = 1;
        let bg;
        let present_anime = document.getElementById("active-page-tag");
        for(let item of anime){
            if ((item.name).toLowerCase() != (present_anime.textContent).toLowerCase()){
                bg = 'background:linear-gradient(0deg, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url("' + item.background + '"';
                output += '<div class="anime-rec-div anime-'+ loop_var +'" id="anime-'+ loop_var +'"'+ " style='"+ bg + 
                ");background-repeat: no-repeat;background-size:100% 300px;'" +
                '><div class="anime-rec-play">' + 
                '<svg class="svg-play-anime" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" fill="rgba(255,255,255,0.8)"/></svg>' + 
                '</div><div class="anime-rec-txt"><div class="anime-info-rec"><span class="dub">DUB</span><span class="epi epi-anime-rec" id="aot">' + 
                item.episodes + '</span></div><h2>' + 
                item.name + '</h2><div class="anime-info-rec-2"><span class="tv">T.V</span><span class="epi">' + item.time + 
                '</span></div></div></div>';
                loop_var ++;
            }
            if(loop_var == 7){
                break;
            }
        }
        document.querySelector(".anime-recom").innerHTML = output;
    }
};