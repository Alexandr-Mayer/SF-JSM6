//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//Выведите в консоль результат.

let argument1 = 3;
let argument2 = 15;

function example(a) {
    function getSum(b) {
        return a + b;
    }
    return getSum(argument2);
}

console.log(example(argument1));

