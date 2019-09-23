/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // Value of data-image
    var valueDataImage = document.querySelector('#source').getAttribute("data-image");
    console.log(valueDataImage);

    // Create new img element

    var image = document.createElement('img');
    console.log(image);

    // put the new img element in the target element
    image.setAttribute('src', valueDataImage);

    // display image with value of data-image

    document.getElementById('target').appendChild(image);

    // remove orginal element

    document.getElementById('source').remove();
    // your code here
   
    
})();
