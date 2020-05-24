const modalOverlay = document.querySelector ('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener ("click", function(){
        const imgId = card.getAttribute("id")
        const description1 = card.querySelector("a").innerHTML
        const description2 = card.querySelector("p").innerHTML
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imgId}.png`
        modalOverlay.querySelector("a").innerHTML = `${description1}`
        modalOverlay.querySelector("p").innerHTML = `${description2}`
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
})