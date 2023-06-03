document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
});     
        //creamos el evento al dar click
        //classlist para agregar una clase
        //metodo toggle para que solo la cree si no existe. y si esta la quite 

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
function transitionToMobile_proyects() {
  document.querySelector('.container2').classList.add('slide-out');
  setTimeout(function() {
    window.location.href = "mobile_proyects.html";
  }, 300);
}
function transitionToHome() {
  document.querySelector('.card').classList.add('slide-out');
  setTimeout(function() {
    window.location.href = "index.html";
  }, 0);
}
// function transitionToMobile_proyects() {
//   window.location.href = "mobile_proyects.html";}