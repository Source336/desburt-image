var bigAddmint = document.querySelector("#character-left1 .left")
var inputName = document.querySelector("input.name-input")
var nameCharsLeft = 20
var imageFile = document.querySelector(".image-file")
var sendBTN = document.querySelector(".send-btn")
var itemsNum = document.querySelector(".items-num")
var imagesDisplay = {
    one: document.querySelector(".i-one"),
    two: document.querySelector(".i-two")
}

sendBTN.onclick = () => {
    if (itemsNum.value == "1") {
        imagesDisplay.one.src = imageFile.value
    }
    if (itemsNum.value == "2") {
        imagesDisplay.two.src = imageFile.value
    }
}

setInterval(() => {
    nameCharsLeft = 20 - inputName.value.length
    bigAddmint.innerHTML = nameCharsLeft
}, 100);