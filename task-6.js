let input;
const numbers = [];
let total = 0;

while (input = prompt('Введите число:')) {

    input = Number(input);
    numbers.push(input)
}

if (numbers.length !== 0) {
    for (let nubmer of numbers) {
        total = nubmer += total;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
