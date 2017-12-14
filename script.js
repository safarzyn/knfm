$(document).ready(function () {
    $('.button').hover(
        function () {
            $(this).addClass('activeButton');
        },
        function () {
            $(this).removeClass('activeButton');
        }
    );
});
