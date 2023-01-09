// @media 940 ______________________________________________________________

if(matchMedia){
	var screen = window.matchMedia("(max-width: 940px)");
	screen.addListener(changes);
	changes(screen);
}

function changes(screen){
	if (screen.matches) {
		localStorage.setItem('stor', 1);		
	}
	else{
		localStorage.setItem('stor', 2);		
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
		
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
	const firstTouch = event.touches[0];
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
}

function handleTouchMove(event){
	if(!x1 || !y1){
		return false;
	}
	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;

	let xDiff = x2 - x1;
	let yDiff = y2 - y1;

	if (Math.abs(xDiff) > Math.abs(yDiff)){
		console.log(Math.abs(xDiff));
		if (xDiff < 0) menu(); 
	}
	x1 = null;
	y1 = null;
}

var firstScrooll = 1;

window.addEventListener('scroll', () => {
	if( x % 2 !== 0){
		const headerHide = document.querySelector('.header_visible');
		const defaultOffset = 200;
		const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
		const conainHide = () => headerHide.classList.contains('hide');
		const fullContent = document.querySelector('.content');
		const containContent = () => fullContent.classList.contains('content_for_openimg');

		if (!conainHide()){
			++firstScrooll;
		}
		
		if(scrollPosition() - firstScrooll  >= 0 && !conainHide()) {
			//croll down
			headerHide.classList.add('hide');		
		}
		else if(scrollPosition() - firstScrooll  <= 0 && conainHide() && !containContent()) {
			//croll up
			headerHide.classList.remove('hide');
			--firstScrooll;	
		}
	}
})

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

// openImg___________________________________________________________________________

function openImg(){
	const headerHide = document.querySelector('.header_visible');
	var content = document.querySelector('.content');
	var iframe = document.getElementById('myiframe')
	if(localStorage.getItem('stor2') == '1' && !document.hidden){		
		iframe.classList.add('iframe_for_onenimg');
		content.classList.add('content_for_openimg');
		headerHide.classList.add('hide');
	}else if(localStorage.getItem('stor2') == '2' && !document.hidden){		
		headerHide.classList.remove('hide');
		content.classList.remove('content_for_openimg');
		iframe.classList.remove('iframe_for_onenimg');		
	}	
}

window.addEventListener('storage', function(e) {
	if(e.storageArea===localStorage) {
		openImg();
	}
}); 


document.addEventListener("visibilitychange", function(){
	const fullContent = document.querySelector('.content');
	const containContent = () => fullContent.classList.contains('content_for_openimg');
		if (!document.hidden && containContent()){
			localStorage.setItem('stor2', 1);
		} else {
			localStorage.setItem('stor2', 2);    
		}
});

// openImg_______________________________________________________________
