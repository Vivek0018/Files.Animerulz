const slider = document.getElementsByClassName("slider")[0];
let slide_count = 1;
let number_of_anime_in_slider = 5;

  let commonHeight = window.innerWidth / 2.25;
  if(commonHeight > 666){
    commonHeight = 666;
  }
  else if(commonHeight < 300){
    commonHeight = 300;
  }

setGradientDivisionHeights(commonHeight);


function setGradientDivisionHeights(commonHeight){
  let sliderImage = document.getElementsByClassName("img-in-slide");
  for(let i = 0; i < sliderImage.length ; i ++){
    sliderImage[i].style.height  = commonHeight + 5 + "px";
  }
  let gradientDiv1 = document.getElementsByClassName("gradient-division-1")[0];
  let gradientDiv2 = document.getElementsByClassName("gradient-division-2")[0];
  gradientDiv1.style.height = commonHeight + 5 + "px"; 
  gradientDiv2.style.height = commonHeight + 5 + "px"; 
  if(window.innerWidth < 1100)
      document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight + "px" ;
  else
      document.getElementsByClassName("slide-change-btns")[0].style.marginTop = commonHeight - 80 + "px" ;
  if(window.innerWidth <= 1500){
    if(window.innerWidth >= 1100)
      document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + "px";
    else 
    document.getElementsByClassName("bottom-container")[0].style.paddingTop = commonHeight + 100 + "px";
  }
}


const slide = document.getElementsByClassName("slide");
var activeSlide = document.querySelector(".gradient-division-2");


const slideDot = document.getElementsByClassName("slide-dot");

let count = 0;

setTimeout(callChangeslide, 4000);
function callChangeslide(){
  let slideCount = setInterval(changeSlide, 4000);
}

function changeSlide(){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    count = (count + 1 ) % 5;
    slide[count].setAttribute("class", "slide active-slide");
    slideDot[count].setAttribute("class", "slide-dot active-slide-dot");
    
}
function changeSlideByDot(x){
    slide[count].setAttribute("class", "slide");
    slideDot[count].setAttribute("class", "slide-dot");
    slide[x-1].setAttribute("class", "slide active-slide");
    slideDot[x-1].setAttribute("class", "slide-dot active-slide-dot");
    
    count = (x-1) % 5;
}
function changeSlideByBtn(y){
    if(y == 1 ){
        previousSlide();
    }else{ 
        nextSlide();
}
}


function previousSlide(){
    slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        if(count != 0){
            slide[count-1].setAttribute("class", "slide active-slide");
            slideDot[count-1].setAttribute("class", "slide-dot active-slide-dot");
    
            count = (count - 1) % 5;
        }else{
            slide[4].setAttribute("class", "slide active-slide");
            slideDot[4].setAttribute("class", "slide-dot active-slide-dot");
    
            count = 4;
        } 
}
function nextSlide(){
  slide[count].setAttribute("class", "slide");
        slideDot[count].setAttribute("class", "slide-dot");
        slide[(count+1) % 5].setAttribute("class", "slide active-slide");
        slideDot[(count+1) % 5].setAttribute("class", "slide-dot active-slide-dot");

        count = (count + 1) % 5;
}


    var touchStartX = 0;
    var touchEndX = 0;

    // Set up touch event handlers
    activeSlide.addEventListener('touchstart', handleTouchStart);
    activeSlide.addEventListener('touchend', handleTouchEnd);

    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
    }

    function handleTouchEnd(event) {
      touchEndX = event.changedTouches[0].clientX;
      handleSwipe();
    }

    function handleSwipe() {
      if (touchStartX - touchEndX > 50){
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        previousSlide();
      }
    }

