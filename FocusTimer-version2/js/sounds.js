export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forest = new Audio('sounds/Floresta.wav')
    const canteen = new Audio('sounds/Cafeteria.wav')
    const rain = new Audio('sounds/Chuva.wav')
    const fireplace = new Audio('sounds/Lareira.wav')

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function pressButtonForest() {
        forest.loop = true

        forest.play()
        canteen.pause()
        rain.pause()
        fireplace.pause()
    }

    function pressButtonCanteen() {
        canteen.loop = true

        canteen.play()
        forest.pause()
        rain.pause()
        fireplace.pause()
    }

    function pressButtonRain() {
        rain.loop = true

        rain.play()
        forest.pause()
        canteen.pause()
        fireplace.pause()
    }

    function pressButtonFireplace() {
        fireplace.loop = true

        fireplace.play()
        forest.pause()
        canteen.pause()
        rain.pause()
    }

    return {
        pressButton,
        timeEnd,
        pressButtonForest,
        pressButtonCanteen,
        pressButtonRain,
        pressButtonFireplace
    }
}
