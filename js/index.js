window.onload = function(){
	var oPrev = document.getElementById("prev");
	var oNext = document.getElementById("next");
	var oImg = document.getElementsByTagName("img")[0];
	var oP = document.getElementById("p1");
	var imgArr = ["img/1.jpg" , "img/2.jpg" , "img/3.jpg" , "img/4.jpg" , "img/5.jpg"];
	var index = 0;
	oP.innerHTML = "一共 " + imgArr.length + " 张图片，当前第 " + (index + 1) + " 张";
	oPrev.onclick = function(){
		index--;
		if (index < 0){
			index = imgArr.length - 1;
		}
		oImg.src = imgArr[index];
		oP.innerHTML = "一共 " + imgArr.length + " 张图片，当前第 " + (index + 1) + " 张";
	}
	oNext.onclick = function(){
		index++;
		if (index > imgArr.length - 1){
			index = 0;
		}
		oImg.src = imgArr[index];
		oP.innerHTML = "一共 " + imgArr.length + " 张图片，当前第 " + (index + 1) + " 张";
	}
}

