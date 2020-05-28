const logItems = function(array) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        console.log(`${i + 1 } - ${element}`);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);  