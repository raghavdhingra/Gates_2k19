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





















/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining different IDs
const heading = document.getElementById("event_heading_1");
const detail = document.getElementById("event_detail_1");
const btn = document.getElementById("register_btn_1");
const forward = document.getElementById("forward_btn_1");
const backward = document.getElementById("backward_btn_1");
var arr1 = 0, arr_num_1 = 0;

//Linking with API
const request_1 = new XMLHttpRequest();
request_1.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/misc_metadata.json');

//request_1
const miscevent = () => {
    arr1 = JSON.parse(request_1.responseText);
    heading.innerHTML = arr1[arr_num_1].name;
    detail.innerHTML = arr1[arr_num_1].data;
    btn.href = arr1[arr_num_1].link;
    document.body.style.overflowY="hidden";
    document.getElementById("iframe_1").style.zIndex='11';
    document.getElementById("iframe_1").style.opacity='1';
    document.getElementById("total_event_1").innerText=JSON.parse(request_1.responseText).length;
}

forward.addEventListener("click",()=>{
  arr1 = JSON.parse(request_1.responseText);
  if (arr_num_1 === arr1.length-1){
      arr_num_1 = 0;
      heading.innerHTML = arr1[arr_num_1].name;
      detail.innerHTML = arr1[arr_num_1].data;
      btn.href = arr1[arr_num_1].link;
  }
  else{
      arr_num_1+=1;
      heading.innerHTML = arr1[arr_num_1].name;
      detail.innerHTML = arr1[arr_num_1].data;
      btn.href = arr1[arr_num_1].link;
  }
  document.getElementById("current_event_1").innerText=arr_num_1+1;
});
backward.addEventListener("click",()=>{
  arr1 = JSON.parse(request_1.responseText);
  if (arr_num_1 === 0){
      arr_num_1 = arr1.length - 1;
      heading.innerHTML = arr1[arr_num_1].name;
      detail.innerHTML = arr1[arr_num_1].data;
      btn.href = arr1[arr_num_1].link;
  }
  else {
      arr_num_1-=1;
      heading.innerHTML = arr1[arr_num_1].name;
      detail.innerHTML = arr1[arr_num_1].data;
      btn.href = arr1[arr_num_1].link;
  }
  document.getElementById("current_event_1").innerText=arr_num_1+1;
});



/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining different IDs
//request_2

const heading_2 = document.getElementById("event_heading_2");
const detail_2 = document.getElementById("event_detail_2");
const btn_2 = document.getElementById("register_btn_2");
const forward_2 = document.getElementById("forward_btn_2");
const backward_2 = document.getElementById("backward_btn_2");
var arr2 = 0, arr_num_2 = 0;


const request_2 = new XMLHttpRequest();
request_2.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/tech_metadata.json');

const techevent = () => {
  arr2 = JSON.parse(request_2.responseText);
  heading_2.innerHTML = arr2[arr_num_2].name;
  detail_2.innerHTML = arr2[arr_num_2].data;
  btn_2.href = arr2[arr_num_2].link;
  document.body.style.overflowY="hidden";
  document.getElementById("iframe_2").style.zIndex='11';
  document.getElementById("iframe_2").style.opacity='1';
  document.getElementById("total_event_2").innerText=JSON.parse(request_2.responseText).length;
}

forward_2.addEventListener("click",()=>{
  arr2 = JSON.parse(request_2.responseText);
  if (arr_num_2 === arr2.length-1){
      arr_num_2 = 0;
      heading_2.innerHTML = arr2[arr_num_2].name;
      detail_2.innerHTML = arr2[arr_num_2].data;
      btn_2.href = arr2[arr_num_2].link;
  }
  else{
      arr_num_2+=1;
      heading_2.innerHTML = arr2[arr_num_2].name;
      detail_2.innerHTML = arr2[arr_num_2].data;
      btn_2.href = arr2[arr_num_2].link;
  }
  document.getElementById("current_event_2").innerText=arr_num_2+1;
});
backward_2.addEventListener("click",()=>{
  arr2 = JSON.parse(request_2.responseText);
  if (arr_num_2 === 0){
      arr_num_2 = arr2.length - 1;
      heading_2.innerHTML = arr2[arr_num_2].name;
      detail_2.innerHTML = arr2[arr_num_2].data;
      btn_2.href = arr2[arr_num_2].link;
  }
  else {
      arr_num_2-=1;
      heading_2.innerHTML = arr2[arr_num_2].name;
      detail_2.innerHTML = arr2[arr_num_2].data;
      btn_2.href = arr2[arr_num_2].link;
  }
  document.getElementById("current_event_2").innerText=arr_num_2+1;
});



