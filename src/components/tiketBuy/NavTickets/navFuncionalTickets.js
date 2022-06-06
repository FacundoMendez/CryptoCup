
function navFuncionalTickets(){
    const navToggle = document.querySelector(".nav-toggle-Metamask");
    const navMenu = document.querySelector(".nav-menu-Metamask");

    navMenu.classList.toggle("nav-menu_visible-Metamask");

    if (navMenu.classList.contains("nav-menu_visible-Metamask")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú") 
    }

  

  
}

export default navFuncionalTickets;