window.addEventListener('load', function () {
    let round = 0

    let turn = document.getElementsByClassName('display')[0].firstElementChild
    let field = document.getElementsByClassName('container')[0]
    let winner = document.getElementsByClassName('announcer')[0]
    // eslint-disable-next-line no-magic-numbers
    let xs = new Array(9).fill(undefined)

    // eslint-disable-next-line no-magic-numbers
    for (let i = 0; i < 9; i++) {
        field.insertAdjacentHTML('afterbegin', '<div class="tile"></div>')
    }

    let turner = function (e) {
        let tile = e.target
        if (tile.innerText) {
            return
        }
        turn.classList.toggle('playerX')
        turn.classList.toggle('playerO')
        round += 1
        let numberOfTile = Array.from(field.childNodes).indexOf(tile)

        // eslint-disable-next-line no-magic-numbers
        if (round % 2 === 1) {
            tile.innerText = 'X'
            tile.classList.add('playerX')
            turn.innerText = 'O'
            xs[numberOfTile] = tile.innerText

        }
        // eslint-disable-next-line no-magic-numbers
        if (round % 2 === 0) {
            turn.innerText = 'X'
            tile.innerText = 'O'
            tile.classList.add('playerO')
            xs[numberOfTile] = tile.innerText
        }
    }
    let endgame = function () {

        function endgame(xs) {
            // eslint-disable-next-line no-magic-numbers
            let row1 = xs.slice(0, 3)
            // eslint-disable-next-line no-magic-numbers
            let row2 = xs.slice(3, 6)
            // eslint-disable-next-line no-magic-numbers
            let row3 = xs.slice(6, 9)
            // eslint-disable-next-line no-magic-numbers
            let col1 = [xs[0], xs[3], xs[6]]
            // eslint-disable-next-line no-magic-numbers
            let col2 = [xs[1], xs[4], xs[7]]
            // eslint-disable-next-line no-magic-numbers
            let col3 = [xs[2], xs[5], xs[8]]
            // eslint-disable-next-line no-magic-numbers
            let dio1 = [xs[0], xs[4], xs[8]]
            // eslint-disable-next-line no-magic-numbers
            let dio2 = [xs[2], xs[4], xs[6]]
            let field = [row1, row2, row3, col1, col2, col3, dio1, dio2]
            for (const fieldElement of field) {
                let letter = Array.from(new Set(fieldElement))
                if (letter.length === 1) {
                    if (letter[0] === 'X') {
                        return 'X'
                    }
                    if (letter[0] === ['O']) {
                        return 'O'
                    }
                }
            }
        }

        let letter = endgame(xs)
        // eslint-disable-next-line no-magic-numbers
        if (letter || round === 9) {
            winner.classList.remove('hide')
            winner.innerText = 'Draw'
            if (letter) {
                winner.innerHTML = `Player <span class="player${letter}">${letter}</span> Won`
            }
            field.removeEventListener('click', turner)
            for (const tile of tiles) {
                tile.removeEventListener('handleEnter', tH)
            }
        }
    }
    field.addEventListener('click', turner)
    field.addEventListener('click', endgame)

    document.getElementById('reset').addEventListener('click', function () {
        round = 0
        let cell = field.childNodes
        winner.classList.add('hide')
        for (const cellElement of cell) {
            cellElement.innerText = ''
            cellElement.className = 'tile'
        }
        xs.fill(undefined)

        field.removeEventListener('click', endgame)
        field.addEventListener('click', turner)
        field.addEventListener('click', endgame)

        turn.innerText = 'X'
        turn.className = 'display-player playerX'
    })

    let tiles = document.querySelectorAll('.tile')

    function tH(e) {
        if (tiles[e.detail.tile].innerText) {
            return
        }
        turn.classList.toggle('playerX')
        turn.classList.toggle('playerO')
        round += 1

        // eslint-disable-next-line no-magic-numbers
        if (round % 2 === 1) {
            tiles[e.detail.tile].innerText = 'X'
            tiles[e.detail.tile].classList.add('playerX')
            turn.innerText = 'O'
            xs[e.detail.tile] = tiles[e.detail.tile].innerText
        }
        // eslint-disable-next-line no-magic-numbers
        if (round % 2 === 0) {
            tiles[e.detail.tile].innerText = 'O'
            tiles[e.detail.tile].classList.add('playerO')
            turn.innerText = 'X'
            xs[e.detail.tile] = tiles[e.detail.tile].innerText
        }
        endgame(xs)
    }

    for (const tile of tiles) {
        tile.addEventListener('handleEnter', tH)
    }


    function simulator(tileN) {
        const event = new CustomEvent('handleEnter', {
            detail: {
                tile: tileN
            }
        })
        tiles[tileN].dispatchEvent(event)
    }

    let tile = -1
    document.addEventListener('keydown', function (e) {

        // eslint-disable-next-line no-magic-numbers
        if (e.key === 'Enter') {
            simulator(tile)
        }
        if (e.key === 'ArrowRight') {
            tile += 1
            tile === 0 ? field.childNodes[tile].classList.add('active') :
                field.childNodes[tile - 1].classList.remove('active')
        }
        if (e.key === 'ArrowLeft') {
            tile -= 1
            field.childNodes[tile + 1].classList.remove('active')

        }
        // eslint-disable-next-line no-magic-numbers
        if (tile > 8) {
            field.childNodes[tile - 1].classList.remove('active')
            // eslint-disable-next-line no-magic-numbers
            tile = 0
        }
        if (tile < 0) {
            field.childNodes[tile + 1].classList.remove('active')
            // eslint-disable-next-line no-magic-numbers
            tile = 8
        }
        if (tile === 0) {
            field.childNodes[tile].classList.add('active')
            return
        }
        field.childNodes[tile].classList.add('active')
    })

    const avatars = document.querySelectorAll('.avatar-icon')
    const avatarsContainer = document.querySelectorAll('.avatar-container')

    for (const avatar of avatars) {
        avatar.addEventListener('dragstart', function () {
            avatar.classList.add('move')
        })
        avatar.addEventListener('dragend', function () {
            avatar.classList.remove('move')
        })
    }
    for (const avatarsContainerElement of avatarsContainer) {
        avatarsContainerElement.addEventListener('dragover', function (e) {

            e.preventDefault()
            const item = document.querySelector('.move')
            if (avatarsContainerElement.firstElementChild !== null) {
                return
            }
            avatarsContainerElement.appendChild(item)
        })
    }
    document.querySelector('.icons').addEventListener('dragover', function (e) {
        e.preventDefault()
        const item = document.querySelector('.move')
        this.appendChild(item)
    })
})

