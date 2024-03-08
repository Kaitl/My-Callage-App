var speakinghuman=window.webkitSpeechRecognition;
var Bob=new speakinghuman

function start() {
    Bob.start()
}

Webcam.set({
    width:506,
    height:380,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera")
Webcam.attach(camera);