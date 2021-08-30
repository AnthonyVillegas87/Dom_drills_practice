$(document).ready(() => {


$('#num-generator').on('click', () => {
    let number = Math.floor(Math.random() * 16) + 1;
    $('.card-text').html(number);
    $('span').each(function()  {
        let spanNumber = Math.floor(Math.random() * 10) + 1;
        $(this).html(spanNumber);
    })

});

function add() {
    return $(this).val() + $(this).val;

}

$('#add').on('click', (e) => {
    let result;
    let value = $('span').val();
    let op = $(e.currentTarget).html(value);
        if(op == "+") {
            result = value + value
        }
    $('#value').html(result)
});

$('#subtract').on('click', () => {
    alert('subtract me!')
});



});