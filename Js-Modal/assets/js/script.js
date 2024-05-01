let button=document.querySelector(".cont button");
let modalContent=document.querySelector(".modal-content");
let btnClose=document.querySelector(".modal-content .first");
let cont = document.querySelector(".cont")
let xIcon=document.querySelector(".modal-content i");




button.addEventListener("click",function(){
    cont.style.opacity = "0.8"
    cont.style.background = "#bcbcbc"
    modalContent.style.transform = "translateY(0)"
    
})
btnClose.addEventListener("click",function(){
    
    modalContent.style.transform = "translateY(-500px)"
    cont.style.background = "#fff"
    cont.style.opacity = "1"
    // modalContent.style.visibility = "hidden"
    
})
xIcon.addEventListener("click",function(){
    modalContent.style.transform = "translateY(-500px)"
    cont.style.background = "#fff"
    cont.style.opacity = "1"
    
})