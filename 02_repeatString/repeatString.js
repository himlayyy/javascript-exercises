const repeatString = function(string, num) {
   let phrases = "";
   if (num <0){
       return "ERROR";
   }
   else{
    for (i=0;i<num;i++){
        phrases = phrases + string;
    }
    return phrases;
    };
};

// Do not edit below this line
module.exports = repeatString;
