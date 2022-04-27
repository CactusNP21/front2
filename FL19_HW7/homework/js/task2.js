let res;
res = confirm('Do you want to play a game?')
if (res === false) {
    alert('You did not become a billionaire, but can.')
}

const start_prize = 100
const attempts = 3
const start_pool = 9
const lose = 25
const divider = 2
const pool_adder = 4

let prize = 0
let random;
let i;
let num;
let x = 0;
let cur_prize;
let pool = start_pool



while (res) {
    x += 1
    random = Math.floor(Math.random() * pool)
    cur_prize = start_prize * x
    for (i = attempts; i > 0; i--) {
        num = +prompt(`Choose a roulette pocket number from 0 to ${pool - 1}
Attempts left: ${i}
Total prize: ${prize}$
Possible prize on current attempt: ${cur_prize}$`)
        if (num === random) {
            prize += cur_prize
            pool += pool_adder
            res = confirm(`Congratulation, you won! Your prize is: ${prize} $. Do you want to continue?`)
            if (res === false) {
                alert(`Thank you for your participation. Your prize is: ${prize} $`)
            }
            break
        }
        cur_prize /= divider
        if (cur_prize < lose * x) {
            prize = 0
            alert(`Thank you for your participation. Your prize is: ${prize} $`)
            x = 0
            pool = start_pool
            res = confirm('Do you want play again?')
        }
    }
}

