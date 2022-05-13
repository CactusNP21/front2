import {dictionary} from './dictionary.js';

let round = 0;
let word = '';

function randomWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)]
}

let key = randomWord()

let greenWord;
document.getElementById('check').addEventListener('click', function () {
    round += 1
    word = ''
    let word_array = document.getElementsByName(`${round}word`)
    for (const wordElement of word_array) {
        word += wordElement.value
    }

    function checker() {
        let element = document.getElementById(`row${round}`).getElementsByTagName('input')
        greenWord = 0
        if (!dictionary.includes(word)) {
            alert('Not in word list')
            round -= 1
            for (const inputElement of element) {
                inputElement.value = ''
                inputElement.className = ''
            }
            return
        }
        // eslint-disable-next-line no-magic-numbers
        for (let i = 0; i < 5; i++) {
            element[i].classList.toggle('greybg')

            if (key.includes(word[i])) {
                element[i].className = ''
                element[i].classList.toggle('ybg')
            }
            if (key[i] === word[i]) {
                greenWord += 1
                element[i].className = ''
                element[i].classList.toggle('gbg')
                // eslint-disable-next-line no-magic-numbers
                if (greenWord === 5) {
                    alert('Congratulations! You won.')
                    return;
                }
            }
        }
        // eslint-disable-next-line no-magic-numbers
        if (round === 6){
            alert('Game over')
        }
    }

    checker()
})

document.getElementById('reset').addEventListener('click', function () {
    function clearer() {
        round = 0
        let input = document.getElementsByTagName('input')
        for (const inputElement of input) {
            inputElement.value = ''
            inputElement.className = ''
        }
    }
    key = randomWord()
    clearer()
})




