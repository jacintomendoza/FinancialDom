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
    

    // CALCULATIONS
    const initialVal_int = parseInt(initialVal)
    const interest_int = parseInt(interest)
    const lengthOfTime_int = parseInt(lengthOfTime)

    const futureVal = initialVal_int + (initialVal_int * ((interest_int/100) * (lengthOfTime_int/12)))
    const interestEarned = futureVal - initialVal_int

    outputNums(futureVal, interestEarned, initialVal_int)
}

// DOM Function
function outputNums(futureVal, interestEarned, initialVal_int){
    // Takes an element in HTML and equals it to value in JavaScript
    document.getElementById("result-future-value").innerHTML = dollarUS.format(futureVal);
    document.getElementById("result-total-interest").innerHTML = dollarUS.format(interestEarned);

    // BAR CHART ///////////////////////////////////////
    var xValues = ["Initial Value", "Invested Value"];
    var yValues = [initialVal_int, futureVal, 0];
    var barColors = ["red", "green"];
    new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                backgroundColor: barColors,
                data: yValues
                }]
            },
            options: {
                legend: {display: false},
                title: {
                display: true,
                text: "Investment Difference",
                fontSize: 30
                }
            }
        });
        window.scrollBy(0, 1000);
        // const outputEl = document.createElement('div')
        // outputEl.innerHTML =`<canvas id="myChart" style="width:100%;max-width:600px"></canvas>`
        // document.getElementsByClassName("chart").appendChild(outputEl);
}

function popUp() {
    var popup = document.getElementById("popUp");
    popup.classList.toggle("show");
}

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})