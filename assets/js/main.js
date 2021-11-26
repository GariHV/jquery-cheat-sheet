/* EVENT 1 */

var btnTestEvent1 = document.querySelector('.test-event1');

btnTestEvent1.addEventListener('click', function () {
    document.onload(document.querySelector('.result-event1').innerText = 'Is loaded!')
})

/* EVENT 2 */

var btnTestEvent2 = document.querySelector('.test-event2');

btnTestEvent2.addEventListener('click', function () {
    document.querySelector('.result-event2').innerText = 'Is clicked!'
})

/* EVENT 3 */

var btnTestEvent3 = document.querySelector('.test-event3');

btnTestEvent3.addEventListener('dblclick', function () {
    document.querySelector('.result-event3').innerText = 'Is double clicked!'
})

/* EVENT 4 */

var keyboardJsTest = document.querySelector('.keyboard-js-test')

window.addEventListener('keydown', function (e) {
    document.querySelector('.result-event4').innerHTML = `You pressed: ${e.key}`;
}, false);

/* EVENT 5 */

function mouseMoveEvent5(e) {
    document.querySelector('.result-event5').innerHTML = (`mouse location = X: ${e.x}, Y: ${e.y}`)
}

/* EVENT 6 */

var inputEvent6 = document.querySelector(".test-event6").addEventListener("change", function () {
    document.querySelector('.result-event6').innerText = 'Changed!';
})

/* EVENT 7 */

var img7 = document.querySelector('.test-event7');
img7.addEventListener('click', function () {
    if (img7.src) {
        document.querySelector('.result-event7').innerText = 'Image is loaded!';
    }
})