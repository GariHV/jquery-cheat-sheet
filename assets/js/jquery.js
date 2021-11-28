/* EVENT 1 */

var btnTestEvent1Jq = $('.test-jq-event1').on('click', function () {
    $(document).ready($('.result-jq-event1').text('Is loaded!'))
})

/* EVENT 2 */

var btnTestEvent2Jq = $('.test-jq-event2').on('click', function () {
    $('.result-jq-event2').text('Is clicked!')
})

/* EVENT 3 */

var btnTestEvent3Jq = $('.test-jq-event3').dblclick(function () {
    $('.result-jq-event3').text('Is double clicked!')
})

/* EVENT 4 FIXME: */

window.addEventListener('keydown', function (e) {
    document.querySelector('.result-jq-event4').innerHTML = `You pressed: ${e.key}`;
}, false);


/* EVENT 5 */

$(document).bind('mousemove', function (e) {
    $(".result-jq-event5").text("Mouse location X: " + e.pageX + ", Mouse location Y: " + e.pageY);
})

/* EVENT 6 */

$('.test-jq-event6').on('input', function (e) {
    $(".result-jq-event6").text('Changed!')
});

/* EVENT 7 */
var img7jq = $('.test-jq-event7').on('click', function () {
    $('.test-jq-event7').load('events.html', function () {
        $('.result-jq-event7').text('Image is loaded!');
    })
})

/* EVENT 9 */

$("#test-jq-event9").submit(function (event) {
    $('.result-jq-event9').text('Submited!');
    event.preventDefault();

});

/* EVENT 10 */

$(".target-jq-event10").change(function () {
    $('.result-jq-event10').text('Changed!');
});

/* EVENT 11 */
$(".result-event11JQ").mouseover(function () {
    $(".result-event11JQ").css('color', 'red')
})

$(".result-event11JQ").mouseout(function () {
    $(".result-event11JQ").css('color', 'black')
})

/* EVENT 12 */

$(".checkboxEvent12JQ").change(function () {
    if (this.checked) {
        $('.result-jq-event12').text('Checkbox checked!');
    } else {
        $('.result-jq-event12').text('Checkbox is not checked!');
    }
})

/* EVENT 13 */

$('.li-jq-event13').click(function (e) {
    e.preventDefault();
    $(".li-jq-event13").css("color", "red");
})