/* FUNCTIONS */

/* FUNCTION 1 */

var btnFunction1Jq = document.querySelector('.test-jq-function1');

btnFunction1Jq.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-jq-function1');
    b.appendChild(a);
})

/* FUNCTION 2 */

var btnFunction2Jq = document.querySelector('.test-jq-function2')

btnFunction2Jq.addEventListener('click', function () {
    let a = document.querySelector('.result-jq-function2')
    a.remove();
})

/* FUNCTION 3 */

var btnFunction3Jq = document.querySelector('.test-jq-function3');

btnFunction3Jq.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-function3-jq');
    b.appendChild(a);
})

/* FUNCTION 4 */
var btnFunction4Jq = document.querySelector('.test-jq-function4');

btnFunction4Jq.addEventListener('click', function () {
    let a = document.createElement("p");
    a.innerText = 'New Element'
    let b = document.querySelector('.result-jq-function4');
    b.prepend(a);
})

/* FUNCTION 7 */

var btnFunction7Jq = document.querySelector('.test-jq-function7');

btnFunction7Jq.addEventListener('click', function () {
    let a = document.querySelector('.result-jq-function7')
    let b = a.cloneNode(true);
    b.innerText = 'New Element'
    b.appendChild(a);
})

/* FUNCTION 8 */

var btnFunction8Jq = document.querySelector('.test-jq-function8');

btnFunction8Jq.addEventListener('click', function () {
    let a = document.querySelector('.result-jq-function8')
    a.classList.add('function8-jq')
})

/* FUNCTION 9 */

var btnFunction9Jq = document.querySelector('.btnSelector9Jq');

btnFunction9Jq.addEventListener('click', function () {
    let a = document.querySelector('.result-jq-event9')
    a.classList.remove('function8-jq')
})