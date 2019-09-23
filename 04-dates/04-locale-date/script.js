/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    // your code here

    var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = new Date();
    var day = d.getDate();
    var dayName = week[d.getDay() -1];
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var year = d.getFullYear();
    var monthName = month[d.getMonth()];

    var today = dayName + ' ' + day + ' ' + monthName + ' ' + year + ',' + hours + ':' + minutes;
    console.log(today)

    document.querySelector('#target').innerHTML = `${today} `;
    
    
    




})();
