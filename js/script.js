var text_input = document.getElementById('text_input');
var save_here = document.getElementById('save_here'); 
var pArray = (save_here.childNodes);
var ENTER = 13;


document.onkeypress = function(e){
	if (e.keyCode == ENTER){
		newLine();
		clearInput();
		checkP();
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
};

var clearInput = function(){
	console.log("clear input")
	document.getElementById('text_input').value = "";
};

var checkP = function(){
	//var pArray = (save_here.childNodes);
	console.log(pArray);
	console.log(pArray.length);
};

// selects which consecutive lines are selected to be displayed in save_here
var selectLines = function(currentTopNode){
	var offSet = 16;
	var top = currentTopNode;
	var bottom = top+offSet;
	var currentlySelected = pArray.slice(top, bottom);

	return currentlySelected;
};

var displayLines = function(whatNodes){
	var toDisplay = whatNodes;

	for (var i = 0; i < currentlySelected.length; i++){
		toDisplay[i].style.display = "visible";
	}
};



