// Импорт переменной users из файла usersBase.js
import users from "./usersBase.js";

let user = prompt('Введите имя пользователя', '');
if (users[user] !== undefined) {
    let password = prompt('Введите пароль', '');
    if (password == users[user]) {
        alert(`Добро пожаловать, ${user}!`);
    } else if (password !== users[user] || password == undefined || password == null) {
        alert("Неправильный пароль");
    }
} else if (users[user] == undefined) {
    alert("Такого пользователя не существует");
}