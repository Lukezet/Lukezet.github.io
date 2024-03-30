document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show')
});     
        //creamos el evento al dar click
        //classlist para agregar una clase
        //metodo toggle para que solo la cree si no existe. y si esta la quite 

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ?  "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered    ?          1 : 0;
  backToTopButton.style.transform = isBackToTopRendered  ? "scale(1)" : "scale(0)";
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
    window.location.href = "/Pages/mobile_proyects.html";
  }, 500);
}
function transitionToWebDesktop_proyects() {
  document.querySelector('.container2').classList.add('slide-out');
  setTimeout(function() {
    window.location.href = "/Pages/web&desk_proyects.html";
  }, 500);
}
function transitionToDesign_proyects() {
  document.querySelector('.container2').classList.add('slide-out');
  setTimeout(function() {
    window.location.href = "/Pages/design_proyects.html";
  }, 500);
}



function transitionToHome() {
  document.querySelector('.card').classList.add('slide-out');
  setTimeout(function() {
    window.location.href = "/index.html";
  }, 500);
}

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("contact");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Abrir el modal cuando se hace clic en el botón
// Abrir el modal cuando se hace clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.remove("modal-close-animation");
  modal.classList.add("modal-animation");
}
// Cerrar el modal cuando se hace clic en la 'x' o fuera del modal
span.onclick = function() {
  modal.classList.remove("modal-animation");
  modal.classList.add("modal-close-animation");
  setTimeout(function() {
    modal.style.display = "none";
    modal.classList.remove("modal-close-animation");
  }, 300); // Igualar la duración de la animación en milisegundos
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("modal-animation");
    modal.classList.add("modal-close-animation");
    setTimeout(function() {
      modal.style.display = "none";
      modal.classList.remove("modal-close-animation");
    }, 300); // Igualar la duración de la animación en milisegundos
  }
}
    // Detectar cuándo se vuelve a cargar la página (cuando se retrocede)
    window.addEventListener("pageshow", function(event) {
      if (event.persisted) {
        location.reload(); // Recargar la página si el evento es persistente (se retrocedió)
      }
    });
