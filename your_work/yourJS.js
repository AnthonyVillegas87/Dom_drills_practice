$(document).ready(() => {


$('#num-generator').on('click', () => {
    let number = Math.floor(Math.random() * 16) + 1;
    $('.card-text').html(number);
    $('span').each(function()  {
        let spanNumber = Math.floor(Math.random() * 10) + 1;
        $(this).html(spanNumber);
    })

});




});