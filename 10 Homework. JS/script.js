//Выводим все четные числа до 10 включительно.
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
};

//Создадим бесконечный цикл и прервем на 5ой итерации.
let count = 1;
while (true) {//Условие всегда истинно
    console.log(count);
    if (count === 5) {
        break; //прерываем цикл на 5
    }
    count++;
};

//Создадим массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8)

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

let profit = 0;
for (let i = 0; i < menu.length; i++) {
    let cost = 0;
    const ingredients = menu[i].ingredients;

    for (let j = 0; j < menu[i].ingredients.length; j++) {
        let ingredient = menu[i].ingredients[j];
        let ingredientPrice =
            (ingredientsPrice[ingredient.name] * ingredient.weight) / 100;
        cost += ingredientPrice;
    }
    menu[i].cost = cost;
    profit = menu[i].price - menu[i].cost;
    console.log(profit)
    alert(`Цена блюда "${menu[i].name}" - ${menu[i].price}
Стоимость приготовления "${menu[i].name}" - ${menu[i].cost}
Профит от продажи "${menu[i].name}" составляет ${profit} рублей.`)
};

