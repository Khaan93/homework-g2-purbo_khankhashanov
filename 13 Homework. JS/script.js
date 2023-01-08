let users = {
    Purbo: '0',
    Arsalan: '1',
    Anna: '2',
}

let user = prompt('Введите имя пользователя', '');
if (user == 'Purbo' || user == 'Arsalan' || user == 'Anna') {
    let password = prompt('Введите пароль', '');
    if (password == users[user]) {
        alert(`Добро пожаловать, ${user}!`);
    } else if (password != users[user] || password == undefined && password == NaN) {
        alert("Неправильный пароль");
    }
} else if (users[user] == undefined) {
    alert("Такого пользователя не существует");
}

