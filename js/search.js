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

// search button 

const submitBtn = document.querySelector(".search-button")
const results = document.querySelector(".result-con")



var species = document.getElementById("species")
var sex = document.getElementById("sex")
var distance = document.getElementById("distance")

const nameBank = ["Parker", "River", "August", "Nova", "Rowan", "Riley", "Avery", "Quinn", "Cameron", "Angel", "Carter", "Dylan", "Ellis", "Scout", "Moss", "Jett", "Sage"]
const petName1 = document.querySelector(".name1")
const petName2 = document.querySelector(".name2")
const petName3 = document.querySelector(".name3")
const petName4 = document.querySelector(".name4")
const petName5 = document.querySelector(".name5")
const petName6 = document.querySelector(".name6")
const petName7 = document.querySelector(".name7")
const petName8 = document.querySelector(".name8")

const sex = ["Male", "Female"]
const petSex1 = document.querySelector(".sex1")
const petSex2 = document.querySelector(".sex2")
const petSex3 = document.querySelector(".sex3")
const petSex4 = document.querySelector(".sex4")
const petSex5 = document.querySelector(".sex5")
const petSex6 = document.querySelector(".sex6")
const petSex7 = document.querySelector(".sex7")
const petSex8 = document.querySelector(".sex8")

var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");
var img6 = document.getElementById("image6");
var img7 = document.getElementById("image7");
var img8 = document.getElementById("image8");

submitBtn.addEventListener('click', () => {
    
    if (results.style.display == "none"){
        results.style.display = "flex"
        
    }
    else{
        results.style.display = "none"
    }

})


function changeImageDog() {
    img1.src = "/img/dogs/dog1.jpg"
    img2.src = "/img/dogs/dog2.jpg"
    img3.src = "/img/dogs/dog3.jpg"
    img4.src = "/img/dogs/dog4.jpg"
    img5.src = "/img/dogs/dog5.jpg"
    img6.src = "/img/dogs/dog6.jpg"
    img7.src = "/img/dogs/dog7.jpg"
    img8.src = "/img/dogs/dog8.jpg"
}

function changeImageBunny() {
    img1.src = "/img/bunnies/bunny1.jpg"
    img2.src = "/img/bunnies/bunny2.jpg"
    img3.src = "/img/bunnies/bunny3.jpg"
    img4.src = "/img/bunnies/bunny4.jpg"
    img5.src = "/img/bunnies/bunny5.jpg"
    img6.src = "/img/bunnies/bunny6.jpg"
    img7.src = "/img/bunnies/bunny7.jpg"
    img8.src = "/img/bunnies/bunny8.jpg"
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomName () {
    petName1.textContent = nameBank[randomInteger(0, 16)]
    petName2.textContent = nameBank[randomInteger(0, 16)]
    petName3.textContent = nameBank[randomInteger(0, 16)]
    petName4.textContent = nameBank[randomInteger(0, 16)]
    petName5.textContent = nameBank[randomInteger(0, 16)]
    petName6.textContent = nameBank[randomInteger(0, 16)]
    petName7.textContent = nameBank[randomInteger(0, 16)]
    petName8.textContent = nameBank[randomInteger(0, 16)]
}

function randomSex () {
    petSex1.textContent = sex[randomInteger(0, 1)]

}

randomSex()