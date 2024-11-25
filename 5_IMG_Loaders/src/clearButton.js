import styles from './clearButton.scss'

console.log(2, styles)
const clearButton = document.createElement('button')

clearButton.innerText = 'CLEAR'
clearButton.classList.add([styles.button])

clearButton.onclick = () => {
  const ul = document.getElementById('shoppingList')
  ul.replaceChildren()
}

document.body.appendChild(clearButton)
