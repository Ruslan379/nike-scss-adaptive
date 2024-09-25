// Задаємо коліри для кнопок < (prevBtn), > (nextBtn) та пагінації
const colorArrowBtnFirst = '#FFB549';
const colorArrowBtnFirstBoxShadow = '3px 3px 5px 3px rgba(221, 16, 16, 0.5)';
const colorArrowBtnSecond = 'rgba(255, 255, 255, 0.28)';
const colorPaginationBtn = '#757575';
const colorPaginationBtnBoxShadow = '2px 2px 4px 2px rgba(30, 36, 55, 0.5)';

const slider = document.querySelector("[data-slider]");
const prevBtn = document.querySelector("[data-slider-prevBtn]");
const nextBtn = document.querySelector("[data-slider-nextBtn]");

// Задаємо початковий стан (колір) кнопок < та >
prevBtn.querySelector('path').setAttribute('stroke', colorArrowBtnSecond);
nextBtn.querySelector('path').setAttribute('stroke', colorArrowBtnFirst);
prevBtn.disabled = true; // Робимо кнопку < неактивной
const slides = document.querySelectorAll("[data-slider] [data-slider-item]");
// console.log("slides:", slides);

// Пагінація
const paginationFirst = document.querySelector("[data-slider-pagination-first]");
const paginationSecond = document.querySelector("[data-slider-pagination-second]");
const paginationThird = document.querySelector("[data-slider-pagination-third]");
// const slideWidth = slides[0].clientWidth;
let slideWidth;
// let slideWidth = slides[0].clientWidth;
// console.log("slideWidth_0:", slideWidth);
let currentIndex = 0;

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

function slideRight() {
    slideWidth = slides[0].clientWidth;
    console.log("slideWidth_R:", slideWidth);
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
        // console.log("currentIndex->slideRight;", currentIndex);
    }
    updateSlider();
}

function slideLeft() {
    slideWidth = slides[0].clientWidth;
    console.log("slideWidth_L:", slideWidth);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    // Перевіка ширини єкрану та повернення а початкову позицію (не працює):
    // if (window.innerWidth >= 1440) {
    //     slider.style.transform = `translateX(0)`; //todo - повернення на початкову позицію
    //     return;
    // };
    const newPosition = currentIndex * slideWidth;
    slider.style.transform = `translateX(${- newPosition}px)`; //!!!!! - newPosition
    // +++++ зміна стану та кольору копок "<" і ">" та Пагінація
    if (currentIndex === 0) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', colorArrowBtnSecond);
        nextBtn.querySelector('path').setAttribute('stroke', colorArrowBtnFirst);
        // зміна стану:
        prevBtn.disabled = true; // Делаем кнопку неактивной
        nextBtn.disabled = false; // Разблокируем следующую кнопку
        // Пагінація:
        paginationFirst.style.height = '8px';
        paginationFirst.style.backgroundColor = colorArrowBtnFirst;
        paginationFirst.style.boxShadow = colorArrowBtnFirstBoxShadow;
        paginationSecond.style.height = '6px';
        paginationSecond.style.backgroundColor = colorPaginationBtn;
        paginationSecond.style.boxShadow = colorPaginationBtnBoxShadow;
        paginationThird.style.height = '6px';
        paginationThird.style.backgroundColor = colorPaginationBtn;
        paginationThird.style.boxShadow = colorPaginationBtnBoxShadow;

    } else if (currentIndex === 1) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', colorArrowBtnFirst);
        nextBtn.querySelector('path').setAttribute('stroke', colorArrowBtnFirst);
        // зміна стану:
        prevBtn.disabled = false; // Разблокируем предыдущую кнопку
        nextBtn.disabled = false; // Разблокируем следующую кнопку
        // Пагінація:
        paginationFirst.style.height = '6px';
        paginationFirst.style.backgroundColor = colorPaginationBtn;
        paginationFirst.style.boxShadow = colorPaginationBtnBoxShadow;
        paginationSecond.style.height = '8px';
        paginationSecond.style.backgroundColor = colorArrowBtnFirst;
        paginationSecond.style.boxShadow = colorArrowBtnFirstBoxShadow;
        paginationThird.style.height = '6px';
        paginationThird.style.backgroundColor = colorPaginationBtn;
        paginationThird.style.boxShadow = colorPaginationBtnBoxShadow;
    } else if (currentIndex === 2) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', colorArrowBtnFirst);
        nextBtn.querySelector('path').setAttribute('stroke', colorArrowBtnSecond);
        // зміна стану:
        prevBtn.disabled = false; // Разблокируем предыдущую кнопку
        nextBtn.disabled = true; // Делаем кнопку неактивной
        // Пагінація:
        paginationFirst.style.height = '6px';
        paginationFirst.style.backgroundColor = colorPaginationBtn;
        paginationFirst.style.boxShadow = colorPaginationBtnBoxShadow;
        paginationSecond.style.height = '6px';
        paginationSecond.style.backgroundColor = colorPaginationBtn;
        paginationSecond.style.boxShadow = colorPaginationBtnBoxShadow;
        paginationThird.style.height = '8px';
        paginationThird.style.backgroundColor = colorArrowBtnFirst;
        paginationThird.style.boxShadow = colorArrowBtnFirstBoxShadow;
    }
    // +++++
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Відстежуємо кліки на елементах пагінації:
paginationFirst.addEventListener('click', paginationFirstСlick);
paginationSecond.addEventListener('click', paginationSecondСlick);
paginationThird.addEventListener('click', paginationThirdСlick);

