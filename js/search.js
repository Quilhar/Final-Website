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
const found = document.querySelector(".found")


var speciesDrop = document.getElementById("species")
var sexDrop = document.getElementById("sex")
var distanceDrop = document.getElementById("distance")

// var speciesVal = speciesDrop.options[speciesDrop.selectedIndex].text
// var sexVal = sexDrop.options[sexDrop.selectedIndex].text
// var distanceVal = distanceDrop.options[distanceDrop.selectedIndex].text

const nameBank = ["Parker", "River", "August", "Nova", "Rowan", "Riley", "Avery", "Quinn", "Cameron", "Angel", "Carter", "Dylan", "Ellis", "Scout", "Moss", "Jett", "Sage"]
const petName1 = document.querySelector(".name1")
const petName2 = document.querySelector(".name2")
const petName3 = document.querySelector(".name3")
const petName4 = document.querySelector(".name4")
const petName5 = document.querySelector(".name5")
const petName6 = document.querySelector(".name6")
const petName7 = document.querySelector(".name7")
const petName8 = document.querySelector(".name8")

const sexBank = ["Male", "Female"]
const petSex1 = document.querySelector(".sex1")
const petSex2 = document.querySelector(".sex2")
const petSex3 = document.querySelector(".sex3")
const petSex4 = document.querySelector(".sex4")
const petSex5 = document.querySelector(".sex5")
const petSex6 = document.querySelector(".sex6")
const petSex7 = document.querySelector(".sex7")
const petSex8 = document.querySelector(".sex8")

const petAge1 = document.querySelector(".age1")
const petAge2 = document.querySelector(".age2")
const petAge3 = document.querySelector(".age3")
const petAge4 = document.querySelector(".age4")
const petAge5 = document.querySelector(".age5")
const petAge6 = document.querySelector(".age6")
const petAge7 = document.querySelector(".age7")
const petAge8 = document.querySelector(".age8")

const petDis1 = document.querySelector(".distance1")
const petDis2 = document.querySelector(".distance2")
const petDis3 = document.querySelector(".distance3")
const petDis4 = document.querySelector(".distance4")
const petDis5 = document.querySelector(".distance5")
const petDis6 = document.querySelector(".distance6")
const petDis7 = document.querySelector(".distance7")
const petDis8 = document.querySelector(".distance8")

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
        found.style.display = "block"
    }
    else {
        results.style.display = "none"
        found.style.display = "none"
    }

    let species = speciesDrop.options[speciesDrop.selectedIndex].text
    let sexVal = sexDrop.options[sexDrop.selectedIndex].text
    let distanceVal = distanceDrop.options[distanceDrop.selectedIndex].text
    console.log(sexVal, distanceVal)
    if (species == "Cat") {
        changeImageCat()
    }

    else if (speciesDrop.options[speciesDrop.selectedIndex].text == "Dog") {
        changeImageDog()
    }
    
    else if (speciesDrop.options[speciesDrop.selectedIndex].text == "Bunny") {
        changeImageBunny()
    }
    

    if (sexVal == "Male") {
        petSex1.textContent = sexBank[0]
        petSex2.textContent = sexBank[0]
        petSex3.textContent = sexBank[0]
        petSex4.textContent = sexBank[0]
        petSex5.textContent = sexBank[0]
        petSex6.textContent = sexBank[0]
        petSex7.textContent = sexBank[0]
        petSex8.textContent = sexBank[0]
    }

    else if (sexVal == "Female") {
        petSex1.textContent = sexBank[1]
        petSex2.textContent = sexBank[1]
        petSex3.textContent = sexBank[1]
        petSex4.textContent = sexBank[1]
        petSex5.textContent = sexBank[1]
        petSex6.textContent = sexBank[1]
        petSex7.textContent = sexBank[1]
        petSex8.textContent = sexBank[1]
    }

    else {
        randomSex()
    }

    if (distanceVal == "25 Miles") {
        petDis1.textContent = `${randomInteger(1, 25)} miles`
        petDis2.textContent = `${randomInteger(1, 25)} miles`
        petDis3.textContent = `${randomInteger(1, 25)} miles`
        petDis4.textContent = `${randomInteger(1, 25)} miles`
        petDis5.textContent = `${randomInteger(1, 25)} miles`
        petDis6.textContent = `${randomInteger(1, 25)} miles`
        petDis7.textContent = `${randomInteger(1, 25)} miles`
        petDis8.textContent = `${randomInteger(1, 25)} miles`
    }

    else if (distanceVal == "100 Miles") {
        petDis1.textContent = `${randomInteger(1, 100)} miles`
        petDis2.textContent = `${randomInteger(1, 100)} miles`
        petDis3.textContent = `${randomInteger(1, 100)} miles`
        petDis4.textContent = `${randomInteger(1, 100)} miles`
        petDis5.textContent = `${randomInteger(1, 100)} miles`
        petDis6.textContent = `${randomInteger(1, 100)} miles`
        petDis7.textContent = `${randomInteger(1, 100)} miles`
        petDis8.textContent = `${randomInteger(1, 100)} miles`
    }

    else {
        petDis1.textContent = `${randomInteger(1, 1000)} miles`
        petDis2.textContent = `${randomInteger(1, 1000)} miles`
        petDis3.textContent = `${randomInteger(1, 1000)} miles`
        petDis4.textContent = `${randomInteger(1, 1000)} miles`
        petDis5.textContent = `${randomInteger(1, 1000)} miles`
        petDis6.textContent = `${randomInteger(1, 1000)} miles`
        petDis7.textContent = `${randomInteger(1, 1000)} miles`
        petDis8.textContent = `${randomInteger(1, 1000)} miles`
    }

    if (species == "Please Select") {
        results.style.display = "none"
        found.style.display = "none"
    }
    
    if (sexVal == "Please Select"){
        results.style.display = "none"
        found.style.display = "none"
    }

    if (distanceVal == "Please Select") {
        results.style.display = "none"
        found.style.display = "none"
    }

    // console.log(speciesDrop.options[speciesDrop.selectedIndex].text, sexDrop.options[sexDrop.selectedIndex].text, distanceDrop.options[distanceDrop.selectedIndex].text)

    randomName()
    randomAge()
    randomFound()
})

