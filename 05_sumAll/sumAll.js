const sumAll = function(small, large) {
    //check types
    if(typeof(small) != 'number' 
        || typeof(large) != 'number') return 'ERROR';
    //check order
    if(small > large) {
        let temp = large;
        large = small;
        small = temp;
    }
    //check negatives
    if(small < 0) return 'ERROR';

    let sum = 0;
    for(let n = small; n <= large; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
