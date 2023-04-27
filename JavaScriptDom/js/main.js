// if script element is in head, remember to add defer attribute
// getElementsByTagName
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('h1')[0])
console.log(document.getElementsByTagName('h1')[0].innerHTML)

// alter the value inside of an html element
document.getElementsByTagName('h1')[0].innerHTML = 'Give me some of your tots'

// add a class attribute to an html element
// change the color of the text
function colorChange() {
    let headerText = document.getElementsByTagName('h1')[0].innerHTML
    let headerElement = document.getElementsByTagName('h1')[0]
    if (headerText == 'Hello World') {
        // add class attribute of color-change
        // className because class is a reserved keyword
        headerElement.className = 'color-change'
    } else {
        headerElement.className = 'different-color'
    } console.log(headerElement)
}
let colorButton = document.getElementById('color-button')
// console.log(colorButton)

// change text via click event listener
colorButton.addEventListener('click', colorChange)

// adding a new element to html with javascript
// adding a new button to our html page
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

// add inner text (value) to the button
button.innerHTML = 'BOOK STORE!!'
document.body.append(button)
button.id = 'someID'
button.className = 'color-change'
console.log(button)
button.addEventListener('click', () => {
    if (buttonDisplay.innerHTML == '') {
        buttonDisplay.innerHTML = 'Stay tuned for more books and details for promotions and coupons!'
    } else {
        buttonDisplay.innerHTML = ''
    } document.body.append(buttonDisplay)
})

const source = document.querySelector('div.source')
console.log(source)

source.addEventListener('copy', (event) => {
    const selection = document.getSelection()
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault()
})

const form = document.querySelector('#test-data-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let queryfirst = document.querySelector('#first-name')
    let querylast = document.querySelector('#last-name')
    console.log(event)
    let firstName = event.target[0].value
    let lastName= event.target[1].value
    console.log(firstName)
    console.log(lastName)
    console.log('This came from the query selector: ${queryFirst.value} ${querylast}')
    
    console.change()
    

})

