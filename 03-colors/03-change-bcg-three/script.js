/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var button = document.querySelector('#run');
    var background = document.querySelector('.content');

    // your code here
    button.addEventListener('click', function() {

     var randomColors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

         /*
         // Math.pow is slow, use constant instead.
var color = Math.floor(Math.random() * 16777216).toString(16);
// Avoid loops.
return '#000000'.slice(0, -color.length) + color;
        */
        background.style.backgroundColor = randomColors;
    })

})();
