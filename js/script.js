let right=document.getElementById("right");
let bg=document.getElementById("bg");
let  btn=document.getElementById("btn");
let color=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click',bgchange)

function bgchange(){
let colorchnge="#";
for(let i=1;i<=6;i++){
    colorchnge+=hexcolor()
}

bg.style.backgroundColor= colorchnge
right.innerHTML=colorchnge
console.log(colorchnge);

}

function hexcolor(){
  let hex=  Math.floor(Math.random()*16);
  return  color[hex];
}
console.log(hexcolor());