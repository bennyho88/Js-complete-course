/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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

        if (passwordOne === passwordTwo) {

        document.querySelector('.content').style.backgroundColor = "green";
        } else {
        document.querySelector('#pass-one').className = "error";
        document.querySelector('#pass-two').className = "error";
        }

    })
})();


