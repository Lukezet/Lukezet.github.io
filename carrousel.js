const carrousel = document.querySelector("#carrousel");
let carrouselSection = document.querySelectorAll(".carrousel-section");
let carrouselSectionLast = carrouselSection[carrouselSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

carrousel.insertAdjacentElement('afterbegin',carrouselSectionLast);//obtengo el ultimo elemento y lo coloco en el carrousel

function Next(){
    let carrouselSectionFirst = document.querySelectorAll(".carrousel-section")[0];
    carrousel.style.marginLeft = "-100%";
    carrousel.style.transition = "all 0.7s";
    setTimeout(function(){
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement('beforeend',carrouselSectionFirst);
        carrousel.style.marginLeft = "0";
    },700);
}
function Prev(){
    let carrouselSection = document.querySelectorAll(".carrousel-section");
    let carrouselSectionLast = carrouselSection[carrouselSection.length -1];
    carrousel.style.marginLeft = "100%";
    carrousel.style.transition = "all 0.7s";
    setTimeout(function(){
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement("afterbegin",carrouselSectionLast);
        carrousel.style.marginLeft = "0";
    },700)
}
btnRight.addEventListener('click', function(){Next();})
btnLeft.addEventListener('click', function(){Prev();})
setInterval(function(){
    Next();
},4000)