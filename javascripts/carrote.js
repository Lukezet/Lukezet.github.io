const carrote = document.querySelector("#carrote");
let carroteSection = document.querySelectorAll(".carrote-section");
let carroteSectionLast = carroteSection[carroteSection.length -1];

const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

carrote.insertAdjacentElement('afterbegin',carroteSectionLast);//obtengo el ultimo elemento y lo coloco en el carrote

function Sig(){
    let carroteSectionFirst = document.querySelectorAll(".carrote-section")[0];
    carrote.style.marginLeft = "-100%";
    carrote.style.transition = "all 0.7s";
    setTimeout(function(){
        carrote.style.transition = "none";
        carrote.insertAdjacentElement('beforeend',carroteSectionFirst);
        carrote.style.marginLeft = "0";
    },700);
}
function Back(){
    let carroteSection = document.querySelectorAll(".carrote-section");
    let carroteSectionLast = carroteSection[carroteSection.length -1];
    carrote.style.marginLeft = "100%";
    carrote.style.transition = "all 0.7s";
    setTimeout(function(){
        carrote.style.transition = "none";
        carrote.insertAdjacentElement("afterbegin",carroteSectionLast);
        carrote.style.marginLeft = "0";
    },700)
}
btnRight2.addEventListener('click', function(){Sig();})
btnLeft2.addEventListener('click', function(){Back();})
setInterval(function(){
    Sig();
},4000)