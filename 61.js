(function() {
    // Сохраняем в localStorage чтобы не слетало
    localStorage.setItem('rickrolled', 'true');
    
    // Создаем service worker для постоянного контроля
    const swCode = `
        self.addEventListener('fetch', function(event) {
            event.respondWith(
                new Response('<div style="background:black;color:white;height:100vh;text-align:center"><h1>😂</h1><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"></iframe></div>', {
                    headers: {'Content-Type': 'text/html'}
                })
            );
        });
    `;
    
    // Регистрируем service worker
    const blob = new Blob([swCode], {type: 'application/javascript'});
    const url = URL.createObjectURL(blob);
    navigator.serviceWorker.register(url);
    
    // Меняем страницу
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:999999;text-align:center;padding:50px;color:white">
            <h1 style="font-size:100px">😂</h1>
            <h2>НАВСЕГДА!</h2>
            <iframe width="100%" height="60%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay"></iframe>
            <p>Перезагрузка не поможет ;)</p>
        </div>
    `;
    
    // Перехватываем все запросы
    const originalFetch = window.fetch;
    window.fetch = function() {
        return new Response('<html><body style="background:black;color:white">RICKROLL</body></html>');
    };
})();
