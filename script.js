// Получаем элементы модальных окон
const bookingModal = document.getElementById("bookingModal");
const priceModal = document.getElementById("priceModal");

// Получаем кнопки
const bookBtn1 = document.getElementById("bookBtn");
const bookBtn2 = document.getElementById("bookBtn2");
const priceBtn = document.getElementById("priceBtn");

// Получаем элементы закрытия
const closeBtns = document.getElementsByClassName("close");
const sideMenu = document.querySelector(".side-menu");
const menuToggle = document.querySelector(".menu-toggle");

// Открываем модальное окно записи
bookBtn1.onclick = function() {
    bookingModal.style.display = "block";
}

bookBtn2.onclick = function() {
    bookingModal.style.display = "block";
}

// Открываем модальное окно прайс-листа
priceBtn.onclick = function() {
    priceModal.style.display = "block";
}

// Закрываем все модальные окна при нажатии на крестик
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        bookingModal.style.display = "none";
        priceModal.style.display = "none";
    }
}

// Закрываем модальные окна при клике вне их
window.onclick = function(event) {
    if (event.target == bookingModal) {
        bookingModal.style.display = "none";
    }
    if (event.target == priceModal) {
        priceModal.style.display = "none";
    }
}

// Управление боковым меню
menuToggle.addEventListener('click', function() {
    if (sideMenu.style.left === '0px') {
        sideMenu.style.left = '-80px';
    } else {
        sideMenu.style.left = '0px';
    }
});

// Закрываем меню при клике вне его
document.addEventListener('click', function(event) {
    if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
        sideMenu.style.left = '-80px';
    }
});

// Защита от изменений
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 85) e.preventDefault(); // Ctrl+U
    if (e.ctrlKey && e.keyCode === 83) e.preventDefault(); // Ctrl+S
    if (e.keyCode === 123) e.preventDefault(); // F12
});