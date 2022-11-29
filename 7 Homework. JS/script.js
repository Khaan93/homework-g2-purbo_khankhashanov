let greetings = "Welcome to my site!";
alert(greetings);
const Name = "Пурбо";
const Surname = "Ханхашанов";
const Birthday = new Date(1993, 09, 19);
const City = "Улан-Удэ";
const StartStuding = new Date(2011, 9, 1);
const FinishStuding = new Date(2017, 6, 30);
const StartWorking = new Date(2019, 1, 1);
let Profession = "Инженер - строитель";
const TeacherName = "Арсалан";
let now = new Date();
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let age;
age = today.getFullYear() - Birthday.getFullYear();
let ProfessionYears;
ProfessionYears = ((today.getFullYear() - StartWorking.getFullYear()) + (FinishStuding.getFullYear() - StartStuding.getFullYear())); // 9
let AboutMe = `Всем привет! Меня зовут ${Name + " " + Surname}. Мне ${age} лет. Я родился и вырос в городе ${City}. По профессии я ${Profession}. 
Своей професcии я посвятил ${ProfessionYears} лет и наконец решил изменить свою жизнь и начать осваивать новую нишу под наставничеством нашего учителя, которого зовут ${TeacherName}.`

console.log(AboutMe);