function count(input) {

  let output = {};
  input.sort(function(a,b){
      return a - b;
  });

  for (let i=0; i<input.length; i++) {
      let key = input[i];
      if (!output[key]) {
         output[key] = 1
     } else {
         output[key]++ };
  }
  return output
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    let output = {};
    for (let i=0; i < input.length; i++) {
        let key = input[i].key;
        if (!output[key]) {
            output[key] = input[i].value;
        } else {
            output[key] += input[i].value;
        }
    }
    return output;
}
let input2 = [
{key: 'a', value: 3},
{key: 'b', value: 1},
{key: 'c', value: 2},
{key: 'a', value: 3},
{key: 'c', value: 5}
]
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
