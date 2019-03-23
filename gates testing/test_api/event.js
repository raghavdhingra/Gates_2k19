// Defining different IDs
const heading = document.getElementById("event_heading");
const detail = document.getElementById("event_detail");
const btn = document.getElementById("register_btn");
const forward = document.getElementById("forward_btn");
const backward = document.getElementById("backward_btn");
var arr1 = 0, arr2 = 0, arr_num = 0;

//Linking with API
const request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/raghavdhingra/Gates_2k19/master/apis/culture_metadata.json');
request.onload = () => {
    arr1 = JSON.parse(request.responseText);
    heading.innerHTML = arr1[arr_num].name;
    detail.innerHTML = arr1[arr_num].data;
    btn.href = arr1[arr_num].link;
}
forward.addEventListener("click",()=>{
    arr1 = JSON.parse(request.responseText);
    if (arr_num === arr1.length-1){
        arr_num = 0;
        heading.innerHTML = arr1[arr_num].name;
        detail.innerHTML = arr1[arr_num].data;
        btn.href = arr1[arr_num].link;
    }
    else{
        arr_num+=1;
        heading.innerHTML = arr1[arr_num].name;
        detail.innerHTML = arr1[arr_num].data;
        btn.href = arr1[arr_num].link;
    }
});
backward.addEventListener("click",()=>{
    arr1 = JSON.parse(request.responseText);
    if (arr_num === 0){
        arr_num = arr1.length - 1;
        heading.innerHTML = arr1[arr_num].name;
        detail.innerHTML = arr1[arr_num].data;
        btn.href = arr1[arr_num].link;
    }
    else {
        arr_num-=1;
        heading.innerHTML = arr1[arr_num].name;
        detail.innerHTML = arr1[arr_num].data;
        btn.href = arr1[arr_num].link;
    }
});
request.send();


//new.html
const close_it = () => {
document.getElementById("iframe").style.display='none';
document.body.style.overflow="default";
}