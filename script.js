
function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let ranc=`rgb(${red},${green},${blue})`
    console.log(ranc)
    return ranc
}

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    // let h3=document.querySelector("h3");
    // h3.innerText=randomColor();
    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor();
    div.innerText=`This is your color: ${randomColor()}`;
})
let div=document.querySelector("div");
div.addEventListener("mouseenter",function(){
    div.style.backgroundColor=randomColor();
    div.innerText=`This is your color: ${randomColor()}`;
})

