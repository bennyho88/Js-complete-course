/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    var button = document.querySelector('#run');
    var input = document.querySelector('#numbers');
    var inputValue = document.querySelector('#numbers').value;

    

    button.addEventListener('click', function() {
        /*
        let ordernumbers = document.getElementById("numbers").value.split(", ");
        ordernumbers.sort((a, b) => a - b);
        alert(ordernumbers);
        */

        var arr = inputValue.split(", ");

        console.log(arr);

        var orderNumbers = arr.sort((a,b) => a -b);
        alert(orderNumbers);
   
    });

    

})();
