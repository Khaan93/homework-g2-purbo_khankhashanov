//Функция, принимающая два числа и возвращающая меньшее из них.
let first = +prompt("Введите любое число"); //+prompt приводит значение строки к числу 
let second = +prompt("Введите другое число");

alert(`Вы ввели числа ${first} и ${second}. 
Наименьшее число из них - ${minNumber(first, second)}`)

function minNumber(a, b) {
    return a < b ? a : b;
}

//Создадим массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации.

let cabbageSoup = {
    name: 'Щи',
    ingredients: [
        { name: 'potato', weight: 100 },
        { name: 'beef', weight: 100 },
        { name: 'cabbage', weight: 100 }
    ],
    price: 240,
};

let shashlik = {
    name: 'Шашлык',
    ingredients: [
        { name: 'pork', weight: 200 },
        { name: 'onion', weight: 30 },
    ],
    price: 330,
};

let chickenburger = {
    name: 'Чикенбургер',
    ingredients: [
        { name: 'dough', weight: 300 },
        { name: 'chiken', weight: 150 },
        { name: 'onion', weight: 20 },
        { name: 'tomato', weight: 30 },
    ],
    price: 240,
};

let menu = [cabbageSoup, shashlik, chickenburger];

// Цена за 100 гр
let ingredientsPrice = {
    potato: 40,
    beef: 60,
    cabbage: 10,
    pork: 50,
    dough: 10,
    chiken: 40,
    onion: 5,
    tomato: 15,
};

let wholeCost = 0;
for (let i = 0; i < menu.length; i++) {
    const ingredients = menu[i].ingredients;

    menu[i].profit = calcProfit(
        ingredients,
        ingredientsPrice,
        menu[i].price
    );
    alert(JSON.stringify(menu[i]))
};

function calcProfit(ingredients, costs, price) {
    let cost = 0;
    for (let j = 0; j < ingredients.length; j++) {
        let ingredient = ingredients[j];

        let ingredientPrice = (costs[ingredient.name] * ingredient.weight) / 100;
        cost += ingredientPrice;
    }
    return price = cost;
}
