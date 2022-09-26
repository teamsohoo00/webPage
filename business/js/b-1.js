$("#allChk").change(function(){
    var isChk = $(this).is(":checked");
    $(".checkBox").prop("checked",isChk);
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
		$("#num01").text(parseInt($("#num01").text())-1);
        if(parseInt($("#num01").text())==1){
            $("#mi01").attr('disabled',true);
        }
	});
	$("#plus01").click(function(){
		$("#num01").text(parseInt($("#num01").text()) + 1);
	});
    $("#mi02").click(function(){
		$("#num02").text(parseInt($("#num02").text())-1);
	});
	$("#plus02").click(function(){
		$("#num02").text(parseInt($("#num02").text()) + 1);
	});
});

