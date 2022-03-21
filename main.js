var x = 1;
var y = 1;
		function MenuNone(){
			document.getElementById('menu').style = "	display: none;";
					 
		}
		function MenuBlock(){
			document.getElementById('menu').style = "	display: block";
					 
		}

		function MenuNone2(){
			document.getElementById('menu_2').style = "	display: none;";
					 
		}
		function MenuBlock2(){
			document.getElementById('menu_2').style = "	display: block";
					 
		}
		function menu(){			
			++x;			
			if( x % 2 === 0) {
				document.getElementById("menu__box").style = "visibility: visible; left: 0;";
				document.querySelector(".menu__btn > #center").style = "transform: rotate(45deg);";
				document.querySelector(".menu__btn > #before").style = "margin-top: 0; transform: rotate(135deg);";
				document.querySelector(".menu__btn > #after").style = "margin-bottom: 0; transform: rotate(135deg);";
     }else{
			document.getElementById("menu__box").style = "visibility: hidden; left: -100%;";
			document.querySelector(".menu__btn > #center").style = "transform: rotate(0);";
			document.querySelector(".menu__btn > #before").style = "margin-top: 18px; transform: rotate(0);";
			document.querySelector(".menu__btn > #after").style = "margin-bottom: 18px; transform: rotate(0);";
     }
		}

		function bgAnimation(){
			++y;			
			if( y % 2 === 0) {								
				document.querySelector(".bg_deco_1").style = "transform: rotate(45deg) skew(45deg) translate(100vh, 0);";
				document.querySelector(".bg_deco_2").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
				document.querySelector(".bg_deco_3").style = "transform: rotate(45deg) skew(45deg) translate(70vh, 0);";
				document.querySelector(".bg_deco_4").style = "transform: rotate(45deg) skew(45deg) translate(70vh, 0);";
				document.querySelector(".bg_deco_5").style = "transform: rotate(45deg) skew(45deg) translate(40vh, 0);";
				document.querySelector(".bg_deco_6").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
				document.querySelector(".bg_deco_7").style = "transform: rotate(45deg) skew(45deg) translate(-50vh, 0);";
				document.querySelector(".bg_deco_8").style = "transform: rotate(45deg) skew(45deg) translate(50vh, 0);";
				document.querySelector(".bg_deco_9").style = "transform: rotate(45deg) skew(45deg) translate(-100vh, 0);";
				document.querySelector(".bg_deco_9").style = "transform: rotate(45deg) skew(45deg) translate(-100vh, 0);";
				document.querySelector(".bg_deco_10").style = "transform: rotate(45deg) skew(45deg) translate(40vh, 0);";
				document.querySelector(".bg_deco_11").style = "transform: rotate(45deg) skew(45deg) translate(-50vh, 0);";
				document.querySelector(".bg_deco_12").style = "transform: rotate(45deg) skew(45deg) translate(-100vh, 0);";
     }else{     
			document.querySelector(".bg_deco_1").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_2").style = "transform: rotate(45deg) skew(45deg) translate(80vh, 0);";
			document.querySelector(".bg_deco_3").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_4").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_5").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_6").style = "transform: rotate(45deg) skew(45deg) translate(50vh, 0);";
			document.querySelector(".bg_deco_7").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_8").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_9").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_10").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_11").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			document.querySelector(".bg_deco_12").style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
     }
		}

		