const menuToggler = document.querySelector(".menu")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
    menuToggler.classList.toggle("open");


    const ariaToggle = menuToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    menuToggler.setAttribute("aria-expanded",ariaToggle)

    navLinksContainer.classList.toggle("open")
}

menuToggler.addEventListener("click",toggleNav)

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900) {
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }
    else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)