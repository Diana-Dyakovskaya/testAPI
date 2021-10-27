export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
    // posts
    const btnLoadMore = document.querySelector('.js-more')
    const app = document.querySelector('#app')
    let numClick = 0

    if (btnLoadMore && app) {
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
    }
    // users
    const users = document.querySelector('#users')
    if (users) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          json.forEach((elem) => {
            if (elem.id <= 1) {
              const newElemUser = document.createElement('article')
              newElemUser.innerHTML = `<h2 class="card__name">Name: ${elem.name}</h2>
                                  <p class="card__username">Username: ${elem.username}</p>
                                  <p class="card__email">Email: ${elem.email}</p>
                                  <p class="card__address">Adress: ${elem.address.city}, ${elem.address.street} street, ${elem.address.suite}</p>
                                  <p class="card__code">Zipcode: ${elem.address.zipcode}</p>
                                  <p class="card__geo">Geo: ${elem.address.geo.lat}, ${elem.address.geo.lng}</p>
                                  <p class="card__phone">Phone: ${elem.phone}</p>
                                  <p class="card__site">Website: ${elem.website}</p>
                                  <p class="card__company">Company: ${elem.company.name}</p>
                                  `
              users.append(newElemUser)
            }
          })
        })
    }
  })
}
