$(function () {

    var offL = $(window).width() / 2 - 280
    var offH = $(window).height()
    // function Scrolldown() {
    //     var initLeft = $("#成器公").offset().left
    //     if ($("#成器公".length > 0)) {
    //         $(".tree-outter").scrollLeft(initLeft - offL)
    //         window.scrollTo(0, 0);
    //     }
    // }

    // window.onload = Scrolldown;
    function Scrolldown() {
        $(".tree-outter").scrollLeft(2800)
        $("html,body").animate({
            scrollTop: 0

        }, 100);
    }
    Scrolldown()



    $('.person').each(function () {
        var hasSpouse = $(this).siblings('.spouse')
        if (hasSpouse.length == 0) {
            $(this).addClass('nospouse')
            if (!$(this).hasClass('spouse')) {
                $(this).parent('.treeli').addClass('nospouseli')
                $(this).siblings('ul').addClass('nospouseUl')
            }
        }
    });


    $(".dropdown").hover(function () {
        $(this).find('.dropdown-menu ').toggleClass('show')
    })

    $('.btn-circle ').on('click', function () {
        var goTarget = $(this).attr('href')
        var goTargetT = $(goTarget).offset().top
        var goTargetL = $(goTarget).offset().left


        setTimeout(function () {
            // $('html,body').stop().animate({
            //     scrollTop: goTargetT - 100,
            // }, 100)
            if ($(goTarget).visible(true)) {
                var treeTop = $(".tree-outter").scrollTop()
                $('html,body').scrollTop(offH)

                var treeLeft = $(".tree-outter").scrollLeft()
                $(".tree-outter").scrollLeft(treeLeft - offL)
            }

        }, 600)

    })





    //zoom
    var zoom = 1;

    $('#zoomIn').on('click', function () {
        zoom += 0.1;
        $('#family').css('zoom', zoom);
    });
    $('#zoomInt').on('click', function () {
        zoom = 1;
        $('#family').css('zoom', zoom);
        Scrolldown()

    });
    $('#zoomOut').on('click', function () {
        zoom -= 0.1;
        $('#family').css('zoom', zoom);
    });




});
