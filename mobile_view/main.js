const open_nav = document.getElementById("open_nav");
const close_nav = document.getElementById("close_nav");
open_nav.addEventListener("click",()=>{
  document.getElementById("open_side_nav").style.width="270px";
});
const close_it = () => {
  document.getElementById("open_side_nav").style.width=0;
}
close_nav.addEventListener("click",close_it);


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

/*scroll*/
window.onscroll = () => {
  if (document.body.scrollTop >180 || document.documentElement.scrollTop > 180) {
      up_icon.style.opacity=1;
      up_icon.style.zIndex=10;
    }
    else {
      up_icon.style.opacity=0;
      up_icon.style.zIndex=-1;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*sidenav*/
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}