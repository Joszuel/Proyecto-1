let boton = document.getElementsByClassName("bot");
let pag = document.getElementsByClassName("pag");
let altura = document.querySelector(".pag").clientHeight
window.addEventListener("scroll", ()=>{

    if (window.scrollY <= altura*0.5){
        boton[0].classList.add("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY > altura*0.5 && window.scrollY < altura*1.5){
        boton[0].classList.remove("activado");
        boton[1].classList.add("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY > altura*1.5 && window.scrollY < altura*2.5){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.add("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY > altura*2.5 && window.scrollY < altura*3.5){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.add("activado");
    }
});

window.onscroll = function() {

    console.log(window.scrollY)
    
};

boton[0].addEventListener("click", ()=>{
    pag[0].scrollIntoView({behavior: 'smooth'})
});
boton[1].addEventListener("click", ()=>{ 
    pag[1].scrollIntoView({behavior: 'smooth'})
});
boton[2].addEventListener("click", ()=>{
    pag[2].scrollIntoView({behavior: 'smooth'})
});
boton[3].addEventListener("click", ()=>{
    pag[3].scrollIntoView({behavior: 'smooth'})
});