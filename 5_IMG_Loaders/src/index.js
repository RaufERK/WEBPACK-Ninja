import _ from 'lodash'
import style from './index.scss'
import './clearButton'
import logo from './assets/image1.png'

const btn1 = document.getElementById('button1')


btn1.classList.add([style.button])

btn1.addEventListener('click', function () {
  const el = document.getElementById('header')
  el.innerHTML = 'Hey i have updated the code !'
  
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