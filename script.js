const emotions = ['eyes', 'happy', 'angry'];
			
var myTimer = setInterval(timer, 20000);

function timer(){
    setMood(emotions[Math.floor(Math.random() * emotions.length)]);
}

function setMood(mood){
    console.log("changing");
    document.getElementById("left").className= `${mood} lefteye`;
    document.getElementById("right").className= `${mood} righteye`;
}
