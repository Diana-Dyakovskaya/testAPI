export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
    const btnLoad = document.querySelector('.js-load')
    const btnLoadMore = document.querySelector('.js-more')
    const app = document.querySelector('#app')

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
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          for (let i = 0; i < 10; i += 1) {
            const newElem = document.createElement('article')
            newElem.innerHTML = `<h2 class="card__title">${json[i].title}</h2>
                                  <p class="card__body">${json[i].body}</p>`
            app.append(newElem)
          }
        })
    })
  })
}
