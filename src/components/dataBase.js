const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    passwords: 'password',
    database: 'my-database',
});
connection.connect((err) => {
    if (err) {
        console.error('Ошибка при подключении к базе данных:', err);
    } else {
        console.log('Подключение к базе данных MySQL успешно установлено');
    }
});
connection.query('SELECT * FROM user', (error, results, fields) => {
    if (error) {
        console.error('Ошибка при выполнении запроса:', error);
    } else {
        console.log('Результаты запроса:', results);
    }
});
connection.end((err) => {
    if (err) {
        console.error('Ошибка при закрытии соединения с базой данных:', err);
    } else {
        console.log('Соединение с базой данных успешно закрыто');
    }
});

