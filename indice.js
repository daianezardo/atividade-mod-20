var number = [15, 22, 3, 96, 44, 55, 26, 34, -7, 12, 77, 48, 194, 64];

var result = Math.max(...number);
var result2 = Math.min(...number);


function indices (number) { 
var result = Math.max(...number);
var result2= Math.min(...number);

return { result, result2}

};
module.exports = { 
    indices
}