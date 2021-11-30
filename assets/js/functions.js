/* FUNCTIONS */

/* FUNCTION 1 */

var btnFunction1Js = document.querySelector('.test-function1');

btnFunction1Js.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-function1');
    b.appendChild(a);
})

/* FUNCTION 2 */

var btnFunction2Js = document.querySelector('.test-function2')

btnFunction2Js.addEventListener('click', function () {
    let a = document.querySelector('.result-function2')
    a.remove();
})

/* FUNCTION 3 */

var btnFunction1Js = document.querySelector('.test-function3');

btnFunction1Js.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-function3');
    b.appendChild(a);
})

/* FUNCTION 4 */

var btnFunction4Js = document.querySelector('.test-function4');

btnFunction4Js.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-function4');
    b.prepend(a);
})


/* FUNCTION 7 */

var btnFunction7Js = document.querySelector('.test-function7');

btnFunction7Js.addEventListener('click', function () {
    let a = document.querySelector('.result-function7')
    let b = a.cloneNode(true);
    b.innerText = 'New Element'
    b.appendChild(a);
})

/* FUNCTION 8 */

var btnFunction8Js = document.querySelector('.test-function8');

btnFunction8Js.addEventListener('click', function () {
    let a = document.querySelector('.result-function8')
    a.classList.add('function8-js')
})

/* FUNCTION 9 */

var btnFunction9Js = document.querySelector('.btnSelector9Js');

btnFunction9Js.addEventListener('click', function () {
    let a = document.querySelector('.result-event9')
    a.classList.remove('function8-js')
})