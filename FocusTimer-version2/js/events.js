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
    buttonSoundFireplace,
} from "./elements.js"

export default function({controls, timer, sounds}) {

    buttonPlay.addEventListener('click', function() {
        controls.play();
        timer.countdown();
        sounds.pressButton();
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause();
        timer.hold();
        sounds.pressButton();
    })
    
    buttonSet.addEventListener('click', function() {
        sounds.pressButton();

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
        sounds.pressButton();
    })
    
    buttonTurnUp.addEventListener('click', function() {
        timer.increment()
        sounds.pressButton();
    })
    
    buttonTurnDown.addEventListener('click', function() {
        timer.decrement()
        sounds.pressButton();
    })
    
    buttonSoundForest.addEventListener('click', function OnClick() {
        buttonSoundForest.classList.toggle('active');
        buttonSoundCanteen.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
        sounds.pressButtonForest();
    })
    
    buttonSoundCanteen.addEventListener('click', function OnClick() {
        buttonSoundCanteen.classList.toggle('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
        sounds.pressButtonCanteen();
    })
    
    buttonSoundRain.addEventListener('click', function OnClick() {
        buttonSoundRain.classList.toggle('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundCanteen.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
        sounds.pressButtonRain();
    })
    
    buttonSoundFireplace.addEventListener('click', function OnClick() {
        buttonSoundFireplace.classList.toggle('active');
        buttonSoundForest.classList.remove('active');
        buttonSoundCanteen.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        sounds.pressButtonFireplace();
    })
}