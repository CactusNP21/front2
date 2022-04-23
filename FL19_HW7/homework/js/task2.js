let res;
res = confirm('Do you want to play a game?')
if (res === false) {
    alert('You did not become a billionaire, but can.')
}
let prize = 0
let random;
let i;
let num;
let x = 0;
let cur_prize;
let pool = 9

const pool_increase = 5
const start_prize = 100
const attempts = 3

while (res) {
    x += 1
    random = Math.floor(Math.random() * pool)
    alert(random)
    cur_prize = start_prize * x
    for (i = attempts; i > 0; i--) {
        num = +prompt(`Choose a roulette pocket number from 0 to ${pool - 1}
Attempts left: ${i}
Total prize: ${prize}$
Possible prize on current attempt: ${cur_prize}$`)
        if (num === random) {
            prize += cur_prize
            res = confirm(`Congratulation, you won! Your prize is: ${prize} $. Do you want to continue?`)
            if (res === false) {
                alert(`Thank you for your participation. Your prize is: ${prize} $`)
            }
            break
        }
        cur_prize /= 2
        if (cur_prize < 25 * x) {
            alert(`Thank you for your participation. Your prize is: ${prize} $`)
            x = 0
            pool += pool_increase
            res = confirm('Do you want play again?')
        }
    }
}

