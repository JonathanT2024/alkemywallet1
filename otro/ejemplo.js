$("button").click(function() {
    $("p.texto").fadeOut(2000);
});

$("button.clase1").dblclick(function() {
    $("p.texto").fadeIn(5000);
});

$('#scroll_1').click(function(e){
    $('html, body').animate({
        scrollTop:$("#seccionContacto").offset().top
    },2000);
});