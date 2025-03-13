let celsius = 10;
console.log(celsius, "degrees Celsius is:", (celsius * 9 / 5) + 32, "degrees Fahrenheit")
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(daysInMonth, hoursInMonth, minutesInMonth)
let health = 100;
let energy = 1000;
const buttonHlth = document.getElementById("buttonHealth");
const buttonEnrg = document.getElementById("buttonEnergy");
buttonHlth.addEventListener("click", function () {
    health -= 10;
    let messageHealth = "Здоров'я гравця: " + health;
    console.log(messageHealth)
    document.getElementById("healthOutput").innerText = messageHealth;
});
buttonEnrg.addEventListener("click", function () {
    energy -= 20;
    let messageEnergy = "Енергія гравця: " + energy;
    console.log(messageEnergy)
    document.getElementById("energyOutput").innerText = messageEnergy;
});
//Зроблено кнопки за допомогою чату гпт//
let totalPrice = 10000;
let discount = 10;
const totalDiscountPrice = totalPrice - (totalPrice / 100 * discount);
console.log("Всього ціна 10000грн зі знижкою 10% це:", totalDiscountPrice)
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);
const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);
const intString = "123";
const parsedInt = parseInt(intString);
console.log(parsedInt);
let number = 81;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber)
const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
console.log(convertedInt);
const convertedString = integer.toString();
console.log(convertedString);
