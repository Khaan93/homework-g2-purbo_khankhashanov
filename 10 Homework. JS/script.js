//Выводим все четные числа до 10 включительно.
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//Создадим бесконечный цикл и прервем на 5ой итерации.
let count = 0;
while (count < 10) //создает бесконечный цикл 
{
    console.log(count);
    if (count == 5) {
        break; //прерываем цикл на 5
    }
    count++;
}

//Создадим массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8)

let cabbageSoup = {
    name: 'Щи',
    ingredients: ['potato', 'beef', 'cabbage'],
}

let shashlik = {
    name: 'Шашлык',
    ingredients: ['pork', 'onion'],
}
let chickenburger = {
    name: 'Чикенбургер',
    ingredients: ['dough', 'chiken', 'onion', 'tomato'],
}

let price = {
    cabbageSoup: 240,
    shashlik: 330,
    chickenburger: 240,
}

let ingredients = ['potato', 'beef', 'cabbage', 'pork', 'dough', 'chiken', 'onion', 'tomato'];
ingredients[0] = 40;
ingredients[1] = 70;
ingredients[2] = 10;
ingredients[3] = 100;
ingredients[4] = 10;
ingredients[5] = 50;
ingredients[6] = 5;
ingredients[7] = 15;

let food = ['cabbageSoup', 'shashlik', 'chickenburger'];

//Профит для Щи
let cabbageSoupPrice = 0;
for (let i = 0; i < cabbageSoup.ingredients.length; i++) {
    cabbageSoupPrice += ingredients[i];
}
let cabbageSoupProfit = price.cabbageSoup - cabbageSoupPrice;
alert(`Прибыль с порции "Щи" составит ${cabbageSoupProfit} рублей`);

//Профит для шашлыка
let shashlikPrice = 0;
for (let i = 0; i < shashlik.ingredients.length; i++) {
    shashlikPrice += ingredients[i];
}
let shashlikProfit = price.shashlik - shashlikPrice;
alert(`Прибыль с порции "Шашлыка" составит ${shashlikProfit} рублей`);

//Профит для чикенбургера
let chikenburgerPrice = 0;
for (let i = 0; i < chickenburger.ingredients.length; i++) {
    chikenburgerPrice += ingredients[i];
    console.log(chikenburgerPrice);
}
let chikenburgerProfit = price.chickenburger - chikenburgerPrice;
alert(`Прибыль с порции "Чикенбургера" составит ${chikenburgerProfit} рублей`);

