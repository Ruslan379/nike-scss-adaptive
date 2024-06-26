(() => {
  const menuBtnRef = document.querySelector("[data-burger-menu-buttons]");
  const mobileMenuRef = document.querySelector("[data-burger-menu]");
  const mobileMenuItemRef = document.querySelectorAll(".nav-list__item");

  let expanded = false;

  //! Закриття burger-menu по кліку на кнопці icon-burger-menu-button-close
  menuBtnRef.addEventListener("click", () => {
    // console.log("Це клік в burger-menu-buttons");

    expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    document.body.classList.toggle("no-scroll");
  });


  //! Закриття burger-menu по кліку на елементі списку nav-list
  mobileMenuItemRef.forEach(function(item) {
    item.addEventListener('click', function () {
      // console.log("Це клік в nav-list__item");

      expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.classList.toggle("is-open");

      document.body.classList.toggle("no-scroll");
    });
  });


  // function closeBurgerMenu() {
  //   console.log("Це клік в nav-list__item");
  // }

})();