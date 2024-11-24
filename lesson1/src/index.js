import _ from 'lodash'

document.getElementById('myButton').addEventListener('click', () => {
  const newText = 'NEW TEXT'
  const el = document.getElementById('header')
  el.innerText = newText

  const listItems = ['apple', 'orage', 'banana']
  const ul = document.getElementById('list')

  _.forEach(listItems, (item) => {
    const tempEl = document.createElement('li')
    tempEl.innerHTML = item
    ul.appendChild(tempEl)
  })
})
