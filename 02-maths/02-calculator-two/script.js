/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    const btns = document.getElementsByTagName('button');
    const input1 = parseInt(document.getElementById("op-one").value);
    const input2 = parseInt(document.getElementById("op-two").value);
    console.log(btns);
    for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
    switch (btns[i].innerText) {
    case "+":
    alert(input1 + input2);
    break;
    case "-":
    alert(input1 - input2);
    break;
    case "*":
    alert(input1 * input2);
    break;
    case "×":
    alert(input1 / input2);
    break;
    
            }
        }
    
    }
    })();


