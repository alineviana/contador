export default function Theme(){

    const darkTheme = document.querySelector('.light')
    const lightTheme = document.querySelector('.dark')

    darkTheme.addEventListener ('click', function() {
        document.getElementById('theme').style.backgroundColor = '#121214'
        document.getElementById('timer').style.color = '#E1E1E6'
        document.querySelector('.dark').classList.remove('hide')
        document.querySelector('.light').classList.add('hide')
        document.getElementById('controls').classList.add('dark')
        document.getElementById('sounds').classList.add('dark')
    })

    lightTheme.addEventListener ('click', function() {
        document.getElementById('theme').style.backgroundColor = '#FFFFFF'
        document.getElementById('timer').style.color = '#323238'
        document.querySelector('.dark').classList.add('hide')
        document.querySelector('.light').classList.remove('hide')
        document.getElementById('controls').classList.remove('dark')
        document.getElementById('sounds').classList.remove('dark')
    })
}