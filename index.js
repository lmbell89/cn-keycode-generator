const h1 = document.querySelector("h1")
const key = document.querySelector(".key > h2")
const code = document.querySelector(".code > h2")
const which = document.querySelector(".which > h2")

document.addEventListener("keydown", event => {
    h1.innerHTML = event.which

    console.log(event.key)
    key.innerHTML = event.key
    code.innerHTML = event.code
    which.innerHTML = event.which
})  