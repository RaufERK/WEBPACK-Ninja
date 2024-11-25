import _ from 'lodash'
import style from './index.scss'
import './clearButton'
import logo from './assets/image1.png'
import './assets/fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf'

// const header = document.getElementById('header')
// header.classList.add([style.header])

const btn1 = document.getElementById('button1')
btn1.classList.add([style.button])

btn1.addEventListener('click', function () {
  header.innerHTML = 'Hey i have updated the code !'
  const header1 = document.getElementById('header')

  const listItems = ['Apple', 'orange', 'Banana']
  const ul = document.getElementById('shoppingList')
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li')
    tempEl.innerHTML = item
    ul.appendChild(tempEl)
  })
})

const logoEl = document.getElementById('logo')
logoEl.src = logo
