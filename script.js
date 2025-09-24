const image = document.querySelector("#image");
const counter = document.querySelector(".counter");
const perSecond = document.querySelector(".perSecond");
const buttons = Array.from(document.querySelectorAll(".button"))

let number = 1;
let start = true;
let purchases = 0;
let cps = 0
let intervalId = null;

image.addEventListener("mousedown", eventHandlerClick);
image.addEventListener("click", eventHandlerMouseup);
buttons.forEach((btn) => btn.addEventListener("click", eventHandlerButton));

function eventHandlerClick(){
    if(start){
        start = false        
    }else{
        number += 1;
    }
    updateCounter();
    this.classList.toggle("imageTransform")
}
function eventHandlerMouseup(){
    this.classList.toggle("imageTransform")
}

function eventHandlerButton(){
    let price = Number(this.dataset.price)
    if(price <= number){
        number -= price;
        counter.innerText = number;
        if(price == 50){
        cps += 1;
        }else if(price == 500){
        cps += 10 ;        
        }
        else if(price == 5000){
        cps += 100 ;        
        }
        updatePerSecond();
        timer(1, 1000/cps);
    }else{
      alert("You can't affort this")
    }    
    
}


function timer(secund, millisecs){
    if(intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(function(){    
        number += secund;
        updateCounter();
        }, millisecs);
    }

function updateCounter(){
  counter.innerText = number;
}
function updatePerSecond(){
  perSecond.innerText = `${cps}/S`;
}