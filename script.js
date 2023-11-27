// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Function to compare values entered by the user
    function compareValues() {
        // Get the values entered by the user and convert them to floating-point numbers
        var V1 = parseFloat(document.getElementById('V1').value);
        var V2 = parseFloat(document.getElementById('V2').value);

        // Check if the entered values are valid numbers
        if (isNaN(V1) || isNaN(V2)) {
            alert('Please enter valid numeric values.');
            return;
        }

        // Compare the values and generate the result message
        var result;
        if (V1 < V2) {
            result = V1 + ' is less than ' + V2;
        } else if (V1 > V2) {
            result = V2 + ' is less than ' + V1;
        } else {
            result = 'Both values are equal.';
        }

        // Display the result message in the HTML element with the 'result' id
        document.getElementById('result').innerHTML = result;
    }

    // Attach the function to the button click event
    document.getElementById('compareButton').addEventListener('click', compareValues);
});
