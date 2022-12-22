
// @media 940 _______________________________

let stor1 = 1;
let stor2 = 2;



if(matchMedia){
	var screen = window.matchMedia("(max-width: 940px)");
	screen.addListener(changes);
	changes(screen);
}

function changes(screen){
	if (screen.matches) {
		localStorage.setItem('stor', stor1);	
		
	}
	else{
		localStorage.setItem('stor', stor2);
		
	}
}

// @media 940 ________________________________________________________

// desktop and mobyle menu hiding______________________________________________________

var x = 1;

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
			let MenuBox = document.getElementById("menu__box");
			let MenuBtnCenter =	document.querySelector(".menu__btn > #center");
			let MenuBtnBefor = document.querySelector(".menu__btn > #before");
			let MenuBtnAfter = document.querySelector(".menu__btn > #after");		
			++x;			
			if( x % 2 === 0) {
				MenuBox.style = "visibility: visible; left: 0;";
				MenuBtnCenter.style = "transform: rotate(45deg);";
				MenuBtnBefor.style = "margin-top: 0; transform: rotate(135deg);";
				MenuBtnAfter.style = "margin-bottom: 0; transform: rotate(135deg);";
     }else{
			MenuBox.style = "visibility: hidden; left: -100%;";
			MenuBtnCenter.style = "transform: rotate(0);";
			MenuBtnBefor.style = "margin-top: 18px; transform: rotate(0);";
			MenuBtnAfter.style = "margin-bottom: 18px; transform: rotate(0);";
     }
		}

// desktop and mobyle menu hiding______________________________________________________


// bg animation_____________________________________________________________________________
		var y = 1;
		function bgAnimation(){
			let BgDecoAnim = document.querySelectorAll(".bg_deco");
			++y;			
			if( y % 2 === 0) {								
				BgDecoAnim[0].style = "transform: rotate(45deg) skew(45deg) translate(100vh, 0);";
				BgDecoAnim[1].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
				BgDecoAnim[2].style = "transform: rotate(45deg) skew(45deg) translate(70vh, 0);";
				BgDecoAnim[3].style = "transform: rotate(45deg) skew(45deg) translate(70vh, 0);";
				BgDecoAnim[4].style = "transform: rotate(45deg) skew(45deg) translate(40vh, 0);";
				BgDecoAnim[5].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
				BgDecoAnim[6].style = "transform: rotate(45deg) skew(45deg) translate(-50vh, 0);";
				BgDecoAnim[7].style = "transform: rotate(45deg) skew(45deg) translate(50vh, 0);";
				BgDecoAnim[8].style = "transform: rotate(45deg) skew(45deg) translate(-100vh, 0);";				
				BgDecoAnim[9].style = "transform: rotate(45deg) skew(45deg) translate(40vh, 0);";
				BgDecoAnim[10].style = "transform: rotate(45deg) skew(45deg) translate(-50vh, 0);";
				BgDecoAnim[11].style = "transform: rotate(45deg) skew(45deg) translate(-100vh, 0);";
     }else{     
			BgDecoAnim[0].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[1].style = "transform: rotate(45deg) skew(45deg) translate(80vh, 0);";
			BgDecoAnim[2].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[3].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[4].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[5].style = "transform: rotate(45deg) skew(45deg) translate(50vh, 0);";
			BgDecoAnim[6].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[7].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[8].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[9].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[10].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
			BgDecoAnim[11].style = "transform: rotate(45deg) skew(45deg) translate(0, 0);";
     }
		}

// bg animation_____________________________________________________________________________

// scrol autoback______________________________________________________________________

		function smoothscroll(){
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (currentScroll > 0) {
					 window.requestAnimationFrame(smoothscroll);
					 window.scrollTo (0,currentScroll - (currentScroll/5));
			}
	}

// scrol autoback______________________________________________________________________


	window.addEventListener('storage', function(){				
			console.log(localStorage.getItem('stor2'));
		 }
		 );