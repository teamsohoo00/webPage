
$(function(){
    $("#product01").click(function(){
        $("#select02").css("display","block");
		$(".minus").click(function(){
			var num = parseInt($("#number_cnt").text())
			if(num>1){
				$("#number_cnt").text(num -1);
				var n1 = $("#number_cnt").text();
				var n2 = $("#number_cnt2").text();
				var numTotal = 12000
	
				var p1 = numTotal*n1;
				var p2 = numTotal*n2;
	
				var total = parseInt(p1) + parseInt(p2);
				$("#totalPrice").text(total);
			}
		});
		$(".plus").click(function(){
			$("#number_cnt").text(parseInt($("#number_cnt").text()) + 1);
			var n1 = $("#number_cnt").text();
				var n2 = $("#number_cnt2").text();
				var numTotal = 12000
	
				var p1 = numTotal*n1;
				var p2 = numTotal*n2;
	
				var total = parseInt(p1) + parseInt(p2);
				$("#totalPrice").text(total);
		});
		
    });
    $("#product02").click(function(){
        $("#select03").css("display","block");
		$(".minus2").click(function(){
			var num = parseInt($("#number_cnt2").text())
			if(num>1){
				$("#number_cnt2").text(num -1);
				var n1 = $("#number_cnt").text();
				var n2 = $("#number_cnt2").text();
				var numTotal = 12000
	
				var p1 = numTotal*n1;
				var p2 = numTotal*n2;
	
				var total = parseInt(p1) + parseInt(p2);
				
				$("#totalPrice").text(total);
			}
		});
		$(".plus2").click(function(){
			$("#number_cnt2").text(parseInt($("#number_cnt2").text()) + 1);
			var n1 = $("#number_cnt").text();
			var n2 = $("#number_cnt2").text();
			var numTotal = 12000
	
			var p1 = numTotal*n1;
			var p2 = numTotal*n2;
	
			var total = parseInt(p1) + parseInt(p2);
			
			$("#totalPrice").text(total);
		});
    });
    $(".cancel").click(function(){
        $("#select02").css("display","none");
		$("#active>li#product").text('상품을 선택하세요');
		$("#number_cnt").val(parseInt($("#number_cnt").text(1)));
		var cnt = $("#number_cnt2").text();
		var ber = 12000

		var plus = ber*parseInt(cnt);
		$("#totalPrice").text(plus);

    });
    $(".cancel2").click(function(){
        $("#select03").css("display","none");
		$("#active>li#product").text('상품을 선택하세요');
		$("#number_cnt2").val(parseInt($("#number_cnt2").text(1)));
		var cnt = $("#number_cnt").text();
		var ber = 12000

		var plus = ber*parseInt(cnt);
		$("#totalPrice").text(plus);
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



