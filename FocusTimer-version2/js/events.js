import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonTurnUp,
    buttonTurnDown,
    buttonSoundForest,
    buttonSoundCanteen,
    buttonSoundRain,
    buttonSoundFireplace
} from "./elements.js"

export default function({controls, timer, sounds}) {

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
    
        timer.updateDisplay(newMinutes, 0);
        timer.updateMinutes(newMinutes);
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
        sounds.pressButtonForest();
    })
    
    buttonSoundCanteen.addEventListener('click', function OnClick() {
        buttonSoundCanteen.classList.add('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
        sounds.pressButtonCanteen();
    })
    
    buttonSoundRain.addEventListener('click', function OnClick() {
        buttonSoundRain.classList.add('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundCanteen.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
        sounds.pressButtonRain();
    })
    
    buttonSoundFireplace.addEventListener('click', function OnClick() {
        buttonSoundFireplace.classList.add('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundCanteen.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        sounds.pressButtonFireplace();
    })

}