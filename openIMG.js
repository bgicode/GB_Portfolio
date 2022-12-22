function uncheckAllRadio(radio){
  var obj = document.getElementsByName(radio);
  for(i=0; i<obj.length; i++)
  obj[i].checked = false;
 };

 let store1 = 'color: rgb(219, 219, 219);';
 let store2 = 'color: black;';

function stoeWrite(){
	localStorage.setItem('stor2', store1);
};

function stoeWrite2(){
	localStorage.setItem('stor2', store2);
};

 
	 
//  window.addEventListener('storage', function(){
// 	document.querySelector(".unit:hover").style = localStorage.getItem('stor');
// 	console.log("change");
// 	console.log(localStorage.getItem('stor'));
//  }
//  );



// window.addEventListener('storage', function(e) {  
  

//   if(e.storageArea===localStorage) {
// 		var units = document.querySelectorAll('.unit');
//     units.forEach((unit) => {
// 			unit.style.setProperty('--td-transform', 'none');
// 			unit.style.setProperty('--td-box-shadow', 'none');
// 		});   
//   }

// });

// @media 940 stop hover  gallary________________________________


function stopHover(){
	var units = document.querySelectorAll('.unit');
		if (localStorage.getItem('stor') == '1'){
			units.forEach((unit) => {
				unit.classList.remove('unitHover1','unitHover2');
				unit.classList.add('unitHover2');
				
				// console.log(localStorage.getItem('stor'));
			});
		} else if(localStorage.getItem('stor') == '2'){
			units.forEach((unit) => {
				unit.classList.remove('unitHover1','unitHover2');
				unit.classList.add('unitHover1');
				
				// console.log(localStorage.getItem('stor'));
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




// @media 940 stop hover  gallary________________________________