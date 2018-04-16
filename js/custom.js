
$("#submitInput").on('click',function (a){
    clearEmail(this);
});
$("#submitEmail").on('click', function (a) {
    var button = this;
    clicked(button, '#submitInput');
});


function clicked(button, input) {
    var email = getEmail(input);
    animate(button, 'btn-primary', 'btn-secondary', "Subscribing..");
    setTimeout(function () {
        $.ajax({
            url: 'https://kvstore.noboxz.com/set/lehel_blog/mail',
            type: 'POST',
            data: JSON.stringify(email),
            dataType: 'json',
            crossDomain: true,
            contentType: 'application/json',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc1B1YmxpYyI6dHJ1ZSwiaWF0IjoxNTIyMjIwODc4LCJzdWIiOiJ0ZXN0LmxlaGVsQGdtYWlsLmNvbSJ9.JVoVWBDyggLxeqbcVZMh9y0wxxi5bj0GJNzbUT5qtbKB7YBgJBYwlT9GNX0C0Pd94ClKT2wXSzpS0RPqadvZRQ"
            }
        }).done(function (d) {
            console.log(JSON.stringify(d));
            animate(button, 'btn-secondary', 'btn-primary', "Subscribed");
            $(input).val("Email address");
        });
        
    }, 600);
}
function animate(button, remove, add, text) {
    $(button)
    .removeClass(remove)
    .addClass(add)
    .text(text);
}

function getEmail(id) {
    return $(id).val();
}

function clearEmail(id) {
    return $(id).val('');
}

function push_notification(data){
    $.ajax({
        url: 'https://maker.ifttt.com/trigger/sign_up/with/key/1h80lbr3_dzppMbw0djdJ',
        type: 'POST',
        data: {"value1":data}, 
        dataType: 'json',
        crossDomain: true,
        contentType: 'application/json'
    })
}
