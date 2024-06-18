document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const listItems = document.querySelectorAll('.lang-list__item');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.querySelector('.lang-list__link--active')) {
                header.classList.add('active-bg');
            } else {
                header.classList.remove('active-bg');
            }
        });
    });
});
