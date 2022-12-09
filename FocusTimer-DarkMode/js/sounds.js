import {
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
} from "./elements.js"

export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const forest = new Audio('assets/sounds/Floresta.wav');
    const rain = new Audio('assets/sounds/Chuva.wav');
    const coffeeShop = new Audio('assets/sounds/Cafeteria.wav');
    const fireplace = new Audio('assets/sounds/Lareira.wav');


    function pressButton() {
        buttonPressAudio.play();
    }

    function pressButtonForest() {
        pressButton();

        forest.loop = true;

        buttonSoundForest.classList.contains('active') ? forest.play() : forest.pause();

        rain.pause();
        coffeeShop.pause();
        fireplace.pause();
    }

    function pressButtonRain() {
        pressButton();

        rain.loop = true;

        buttonSoundRain.classList.contains('active') ? rain.play() : rain.pause();

        forest.pause();
        coffeeShop.pause();
        fireplace.pause();
    }

    function pressButtonCoffeeShop() {
        pressButton();

        coffeeShop.loop = true;
        
        buttonSoundCoffeeShop.classList.contains('active') ? coffeeShop.play() : coffeeShop.pause();

        forest.pause();
        rain.pause();
        fireplace.pause();
    }

    function pressButtonFireplace() {
        pressButton();

        fireplace.loop = true;

        buttonSoundFireplace.classList.contains('active') ? fireplace.play() : fireplace.pause();

        forest.pause();
        rain.pause();
        coffeeShop.pause();
    }

    function timeEnd() {
        kitchenTimer.play();
        
        buttonSoundForest.classList.remove('active');
        buttonSoundRain.classList.remove('active');
        buttonSoundCoffeeShop.classList.remove('active');
        buttonSoundFireplace.classList.remove('active');
    }

    sliderForest.addEventListener('input', function () {
        forest.volume = sliderForest.value / 100
    })
    
    sliderRain.addEventListener('input', function () {
        rain.volume = sliderRain.value / 100
    })
    
    sliderCoffeeShop.addEventListener('input', function() {
        coffeeShop.volume = sliderCoffeeShop.value / 100
    })
    
    sliderFireplace.addEventListener('input', function() {
        fireplace.volume = sliderFireplace.value / 100
    })
    
    return {
        pressButton,
        pressButtonForest,
        pressButtonCoffeeShop,
        pressButtonRain,
        pressButtonFireplace,
        timeEnd
    }
}
