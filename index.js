const button = document.querySelectorAll(".btn")

button.forEach((curr) => {
    curr.addEventListener("click", () => {

        curr.parentNode.classList.toggle("active")

    })

})

