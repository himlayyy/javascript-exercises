function revString(str) {    
    return str.split('').reverse().join('');
    
};

function remove(arr, ...items){    
    return arr.filter((elem) => !items.includes(elem));    
}

function sumAll(a, b){
    let start =0;
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

const leapYears = year => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

const ftoc = temp => Math.round((((temp - 32)*5)/ 9) * Math.pow(10, 1))/ Math.pow(10, 1);

const ctof = temp => Math.round((((temp * 9)/ 5)+32) * Math.pow(10,1)) / Math.pow(10,1);
