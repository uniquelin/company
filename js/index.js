var i=0;var time;
$(document).ready(function () {
    // 初始默认第一张图片
    $('.image').eq(0).show().siblings().hide();
    //调用定时器
    timer();

    $('.left_btn').click(function () {
        //清除定时器
        clearInterval(time);

        if (i==0) {
            i=3;
        }
        i--;
        //调用定时器
        show();
        timer();
    });
    $('.right_btn').click(function () {
        clearInterval(time);
        if (i==2) {
            i=-1;
        }
        i++;
        show();
        timer();
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('.top').css('display','block');
        }else {
            $('.top').css('display','none');
        }
    });
    $('.top').click(function () {
        $('body,html').animate({scrollTop: 0},600);
    });
});


//创建动画方法
function show() {
    $('.image').eq(i).fadeIn(200).siblings().fadeOut(200);
}
//创建定时器
function timer() {
    time = setInterval(function () {
        show();
        i++;
        if (i==3) {
            i=0;
        }
    },3000)
}