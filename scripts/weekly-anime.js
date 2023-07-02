function nextDay(x){
    var now = new Date(); 
    let present = new Date(); 
    var hours = 10;
    var minutes = 30;
    var seconds = 0;
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
    now.setDate(now.getDate() + (x + (7 - now.getDay())) % 7);
    if(now.getDate == present.getDate)
        now.setDate(now.getDate() + 7);
    return now;
}
function prevDay(x){
    var now = new Date();  
    var hours = 10;
    var minutes = 30;
    var seconds = 0;
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
    now.setDate(now.getDate() - (x+(now.getDay())) % 7);
    return now;
}

function setAnimeTimings(y){
    try{
        const time_epi = nextDay(y);
        var ele_nxt_ep_time = document.getElementById("nxt-episode-txt");
        ele_nxt_ep_time.innerHTML = "Estimated next episode on " + time_epi;
    }
    catch{
        const time_epi = prevDay(y);
        var ele_updated_time = document.getElementById("updated-on-time");
        ele_updated_time.innerHTML = time_epi.getDate() + "/" + (time_epi.getMonth() + 1) + "/" + time_epi.getFullYear();
    }
}
