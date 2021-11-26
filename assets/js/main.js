/* EVENT 1 */

var btnTestEvent1 = document.querySelector('.test-event1');

btnTestEvent1.addEventListener('click', function () {
    document.onload(document.querySelector('.result-event1').innerText = 'is loaded!')
})

/* EVENT 2 */