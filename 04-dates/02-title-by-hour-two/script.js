/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    var tag = document.querySelector('#target');

    // your code here

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    var date = new Date();
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());

    var time = hours + ':' + minutes;

    console.log(time);

    if (hours <= 17 && minutes <= 30) {
        tag.innerHTML = '<em>Hello<em>'
    } else {
        tag.innerHTML = '<em>Good Evening<em>'
    }
    
})();
