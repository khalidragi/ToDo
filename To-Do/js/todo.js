//check-out completed items
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});
//delete completed by pressing span
$("ul").on("click", ".delete", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type=text]").keypress(function(e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class= 'delete'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus-square").click(function(){
	$("input[type=text]").fadeToggle()
})