let mainE = document.getElementById("myMainElem")
let clrButton = document.getElementById("colorBtn")
let clrBox = document.getElementById("colorBox")
let guessFeedback = document.querySelectorAll(".guess-feedback")

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

    let feedback = document.createElement('div')

    let redUpdate = document.createElement('p')
    let redDiff = Math.abs(valueR - redGuess)
    if (redDiff == 0) {
        console.log("red is correct")
        redUpdate.textContent = "red is correct!"
        feedback.appendChild(redUpdate)
    } else if (redGuess > valueR && redDiff < 25) {
        redUpdate.textContent = "your guess for red is too high, but close!"
        feedback.appendChild(redUpdate)
    } else if (redGuess > valueR) {
        redUpdate.textContent = "your guess for red is too high"
        feedback.appendChild(redUpdate)
    } else if (redGuess < valueR && redDiff < 25) {
        redUpdate.textContent = "your guess for red is too low, but close!"
        feedback.appendChild(redUpdate)
    } else if (redGuess < valueR) {
        redUpdate.textContent = "your guess for red is too low"
        feedback.appendChild(redUpdate)
    }

    let greenUpdate = document.createElement('p')
    let greenDiff = Math.abs(valueG - greenGuess)
    if (greenDiff == 0) {
        console.log("green is correct")
        greenUpdate.textContent = "green is correct!"
        feedback.appendChild(greenUpdate)
    } else if (greenGuess > valueG && greenDiff < 25) {
        greenUpdate.textContent = "your guess for green is too high, but close!"
        feedback.appendChild(greenUpdate)
    } else if (greenGuess > valueG) {
        greenUpdate.textContent = "your guess for green is too high"
        feedback.appendChild(greenUpdate)
    } else if (greenGuess < valueG && greenDiff < 25) {
        greenUpdate.textContent = "your guess for green is too low, but close!"
        feedback.appendChild(greenUpdate)
    } else if (greenGuess < valueG) {
        greenUpdate.textContent = "your guess for green is too low"
        feedback.appendChild(greenUpdate)
    }

    let blueUpdate = document.createElement('p')
    let blueDiff = Math.abs(valueB - blueGuess)
    if (blueDiff == 0) {
        console.log("blue is correct")
        blueUpdate.textContent = "blue is correct!"
        feedback.appendChild(blueUpdate)
    } else if (blueGuess > valueB && blueDiff < 25) {
        blueUpdate.textContent = "your guess for blue is too high, but close!"
        feedback.appendChild(blueUpdate)
    } else if (blueGuess > valueB) {
        blueUpdate.textContent = "your guess for blue is too high"
        feedback.appendChild(blueUpdate)
    } else if (blueGuess < valueB && blueDiff < 25) {
        blueUpdate.textContent = "your guess for blue is too low, but close!"
        feedback.appendChild(blueUpdate)
    } else if (blueGuess < valueB) {
        blueUpdate.textContent = "your guess for blue is too low"
        feedback.appendChild(blueUpdate)
    }

    //guessFeedback[1].remove()
    mainE.appendChild(feedback)
    colorBox.style.backgroundColor = "rgb(" + redGuess + ", " + greenGuess + ", " + blueGuess + ")"
    
})

