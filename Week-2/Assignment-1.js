function max(input) {
    let output = input[0];
    for (let i=0; i < input.length; i++) {
            if (input[i] > output) {
                output = input[i];
            }
        }
    return output;
}

console.log( max([5, 2, 7, 1, 6]) );


function findPosition(array, target) {
  var position = -1;
  for (var i = 0; i <array.length; i++) {
    if (array[i] == target) {
        position = i;
        break
    }
  }
  return position;
}

console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) );
