//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
//Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.



function checkingNumbers() {

    let userNum = prompt("Введите любое число до 1000");
    if(userNum <= 1000 && userNum > 1) {
        for(let i = 2; i < userNum + 1; i++){
            if(userNum % i == 0 && userNum != 2) {
                return alert(`${userNum} — составное число`)
            } else if(userNum % 3 == 0 && userNum != 3) {
                return alert(`${userNum} — составное число`)
            } else {
                return alert(`${userNum} — простое число`)
            };
        }; 
    } else if (userNum == 1 || userNum == 0) {
        return alert("1 и 0 не являются простыми или составными числами")
    } else {
        return alert("данные не верны")
    };
};
checkingNumbers();





