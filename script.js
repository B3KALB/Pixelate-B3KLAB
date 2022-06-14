const table = document.getElementsByTagName('table')[0]

function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

const button = document.getElementById('add-row')
button.addEventListener('click', makeRow)

let chosenColor = 'bluevi'

const select = document.getElementsByTagName('select')[0]

table.addEventListener('click', colorize)

select.addEventListener("change", function (event) {
    chosenColor = event.target.value
})

function colorize (event) {
    const target = event.target
    if (target.className.length) {
        target.className = ''
    } else {
        target.className = chosenColor
    }
    
}