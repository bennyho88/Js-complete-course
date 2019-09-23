/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var button = document.querySelector('#run');
    

    button.addEventListener('click', function() {
        var passwordOne = document.querySelector('#pass-one').value;
        var passwordTwo = document.querySelector('#pass-two').value;

        if ( passwordOne === passwordTwo) {
            document.querySelector('#pass-one').style.borderColor = "green";
            document.querySelector('#pass-two').style.borderColor = "green";
        } else {
            document.querySelector('#pass-one').style.borderColor = "red";
            document.querySelector('#pass-two').style.borderColor = "red";
        }
        
    })

})();
