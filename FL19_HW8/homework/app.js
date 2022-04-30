// #1
function extractCurrencyValue(param) {
    param = param.replace(/[^0-9.]/g, '')
    let num = function () {
        if (param.split('.')[0].length >= 16) {
            return BigInt(param)
        }
        return +param
    }
    return num()
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) {
    let keys = Object.keys(obj)
    let arr = [null, undefined, false]
    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (obj[keys[i]] === arr[j]) {
                delete obj[keys[i]]
            }
        }
    }
    return obj
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }


// #3

function getUnique(param) {
    return Symbol(param)
}

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
    const date1 = new Date(startDate)
    const date2 = new Date(endDate)
    const pastTime = date2 - date1
    const msInHour = 3600000
    const days = pastTime / (msInHour * 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    return `The difference between dates is: ${days} day(-s), ${weeks} week(-s), ${months} month(-s)`
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArray(arr) {
    return Array.from(new Set(arr))
}

function ArrayWithoutSet(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (j === i){
                continue
            }
            if (arr[i] === arr[j]) {
                arr.splice(i, 1)
            }
        }
    }
    return arr
}

console.log(filterArray([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
