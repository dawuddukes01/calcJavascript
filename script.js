var calculation = '';

// Function to update calculation and log it
function updateCalculation(value) {
    console.log("Button Clicked:", value); //Log the buttons clicked
    calculation += value;
    console.log("Updated calculation:", calculation); // Log the updated calculation
    document.getElementById("calculation-display").innerText = calculation;
    console.log(calculation);
}

// Calculate the result
function calculateResult() {
    try{
        calculation = eval(calculation);
        calculation = Math.round(calculation * 100) / 100; //round to two decimal places
        document.getElementById("result-display").textContent = calculation;
        console.log(calculation);
    }   catch (error) {
        document.getElementById("result-display").innerText = "Error";
        calculation = "";
        console.log(calculation);
    }
}

//clear the display
function clearDisplay() {
    calculation = "";
    document.getElementById("calculation-display").innerText = "";
    document.getElementById("result-display").textContent = "0";
    console.log(calculation);
}

// Function to delete last character
function deleteLastCharacter() {
    document.getElementById("result-display").innerText = "0";
    document.getElementById("calculation-display").innerText = calculation;
}

