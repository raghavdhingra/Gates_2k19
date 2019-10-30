window.addEventListener("load",()=>{
    if (screen.width < 999){
        document.location = "./mobile_view/index.html";
    }
    else{
        document.location = "./index_1.html";
    }
});
