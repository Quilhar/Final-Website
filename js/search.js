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


function changeImage() {
    img.src = "/img/cats/cat6.jpg"
}
