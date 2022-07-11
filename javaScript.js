
let count=document.getElementById("count")
let number=1;

document.getElementById("inc-btn").addEventListener("click",function increment(){
   
    count.textContent=number
    number++    
})
 let save=document.getElementById("save-btn")
 let para=document.getElementById("ent-para")
 

 save.addEventListener("click",function sav(){
    para.innerText+=" - "+count.innerText
     count.textContent=0
     number=1
 }
 )