function changeImageCat() {
    img1.src = "../img/cats/cat1.jpg"
    img2.src = "../img/cats/cat2.jpg"
    img3.src = "../img/cats/cat3.jpg"
    img4.src = "../img/cats/cat4.jpg"
    img5.src = "../img/cats/cat5.jpg"
    img6.src = "../img/cats/cat6.jpg"
    img7.src = "../img/cats/cat7.jpg"
    img8.src = "../img/cats/cat8.jpg"
}

function changeImageDog() {
    img1.src = "../img/dogs/dog1.jpg"
    img2.src = "../img/dogs/dog2.jpg"
    img3.src = "../img/dogs/dog3.jpg"
    img4.src = "../img/dogs/dog4.jpg"
    img5.src = "../img/dogs/dog5.jpg"
    img6.src = "../img/dogs/dog6.jpg"
    img7.src = "../img/dogs/dog7.jpg"
    img8.src = "../img/dogs/dog8.jpg"
}

function changeImageBunny() {
    img1.src = "../img/bunnies/bunny1.jpg"
    img2.src = "../img/bunnies/bunny2.jpg"
    img3.src = "../img/bunnies/bunny3.jpg"
    img4.src = "../img/bunnies/bunny4.jpg"
    img5.src = "../img/bunnies/bunny5.jpg"
    img6.src = "../img/bunnies/bunny6.jpg"
    img7.src = "../img/bunnies/bunny7.jpg"
    img8.src = "../img/bunnies/bunny8.jpg"
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
    petSex1.textContent = sexBank[randomInteger(0, 1)]
    petSex2.textContent = sexBank[randomInteger(0, 1)]
    petSex3.textContent = sexBank[randomInteger(0, 1)]
    petSex4.textContent = sexBank[randomInteger(0, 1)]
    petSex5.textContent = sexBank[randomInteger(0, 1)]
    petSex6.textContent = sexBank[randomInteger(0, 1)]
    petSex7.textContent = sexBank[randomInteger(0, 1)]
    petSex8.textContent = sexBank[randomInteger(0, 1)]
}

function randomAge() {
    petAge1.textContent = `${randomInteger(1, 17)} years old`
    petAge2.textContent = `${randomInteger(1, 17)} years old`
    petAge3.textContent = `${randomInteger(1, 17)} years old`
    petAge4.textContent = `${randomInteger(1, 17)} years old`
    petAge5.textContent = `${randomInteger(1, 17)} years old`
    petAge6.textContent = `${randomInteger(1, 17)} years old`
    petAge7.textContent = `${randomInteger(1, 17)} years old`
    petAge8.textContent = `${randomInteger(1, 17)} years old`

}

function randomFound() {
    found.textContent = `${randomInteger(8, 75)} Results Found`
}

// petDis1.textContent = `${randomInteger(1, 1000)} miles`
// petDis2.textContent = `${randomInteger(1, 1000)} miles`
// petDis3.textContent = `${randomInteger(1, 1000)} miles`
// petDis4.textContent = `${randomInteger(1, 1000)} miles`
// petDis5.textContent = `${randomInteger(1, 1000)} miles`
// petDis6.textContent = `${randomInteger(1, 1000)} miles`
// petDis7.textContent = `${randomInteger(1, 1000)} miles`
// petDis8.textContent = `${randomInteger(1, 1000)} miles`