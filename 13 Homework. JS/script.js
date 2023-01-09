let users = {
    Purbo: '0',
    Arsalan: '1',
    Anna: '2',
}

let user = prompt('Введите имя пользователя', '');
if (users[user] !== undefined) {
    let password = prompt('Введите пароль', '');
    if (password == users[user]) {
        alert(`Добро пожаловать, ${user}!`);
    } else if (password !== users[user] || password == undefined || password == null) {
        alert("Неправильный пароль");
    }
} else if (users[user] == undefined || user !== 'Purbo' && user !== 'Arsalan' && user !== 'Anna') {
    alert("Такого пользователя не существует");
}

