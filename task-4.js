const formatString = function(string) {

    let words = '';
    
        if (string.length < 40) {
          words = string;
        } else {
            for (let i = 0; i < 40; i++) {
              words =  words + string[i];
            }
            words = words + '...';
        }

    return words;

  };

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка




// TODO: АБО ТАК

  // const formatString = function(string) {

//     let srtings;

//         if (string.length < 40) {
//             srtings = string;
//         } else {
//             srtings = string.substr(0, 40) + '...';
//         }

//     return srtings;

//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   // вернется оригинальная строка
  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   // вернется форматированная строка
  
//   console.log(formatString('Curabitur ligula sapien.'));
//   // вернется оригинальная строка
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
//   // вернется форматированная строка