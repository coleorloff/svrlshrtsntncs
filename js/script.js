var text_input = document.getElementById('text_input');
var ENTER = 13;

document.onkeypress = function(e){
	if (e.keyCode == ENTER){
		newLine();
		clearInput();
	} else if (e.keyCode !== null){
		text_input.focus();
	}
};

var newLine = function(){
	console.log("new line")
	var para = document.createElement('P');
	var t = document.createTextNode(text_input.value);
	para.appendChild(t);
	document.getElementById('save_here').appendChild(para);
}

var clearInput = function(){
	console.log("clear input")
	document.getElementById('text_input').value = "";
};

