import menu from "./menu.json" assert {type: 'json'};

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
    count++
};


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
    let ingredients = menu[i].ingredients;

    for (let j = 0; j < ingredients.length; j++) {
        let ingredient = ingredients[j];
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

