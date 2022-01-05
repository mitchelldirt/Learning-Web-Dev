const ftoc = function(temp) {
let result = (temp - 32) / (9 / 5);
return Number(result.toFixed(1));
}

const ctof = function(temp) {
let result = (temp / (5 / 9)) + 32;
return Number(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
