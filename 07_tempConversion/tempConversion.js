const ftoc = function(f) {
  let out = f;
  out -= 32;
  out *= (5/9);
  out = Math.round(out * 10) / 10; //round to 1 place
  return out;
};

const ctof = function(c) {
  let out = c;
  out /= (5/9);
  out += 32;
  out = Math.round(out * 10) / 10; //round to 1 place
  return out;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
