let boton = document.getElementsByClassName("bot");
let pag = document.getElementsByClassName("pag");

window.onscroll = function() {

    if (window.scrollY <= window.innerHeight){
        boton[0].classList.add("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight*2){
        boton[0].classList.remove("activado");
        boton[1].classList.add("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight*2 && window.scrollY < window.innerHeight*3){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.add("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight*3 && window.scrollY < window.innerHeight*4){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.add("activado");
    }
};

boton[0].addEventListener("click", ()=>{
    pag[0].scrollIntoView({
        behavior: 'smooth'
    })
});

boton[1].addEventListener("click", ()=>{
    pag[1].scrollIntoView({
        behavior: 'smooth'
    })
});
boton[2].addEventListener("click", ()=>{
    pag[2].scrollIntoView({
        behavior: 'smooth'
    })
});
boton[3].addEventListener("click", ()=>{
    pag[3].scrollIntoView({
        behavior: 'smooth'
    })
});