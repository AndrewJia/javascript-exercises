const reverseString = function(string) {
    let arr = string.split('');
    let out = '';
    for(let i = arr.length-1; i >= 0; i--) {
        out += arr[i];
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
