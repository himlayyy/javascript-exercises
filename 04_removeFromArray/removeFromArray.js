const removeFromArray = function(arr, ...items){
    return arr.filter((elem) => !items.includes(elem));
}



// Do not edit below this line
module.exports = removeFromArray;

