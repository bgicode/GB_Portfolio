function uncheckAllRadio(radio){
  var obj = document.getElementsByName(radio);
  for(i=0; i<obj.length; i++)
  obj[i].checked = false;
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

window.addEventListener('storage', function(e) {
	if(e.storageArea===localStorage) {
		var units = document.querySelectorAll('.unit');
		if (localStorage.getItem('stor') == '1'){
			units.forEach((unit) => {
				unit.classList.remove('unitHover1','unitHover2');
				unit.classList.add('unitHover2');
				
				console.log(localStorage.getItem('stor'));
			});
		} else {
			units.forEach((unit) => {
				unit.classList.remove('unitHover1','unitHover2');
				unit.classList.add('unitHover1');
				
				console.log(localStorage.getItem('stor'));
		});
       
  }
}
}); 