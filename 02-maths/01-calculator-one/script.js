/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var inputOne = parseInt(document.getElementById("op-one").value);
        var inputTwo = parseInt(document.getElementById("op-two").value);


        if ( inputOne == "" && inputTwo == "") {
            console.log("Please put a value")
        } else {
            console.log(inputOne + inputTwo)
        }

    });




    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var inputOne = parseInt(document.getElementById("op-one").value);
        var inputTwo = parseInt(document.getElementById("op-two").value);


        if ( inputOne == "" && inputTwo == "") {
            console.log("Please put a value")
        } else {
            console.log(inputOne - inputTwo)
        }
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var inputOne = parseInt(document.getElementById("op-one").value);
        var inputTwo = parseInt(document.getElementById("op-two").value);


        if ( inputOne == "" && inputTwo == "") {
            console.log("Please put a value")
        } else {
            console.log(inputOne * inputTwo)
        }
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var inputOne = parseInt(document.getElementById("op-one").value);
        var inputTwo = parseInt(document.getElementById("op-two").value);


        if ( inputOne == "" && inputTwo == "") {
            console.log("Please put a value")
        } else {
            console.log(inputOne / inputTwo)
        }
    });
})();
