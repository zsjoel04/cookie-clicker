const image = document.querySelector("#image");
const counter = document.querySelector(".counter");
const perSecond = document.querySelector(".perSecond");
const buttons = Array.from(document.querySelectorAll(".button"));

let number = 0;
let start = true;
let purchases = 0;
let cps = 0
let intervalId = null;

image.addEventListener("mousedown", eventHandlerClick);
image.addEventListener("click", eventHandlerMouseup);
btn1.addEventListener("click", eventHandlerButton);
btn2.addEventListener("click", eventHandlerButton);
btn3.addEventListener("click", eventHandlerButton);


function eventHandlerClick(){
    if(start){
        start = false        
        counter.innerText = number
    }else{
        number += 1;
        counter.innerText = number
    }
    this.classList.toggle("imageTransform")
}
function eventHandlerMouseup(){
    this.classList.toggle("imageTransform")
}


function eventHandlerButton(){
    let space = this.innerText.indexOf(" ");
    let price = this.innerText.slice(space + 1);
    price = Number(price)
    if(price <= number){
        number -= price;
        counter.innerText = number;
        if(price == 10){
        cps += 1;
        }else if(price == 500){
        cps += 10 ;        
        }
        else if(price == 5000){
        cps += 100 ;        
        }
        perSecond.innerText = `${cps}/S`;
        timer(1, 1000/cps);
    }
}


function timer(secu, millisecs){
    if(intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function(){    
        number += secu;
        counter.innerText = number;
        }, millisecs);
    }


