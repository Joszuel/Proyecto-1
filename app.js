let pag = document.getElementsByClassName("bot");

window.onscroll = function() {
    console.log("vertical "+ window.scrollY)
    console.log("horizontal "+ window.scrollX)

    if (window.scrollY <= window.innerHeight){
        pag[0].classList.add("activado");
        pag[1].classList.remove("activado");
        pag[2].classList.remove("activado");
        pag[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight*2){
        pag[0].classList.remove("activado");
        pag[1].classList.add("activado");
        pag[2].classList.remove("activado");
        pag[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight*2 && window.scrollY < window.innerHeight*3){
        pag[0].classList.remove("activado");
        pag[1].classList.remove("activado");
        pag[2].classList.add("activado");
        pag[3].classList.remove("activado");
    }
    if (window.scrollY >= window.innerHeight*3 && window.scrollY < window.innerHeight*4){
        pag[0].classList.remove("activado");
        pag[1].classList.remove("activado");
        pag[2].classList.remove("activado");
        pag[3].classList.add("activado");
    }
};