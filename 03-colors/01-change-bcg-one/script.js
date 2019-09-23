/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var redBtn = document.getElementById('red');
    var greenBtn = document.getElementById('green');
    var yellowBtn = document.getElementById('yellow');
    var blueBtn = document.getElementById('blue');

    redBtn.addEventListener('click', function() {
        document.querySelector('.content').style.backgroundColor = "red";
    })

    greenBtn.addEventListener('click', function() {
        document.querySelector('.content').style.backgroundColor = "green";
    })

    yellowBtn.addEventListener('click', function() {
        document.querySelector('.content').style.backgroundColor = "yellow";
    })

    blueBtn.addEventListener('click', function() {
        document.querySelector('.content').style.backgroundColor = "blue";
    })
})();
