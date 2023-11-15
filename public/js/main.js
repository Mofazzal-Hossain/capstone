(function ($) {
    "use strict"
    var $win = $(window);
    var $top = $(".back-to-top a i")
    var $nav = $('.header-container');

    /*==sticky & top to back====*/
    $win.on('scroll', function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling >= 1) {
            $nav.addClass("sticky");
        } else {
            $nav.removeClass("sticky");
        }
        if ($scrolling >= 250) {
            $top.fadeIn();
        } else {
            $top.fadeOut();
        }
    });
    $top.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });

    //responsive nav menu
    $( ".site-header-menu-trigger" ).click(function() {
       //disable code execution to > 991px width secreen size
        if(window.innerWidth>991)
        {
            return;
        }

        $( ".menu.animated" ).toggle( "fast")
        $(".search-component-field-wrapper")[0].style.display = "none"

            $("#search-open-close").removeClass('fa-times')
            $("#search-open-close").addClass('fa-search')
            
        const menuOpenClose = $("#menu-open-close")[0].classList

        if(menuOpenClose.contains('fa-bars')){
            $("#menu-open-close").removeClass('fa-bars')
            $("#menu-open-close").addClass('fa-times')
        }else if(menuOpenClose.contains('fa-times')){
            $("#menu-open-close").removeClass('fa-times')
            $("#menu-open-close").addClass('fa-bars')
        }

    });

    //show search filter
    $( ".search-component .toggle-button" ).click(function() {
        //disable code execution to > 991px width secreen size
         if(window.innerWidth>991)
        {
            return;
        }
        $( ".search-component-field-wrapper" ).toggle( "fast")
        $("#menu-show")[0].style.display = "none"
     
         const searchOpenClose = $("#search-open-close")[0].classList

          $("#menu-open-close").removeClass('fa-times')
          $("#menu-open-close").addClass('fa-bars')

        if(searchOpenClose.contains('fa-search')){
            $("#search-open-close").removeClass('fa-search')
            $("#search-open-close").addClass('fa-times')
        }else if(searchOpenClose.contains('fa-times')){
            $("#search-open-close").removeClass('fa-times')
            $("#search-open-close").addClass('fa-search')
        }
    });
    //toggle plus or minus 
    $( "#cat-lnk" ).click(function() {
        //disable code execution to > 991px width secreen size
         if(window.innerWidth>991)
        {
            return;
        }
        $( "#cat-lnk > #cat-nav" ).toggle( "fast")
        const classList = $("#plus-minus")[0].classList

        if(classList.contains('fa-plus')){
            $("#plus-minus").removeClass('fa-plus')
            $("#plus-minus").addClass('fa-minus')
        }else if(classList.contains('fa-minus')){
            $("#plus-minus").removeClass('fa-minus')
            $("#plus-minus").addClass('fa-plus')
        }
        $(".main-lnk.show-hide-init").toggleClass("show-menu")

    });

})(jQuery);

