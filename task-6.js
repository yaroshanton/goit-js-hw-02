let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число:');

    input = Number(input);

    if (Number(input)) {
        numbers.push(input)
        continue;
    } else {
        break;
    }
    
} while (input !== null);

if (numbers.length !== 0) {
    for (let nubmer of numbers) {
        total = nubmer += total;
        
    }
    console.log(`Общая сумма чисел равна ${total}`);
}