// Hamburger Button
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-con")
const exitBtn = document.querySelector(".exit button")

hamburgerBtn.addEventListener('click', () => {
    
    if (optionMenu.style.display == "none"){
        optionMenu.style.display = "flex"
        
    }
    else{
        optionMenu.style.display = "none"
    }
})

exitBtn.addEventListener('click', () => {
    
    optionMenu.style.display = "none"
    hamburgerBtn.style.display = "block"

})


// 

const nameBank = ["Parker", "River", "August", "Nova", "Rowan", "Riley", "Avery", "Quinn", "Cameron", "Angel", "Carter", "Dylan", "Ellis", "Scout", "Moss", "Jett", "Sage"]
const petName1 = document.querySelector(".name1-2")


const sexBank = ["Male", "Female"]
const petSex1 = document.querySelector(".sex1-2")


const petAge1 = document.querySelector(".age1-2")

var petPhoto = document.getElementById(".pet-photo")


const cityState = document.querySelector(".city-state")
const distance = document.querySelector(".distance")
const cost = document.querySelector(".cost")


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomName () {
    petName1.textContent = nameBank[randomInteger(0, 16)]

}

function randomSex () {
    petSex1.textContent = sexBank[randomInteger(0, 1)]

}

function randomAge() {
    petAge1.textContent = `${randomInteger(1, 17)} years old`


}

function randomCost() {
    petCost.textContent = `${randomInteger(0, 50)}`
}

function infoRandomizer() {
    distance.textContent = `Distance: ${randomInteger(1, 75)} miles`
    cost.textContent = `Cost: $${randomInteger(1, 200)}`
}

// function randomImage() {
//     petPhoto.src = `/img/cats/cat${randomInteger(1, 8)}.jpg`
// }

let curCity 
let curState

const lonLatKey = '65e3ae9323d14c73bd9b88373bcdd36c'
let lonLatUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${lonLatKey}`

async function getLocation() {
    try {
        const locationResponse = await fetch(lonLatUrl)
        const locationData = await locationResponse.json()
        
        curCity = locationData.city.name
        curState = locationData.state.name
        
        cityState.textContent = `${curCity}, ${curState}`


    } catch (error) {
        console.error(error)
    }
}

randomName()
randomAge()
randomSex()
infoRandomizer()
getLocation()