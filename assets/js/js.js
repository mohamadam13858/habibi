$("#add_user_button").click(function(){
    $(".add_user_modal").addClass("show")
    $(".add_user_modal_back").removeClass("dis-none")
})
$(".add_user_modal_back").click(function(){
    $(".add_user_modal").removeClass("show")
    $(".add_user_modal_back").addClass("dis-none")
})