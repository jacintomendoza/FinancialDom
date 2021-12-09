let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

// Receives local storage if existing (AKA pulls from local storage)
const initialVal = localStorage.getItem('initialValStorage') //////////////////////////////// LOCAL STORAGE
const interest = localStorage.getItem('interestStorage') //////////////////////////////// LOCAL STORAGE
const lengthOfTime = localStorage.getItem('lengthOfTimeStorage') //////////////////////////////// LOCAL STORAGE

// Sets elements equal to local storage (if local storage empty, then the elements are just empty)
// Sets HTML to what's in local storage
// Puts it into the textbox
document.getElementById('initial-val').value = initialVal; //////////////////////////////// LOCAL STORAGE
document.getElementById('interest-val').value = interest; //////////////////////////////// LOCAL STORAGE
document.getElementById('length-of-time').value = lengthOfTime; //////////////////////////////// LOCAL STORAGE

// Receives inputs from the document
const calculateBtn = document.getElementById('calculateBtn')
// --------------------------------------------------------

// Toggles functions when clicked
calculateBtn.addEventListener('click', calculateVals)
// --------------------------------------------------------

function calculateVals(){
    const initialVal = document.getElementById('initial-val').value
    const interest = document.getElementById('interest-val').value
    const lengthOfTime = document.getElementById('length-of-time').value

    // Sets what you put in the text box as local storage
    localStorage.setItem('initialValStorage', initialVal) //////////////////////////////// LOCAL STORAGE
    localStorage.setItem('interestStorage', interest) //////////////////////////////// LOCAL STORAGE
    localStorage.setItem('lengthOfTimeStorage', lengthOfTime) //////////////////////////////// LOCAL STORAGE
    
    console.log(initialVal)
    console.log(interest)
    console.log(lengthOfTime)
    // Fix math here later
    const futureVal = initialVal + (initialVal * ((interest/100) * (lengthOfTime/12)))
    const interestEarned = futureVal - initialVal

    console.log("Future Val: " + futureVal)
    console.log("interestEarned: " + interestEarned)

    outputNums(futureVal, interestEarned)
}

// DOM Function
function outputNums(futureVal, interestEarned){
    // Takes an element in HTML and equals it to value in JavaScript
    document.getElementById("result-future-value").innerHTML = dollarUS.format(futureVal);
    document.getElementById("result-total-interest").innerHTML = dollarUS.format(interestEarned);
}