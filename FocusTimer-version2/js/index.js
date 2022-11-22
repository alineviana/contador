import Controls from "./controls.js"
import Timer from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonSet = document.querySelector('.set');
const buttonStop = document.querySelector('.stop');
const buttonTurnUp = document.querySelector('.turnUp');
const buttonTurnDown = document.querySelector('.turnDown');
const buttonSoundForest = document.querySelector('.forest');
const buttonSoundCanteen = document.querySelector('.canteen');
const buttonSoundRain = document.querySelector('.rain');
const buttonSoundFireplace = document.querySelector('.fireplace');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
});

buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.countdown();
})

buttonPause.addEventListener('click', function() {
    controls.pause();
    timer.hold();
})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes();

    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(minutes, 0);
    timer.updateMinutes(minutes);
})

buttonStop.addEventListener('click', function() {
    controls.reset();
    timer.reset();
})

buttonTurnUp.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?') || 0;
    updateTimerDisplay(minutes, 0);
})

buttonTurnDown.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?') || 0;
    updateTimerDisplay(minutes, 0);
})

buttonSoundForest.addEventListener('click', function OnClick() {
    buttonSoundForest.classList.add('active');
    buttonSoundCanteen.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundFireplace.classList.remove('active');
})

buttonSoundCanteen.addEventListener('click', function OnClick() {
    buttonSoundCanteen.classList.add('active');
    buttonSoundForest.classList.remove('active');
    buttonSoundRain.classList.remove('active');
    buttonSoundFireplace.classList.remove('active');
})

buttonSoundRain.addEventListener('click', function OnClick() {
    buttonSoundRain.classList.add('active');
    buttonSoundForest.classList.remove('active');
    buttonSoundCanteen.classList.remove('active');
    buttonSoundFireplace.classList.remove('active');
})

buttonSoundFireplace.addEventListener('click', function OnClick() {
    buttonSoundFireplace.classList.add('active');
    buttonSoundForest.classList.remove('active');
    buttonSoundCanteen.classList.remove('active');
    buttonSoundRain.classList.remove('active');
})