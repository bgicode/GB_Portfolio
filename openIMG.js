function uncheckAllRadio(radio){
  var obj = document.getElementsByName(radio);
  for(i=0; i<obj.length; i++)
  obj[i].checked = false;
 }
	 