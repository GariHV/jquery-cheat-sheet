/* SELECTOR */

/* SELECTOR 1 */

$('.test-jq-selector1').on('click', function () {
    $('.p-selector1-jq').css('color', 'red');
})

/* SELECTOR 2 */

$('.test-jq-selector2').on('click', function () {
    $(".p-selector2-jq").parent().css("font-weight", "bold");
})

/* SELECTOR 3 */

$('.test-jq-selector3').on('click', function () {
    $(".result-event3-jq").children().css("font-weight", "bold");
})

/* SELECTOR 4 */

$('.test-jq-selector4').on('click', function () {
    $(".p-selector4-jq").css("font-weight", "bold");
})

/* SELECTOR 5 */

$('.test-jq-selector5').on('click', function () {
    $('#result-jq-selector5').css('font-weight', 'bold');
})

/* SELECTOR 6 */

let btnTestSelector6Jq = document.querySelector('.test-jq-selector6')

btnTestSelector6Jq.addEventListener('click', function () {
    let allElems = document.getElementsByClassName('p-selector6-jq');
    for (const elem of allElems) {
        if (elem.style.display = 'none') {
            elem.style.display = 'block';
            elem.style.color = 'red';
        }
    }
})

/* SELECTOR 7 */

let btnTestSelector7Jq = document.querySelector('.test-jq-selector7')

btnTestSelector7Jq.addEventListener('click', function () {
    let allElems = document.querySelectorAll('option[selected]')
    console.log(allElems);
    for (const iterator of allElems) {
        document.querySelector('.result-jq-selector7').innerText = iterator.value;
    }
})

/* SELECTOR 8 */
let btnTestSelector8Jq = document.querySelector('.test-jq-selector8');

btnTestSelector8Jq.addEventListener('click', function () {
    document.querySelector('.result-jq-selector8').href = '#event-10';
    document.querySelector('.result-jq-selector8').innerText = 'Go to article 10'
})

/* SELECTOR 9 */

$('.btnSelector9Jq').on('click', function () {
    let firstA = $('.inputSelector9Jq').val();
    alert(firstA);
})

/* SELECTOR 10 FIXME:*/

let btnSelector10Jq = document.querySelector('.btnSelector10Jq')

btnSelector10Jq.addEventListener('click', removeAllElems)

function removeAllElems() {
    let allElems = document.querySelectorAll('.selector10-jq');
    for (const elem of allElems) {
        elem.remove();
    };
}