let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const initialVal = localStorage.getItem('example') //////////////////////////////// LOCAL STORAGE
document.getElementById('initial-val').value = initialVal; //////////////////////////////// LOCAL STORAGE

// Receives inputs from the document
const calculateBtn = document.getElementById('calculateBtn')
// --------------------------------------------------------

// Toggles functions when clicked
calculateBtn.addEventListener('click', calculateVals)
// --------------------------------------------------------

function calculateVals(){
    const initialVal = document.getElementById('initial-val').value
    localStorage.setItem('example', initialVal) //////////////////////////////// LOCAL STORAGE
    const interest = document.getElementById('interest-val').value
    const lengthOfTime = document.getElementById('length-of-time').value
    
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
    document.getElementById("result-future-value").innerHTML = dollarUS.format(futureVal);
    document.getElementById("result-total-interest").innerHTML = dollarUS.format(interestEarned);
}