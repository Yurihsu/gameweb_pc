$(function () {
    $(".btn-on").click(function () {
        rightmove();
        $(this).hide();
        $(".btn-off").show();
        $(".nav-box").show();
        $(".btn-nav").animate({
            right: $(".nav-box").width()
        }, 200);

    });
    $(".btn-off").click(function () {
        leftmove();
        $(this).hide();
        $(".btn-on").show();
        $(".btn-nav").animate({
            right: 0
        }, 200);

    });

});

function rightmove() {
    $(".nav-box").animate({
        right: 0
    }, 200);
}

function leftmove() {
    $(".nav-box").animate({
        right: -$(".nav-box").width()
    }, 200);
}
$(document).ready(function () {
    $('.btn-top').click(function () {
        $('html,body').animate({
                scrollTop: '0px'
            },
            300);
    });
});
$(function () {
    $(".role-list>div>a").each(function () {
        var _index = $(this).index();
        var info = $(this).parent().parent();
        $(this).click(function () {
            $(this).parents().children().children().removeClass("current");
            $(this).children().addClass("current");
            info.find(".role").children().eq(_index).addClass("role-show").show().siblings().removeClass("role-show").hide();
            $('audio').not(this).each(function () {
                $(this)[0].pause();
                $(this)[0].currentTime = 0.0;
            });
            info.find(".role").children().eq(_index).find(".cv")[0].play();
            info.find(".role").children().eq(_index).find(".btn-cv").removeClass("btn-play").addClass("btn-pause");
        });
    })
});