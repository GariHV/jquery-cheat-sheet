/* EVENT 1 */

var btnTestEvent1Jq = $('.test-jq-event1').on('click', function () {
    $(document).ready($('.result-jq-event1').text('is loaded!'))
})