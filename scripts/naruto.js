var seasons = document.getElementsByClassName("season-anime");
for(let i = 1; i <= seasons.length; i ++)
    seasons[i-1].setAttribute("onclick", "window.open('https://Animerulz.xyz/Naruto/season-" + i + "', '_self')");
try{
    document.getElementsByClassName("active-season")[0].removeAttribute("onclick");
}
catch{}