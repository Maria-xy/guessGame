let headingOne=document.querySelector(".headingOne")
let inputOne=document.querySelector(".inputOne")
let buttonOne=document.querySelector(".buttonOne")
let error1=document.querySelector(".error1")

let headingTwo=document.querySelector(".headingTwo")
let chance=document.querySelector(".chance")
let inputTwo=document.querySelector(".inputTwo")
let buttonTwo=document.querySelector(".buttonTwo")
let error2=document.querySelector(".error2")

count=4

buttonOne.addEventListener("click",function(){
 if(!inputOne.value){
    error1.innerHTML="Please Enter something"
 } else if(isNaN(inputOne.value)){
     error1.innerHTML="Please Enter a number"
 } else if(!(inputOne.value<=10 && inputOne.value>0)){
    error1.innerHTML="Please enter a number from 1-10";
 } else {
   headingTwo.style.display="block";
    chance.style.display="block"
   inputTwo.style.display="inline-block"
   buttonTwo.style.display="inline-block"
   error2.style.display="block"
    chance.innerHTML=`chance: ${count}`

   headingOne.style.display="none"
        inputOne.style.display="none"

        buttonOne.style.display="none"
        error1.style.display="none"
 }
})

buttonTwo.addEventListener("click",function(){
    if(!inputTwo.value){
       error2.innerHTML="Please Enter something"
    } else if(isNaN(inputTwo.value)){
        error2.innerHTML="Please Enter a number"
    } else if(!(inputTwo.value<=10 && inputTwo.value>0)){
       error2.innerHTML="Please enter a number from 1-10";
    } else {
        if(count>1){
            count--
            chance.innerHTML=`Chance: ${count}`
            if(inputOne.value==inputTwo.value){
               headingTwo.innerHTML="Player Two Wins!";
               buttonTwo.style.display='none'
        }}
        else{
            count=0
              chance.innerHTML=`Chance: ${count}`
              headingTwo.innerHTML="Player one wins!";
              buttonTwo.style.display="none"
        }
    }

    
    })