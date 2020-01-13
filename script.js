// array of all the emotions
// must also have matching style defined in the CSS 
const emotions = ['eyes', 'happy', 'angry', 'sad', 'wtf'];

// randomly change the emotion every twenty seconds
var myTimer = setInterval(timer, 20000);

function timer(){
    setMood(emotions[Math.floor(Math.random() * emotions.length)]);
}

// change the emotion by applying different CSS classes to the eyes
function setMood(mood){
    document.getElementById("left").className= `${mood} lefteye`;
    document.getElementById("right").className= `${mood} righteye`;
}
