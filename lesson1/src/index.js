// import _ from 'lodash'

document.getElementById('myButton').addEventListener('click', () => {
  console.log(2132312312)
  const newText = 'NEW TEXT'
  const el = document.getElementById('header')
  el.innerText = newText

  const listItems = ['apple', 'orage', 'banana']
  const ul = document.getElementById('list')

  listItems.forEach((item) => {
    const tempEl = document.createElement('li')
    tempEl.innerHTML = item
    ul.appendChild(tempEl)
  })
})
