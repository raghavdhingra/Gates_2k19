window.addEventListener("load",()=>{
    if (screen.width < 1000){
        document.location = "./mobile_view/index.html";
    }
    else{
        document.location = "./index_1.html";
    }
});