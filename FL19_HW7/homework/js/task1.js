let check = true
let fst_number
while (check) {
    fst_number = +prompt('First number')
    if (isNaN(fst_number)) {
        alert('Invalid input data')
        continue
    }
    check = false
}

check = true
let sec_num

while (check) {
    sec_num = +prompt('Second number')
    if (isNaN(sec_num)) {
        alert('Invalid input data')
        continue
    }
    if (fst_number >= sec_num) {
        alert('Invalid input data')
    }
    check = false
}

let str =
    `First number: ${fst_number}
Second number ${sec_num}

Numbers between :`

for (let i = fst_number + 1; i < sec_num; i++) {
    str += ` ${i}`
}
alert(str)