
$(function () {
    
    setTimeout(function () {
        $('body').removeClass('loading')
        ScrollCenter()
    }, 2000)


    var offL = $(window).width() / 2

    function ScrollCenter() {
        var centerL = $("#成器公").offset().left
        $("html,body").animate({
            scrollLeft: Math.abs(centerL - offL),
            scrollTop: 0
        })

    }
    ScrollCenter()


    //沒配偶的加nospouse微調樣式
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

    //dropdown hover
    $(".dropdown").hover(function () {
        $(this).find('.dropdown-menu').toggleClass('show')
    })





    //scroll anchor 
    $('.btn-circle').on('click', function (event) {
        event.preventDefault()
        var goTarget = $(this).attr('data-href')
        $(goTarget).removeClass('target')

        var goTargetT = $(goTarget).offset().top
        var goTargetL = $(goTarget).offset().left
        $("html,body").scrollLeft(Math.abs(goTargetL - offL))
        $("html,body").scrollTop(800)
        $(goTarget).addClass('target')

        //如果一直放大 那按.btn-circle會找不到人 所以太放大按.btn-circle就回到一般大小
        if ($('#family').css('zoom') > 1.2) {
            $('#family').css('zoom', 1);
        }

        // var goTargetL = $('#郭振壽').offset().left
        // var offL = $(window).width() / 2
        // $("html,body").scrollLeft(Math.abs(goTargetL - offL) )
        // $("html,body").scrollTop(800)



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
        ScrollCenter()

    });
    $('#zoomOut').on('click', function () {
        zoom -= 0.1;
        $('#family').css('zoom', zoom);
    });
    $("#sidebarLeftBtn").click(function () {
        $("body").toggleClass('sidebarLeft')
    });
    $("#fullScreenBtn").click(function () {
        $("body").toggleClass('sidebarLeft')
    });

    FullScreenHelper.on(function () {
        if (FullScreenHelper.state()) {
            $("#fullScreenBtn").addClass('d-none')
            $("#endBtn").removeClass('d-none')
            $("#sidebarLeftBtn").addClass('d-none')
            $("body").addClass('sidebarLeft')
        } else {

            $("#fullScreenBtn").removeClass('d-none')
            $("#endBtn").addClass('d-none')
            $("#sidebarLeftBtn").removeClass('d-none')
            $("body").removeClass('sidebarLeft')

        }
    });







    //load() html
    $('.sidebar .nav-link').click(function () {
        $("#tree-outter").addClass('d-none')
        $('#zoomIn,#zoomOut,#zoomInt,#grandPa').addClass('d-none')
        $("#wrapper").removeClass('d-none')
        $('.sidebar .nav-link').removeClass('active')
        $(this).addClass('active')
        $("#wrapper").load($(this).attr('id') + '.html')
    });


    $("#tree").click(function () {
        $("#tree-outter").removeClass('d-none')
        $('#zoomIn,#zoomOut,#zoomInt,#grandPa').removeClass('d-none')
        $("#wrapper").addClass('d-none')
        ScrollCenter()

    });




});
