const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");
document.getElementById("right1").addEventListener("click", ()=>{
    cont1.style.display = "none";
    cont2.style.display = "flex";
});

document.getElementById("left2").addEventListener("click", ()=>{
    cont2.style.display = "none";
    cont1.style.display = "flex";
});

document.getElementById("right2").addEventListener("click", ()=>{
    cont2.style.display = "none";
    cont3.style.display = "flex";
});

document.getElementById("left3").addEventListener("click", ()=>{
    cont3.style.display = "none";
    cont2.style.display = "flex";
}); 
//--------------------------
const in1=document.getElementById("in1")
const p1=document.getElementById("p-in1")
const button=document.getElementById("btn4")
const in2=document.getElementById("in2")
const p2=document.getElementById("p-in2")
const in3=document.getElementById("in3")
const p3=document.getElementById("p-in3")
const in4=document.getElementById("in4")
const p4=document.getElementById("p-in4")
button.addEventListener("click" ,()=>{
    if(in1.value===""){
        p1.innerHTML="Please enter your name"
    }
    else if(in1.value.length<3 || in1.value.length>15){
        p1.innerHTML="The charachters must be between 3-15"
    }
    else{
        p1.innerHTML=""
    }
    if(in2.value===""){
        p2.innerHTML="Please Enter your Email"
    }
    else{
        p2.innerHTML=""
    }
    if(in3.value===""){
        p3.innerHTML="Enter a subject";
    }
    else if(in3.value.length<3){
        p3.innerHTML="Subject must be at least 3 characters.";
    }
    else{
        p3.innerHTML=""
    }
    if (in4.value!== "" && in4.value.length < 5){
        p4.innerHTML="Massage At least 5 Charachters"
    }
    else{
        p4.innerHTML=""
    }
})
