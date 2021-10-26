export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
    const btn = document.querySelector('.btn')
    const app = document.querySelector('#app')

    btn.addEventListener('click', () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          json.forEach((element) => {
            const newElem = document.createElement('article')
            newElem.innerHTML = `<h2 class="card__title">${element.title}</h2>
                                  <p class="card__body">${element.body}</p>`
            app.append(newElem)
          })
        })
    })
  })
}
