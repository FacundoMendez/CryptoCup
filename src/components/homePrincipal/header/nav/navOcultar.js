const navOcultar = () => {
    let navClickEnlace = document.querySelectorAll(".nav-menu-item")
    const navMenu = document.querySelector(".nav-menu");

    for (let element of navClickEnlace) {
        element.addEventListener("click", function(){
            navMenu.classList.toggle("nav-menu_visible");
        })
    }
}

export default navOcultar; 