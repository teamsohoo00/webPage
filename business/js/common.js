<<<<<<< HEAD
=======

var menu = document.getElementById("m_btn");
var gnb =  document.getElementById("gnb");
gnb.setAttribute("style","display:none");
menu.onclick = function(){
	if(gnb.style.display == "none"){
		gnb.style.display ="block";
	}else{
		gnb.style.display = "none";
	}
	
}


>>>>>>> 98fd3ee0a0ec62d6ac36f056eaaba3a257f17dc2
/* 햄버거 버튼 변형 */
var burger = $('#m_btn');
burger.each(function(index){
	var $this = $(this);
	$this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
	})
<<<<<<< HEAD
});


$(function(){
	$("#m_btn").click(function(){
		$("#gnb").fadeToggle();
	});
});
=======
});
>>>>>>> 98fd3ee0a0ec62d6ac36f056eaaba3a257f17dc2
