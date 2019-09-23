/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var img = document.querySelector('img');
    var original = img.getAttribute('src');

    img.addEventListener('mouseover', function() {
        console.log('hello');
        // get value data-hover

        var kiss = img.getAttribute('data-hover');
        

        // change src attribute to value from data-hover

        img.setAttribute('src', kiss);
    })
    
    img.addEventListener('mouseout', function() {
        img.src = original;
    })
    
    
})();
