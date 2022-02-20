//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();

  
});



//user_select
$(document).on("click", ".header_user_img_title_svg_wrapper",function(){
    $(".header_user_info_wrapper").toggleClass("open");
    $(this).toggleClass("active");
})

$(document).on("click", ".header_user_info",function(){
    $(".header_user_info").removeClass("active");
    $(this).addClass("active");
})


$(document).on("click", ".completed_projects_search_box_title_icons_wrapper",function(){
    $(".completed_projects_names_main_wrapper").toggleClass("open");
    $(this).toggleClass("active");
})

//completed_projects
$(document).on("click", ".completed_projects_title_svg_wrapper",function(){
    $(".completed_projects_info_wrapper").toggleClass("open");
  
})


//input
$(document).on("input", ".top_search_box_input", function(){
      var value =  $(this).val();

      if(value.length > 2){
          $(".top_hidden_search_info_wrapper").addClass("open");
          $(".top_hidden_search_box_btn_wrapper").addClass("open");
      } else{
        $(".top_hidden_search_info_wrapper").removeClass("open");
        $(".top_hidden_search_box_btn_wrapper").removeClass("open");
      }

      $(this).closest(".top_search_box_wrapper").addClass("active");
})

$(document).on("click",".top_hidden_search_box_svg_wrapper", function(){
    $(".top_hidden_search_info_wrapper").removeClass("open");
    $(".top_search_box_input").val("");
     $(this).parent().removeClass("open");

   
})



$(document).on("change", ".filter_input", function(){
    $(this).parent().addClass("active");
})


$(document).on("click", ".filter_btn1", function(){
    $(".filter_input").prop( "checked", false );
    $(".filter_input").parent().removeClass("active");

})

// header's  search button
$(document).on("click", ".mobile_header_search_box_btn", function(){
    $(".mobile_header_search_box_wrapper").fadeToggle();
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



$(document).on("change", ".sign_up_check_input", function(){
    $(".sign_up_check_input_wrapper").removeClass("active");
    $(this).parent().addClass("active");
})
