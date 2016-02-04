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
	para.className = "line";
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

// window.onscroll = function(){
// 	window.scrollBy(0, document.getElementsByClassName('line').height);
// };

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







