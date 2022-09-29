
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


/* 햄버거 버튼 변형 */
var burger = $('#m_btn');
burger.each(function(index){
	var $this = $(this);
	$this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
	})
});



/*
$( window ).resize(function() {
	var width = $(window).width();
	if(width<=1024){
		classList.remove('.flex');
	}

});
*/
