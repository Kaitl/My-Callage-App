var speakinghuman=window.webkitSpeechRecognition;
var Bob=new speakinghuman
var texttospeech=window.speechSynthesis


function start() {
    Bob.start()
}
function selfie() {
    Webcam.snap(function (data_uri) {
        if (image_id=="selfie1") {
            document.getElementById("result1").innerHTML="<img id='selfie1' src="+data_uri+">"   
        }
        if (image_id=="selfie2") {
            document.getElementById("result2").innerHTML="<img id='selfie2' src="+data_uri+">"   
        }
        if (image_id=="selfie3") {
            document.getElementById("result3").innerHTML="<img id='selfie3' src="+data_uri+">"   
        }
    })
}
function speak() {
    speakingdata="taking a selfie in five seconds."
    var sound_file=new SpeechSynthesisUtterance(speakingdata)
    texttospeech.speak(sound_file)
    Webcam.attach(camera);
    setTimeout(function() {
        image_id="selfie1"
        selfie()
        speakingdata="taking a selfie in ten seconds."
    var sound_file=new SpeechSynthesisUtterance(speakingdata)
    texttospeech.speak(sound_file)
    }, 5000);
    setTimeout(function() {
        image_id="selfie2"
        selfie()
        speakingdata="taking a selfie in fifteen seconds."
    var sound_file=new SpeechSynthesisUtterance(speakingdata)
    texttospeech.speak(sound_file)
    }, 10000);
    setTimeout(function() {
        image_id="selfie3"
        selfie()
    }, 15000);
}
Bob.onresult= function (event) {
    console.log(event)
    content=event.results[0][0].transcript
    console.log(content)
    if (content=="selfie") {
        speak()
    }
}

Webcam.set({
    width:506,
    height:380,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera")
Webcam.attach(camera);