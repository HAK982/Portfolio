var string = `Hi! I'm Hamza Ahmed Khan`
             ; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("texter").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
    
			}
	loopTimer = setTimeout('frameLooper()',100)/* change 70 for speed */

}
frameLooper();


