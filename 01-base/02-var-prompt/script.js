/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   
    var txt;
    var person = prompt("What is your name?", "Benny");

    
    
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = 'Hello ' + person;
    }
    
    document.getElementById("text").innerHTML = txt;
    
    
})();
