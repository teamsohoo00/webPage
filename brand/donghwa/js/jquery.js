/*$(function(){
    var depth1 = $(".gnb > li"),
        header = $("header");

    //depth1 마우스 올리면 header 길이 540px;
    //떠나면 140px
    depth1.mouseenter(function(){
        header.stop().animate({height:"540px"});

        $("#logo>a").attr("src","../images/hover_logo1.png");
    }).mouseleave(function(){
        header.stop().animate({height:"140px"});
    });
})*/

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
    slideStart = setInterval("count()",time);
}
)

$("#carousel a").click(function(){
    n=$(this).attr("data-i");
    slideView(n);
})