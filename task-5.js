const checkForSpam = function(message) {
    
    let lowSale = message.toLowerCase().includes('sale');

    let lowSpam = message.toLowerCase().includes('spam');
   
    return lowSale || lowSpam;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

