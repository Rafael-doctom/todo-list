const insertItem = document.querySelector('input')
const ul = document.querySelector('ul')

const banco = []

insertItem.addEventListener('keypress', e => {
    if (e.key == 'Enter' && insertItem.value != '') {
        setItemDB()
    }
})

function setItemDB() {

    banco.push({ 'item': insertItem.value, 'status': '' })
    localStorage.setItem('todolist', JSON.stringify(banco))

    banco.forEach((item, i) => {
        teste(item.item, item.status, i)
    })
}


function teste(text) {
    const li = document.createElement('li')

    li.innerHTML = `
        <div class="divLi">
            <span >${text}</span>
        </div>
    `
    ul.appendChild(li)
    insertItem.value = ''

}

const limpar = () => {
    localStorage.clear('todolist', JSON.stringify(banco))
    ul.innerHTML = "";

}