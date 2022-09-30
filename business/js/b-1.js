$("#allChk").change(function(){
    var isChk = $(this).is(":checked");
    $(".checkBox").prop("checked",isChk);
}); 
$("#del").click(function(){
    var check = $(".check").is(":checked");
    if(check){
        $(check).css("display","none");
    };
    
});


$(function(){
    $("#cancel01").click(function(){
        $(".product01").css("display","none");
    });
    $("#cancel02").click(function(){
        $(".product02").css("display","none");
    });
});

$(function(){
	$("#mi01").click(function(){
        var num = parseInt($("#num01").text())
		if(num>1){
			$("#num01").text(num -1);
		}
	});
	$("#plus01").click(function(){
		$("#num01").text(parseInt($("#num01").text()) + 1);
	});
    $("#mi02").click(function(){
		var num = parseInt($("#num02").text())
		if(num>1){
			$("#num02").text(num -1);
		}
	});
	$("#plus02").click(function(){
		$("#num02").text(parseInt($("#num02").text()) + 1);
	});
});

