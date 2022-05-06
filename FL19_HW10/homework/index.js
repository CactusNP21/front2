localStorage.setItem('bestResult', '0')
sessionStorage.setItem('bestResult', '0')

let nicknameError = {
    name: 'NickNameError', message: 'Empty nickname'
}

const clicked = {
    click: 0
}


document.getElementById('clicker').addEventListener('click', function () { //bigBtn
    clicked['click'] += 1
})


document.getElementById('start').addEventListener('click', function () { //start
    const nickname = document.getElementById('nickname').value;

    function checkEmpty(nick) {
        if (!nick) {
            throw nicknameError
        }
    }

    try {
        checkEmpty(nickname)
    } catch (e) {
        alert(e.message)
        return
    }

    clicked.click = 0
    setTimeout(function () {
        if (+localStorage.getItem('bestResult') < clicked.click) {
            localStorage.setItem('bestResult', clicked.click)
            localStorage.setItem('bestGamer', nickname)
        }
        if (+sessionStorage.getItem('bestResult') < clicked.click) {
            sessionStorage.setItem('bestResult', clicked.click)
        }
        sessionStorage.setItem(`${nickname}`, clicked.click)
        localStorage.setItem(`${nickname}`, clicked.click)
        alert(`You clicked ${clicked.click} times`)
        // eslint-disable-next-line no-magic-numbers
    }, 5000)

})

document.getElementById('best').addEventListener('click', function () { //best result
    alert(
`Best result is: ${sessionStorage.getItem('bestResult')}`
    )
})

document.getElementById('best-flt').addEventListener('click', function () { //best  for all time result
    alert(
`Best result for the whole time is: ${localStorage.getItem('bestResult')} by ${localStorage.getItem('bestGamer')}`
    )
})

document.getElementById('clearBest').addEventListener('click', function () { // clear best result
    sessionStorage.clear()
    sessionStorage.setItem('bestResult', '0')
    alert('Best result is cleared')
})

document.getElementById('clearBest-flt').addEventListener('click', function () { //clear best result for all time
    localStorage.clear()
    localStorage.setItem('bestResult', '0')
    alert('Best result for the whole time is cleared')
})
