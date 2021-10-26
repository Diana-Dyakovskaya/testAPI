export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
    const btn = document.querySelector('.btn')
    const app = document.querySelector('#app')

    btn.addEventListener('click', () => {
      app.innerHTML = '<p>Hello</p>'
    })
  })
}
