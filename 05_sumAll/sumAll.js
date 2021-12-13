const sumAll = function(a, b) {
    let start = 0;
    let stop = 0;
    let accumulator = 0;    
    if (a > b){
        start = b;
        stop = a;     
    }
    else if(a <= -1 || b <= -1  || typeof (a) != 'number' || typeof (b) != 'number'){
        return "ERROR";
    }    
    else{
        start = a;
        stop = b;
       
    }; 
    
    while (start < stop+1){        
       accumulator = accumulator + start;        
       start++;
    };
   return(accumulator);
};

// Do not edit below this line
module.exports = sumAll;
