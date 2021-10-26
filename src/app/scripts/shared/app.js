export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
    const btnLoadMore = document.querySelector('.js-more')
    const app = document.querySelector('#app')
    let numClick = 0

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        json.forEach((element) => {
          if (element.id <= 10) {
            const newElem = document.createElement('article')
            newElem.innerHTML = `<h2 class="card__title">${element.title}</h2>
                                  <p class="card__body">${element.body}</p>`
            app.append(newElem)
          }
        })
      })

    btnLoadMore.addEventListener('click', () => {
      numClick += 1
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          json.forEach((element) => {
            if (element.id > 10 * numClick && element.id <= 10 * (numClick + 1)) {
              const newElem = document.createElement('article')
              newElem.innerHTML = `<h2 class="card__title">${element.title}</h2>
                                  <p class="card__body">${element.body}</p>`
              app.append(newElem)
            }
          })
        })
    })
  })
}
