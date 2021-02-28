function countAandB(array) {
    var count=0;
    for (var position =0; position < array.length; position++) {
        if (array[position] == "a" || array[position] == "b")
        {
            count += 1;
        }
    }
    return count;
}
let array = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(array))

function toNumber(array) {
    var alphabet = {"a":1,"b":2,"c":3,"d":4,"e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,"u":21,"v":22,"w":23,"x":24,"y":25,"z":26};
    var number=[];
    for (var i = 0; i < array.length; i++) {
        number.push(alphabet[array[i]])
    }
    return number
}
let array = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(toNumber(array))
