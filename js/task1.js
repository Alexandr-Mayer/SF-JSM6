//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

function evenOrOddFunc () {
    let arr = [0, 0, 4, 3, 48, 57, "SkillFactory", null, 4, 5];
    let evenItem = 0;
    let oddItem = 0;
    let zeroItem = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroItem += 1
        } else if (typeof(arr[i]) !== "number") {
            console.log(`это не число ${arr[i]}`)
        } else if (arr[i] % 2 === 0) {
            evenItem += 1
        } else if (arr[i] % 2 !== 0) {
            oddItem += 1
    }
}
    console.log(`${evenItem} — четных чисел`);
    console.log(`${oddItem} — нечетных чисел`);
    console.log(`${zeroItem} — нулей`);
}
evenOrOddFunc();