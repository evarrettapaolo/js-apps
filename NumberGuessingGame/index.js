document.addEventListener("DOMContentLoaded", () => {
    const randomNumber = Math.floor(Math.random() * 10)
    let guesses = 0

    document.getElementById('submitButton').onclick = function (){
        guesses++
        let guess = document.querySelector('#numberInput').value
        console.log(randomNumber)

        if(guess > randomNumber) {
            document.querySelector('#description').innerHTML = "Input is too large"
        } else if (guess < randomNumber) {
            document.querySelector('#description').innerHTML = "Input is too tiny"
        } else {
            document.querySelector('#description').innerHTML = `${guess} is right! It took you ${guesses} guesses`
        }
    }
})