
// img open_________________________________________________________
 
const prevueImgs = Array.from(document.querySelectorAll(".unit"));
const slider = document.querySelector('.slider');
const allPictures = document.querySelectorAll(".unit_pic");
const sliderContainer = document.querySelector(".slider_container");
const picture = Array.from(document.querySelectorAll(".unit_pic"));
const sliderBtnLeft = document.querySelector('.slider_btn_left');
const sliderBtnRight = document.querySelector('.slider_btn_right');
const sliderClose = document.querySelector('.slider_close'); 

let imgIndex = -1;
let pictureFull; 

for (const prevue of prevueImgs) {
	prevue.addEventListener('click', (event) =>{
		localStorage.setItem('stor2', 1);
		event.preventDefault();	
		imgIndex = prevueImgs.indexOf(prevue);
		allPictures[imgIndex].classList.add("unit_pic_visible");
		pictureFull = picture[imgIndex].cloneNode();
		sliderContainer.append(pictureFull);
		slider.classList.add("active_slider");		
 })
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
		
		if (xDiff > 0) changePicture("left");
		else changePicture("right"); 
	}
	x1 = null;
	y1 = null;
}

var firstScrooll = 1;

sliderBtnLeft.addEventListener("click", (event) =>{
	event.preventDefault();
	changePicture("left")
});

sliderBtnRight.addEventListener("click", (event) =>{
	event.preventDefault();
	changePicture("right")
});

function changePicture(dir) {
	if (dir === "left") {
		if (imgIndex > 0){
			imgIndex--;
		} else{
			imgIndex = prevueImgs.length - 1;
		}
	} else if (dir === "right"){
		if (imgIndex < prevueImgs.length - 1){
			imgIndex++;
		} else {
			imgIndex = 0;
		}
	}
	allPictures.forEach((pic) => {
		pic.classList.remove("unit_pic_visible");		
	});
	allPictures[imgIndex].classList.add("unit_pic_visible");	
	let newPictureFull = picture[imgIndex].cloneNode();
	pictureFull.replaceWith(newPictureFull);
	pictureFull = newPictureFull;
}

sliderClose.addEventListener('click', (event) =>{
	event.preventDefault();
	slider.classList.remove("active_slider");
	allPictures.forEach((pic) => {
		pic.classList.remove("unit_pic_visible");		
	});
	localStorage.setItem('stor2', 2);	
	pictureFull.remove();
	newPictureFull.remove();	
})

// img open_________________________________________________________ 

// @media 940 stop hover  gallary________________________________

function stopHover(){
	var units = document.querySelectorAll('.unit');
	if (localStorage.getItem('stor') == '1' && !document.hidden){
		units.forEach((unit) => {
			unit.classList.remove('unitHover1','unitHover2');
			unit.classList.add('unitHover2');			
		});
	} else if(localStorage.getItem('stor') == '2' && !document.hidden){
		units.forEach((unit) => {
			unit.classList.remove('unitHover1','unitHover2');
			unit.classList.add('unitHover1');
	});			
	}
}

window.addEventListener('storage', function(e) {
	if(e.storageArea===localStorage) {
		stopHover();
	}
}); 

document.addEventListener("DOMContentLoaded", () => {
	stopHover();
});

const Hover = document.querySelector('.unit');
const containHover = () => Hover.classList.contains('unitHover2');
document.addEventListener("visibilitychange", function(){
	if (!document.hidden && containHover()){
		localStorage.setItem('stor', 1);
	} else {
		localStorage.setItem('stor', 2);    
	}
});

// @media 940 stop hover  gallary________________________________