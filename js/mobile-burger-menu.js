(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-burger-menu-button-open]"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".header__mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();