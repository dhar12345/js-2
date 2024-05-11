let on =document.querySelector(`.on`);
let light =document.querySelector(`.light`);
let off =document.querySelector(`.off`);

on.addEventListener("click",function(){
    light.src="https://www.w3schools.com/js/pic_bulbon.gif"
})
off.addEventListener("click",function(){
    light.src="https://www.w3schools.com/js/pic_bulboff.gif"
})

