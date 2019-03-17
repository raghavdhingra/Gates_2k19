const up_icon = document.getElementById("up_icon");
const reponsive_nav = document.getElementById("responsive_nav");
const right_nav = document.getElementById("right_nav");
const side_nav = document.getElementById("sidenav-btn");
window.onscroll = () => {
    if (document.body.scrollTop >180 || document.documentElement.scrollTop > 180) {
        up_icon.style.opacity=1;
        up_icon.style.zIndex=10;
        responsive_nav.style.height="60px";
        side_nav.style.width="10px";
      }
      else {
        up_icon.style.opacity=0;
        up_icon.style.zIndex=-1;
        responsive_nav.style.height=0;
        right_nav.style.width=0;
        side_nav.style.width="60px";
      }
}
window.onload = () => {
    if (window.innerWidth <= 1400){
        document.getElementById("remove_1").innerHTML="";
    }
}

////////////////////////////////////////////
document.getElementById("bar_icon").addEventListener("click",()=>{
  right_nav.style.width="300px";
});
const close_it = () => {
  right_nav.style.width="0";
}
document.getElementById("close").addEventListener("click",close_it);

///////////////////////////////////////////////
function on1() {
  document.getElementById("overlay1").style.display = "block";
}

function off1() {
  document.getElementById("overlay1").style.display = "none";
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
  document.getElementById("overlay2").style.display = "none";
}
function on3() {
  document.getElementById("overlay3").style.display = "block";
}

function off3() {
  document.getElementById("overlay3").style.display = "none";
}
function on4() {
  document.getElementById("overlay4").style.display = "block";
}

function off4() {
  document.getElementById("overlay4").style.display = "none";
}

/*fading effect*/
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

//////////////////////////////////////////////
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// for class="iframe"
const close_iframe = () => {
  document.getElementById("iframe_1").style.opacity='0';
  document.getElementById("iframe_1").style.zIndex='-1';
  
  document.getElementById("iframe_2").style.opacity='0';
  document.getElementById("iframe_2").style.zIndex='-1';
  
  document.getElementById("iframe_3").style.opacity='0';
  document.getElementById("iframe_3").style.zIndex='-1';
  
  document.getElementById("iframe_4").style.opacity='0';
  document.getElementById("iframe_4").style.zIndex='-1';
  document.body.style.overflow="visible";
}







