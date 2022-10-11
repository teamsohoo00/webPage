/*풀페이지*/



/*헤더*/
/*product 캐러셀*/
var n =0;
$("#carousel a").eq(n).children("img").attr("src","./images/btn_banner_ov.png");

function count(){
    n++; //count() 호출하면 n값은 +1이 됨.
    if(n<3){
        slideView(n)
    }else{
        n=0;
        slideView(n)
    }
}

var time = 3000;
var slideStart = setInterval("count()",time);

function slideView(n){
    $("#carousel a").children("img").attr("src","./images/btn_banner.png");
    $("#carousel a").eq(n).children("img").attr("src","./images/btn_banner_ov.png");

    $("#slideImg2 img").animate({"opacity":"0"},time-500);
    $("#slideImg2 img").eq(n).stop().addClass("topImg").css("opacity",0).animate({"opacity":"1"},time-500);
}



/*게시판*/
$(document).ready(function(){
    $('.digital a').click(function(){
    $('.digital a').css('color','#e20c19');
    $('.donghwa_news a').css('color','#000000');
    $('#board').hide();
    $('#board2').show();
    return false;
    });

    $('.donghwa_news a').click(function(){
        $('.donghwa_news a').css('color','#e20c19');
        $('.digital a').css('color','#000000');
        $('#board2').hide();
        $('#board').show();
        return false;
        });
});





/*brand site hover 효과*/ 
$(document).ready(function(){
    $(".brand > #it > a > img").mouseover(function(){
        $(this).attr("src","./images/hover_brand01.png");
    }).mouseout(function(){
        $(this).attr("src","./images/brand01.png");
    });
});

$(document).ready(function(){
    $(".brand > #hwal > a > img").mouseover(function(){
        $(this).attr("src","./images/hover_brand02.png");
    }).mouseout(function(){
        $(this).attr("src","./images/brand02.png");
    });
});

$(document).ready(function(){
    $(".brand > #mall > a > img").mouseover(function(){
        $(this).attr("src","./images/hover_brand03.png");
    }).mouseout(function(){
        $(this).attr("src","./images/brand03.png");
    });
});

$(document).ready(function(){
    $(".brand > #pharm > a > img").mouseover(function(){
        $(this).attr("src","./images/hover_brand04.png");
    }).mouseout(function(){
        $(this).attr("src","./images/brand04.png");
    });

});

$(document).ready(function(){
    if($(window).width()<1024){
        $(".brand > #it > a > img").attr("src","./images/hover_brand01.png");
        $(".brand > #hwal > a > img").attr("src","./images/hover_brand02.png");
        $(".brand > #mall > a > img").attr("src","./images/hover_brand03.png");
        $(".brand > #pharm > a > img").attr("src","./images/hover_brand04.png");
    }
});


/*모바일 햄버거 버튼*/
$(document).ready(function(){
    $("#btn").click(function(){
        $(".m_nav").addClass("on");
        $(".bg_shadow").css("display","block");
        return false;
    });
    $('.close_btn').click(function(){
        $(".m_nav").removeClass("on");
        $(".bg_shadow").css("display","none");
        return false;
    });
    $('.menu').click(function(){
        $('.sub').slideUp();
        if ($(this).children('.sub').is(':hidden')){
           $(this).children('.sub').slideDown();
        } else{
           $(this).children('.sub').slideUp();
        }
     });
})

/*퀵메뉴*/

$(document).ready(function(){
    $(".quick a").click(function(){
        $(".quick_container").css("display","block");
        return false;
    });
    $(".quick_close").click(function(){
        $(".quick_container").css("display","none");
        return false;
    });
});

/*로고 누르면 맨위로 올라가게*/