function paginationFirstСlick() {
    currentIndex = 0;
    updateSlider();
}

function paginationSecondСlick() {
    currentIndex = 1;
    updateSlider();
}
function paginationThirdСlick() {
    currentIndex = 2;
    updateSlider();
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Додаємо можливість гортати слайди за допомогою миші, 
// перетягуючи їх у різні боки ліворуч та праворуч
isDragging = false;

slider.addEventListener('mousemove', handleMouseMove);
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseup', handleMouseUp);

function handleMouseMove(event) {
    // Перевіка ширини єкрану:
    if (window.innerWidth >= 1440) return;
    if (!isDragging) return;
    const diffX = event.clientX - startX;
    // console.log("diffX < -50:", diffX);
    if (diffX < -50) {
        // console.log("currentIndex->handleMouseMove(diffX < -50)", currentIndex);
        if (currentIndex === 2) return;
        slideRight();
        // console.log("currentIndex->handleMouseMove(diffX < -50+)", currentIndex);
        startX = event.clientX;
        // console.log("startX->handleMouseMove+:", startX);
    } else if (diffX > 50) {
        // console.log("currentIndex->handleMouseMove(diffX > 50)", currentIndex);
        if (currentIndex === 0) return;
        slideLeft();
        // console.log("currentIndex->handleMouseMove(diffX > 50-)", currentIndex);
        startX = event.clientX;
        // console.log("startX->handleMouseMove-:", startX);
    }
}

function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
    slider.style.cursor = 'pointer';
    // console.log("startX->handleMouseDown:", startX);
}

function handleMouseUp() {
    isDragging = false;
    slider.style.cursor = 'auto';
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Додаємо події touchstart, touchmove та touchend 
// для визначення жесту перетягування слайдів у різні боки ліворуч та праворуч:
slider.addEventListener('touchstart', (event) => {
    isDragging = true;
    startX = event.clientX;
});

slider.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    const diffX = event.clientX - startX;
    if (diffX > 50) {
        if (currentIndex === 2) return;
        slideRight();
        startX = event.clientX;
    } else if (diffX < -50) {
        if (currentIndex === 0) return;
        slideLeft();
        startX = event.clientX;
    }
});

slider.addEventListener('touchend', (event) => {
    isDragging = false;
});