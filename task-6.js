let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число:');

    if (input !== null) {
        if (!isNaN(input)) {
            input = Number(input);
            numbers.push(input);   
        };
    };
}   while (input !== null);

if (numbers.length !== 0) {
    for (let nubmer of numbers) {
        total = nubmer += total;
    }
    console.log(`Общая сумма чисел равна ${total}`);
};
    
