const checkForSpam = function(message) {
    
    let lowString = message.toLowerCase();

    if (lowString.indexOf('sale') !== -1 || lowString.indexOf('spam') !== -1) {
        return true;
    } else {
        return false;
    }
    
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

