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

var getInput = function(){
	console.log("number:" + text_input.valueOf());
	document.getElementsByClassName("input__label--hoshi").stlye.property.width = text_input.valueOf();
}

var newLine = function(){
	console.log("new line")
	var para = document.createElement('P');
	var t = document.createTextNode(text_input.value);
	
	para.appendChild(t);
	document.getElementById('save_here').appendChild(para);
}

var mirror = function(){
	console.log("mirror")
	console.log(text_input.value);
	print_here.innerHTML = text_input.value;
}

var clearInput = function(){
	console.log("clear input")
	document.getElementById('text_input').value = "";
};

