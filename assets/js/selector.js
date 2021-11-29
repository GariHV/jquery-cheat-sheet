/* SELECTORS */

/* SELECTOR 1 */
let btnTestSelector1Js = document.querySelector('.test-selector1')

btnTestSelector1Js.addEventListener('click', function () {
    console.log('a');
    let pSelector1Js = document.getElementsByClassName('p-selector1-js');
    console.log(pSelector1Js);
    for (const iterator of pSelector1Js) {
        iterator.style.color = 'red';
    }
})

/* SELECTOR 2 */

let btnTestSelector2Js = document.querySelector('.test-selector2')

btnTestSelector2Js.addEventListener('click', function () {
    let a = document.querySelector('.p-selector2-js').parentElement
    a.style.fontWeight = 'bold';
})

/* SELECTOR 3 */

let btnTestSelector3Js = document.querySelector('.test-selector3')

btnTestSelector3Js.addEventListener('click', function () {
    let a = document.querySelector('.result-selector3').children
    for (const iterator of a) {
        iterator.style.fontWeight = 'bold'
    }
})

/* SELECTOR 4 */

let btnTestSelector4Js = document.querySelector('.test-selector4');
btnTestSelector4Js.addEventListener('click', function () {
    let a = document.querySelectorAll('.p-selector4')
    for (const iterator of a) {
        iterator.style.fontWeight = 'bold';
    }
})

/* SELECTOR 5 */

let btnTestSelector5Js = document.querySelector('.test-selector5')

btnTestSelector5Js.addEventListener('click', function () {
    document.getElementById('result-selector5').style.fontWeight = 'bold';
})

/* SELECTOR 6 */

let btnTestSelector6Js = document.querySelector('.test-selector6')

btnTestSelector6Js.addEventListener('click', function () {
    let allElems = document.getElementsByClassName('p-selector6');
    for (const elem of allElems) {
        if (elem.style.display = 'none') {
            elem.style.display = 'block';
            elem.style.color = 'red';
        }
    }
})

/* SELECTOR 7 */

let btnTestSelector7Js = document.querySelector('.test-selector7')

btnTestSelector7Js.addEventListener('click', function () {
    let allElems = document.querySelectorAll('option[selected]')
    console.log(allElems);
    for (const iterator of allElems) {
        document.querySelector('.result-selector7').innerText = iterator.value;
    }
})

/* SELECTOR 8 */

let btnTestSelector8Js = document.querySelector('.test-selector8');

btnTestSelector8Js.addEventListener('click', function () {
    document.querySelector('.result-selector8').href = '#event-10';
    document.querySelector('.result-selector8').innerText = 'Go to article 10'
})

/* SELECTOR 9 */

let btnSelector9Js = document.querySelector('.btnSelector9Js');

btnSelector9Js.addEventListener('click', function () {
    let a = document.querySelector('.inputSelector9Js').value
    alert(a)
})

/* SELECTOR 10 */

let btnSelector10Js = document.querySelector('.btnSelector10Js')

btnSelector10Js.addEventListener('click', removeAllElems)

function removeAllElems() {
    let allElems = document.querySelectorAll('.selector10-js');
    for (const elem of allElems) {
        elem.remove();
    };
}