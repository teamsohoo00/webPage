var menu = document.getElementById("menu_btn");
var gnb =  document.getElementById("gnb");
gnb.setAttribute("style","display:none");
menu.onclick = function(){
	if(gnb.style.display == "none"){
		gnb.style.display ="block";
	}else{
		gnb.style.display = "none";
	}
}