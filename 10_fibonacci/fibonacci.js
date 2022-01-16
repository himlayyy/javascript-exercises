const fibonacci = function(place) {
    if(place < 0){
        return "OOPS"
    }
    let fib = [1,1];
    for(i=1;i<place;i++){
        let next = fib[i-1] + fib[i];
        fib.push(next)
    }
    return fib[place-1];
};

// Do not edit below this line
module.exports = fibonacci;
