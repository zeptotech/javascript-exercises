const ftoc = function (input) {
  let output;
  output = (input - 32) * (5 / 9);
  output = output.toFixed(1);
  output = parseFloat(output);
  return output;
};

const ctof = function (input) {
  let output;
  output = input * (9 / 5) + 32;
  output = output.toFixed(1);
  output = parseFloat(output);
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
