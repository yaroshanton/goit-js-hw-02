let input;
const numbers = [];
let total = 0;

while (true) {
    let input = prompt('Введите число:');
    
    if (input === null) {
        console.log('Отменено пользовтелем!');
        for (let i = 0; i < numbers.length; i += 1) {
            
            total = numbers[i] + total;
        }
        console.log(`Общая сумма чисел равна ${total}`);
        break;
    } 
    
    input = Number(input)

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз!');
        continue;
    } else {
        numbers.push(input);
    }
}