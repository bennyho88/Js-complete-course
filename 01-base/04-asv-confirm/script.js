/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
     var responseOne = prompt('What is your age?');
     var responseTwo = prompt('What is your gender?');
     var responseThree = prompt('Where do you live?');

     var total = alert('Your age is: ' + responseOne + '\n Your gender is: ' + responseTwo +
    '\n Your town is: '+ responseThree);
     
     if (confirm('Do you want to confirm this?')) {
         alert('You pressed OK')
     } else {
         alert('You pressed cancel')
     }
     
})();
