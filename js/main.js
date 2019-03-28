//Developer Information
const dev_info = "This website is developed by:\n Raghav Dhingra, 1st Year CSE student.\n\n For any updation or bugs in this site,\n Feel free to mail at:\n raghav.dhingra15@gmail.com"
console.log(dev_info);

//Main Content


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
        responsive_nav.style.opacity=1;

      }
      else {
        up_icon.style.opacity=0;
        up_icon.style.zIndex=-1;
        responsive_nav.style.height=0;
        responsive_nav.style.opacity=0;
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
  document.body.style.overflow="hidden";
  document.getElementById("closebtn").style.position="fixed";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.overflowY="visible";
  document.getElementById("closebtn").style.position="absolute";
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
  
  document.getElementById("iframe_5").style.opacity='0';
  document.getElementById("iframe_5").style.zIndex='-1';
  document.body.style.overflowY="visible";
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




/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining different IDs
//request_3


const heading_3 = document.getElementById("event_heading_3");
const detail_3 = document.getElementById("event_detail_3");
const btn_3 = document.getElementById("register_btn_3");
const forward_3 = document.getElementById("forward_btn_3");
const backward_3 = document.getElementById("backward_btn_3");
var arr3 = 0, arr_num_3 = 0;


const request_3 = new XMLHttpRequest();
request_3.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/manage_metadata.json');

const managementevent = () => {
  arr3 = JSON.parse(request_3.responseText);
  heading_3.innerHTML = arr3[arr_num_3].name;
  detail_3.innerHTML = arr3[arr_num_3].data;
  btn_3.href = arr3[arr_num_3].link;
  document.body.style.overflowY="hidden";
  document.getElementById("iframe_3").style.zIndex='11';
  document.getElementById("iframe_3").style.opacity='1';
  document.getElementById("total_event_3").innerText=JSON.parse(request_3.responseText).length;
}

forward_3.addEventListener("click",()=>{
  arr3 = JSON.parse(request_3.responseText);
  if (arr_num_3 === arr3.length-1){
      arr_num_3 = 0;
      heading_3.innerHTML = arr3[arr_num_3].name;
      detail_3.innerHTML = arr3[arr_num_3].data;
      btn_3.href = arr3[arr_num_3].link;
  }
  else{
      arr_num_3+=1;
      heading_3.innerHTML = arr3[arr_num_3].name;
      detail_3.innerHTML = arr3[arr_num_3].data;
      btn_3.href = arr3[arr_num_3].link;
  }
  document.getElementById("current_event_3").innerText=arr_num_3+1;
});
backward_3.addEventListener("click",()=>{
  arr3 = JSON.parse(request_3.responseText);
  if (arr_num_3 === 0){
      arr_num_3 = arr3.length - 1;
      heading_3.innerHTML = arr3[arr_num_3].name;
      detail_3.innerHTML = arr3[arr_num_3].data;
      btn_3.href = arr3[arr_num_3].link;
  }
  else {
      arr_num_3-=1;
      heading_3.innerHTML = arr3[arr_num_3].name;
      detail_3.innerHTML = arr3[arr_num_3].data;
      btn_3.href = arr3[arr_num_3].link;
  }
  document.getElementById("current_event_3").innerText=arr_num_3+1;
});





/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining different IDs
//Request_4


const heading_4 = document.getElementById("event_heading_4");
const detail_4 = document.getElementById("event_detail_4");
const btn_4 = document.getElementById("register_btn_4");
const forward_4 = document.getElementById("forward_btn_4");
const backward_4 = document.getElementById("backward_btn_4");
var arr4 = 0, arr_num_4 = 0;


const request_4 = new XMLHttpRequest();
request_4.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/culture_metadata.json');

const culturalevent = () => {
  arr4 = JSON.parse(request_4.responseText);
  heading_4.innerHTML = arr4[arr_num_4].name;
  detail_4.innerHTML = arr4[arr_num_4].data;
  btn_4.href = arr4[arr_num_4].link;
  document.body.style.overflowY="hidden";
  document.getElementById("iframe_4").style.zIndex='11';
  document.getElementById("iframe_4").style.opacity='1';
  document.getElementById("total_event_4").innerText=JSON.parse(request_4.responseText).length;
}

forward_4.addEventListener("click",()=>{
  arr4 = JSON.parse(request_4.responseText);
  if (arr_num_4 === arr4.length-1){
      arr_num_4 = 0;
      heading_4.innerHTML = arr4[arr_num_4].name;
      detail_4.innerHTML = arr4[arr_num_4].data;
      btn_4.href = arr4[arr_num_4].link;
  }
  else{
      arr_num_4+=1;
      heading_4.innerHTML = arr4[arr_num_4].name;
      detail_4.innerHTML = arr4[arr_num_4].data;
      btn_4.href = arr4[arr_num_4].link;
  }
  document.getElementById("current_event_4").innerText=arr_num_4+1;
});
backward_4.addEventListener("click",()=>{
  arr4 = JSON.parse(request_4.responseText);
  if (arr_num_4 === 0){
      arr_num_4 = arr4.length - 1;
      heading_4.innerHTML = arr4[arr_num_4].name;
      detail_4.innerHTML = arr4[arr_num_4].data;
      btn_4.href = arr4[arr_num_4].link;
  }
  else {
      arr_num_4-=1;
      heading_4.innerHTML = arr4[arr_num_4].name;
      detail_4.innerHTML = arr4[arr_num_4].data;
      btn_4.href = arr4[arr_num_4].link;
  }
  document.getElementById("current_event_4").innerText=arr_num_4+1;
});



/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining different IDs
//request_2

const heading_5 = document.getElementById("event_heading_5");
const detail_5 = document.getElementById("event_detail_5");
const btn_5 = document.getElementById("register_btn_5");
const forward_5 = document.getElementById("forward_btn_5");
const backward_5 = document.getElementById("backward_btn_5");
var arr5 = 0, arr_num_5 = 0;


const request_5 = new XMLHttpRequest();
request_5.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/divine_metadata.json');

const divineevent = () => {
  arr5 = JSON.parse(request_5.responseText);
  heading_5.innerHTML = arr5[arr_num_5].name;
  detail_5.innerHTML = arr5[arr_num_5].data;
  btn_5.href = arr5[arr_num_5].link;
  document.body.style.overflowY="hidden";
  document.getElementById("iframe_5").style.zIndex='11';
  document.getElementById("iframe_5").style.opacity='1';
  document.getElementById("total_event_5").innerText=JSON.parse(request_5.responseText).length;
}

forward_5.addEventListener("click",()=>{
  arr5 = JSON.parse(request_5.responseText);
  if (arr_num_5 === arr5.length-1){
      arr_num_5 = 0;
      heading_5.innerHTML = arr5[arr_num_5].name;
      detail_5.innerHTML = arr5[arr_num_5].data;
      btn_5.href = arr5[arr_num_5].link;
  }
  else{
      arr_num_5+=1;
      heading_5.innerHTML = arr5[arr_num_5].name;
      detail_5.innerHTML = arr5[arr_num_5].data;
      btn_5.href = arr5[arr_num_5].link;
  }
  document.getElementById("current_event_5").innerText=arr_num_5+1;
});
backward_5.addEventListener("click",()=>{
  arr5 = JSON.parse(request_5.responseText);
  if (arr_num_5 === 0){
      arr_num_5 = arr5.length - 1;
      heading_5.innerHTML = arr5[arr_num_5].name;
      detail_5.innerHTML = arr5[arr_num_5].data;
      btn_5.href = arr5[arr_num_5].link;
  }
  else {
      arr_num_5-=1;
      heading_5.innerHTML = arr5[arr_num_5].name;
      detail_5.innerHTML = arr5[arr_num_5].data;
      btn_5.href = arr5[arr_num_5].link;
  }
  document.getElementById("current_event_5").innerText=arr_num_5+1;
});



request_1.send();
request_2.send();
request_3.send();
request_4.send();
request_5.send();
