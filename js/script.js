var text_input = document.getElementById('text_input');
var save_here = document.getElementById('save_here');
var pArray = (save_here.childNodes);
var ENTER = 13;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd < 10){
	dd ='0' + dd;
}

if (mm < 10){
	mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;

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
	para.className = "line";
	var t = document.createTextNode(text_input.value);
	para.appendChild(t);
	document.getElementById('save_here').appendChild(para);
};

var clearInput = function(){
	document.getElementById('text_input').value = "";
};

var checkP = function(){
	//var pArray = (save_here.childNodes);
	console.log(pArray.length);
};

// ***** Doesn't work yet: Hide badge when text_input has focus *****
// var hideWelcome = function(){
// 	console.log("checking...");
// 	if (text_input.hasFocus){
// 		console.log(document.activeElement);
// 		document.getElementById('welcome').style.color = "blue";
// 	}
// };


// ****** Download txt ***********
document.getElementById('download').onclick = function (filename, mimeType){
	var dText = save_here.textContent;
	var dLink = document.createElement('a');
	mimeType = mimeType || 'text/plain';
	var filename = "svrlshrtsntncs" + "_" + today + '.txt';

	dLink.setAttribute('download', filename);
	dLink.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(dText));
	dLink.click();
}



// ********** AV's Animated Bar *************

var mInput = document.getElementById('text_input');

mInput.addEventListener('focus', function(event){
	isAnimating = true;
	detectChange(mInput);
});

mInput.addEventListener('focusout', function(event){
	isAnimating = false;
});

var detectChange = function(){
	if(isAnimating){
		window.requestAnimationFrame(detectChange);
	}
	var mGhost = document.getElementById('ghost');
	mGhost.innerHTML = mInput.value;

	var mBar = document.getElementById('my_bar');
	var currentWidth = parseFloat(getComputedStyle(mBar, null).getPropertyValue('width'));
	var targetWidth = mGhost.offsetWidth;
	var newWidth = currentWidth + (targetWidth - currentWidth)*.1;
	newWidth > targetWidth ? targetWidth : newWidth;
	
	mBar.style['width'] = newWidth.toString()+'px';
};

var isAnimating=false;

// ********** END AV's Animated Bar *************







