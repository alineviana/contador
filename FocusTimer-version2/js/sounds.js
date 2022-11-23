export default function() {
    const forest = new Audio('sons/Floresta.wav')
    const canteen = new Audio('sons/Cafeteria.wav')
    const rain = new Audio('sons/Chuva.wav')
    const fireplace = new Audio('sons/Lareira.wav')

    function pressButtonForest() {
        forest.play()
    }

    function pressButtonCanteen() {
        canteen.play()
    }

    function pressButtonRain() {
        rain.play()
    }

    function pressButtonFireplace() {
        fireplace.play()
    }


    return {
        pressButtonForest,
        pressButtonCanteen,
        pressButtonRain,
        pressButtonFireplace
    }
}
