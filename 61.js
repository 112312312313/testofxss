// Код который можно вставить в консоль YouTube
(function() {
    // Меняем весь YouTube
    document.body.innerHTML = `
        <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:999999;text-align:center;padding:50px;color:white">
            <h1 style="font-size:100px;animation:bounce 1s infinite">😂</h1>
            <h2 style="color:red">ТЫ ЗАРАЖЕН!</h2>
            <iframe width="100%" height="60%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay"></iframe>
            <marquee style="font-size:30px;margin-top:20px">RICKROLL ВЕЗДЕ!!!</marquee>
            <style>
                @keyframes bounce {
                    0%,100%{transform:translateY(0)}
                    50%{transform:translateY(-50px)}
                }
            </style>
        </div>
    `;
    
    // Блокируем кнопки назад
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        history.pushState(null, null, location.href);
    };
})();
