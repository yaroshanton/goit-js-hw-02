const logItems = function(array) {

    for (let i = 0; i < array.length; i += 1) {
        const element = array[i];

        console.log(`${i + 1 } - ${element}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);  