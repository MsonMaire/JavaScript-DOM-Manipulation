// Variables of different data types
let strVariable = "Hello, world!";
let numVariable = 10;
let boolVariable = true;

// Functions for basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero!";
    }
}

// DOM manipulation and event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for calculator buttons
    document.getElementById('addBtn').addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('result').textContent = add(num1, num2);
    });

    document.getElementById('subtractBtn').addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('result').textContent = subtract(num1, num2);
    });

    document.getElementById('multiplyBtn').addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('result').textContent = multiply(num1, num2);
    });

    document.getElementById('divideBtn').addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        document.getElementById('result').textContent = divide(num1, num2);
    });

    // Chart.js code
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales Data',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    document.getElementById('updateChartBtn').addEventListener('click', function() {
        const newData = [55, 45, 70, 85, 60];
        myChart.data.datasets[0].data = newData;
        myChart.update();
    });
});
