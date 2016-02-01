var text_input = document.getElementById('text_input');
var print_here = document.getElementById('print_here');

document.onkeyup = function(){
	mirror();
};

document.onkeypress = function(e){
	if (e.keyCode == 13){
		newLine();
		clearInput();
	} else if (e.keyCode !== null){
		text_input.focus();
	}
};

var newLine = function(){
	var para = document.createElement('P');
	var t = document.createTextNode(text_input.value);
	para.appendChild(t);
	document.getElementById('save_here').appendChild(para);
}

var mirror = function(){
	console.log(text_input.value);
	print_here.innerHTML = text_input.value;
}

var clearInput = function(){
	document.getElementById('text_input').value = "";
};

