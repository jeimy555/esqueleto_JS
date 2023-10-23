let esqueleto="off";
let esqueletoStop=document.getElementById("esqueletoOff");
let boton= new Audio ("/sound/botonbailar.mp3")
let boton2= new Audio ("/sound/audio.mp3")
function bailar() {
    if (esqueleto=="off") {
        esqueleto="on"
        console.log("on")
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click', ()=>{
        boton.play()})
        esqueletoStop.addEventListener('click', ()=>{
            boton2.play()})
    } else{
        esqueleto="off"
        console.log("off")
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click', ()=>{
            boton2.pause()})
    }
    
}