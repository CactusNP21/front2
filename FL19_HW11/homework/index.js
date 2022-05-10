function getWeekDay(date) {
    return new Date(date).toLocaleTimeString('en-us', {weekday: 'long'}).split(' ')[0]
}

console.log(getWeekDay(Date.now()))

function getAmountDaysToNewYear() {
    let yearNow = new Date(Date.now()).getFullYear()
    let yearLater = yearNow + 1
    const mlInDay = 86400000
    return Math.ceil(new Date(new Date(`/${yearLater}/`) - new Date(Date.now())) / mlInDay)
}

console.log(getAmountDaysToNewYear())

// eslint-disable-next-line no-magic-numbers
const birthday17 = new Date(2004, 10, 7);
// eslint-disable-next-line no-magic-numbers
const birthday15 = new Date(2006, 6, 29);
// eslint-disable-next-line no-magic-numbers
const birthday22 = new Date(2000, 9, 22);

function getApproveToPass(date) {
    let timeNow = Date.now()
    date.setMonth(date.getMonth() - 1)
    // eslint-disable-next-line no-magic-numbers
    let age = new Date(timeNow - date.getTime()).getFullYear() - 1970
    const adult = 18
    if (age >= adult) {
        return 'Hello adventurer, you may pass!'
    }
    if (age < adult) {
        if (age === adult - 1) {
            return 'Hello adventurer, you are to yang for this quest wait for few more months!'
        }
        return `Hello adventurer, you are to yang for this quest wait for ${adult - age} years more!`
    }
}

console.log(getApproveToPass(birthday17))
console.log(getApproveToPass(birthday22))
console.log(getApproveToPass(birthday15))

function transformStringToHtml(element) {
    let tag = element.match(/".+?"/g)[0].replace(/"/g, '')
    // eslint-disable-next-line no-magic-numbers
    let value = element.match(/".+?"/g)[2].replace(/"/g, '')
    element = element.replace(/tag=".+?"/, '').replace(/[{}]/g, '"').replace(/\svalue=".+?"/, '>')
    return `<${tag}${element}${value}</${tag}>`
}// ‘<p class=”text” style=”color: #aeaeae;”>Hello World!</p>’

const elementP = 'tag="div" class="main" style={width: 50%;} value="Hello World!"'
console.log(transformStringToHtml(elementP));

function isValidIdentifier(element) {
    return element.match(/^[a-z]+[\w$]+$/) !== null;
}

console.log(isValidIdentifier('myVar1!'), // false
isValidIdentifier('myVar$'), // true
isValidIdentifier('myVar_1'), // true
isValidIdentifier('1_myVar')) // false)

const testStr = 'My name is John Smith. I am 27.';

function capitalize(element) {
    return element.toLowerCase().replace(/\b\w/g, function (l){
        return l.toUpperCase()
    })
}

console.log(capitalize(testStr))

function isValidPassword (pass) {
    const upper = /[A-Z]/g
    const digits = /\d/g
    const lower = /[a-z]/g
    const long = /[\w\d]{8,}/g
    if (pass.match(upper) === null){
        return false
    }
    if (pass.match(upper) === null){
        return false
    }
    if (pass.match(lower) === null){
        return false
    }
    if (pass.match(digits) === null){
        return false
    }
    return pass.match(long) !== null;


}

console.log(isValidPassword('agent007'), // false (no uppercase letter)
isValidPassword('AGENT007'), // false (no lowercase letter)
isValidPassword('AgentOOO'), // false (no numbers)
isValidPassword('Age_007'), // false (too short)
isValidPassword('Agent007') // true
)

function bubbleSort (arr) {
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]){
                let a = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = a
            }
        }
    }
    return arr
}

// eslint-disable-next-line no-magic-numbers
console.log(bubbleSort([7,5,2,4,3,9]))

const inventory = [
    { name: 'milk', brand: 'happyCow', price: 2.1 },
    { name: 'chocolate', brand: 'milka', price: 3 },
    { name: 'beer', brand: 'hineken', price: 2.2},
    { name: 'soda', brand: 'coca-cola', price: 1 }
];

function sortByItem(obj){
    let arr = obj['array']
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].name > arr[j+1].name){
                let a = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = a
            }
        }
    }
    return arr
}

console.log(sortByItem({item: 'name', array: inventory})); // will return
/*//[
    { "name": "beer", "brand": "hineken", "price": 2.2 },
    { "name": "chocolate", "brand": "milka", "price": 3 },
    { "name": "milk", "brand": "happyCow", "price": 2.1 },
    { "name": "soda", "brand": "coca-cola", "price": 1 }
]*/
