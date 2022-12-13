//Выводим все четные числа до 10 включительно.
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//Создадим бесконечный цикл и прервем на 5ой итерации.
let count = 1;
while (true) {//Условие всегда истинно
    console.log(count);
    if (count === 5) {
        break; //прерываем цикл на 5
    }
    count++;
}

//Создадим массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8)

let ingredientsPrice = {
    potato: 40,
    beef: 70,
    cabbage: 10,
    pork: 100,
    dough: 10,
    chiken: 50,
    onion: 5,
    tomato: 15,
}

let cabbageSoup = {
    name: 'Щи',
    ingredients: ['potato', 'beef', 'cabbage'],
    price: 240,
}

let shashlik = {
    name: 'Шашлык',
    ingredients: ['pork', 'onion'],
    price: 330,
}
let chickenburger = {
    name: 'Чикенбургер',
    ingredients: ['dough', 'chiken', 'onion', 'tomato'],
    price: 240,
}

let food = [cabbageSoup, shashlik, chickenburger];
let text = "";
for (let i = 0; i < food.length; i++) {
    let costPrice = 0;
    let profit = 0;
    for (let number = 0; number < food[i].ingredients.length; number++) {
        let name = food[i].ingredients[number];
        costPrice += ingredientsPrice[name];
        console.log(costPrice);
    }
    profit = '"' + food[i].name + '" - ' + (food[i].price - costPrice) + ' рублей. ';
    text += profit
}

alert('Профит для блюда ' + text);
