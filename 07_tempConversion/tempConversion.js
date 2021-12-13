const ftoc = temp => Math.round((((temp - 32)*5)/ 9) * Math.pow(10, 1))/ Math.pow(10, 1);

const ctof = temp => Math.round((((temp * 9)/ 5)+32) * Math.pow(10,1)) / Math.pow(10,1);



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
