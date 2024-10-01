let mainE = document.getElementById("myMainElem")
let clrButton = document.getElementById("colorBtn")
let clrBox = document.getElementById("colorBox")

let valueR = Math.floor(Math.random() * 255)
let valueG = Math.floor(Math.random() * 255)
let valueB = Math.floor(Math.random() * 255)

clrButton.addEventListener("click", function() {
    valueR = Math.floor(Math.random() * 255)
    valueG = Math.floor(Math.random() * 255)
    valueB = Math.floor(Math.random() * 255)

    console.log("Red: " + valueR)
    console.log("Green: " + valueG)
    console.log("Blue: " + valueB)

    mainE.style.backgroundColor = "rgb(" + valueR + ", " + valueG + ", " + valueB + ")"
})   

let submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function() {
    redGuess = document.getElementById("redGuess").value;
    greenGuess = document.getElementById("greenGuess").value;
    blueGuess = document.getElementById("blueGuess").value;

    console.log("red guess: " + redGuess)
    console.log("green guess: " + greenGuess)
    console.log("blue guess: " + blueGuess)

    let redUpdate = document.createElement('p')
    let redDiff = Math.abs(valueR - redGuess)
    if (redDiff == 0) {
        console.log("red is correct")
        redUpdate.textContent = "red is correct!"
        mainE.appendChild(redUpdate)
    } else if (redGuess > valueR && redDiff < 25) {
        redUpdate.textContent = "your guess for red is too high, but close!"
        mainE.appendChild(redUpdate)
    } else if (redGuess > valueR) {
        redUpdate.textContent = "your guess for red is too high"
        mainE.appendChild(redUpdate)
    } else if (redGuess < valueR && redDiff < 25) {
        redUpdate.textContent = "your guess for red is too low, but close!"
        mainE.appendChild(redUpdate)
    } else if (redGuess < valueR) {
        redUpdate.textContent = "your guess for red is too low"
        mainE.appendChild(redUpdate)
    }

    let greenUpdate = document.createElement('p')
    let greenDiff = Math.abs(valueG - greenGuess)
    if (greenDiff == 0) {
        console.log("green is correct")
        greenUpdate.textContent = "green is correct!"
        mainE.appendChild(greenUpdate)
    } else if (greenGuess > valueG && greenDiff < 25) {
        greenUpdate.textContent = "your guess for green is too high, but close!"
        mainE.appendChild(greenUpdate)
    } else if (greenGuess > valueG) {
        greenUpdate.textContent = "your guess for green is too high"
        mainE.appendChild(greenUpdate)
    } else if (greenGuess < valueG && greenDiff < 25) {
        greenUpdate.textContent = "your guess for green is too low, but close!"
        mainE.appendChild(greenUpdate)
    } else if (greenGuess < valueG) {
        greenUpdate.textContent = "your guess for green is too low"
        mainE.appendChild(greenUpdate)
    }

    let blueUpdate = document.createElement('p')
    let blueDiff = Math.abs(valueB - blueGuess)
    if (blueDiff == 0) {
        console.log("blue is correct")
        blueUpdate.textContent = "blue is correct!"
        mainE.appendChild(blueUpdate)
    } else if (blueGuess > valueB && blueDiff < 25) {
        blueUpdate.textContent = "your guess for blue is too high, but close!"
        mainE.appendChild(blueUpdate)
    } else if (blueGuess > valueB) {
        blueUpdate.textContent = "your guess for blue is too high"
        mainE.appendChild(blueUpdate)
    } else if (blueGuess < valueB && blueDiff < 25) {
        blueUpdate.textContent = "your guess for blue is too low, but close!"
        mainE.appendChild(blueUpdate)
    } else if (blueGuess < valueB) {
        blueUpdate.textContent = "your guess for blue is too low"
        mainE.appendChild(blueUpdate)
    }

    colorBox.style.backgroundColor = "rgb(" + redGuess + ", " + greenGuess + ", " + blueGuess + ")"
    
})

