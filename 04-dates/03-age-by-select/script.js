/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var button = document.querySelector('#run');
    var day = document.querySelector('#dob-day');
    var month = document.querySelector('#dob-month');
    var year = document.querySelector('#dob-year');
    // your code here

    button.addEventListener('click', function() {

        var dayValue = day.value;
        var monthValue = month.value;
        var yearValue = year.value;

        var birthDate = dayValue + '/' + monthValue + '/' + yearValue;
        console.log(birthDate);

        var age = 2019 - yearValue;
        alert('Your birthdate is ' + birthDate + ' and age is ' + age);
        
/*
        var age = function calculateAge() {
           return 2019 - yearValue;
           
        }
*/
    
    });

})();
