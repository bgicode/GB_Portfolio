const headerHide = document.querySelector('.header_visible');
const defaultOffset = 200;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const conainHide = () => headerHide.classList.contains('hide');
var firstScrooll = 1;

window.addEventListener('scroll', () => {
	++firstScrooll;
	
	
	if(scrollPosition() - firstScrooll  >= 0) {
		//croll down
		headerHide.classList.add('hide');	
		// console.log(firstScrooll);	
	}
	else if(scrollPosition() - firstScrooll  <= 0) {
		//croll up
		headerHide.classList.remove('hide');
		--firstScrooll;
		// console.log(firstScrooll);
		
		
	}

})