$(document).on("click", ".by_relevance_svg_title_wrapper",function(){
    $(".by_relevance_hidden_wrapper").toggleClass("open");
    $(" .by_relevance_svg_wrapper svg").toggleClass("active");
})


$(document).on("change", ".filter_input", function(){
    $(this).parent().addClass("active");
})


$(document).on("click", ".filter_btn1", function(){
    $(".filter_input").prop( "checked", false );
    $(".filter_input").parent().removeClass("active");

})

$(document).on("click", ".projects_ads_title", function(){

    var data_id = $(this).data("id");
    $(".projects_ads_title").removeClass("active");
    $(this).addClass("active");
  
    $(".completed_project_second_item").removeClass("open");
    $("#" + data_id).addClass("open");
})  


$(document).on("click", ".filter_title_svg_wrapper", function(){
    $(".filter_hidden_wrapper").toggleClass("open");
    $(".filter_title_svg_wrapper svg").toggleClass("active");
})


$(document).on("click",".read_more_btn", function(){

    if($(this).parent().hasClass('open') ) {
        $(this).parent().find(".dots").show();
        $(this).html('Читать полностью')
        $(this).parent().removeClass('open')
        $(this).parent().find(".small_item_show_more_text").find(".small_item_show_more_text2").removeClass("open");
  
    } else {
        $(this).parent().find(".dots").hide();
        $(this).html('Свернуть')
        $(this).parent().addClass('open');
        $(this).parent().find(".small_item_show_more_text").find(".small_item_show_more_text2").addClass("open");
  
    }
  
  
  })