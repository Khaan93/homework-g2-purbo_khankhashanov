import menu from "./menu.json" assert {type: 'json'};
import ingredientsPrice from "./ingredientsPrice.json" assert {type: 'json'};

// let menu = [
//     {
//         name: "Щи",
//         ingredients: ["potato", "beef", "cabbage"],
//         price: 240
//     },
//     {
//         name: "Шашлык",
//         ingredients: ["pork", "onion"],
//         price: 330
//     },
//     {
//         name: "Чикенбургер",
//         ingredients: ["dough", "chicken", "onion", "tomato"],
//         price: 240
//     },
//     {
//         name: "Простой салат",
//         ingredients: ["cabbage", "onion", "tomato"],
//         price: 60
//     }
// ]

// let ingredientsPrice = {
//     "potato": 40,
//     "beef": 60,
//     "cabbage": 10,
//     "pork": 50,
//     "dough": 10,
//     "chicken": 40,
//     "onion": 5,
//     "tomato": 15
// }

console.log("Задание 1. Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует reduce:")
menu.forEach((dish) => {
    let cost = dish.ingredients.reduce((sum, item) => {
        return sum + ingredientsPrice[item]
    }, 0)
    console.log(`Себестоимость блюда "${dish.name}" составляет - ${cost} рублей`)
});


console.log("Задание 2. Запишите в каждое блюдо себестоимость, используя map и функцию из первого задания.")
let costSum = menu.map((menuItem) => {
    let costPrice = menuItem.ingredients.reduce((sum, item) => {
        return sum + ingredientsPrice[item]
    }, 0)
    let menuWithCost = Object.assign({}, menuItem); // Копируем объекты и добавляем в них cost, основные объекты остаются без cost 
    menuWithCost.cost = costPrice
    return menuWithCost
});
console.log("Добавим себестоимость в объект каждого блюда из массива:")
console.log(costSum)

console.log("Основные обекты не изменились и не содержат cost:")
console.log(menu)


console.log("Задание 3. Отфильтруйте меню по какой-то предельной стоимости (Выведем блюда стоимостью продажи менее 300 рублей):")

let cheapMenu = menu.filter(menuItem => menuItem.price < 300)
console.log(cheapMenu);

console.log("И более 300 рублей:")

let expensiveMenu = menu.filter(menuItem => menuItem.price >= 300)
console.log(expensiveMenu);

console.log("Задание 4. Определите, есть ли в меню хоть одно вегетарианское блюдо, используя some:")

let vegMenu = menu.some((menuItem) => {
    console.log(menuItem.name)
    return menuItem.ingredients.every((menuIng) => {
        console.log(menuIng);
        console.log(menuIng !== "beef" && menuIng !== "pork" && menuIng !== "chicken");
        return (menuIng !== "beef" && menuIng !== "pork" && menuIng !== "chicken");
    });
});

console.log(vegMenu)


console.log("Также можно определить с помощью includes:")

const dishNotMeat = ["beef", "pork", "chicken"]
let vegDish = menu.some((menuItem) => {
    console.log(menuItem.name);
    menuItem.ingredients.every((menuIng) => {
        console.log(menuIng);
        console.log(!dishNotMeat.includes(menuIng));
        return !dishNotMeat.includes(menuIng)
    });
});
console.log(vegDish)


console.log("Также найдем одно блюдо без лука:")

let menuNotOnion = menu.some((menuItem) => {
    console.log(menuItem.name)
    return menuItem.ingredients.every((menuIng) => {
        console.log(menuIng);
        console.log(menuIng !== "onion");
        return (menuIng !== "onion");
    });
});

console.log(menuNotOnion)


console.log("Задание 5. Определите, полностью ли у вас вегетарианское меню с помощью every.")
let menuVegIng = menu.every((menuItem) => {
    console.log(menuItem.name)
    return menuItem.ingredients.every((menuIng) => {
        console.log(menuIng);
        console.log(menuIng !== "beef" && menuIng !== "pork" && menuIng !== "chicken");
        return (menuIng !== "beef" && menuIng !== "pork" && menuIng !== "chicken");
    });
})
console.log(menuVegIng)

