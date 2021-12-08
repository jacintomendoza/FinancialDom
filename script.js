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
    console.log(initialVal)
    console.log(interest)
    console.log(lengthOfTime)
}
