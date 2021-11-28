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

/* EVENT 9 FIXME:*/

$("#test-event9").submit(function (event) {
    $('.result-event9').text('Submited!');
    event.preventDefault();

});

/* EVENT 10 */

function event10Function() {
    document.querySelector(".result-event10").innerHTML = 'Changed!';
}

/* EVENT 11 */

let event11JSSpace = document.querySelector(".result-event11JS");

event11JSSpace.onmouseover = function () {
    mouseOver()
};
event11JSSpace.onmouseout = function () {
    mouseOut()
};

function mouseOver() {
    event11JSSpace.style.color = "red";
}

function mouseOut() {
    event11JSSpace.style.color = "black";
}

/* EVENT 12 */

validate();

function validate() {
    if (document.querySelector('.checkboxEvent12JS').checked) {
        document.querySelector(".result-event12").innerHTML = 'Checked!';
    } else {
        document.querySelector(".result-event12").innerHTML = 'Not checked!';
    }
}

/* EVENT 13 */

let liEvent13Js = document.querySelector('.li-js-event13').addEventListener('click', function () {
    document.querySelector('.li-js-event13').style.color = "red"
})