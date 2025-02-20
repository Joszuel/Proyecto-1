const botones = document.querySelector(".caja_botones");
const boton = document.querySelectorAll(".bot")
const pag = document.querySelectorAll(".pag");
let altura = document.querySelector(".pag").clientHeight

window.addEventListener("scroll", ()=>{
    altura = document.querySelector(".pag").clientHeight
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
    if (window.scrollY > altura*1.5 && window.scrollY < altura*3.5){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.add("activado");
        boton[3].classList.remove("activado");
    }
    if (window.scrollY > altura*3.5 && window.scrollY < altura*4.5){
        boton[0].classList.remove("activado");
        boton[1].classList.remove("activado");
        boton[2].classList.remove("activado");
        boton[3].classList.add("activado");
    }
});

 window.onscroll = function() {

     console.log(window.scrollY)
    
 };

botones.addEventListener("click",(e)=>{
    if (e.target.textContent.toUpperCase() == "INICIO"){
        pag[0].scrollIntoView({behavior: 'smooth'})
    }
    if (e.target.textContent.toUpperCase() == "SERVICIOS"){           
        pag[1].scrollIntoView({behavior: 'smooth'})
    }
    if (e.target.textContent.toUpperCase() == "NOSOTROS"){           
        pag[2].scrollIntoView({behavior: 'smooth'})
    }
    if (e.target.textContent.toUpperCase() == "CONTACTOS"){           
        pag[4].scrollIntoView({behavior: 'smooth'})
    }
})