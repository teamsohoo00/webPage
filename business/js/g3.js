
$(function(){
	$(".minus").click(function(){
		var num = parseInt($("#number_cnt").text())
		if(num>1){
			$("#number_cnt").text(num -1);
		}
	});
	$(".plus").click(function(){
		$("#number_cnt").text(parseInt($("#number_cnt").text()) + 1);
	});
    $(".minus2").click(function(){
		var num = parseInt($("#number_cnt2").text())
		if(num>1){
			$("#number_cnt2").text(num -1);
		}
	});
	$(".plus2").click(function(){
		$("#number_cnt2").text(parseInt($("#number_cnt2").text()) + 1);
	});
});


$(function(){
    $("#product01").click(function(){
        $("#select02").css("display","block");
    });
    $("#product02").click(function(){
        $("#select03").css("display","block");
    });
    $(".cancel").click(function(){
        $("#select02").css("display","none");
		$("#active>li#product").text('상품을 선택하세요');
    });
    $(".cancel2").click(function(){
        $("#select03").css("display","none");
		$("#active>li#product").text('상품을 선택하세요');
    });
});




$(function(){
	$("#active").hover(function(){
		$(this).children("#product").nextAll("li").css("display","block");
	},function(){
		$(this).children("#product").nextAll("li").css("display","none");
	});
	$("#active>li").click(function(){
		var chText = $(this).text(); // 바꿀텍스트
		var defText = $("#active>li#product").text(); // 기존에 선택되어져 있던 요소의 텍스트
		$("#active>li#product").text(chText);
		// 바꿀텍스트 (클릭한 리스트의 텍스트)
		$("#active>li#product").nextAll("li").css("display","none");
	});
});

function updateAll(){
	var n1 = document.getElementById("number_cnt")
}

