// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
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
    if (selectData.toLocaleLowerCase()=="naruto"){
        window.open("https://animerulz.xyz");
    }
    if(selectData=="Dragon Ball Super"){
        window.open("https://animerulz.xyz");
    }
    else{
        
    }
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
    }
    if((navRect.top-windowVerticalScroll) < "-930"){
        search_field.style.display = "none";
    }
    else{
        search_field.style.display = "block";
    }
    // search_field.style.transition = "all 5s";
}