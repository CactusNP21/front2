//const root = document.getElementById('root');

let cardContainer = document.getElementById('characters-wrap')
let childrens = cardContainer.childNodes
let loaded = 5
let rows = 1

if (localStorage.getItem('ids') === null) {
    localStorage.setItem('ids', '0 ')
}

function removeSelf(e) {
    let usedIdArray = localStorage.getItem('ids').split(' ')
    let card = e.target.parentNode
    let id = card.dataset.id
    let choise = confirm()
    if (choise) {
        let index = usedIdArray.indexOf(id)
        usedIdArray.splice(index, 1)
        localStorage.setItem('ids', usedIdArray.join(' '))
        card.remove()
        localStorage.setItem('cards', cardContainer.innerHTML)
    }
}

window.addEventListener('load', () => {
    let cards = localStorage.getItem('cards')
    if (cards === null) {
        return
    }
    cardContainer.insertAdjacentHTML('afterbegin', cards)
    for (let i = 5; i < childrens.length; i++) {
        childrens[i].classList.add('hide')
    }
    let removeBtn = document.querySelectorAll('.btn')
    for (const removeBtnElement of removeBtn) {
        removeBtnElement.addEventListener('click', removeSelf)
    }
})

document.getElementById('search-btn').addEventListener('click', () => {
    let usedIdArray = localStorage.getItem('ids').split(' ')
    let usedId = localStorage.getItem('ids')
    let id = document.getElementById('search-input').value
    for (const used of usedIdArray) {
        if (+used === +id) {
            alert('Character is already in the list')
            return
        }
    }
    // eslint-disable-next-line no-magic-numbers
    if (childrens.length > 5 * rows) {
        // eslint-disable-next-line no-magic-numbers
        if (cardContainer.childNodes[4].nodeType === 3) {
            // eslint-disable-next-line no-magic-numbers
            childrens[4].remove()
        }

        // eslint-disable-next-line no-magic-numbers
        cardContainer.childNodes[4 * rows].classList.add('hide')

    }

    function searchCard(id) {

        // eslint-disable-next-line no-magic-numbers
        let page = Math.ceil(id / 20)
        usedId += `${id} `
        localStorage.setItem('ids', usedId)
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then((response) => {
                return response.json()
            })
            .then((object) => {
                let card = searchItem(object, id, page)
                createCard(card, id)
            })
            .catch(function () {
                alert('Character not found')
            })
    }


    function createCard(card, id) {
        let item = `<div class="item" data-id = "${id}">
                         <img src="${card.image}" alt="">
                         <h2>${card.name}</h2>
                         <button class="btn">REMOVE</button>
                    </div>`
        cardContainer.insertAdjacentHTML('afterbegin', item.trim())
        cardContainer.firstElementChild.addEventListener('click', removeSelf)
        localStorage.setItem('cards', cardContainer.innerHTML)
    }

    function searchItem(object, id, page) {
        let item;
        if (page === 0) {
            item = id
        } else {
            // eslint-disable-next-line no-magic-numbers
            item = id - (page - 1) * 20 - 1
        }
        return object.results[item]
    }

    searchCard(id)

})

document.querySelector('.load-more').addEventListener('click', () => {
    try {
        // eslint-disable-next-line no-magic-numbers
        for (let i = loaded - 1; i < loaded * 2; i++) {
            childrens[i].classList.remove('hide')
        }
    } catch (e) {
        console.log()
    } finally {
        // eslint-disable-next-line no-magic-numbers
        loaded += 5
        rows += 1
        window.scrollTo(0, document.body.scrollHeight);
    }

})
