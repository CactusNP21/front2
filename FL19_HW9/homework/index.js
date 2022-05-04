// #1
function calculateSum(arr) {
    let s = 0;
    for (const arrElement of arr) {
        s += arrElement
    }
    return s
}

console.log(calculateSum([1, 2, 3, 4, 5])); //15

// #2
function isTriangle(a, b, c) {
    let bigSide;
    if (a >= b) {
        if (a >= c) {
            bigSide = a;
            return b + c > bigSide;

        }
    }

    if (b >= c) {
        bigSide = b
        return a + c > bigSide;
    }

    return a + b > c;

}

console.log(isTriangle(5, 6, 7)); //true
console.log(isTriangle(2, 9, 3)); //false

// #3
function isIsogram(word) {
    let listOfChar = word.split('')
    let setOfChar = Array.from(new Set(listOfChar))
    return listOfChar.length === setOfChar.length;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
    return word.split('').reverse().join('') === word
}

console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
    const dataList = dateObj.toString().split(' ')
    return `${dataList[2]} of ${dataList[1]}, ${dataList[3]}`
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
    let sum = 0;
    for (const strElement of str) {
        if (strElement === letter) {
            sum += 1
        }
    }
    return sum
}

console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
    let object = {}
    let items = Array.from(new Set(arr))
    for (const item of items) {
        let s = 0;
        for (const itemElement of arr) {
            if (itemElement === item){
                s++
            }
            object[item] = s
        }
    }
    return object
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
    return parseInt(arr.join(''), 2)
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
