document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector('#convertedValue')
    const submitBtn = document.getElementById("submitButton")
    

    function ToFahrenheit(tempVal) {
        return (tempVal * 9 /5) + 32
    }

    function ToCelsius(tempVal) {
        return (tempVal - 32) * 5 / 9
    }

    submitBtn.onclick = function() {
        const temp = Number(document.querySelector('#numberInput').value)
        if(document.getElementById('cBtn').checked) {
            display.innerHTML = ToCelsius(temp)
        } else if(document.getElementById('fBtn').checked) {
            display.innerHTML = ToFahrenheit(temp)
        } else {
            display.innerHTML = 'Select a unit'
        }
    }
})