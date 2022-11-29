// Ингридиенты для блюда (объекты)
let chiken = {
    price: 40,
    weght: 200,
};
let mutton = {
    price: 25,
    weght: 100,
};
let beef = {
    price: 30,
    weght: 100,
};
let pork = {
    price: 35,
    weght: 100,
};
let rice = {
    price: 20,
    weght: 300,
}
let dough = {
    price: 5,
    weght: 80,
};
let potato = {
    price: 10,
    weght: 80,
};
let cabbage = {
    price: 10,
    weght: 100,
};
let carrot = {
    price: 5,
    weght: 40,
};
let onion = {
    price: 5,
    weght: 20,
};
let tomato = {
    price: 15,
    weght: 50,
};

// Блюда в меню, собранные из ингридиентов (массивы)
let cabbageSoup = ['potato', 'beef', 'cabbage'];
let pilaf = ['rice', 'beef', 'carrot'];
let shashlik = ['pork', 'onion'];
let chickenburger = ['dough', 'chiken', 'onion', 'tomato'];
let buuzy = ['dough', 'mutton', 'beef', 'onion'];

let menu = ['cabbageSoup', 'pilaf', 'shashlik', 'chikenburger', 'buuzy'];

menu.splice(4, 1); // Удалили буузы из меню "menu = ['cabbageSoup', 'pilaf', 'shashlik', 'chikenburger']"
buuzy.splice(1, 1, 'pork'); // Удалили баранину из ингридиентов бууз, и добавили вместо нее свинину "buuzy = ['dough', 'pork', 'beef', 'onion']"
menu.unshift('buuzy'); // Добавили буузы обратно в меню, но уже в начало списка "menu = ['buuzy', 'cabbageSoup', 'pilaf', 'shashlik', 'chikenburger']"

// Считаем себестоимость каждого блюда
let cabbageSoupPrice = (potato.price + beef.price + cabbage.price); //Суммируем Price свойства ингридиентов 
let pilafPrice = (rice.price + beef.price * 1.2 + cabbage.price); // Говядины больше на 20%, чем за цену в свойстве мяса
let shashlikPrice = (pork.price * 3 + onion.price); // В три раза больше свинины
let chickenburgerPrice = (dough.price * 2 + chiken.price + onion.price + tomato.price); // В 2 раза больше теста
let buuzyPrice = (dough.price + pork.price + beef.price + onion.price / 2); // В два раза меньше лука

// Цена с накруткой от меня
let MyCabbageSoupPrice = (cabbageSoupPrice * 2);
let MyPilafPrice = (pilafPrice * 2);
let MyShashlikPrice = (shashlikPrice * 2);
let MyChickenburgerPrice = (chickenburgerPrice * 2);
let MyBuuzyPrice = (buuzyPrice * 2);

// Моя прибыль
let profitCabbageSoup = (MyCabbageSoupPrice - cabbageSoupPrice);
let profitPilaf = (MyPilafPrice - pilafPrice);
let profitShashlik = (MyShashlikPrice - shashlikPrice);
let profitChickenburger = (MyChickenburgerPrice - chickenburgerPrice);
let profitBuuzy = (MyBuuzyPrice - buuzyPrice);

quantityDish = menu.length; // Количество блюд в меню - 5
menu.splice(1, quantityDish); // Удаляем все блюда из меню, кроме бууз (буузы мы ставили на первое место)

console.log(menu);