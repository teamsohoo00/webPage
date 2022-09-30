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

var time = 2000;
var slideStart = setInterval("count()",time);

function slideView(n){
    $("#carousel a").children("img").attr("src","./images/btn_banner.png");
    $("#carousel a").eq(n).children("img").attr("src","./images/btn_banner_ov.png");

    $("#slideImg2 img").animate({"opacity":"0"},time-500);
    $("#slideImg2 img").eq(n).stop().addClass("topImg").css("opacity",0).animate({"opacity":"1"},time-500);
}

$("#container").hover(function(){
    clearInterval(slideStart);
},function(){
    slideStart = setInterval("count()",time);}
);


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



/*게시판 영역*/
$("#news>ul>.donghwa_news").click(function(){
    $("#news>ul>.donghwa_news").hide();
})


