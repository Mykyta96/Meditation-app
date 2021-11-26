var nasBlocCenter = document.getElementById('nascondi');
var clickEasy = document.getElementById('easy-med');
var clickMedium = document.getElementById('medium-med');
var clickHard = document.getElementById('hard-med');
var blockEasy = document.getElementById('med-easy');
var blockMedium = document.getElementById('med-medium');
var blockHard = document.getElementById('med-hard');
var content = document.getElementById('content');
// var animation = document.querySelector('.ani');

//players shouldJavaScript    
// let btnPlay = document.querySelector(".play");   
// let btnPause = document.querySelector(".stop");
// let tornBack = document.querySelector('.back');


clickEasy.addEventListener('click', showBlockEasy);
clickMedium.addEventListener('click', showBlockMedium);
clickHard.addEventListener('click', showBlockHard);






//!!! PROVA
function playAudio(){

    let btnPlay = document.getElementById("play");  
    let playStop = document.getElementById("play-stop"); 
    
    btnPlay.addEventListener("click", function() {
        playStop.innerHTML = 'Play';
        audio.play(); // Запуск песни
    });
    
}
function stopAudio(){

    let btnPause = document.getElementById("stop");
    let playStop = document.getElementById("play-stop"); 
    playStop.innerHTML = 'Audio in pausa';
    btnPause.addEventListener("click", function() {
        playStop.innerHTML = 'Pausa';
        audio.pause(); // Останавливает песню
    });

}

function animazione(){
    var animation = document.querySelector('.ani');
    animation.style.transition = 'all 1.5s ease-out;';
}


function btnBack(){
    var tornBack = document.getElementById('back');
    tornBack.addEventListener('click', goBack);
    function goBack() {
        document.location.reload();
    }
}


function consigliTime(){
    const messagge = [
        'Cerca di non pensare quando fai meditazione',
        'Devi fare respiri profondi',
        'Respira piano',
        'Adesso rilassati e chiudi occhi',
        'Cominciamo',
        ''
    ];

    setTimeout(() => {
        for (var i = 0, ln = messagge.length; i < ln; i++) {
            setTimeout(function (y) {
                //   console.log(messagge[y]);
                consigli.innerHTML = messagge[y];
                if(y === 5){
                    consigli.style.display = 'none';
                }
            }, i * 10000, i);
        }
    }, 10000);
}

function showBlockEasy() {
    var consigli = document.getElementById('consigli');
    content.innerHTML =
        '<div class="meditation-easy player ani" id="med-easy">' +
        '<button type="button" id="back">Torna indietro</button>' +
        '<h1>Meditation Easy</h1>' +
        ' <h3>Segui consigli</h3>' +
        '<div class="messagge" id="consigli">' +
        '</div>' +
        '<p id="play-stop"></p>'+
        '<audio class="audio" id="audio">' +
        '<source src="assets/Audio/Easy.mp3">' +
        '</audio> ' +
         '<div id="controls">'+
             '<i class="far fa-play-circle icon" id="play"></i>'+
             '<i class="far fa-pause-circle icon" id="stop"></i>'+
         '</div>'+
        '</div>';
        consigliTime();
        btnBack();
        playAudio();
        stopAudio();
        animazione();
}

function showBlockMedium() {
    var consigli = document.getElementById('consigli');
    content.innerHTML =
        '<div class="meditation-medium player" id="med-medium">' +
        '<button type="button" id="back">Torna indietro</button>' +
        '<h1>Meditation Medium</h1>' +
        ' <h3>Segui consigli</h3>' +
        '<div class="messagge" id="consigli">' +
        '</div>' +
        '<p id="play-stop"></p>'+
        '<audio class="audio" id="audio">' +
        '<source src="assets/Audio/medium.mp3">' +
        '</audio> ' +
         '<div id="controls">'+
             '<i class="far fa-play-circle icon" id="play"></i>'+
             '<i class="far fa-pause-circle icon" id="stop"></i>'+
         '</div>'+
        '</div>';
        consigliTime();
        btnBack();
        playAudio();
        stopAudio();
        animazione();
}

function showBlockHard() {
    var consigli = document.getElementById('consigli');
    content.innerHTML =
        '<div class="meditation-hard player" id="med-hard">' +
        '<button type="button" id="back">Torna indietro</button>' +
        '<h1>Meditation Hard</h1>' +
        ' <h3>Segui consigli</h3>' +
        '<div class="messagge" id="consigli">' +
        '</div>' +
        '<p id="play-stop"></p>'+
        '<audio class="audio" id="audio">' +
        '<source src="assets/Audio/hard.mp3">' +
        '</audio> ' +
         '<div id="controls">'+
             '<i class="far fa-play-circle icon" id="play"></i>'+
             '<i class="far fa-pause-circle icon" id="stop"></i>'+
         '</div>'+
        '</div>';
        consigliTime();
        btnBack();
        playAudio();
        stopAudio();
        animazione();
}


//!!! PROVA






// function showBlockMedium(){
//     nasBlocCenter.style.display = "none";
//     blockMedium.style.display = "block";
// }
// function showBlockHard(){
//     nasBlocCenter.style.display = "none";
//     blockHard.style.display = "block";
// }

// const messagge = [
//     'Cerca di non pensare quando fai meditazione',
//     'Devi fare respiri profondi',
//     'Respira piano',
//     'Adesso rilassati e chiudi occhi',
//     'Cominciamo'
// ];

// setTimeout(() => {
//     for (var i = 0, ln = messagge.length; i < ln; i++) {
//         setTimeout(function (y) {
//             //   console.log(messagge[y]);
//             consigli.innerHTML = messagge[y];
//         }, i * 10000, i);
//     }
// }, 10000);


// player




