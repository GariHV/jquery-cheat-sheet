/* EVENT 1 */

var btnTestEvent1 = document.querySelector('.test');

btnTestEvent1.addEventListener('click', function () {
    document.onload(document.querySelector('.result').innerText = 'is loaded!')
})

/* EVENT 2 */