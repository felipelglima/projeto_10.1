let minutesTimer = document.querySelector("#minutes")
let secondsTimer = document.querySelector("#seconds")
let newMinutes = minutesTimer.textContent

const darkModeBtn = document.querySelector(".darkModeBtn")
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const timerUpBtn = document.querySelector(".timerUp")
const timerDownBtn = document.querySelector(".timerDown")

const forestSoundBtn = document.querySelector(".forest")
const rainSoundBtn = document.querySelector(".rain")
const coffeeShopSoundBtn = document.querySelector(".coffeeShop")
const fireplaceSoundBtn = document.querySelector(".fireplace")

const gongSound = new Audio("./sounds/gong.mp3")
const forestSound = new Audio("./sounds/forest.wav")
const rainSound = new Audio("./sounds/rain.wav")
const coffeeShopSound = new Audio("./sounds/coffeeShop.wav")
const fireplaceSound = new Audio("./sounds/fireplace.wav")
let selectedSound = forestSound

const forestVolume = document.querySelector(".button-wrapper-forest input")
const rainVolume = document.querySelector(".button-wrapper-rain input")
const coffeeShopVolume = document.querySelector(".button-wrapper-coffeeShop input")
const fireplaceVolume = document.querySelector(".button-wrapper-fireplace input")

forestSound.volume = 0.5
rainSound.volume = 0.5
coffeeShopSound.volume = 0.5
fireplaceSound.volume = 0.5

function countdown(){
    timer = setTimeout(function(){
        let minutes = Number(minutesTimer.textContent)
        let seconds = Number(secondsTimer.textContent)

        if(minutes == 0 && seconds == 0){
            stopTimer()
            gongSound.play()
            return
        }

        if(seconds == 0){
            seconds = 60
            minutesTimer.textContent = --minutes
        }

        secondsTimer.textContent = String(--seconds).padStart(2, "0")
        countdown()

    }, 1000)
    selectedSound.play()
}

function playTimer(){
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonStop.classList.remove("hide")
    timerUpBtn.classList.add("hide")
    timerDownBtn.classList.add("hide")

    countdown()
}

function pauseTimer(){
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")

    selectedSound.pause()
    clearTimeout(timer)
}

function stopTimer(){
    buttonStop.classList.add("hide")
    timerUpBtn.classList.remove("hide")
    timerDownBtn.classList.remove("hide")

    pauseTimer()
    minutesTimer.textContent = newMinutes
    secondsTimer.textContent = "00"
}

function addMinutes(){
    if(minutesTimer.textContent == 90){
        alert("Tempo máximo!")
        return
    }

    newMinutes = minutesTimer.textContent = Number(minutes.textContent) + 5
}

function removeMinutes(){
    if(minutesTimer.textContent == 5){
        alert("Tempo mínimo!")
        return
    }

    newMinutes = minutesTimer.textContent = Number(minutes.textContent) - 5
}

function playForestSound(){
    if(forestSoundBtn.classList.contains("selected")){
        forestSoundBtn.classList.remove("selected")
        selectedSound.muted = true
        return
    }
    selectedSound.muted = false
    selectedSound.pause()
    selectedSound = forestSound

    forestSoundBtn.classList.add("selected")
    rainSoundBtn.classList.remove("selected")
    coffeeShopSoundBtn.classList.remove("selected")
    fireplaceSoundBtn.classList.remove("selected")
}

function playRainSound(){
    if(rainSoundBtn.classList.contains("selected")){
        rainSoundBtn.classList.remove("selected")
        selectedSound.muted = true
        return
    }
    selectedSound.muted = false
    selectedSound.pause()
    selectedSound = rainSound

    rainSoundBtn.classList.add("selected")
    forestSoundBtn.classList.remove("selected")
    coffeeShopSoundBtn.classList.remove("selected")
    fireplaceSoundBtn.classList.remove("selected")
}

function playCoffeeShopSound(){
    if(coffeeShopSoundBtn.classList.contains("selected")){
        coffeeShopSoundBtn.classList.remove("selected")
        selectedSound.muted = true
        return
    }
    selectedSound.muted = false
    selectedSound.pause()
    selectedSound = coffeeShopSound

    coffeeShopSoundBtn.classList.add("selected")
    rainSoundBtn.classList.remove("selected")
    forestSoundBtn.classList.remove("selected")
    fireplaceSoundBtn.classList.remove("selected")
}

function playFireplaceSound(){
    if(fireplaceSoundBtn.classList.contains("selected")){
        fireplaceSoundBtn.classList.remove("selected")
        selectedSound.muted = true
        return
    }
    selectedSound.muted = false
    selectedSound.pause()
    selectedSound = fireplaceSound
    
    fireplaceSoundBtn.classList.add("selected")
    coffeeShopSoundBtn.classList.remove("selected")
    rainSoundBtn.classList.remove("selected")
    forestSoundBtn.classList.remove("selected")
}

function darkModeOnOff(){
    sun.classList.toggle("hide")
    moon.classList.toggle("hide")

    document.body.classList.toggle("darkmode")
}

function volumeControl(e, selectedSound){
    selectedSound.volume = e.currentTarget.value / 100
}

buttonPlay.addEventListener("click", playTimer)

buttonPause.addEventListener("click", pauseTimer)

buttonStop.addEventListener("click", stopTimer)

timerUpBtn.addEventListener("click", addMinutes)

timerDownBtn.addEventListener("click", removeMinutes)

forestSoundBtn.addEventListener("click", playForestSound)

rainSoundBtn.addEventListener("click", playRainSound)

coffeeShopSoundBtn.addEventListener("click", playCoffeeShopSound)

fireplaceSoundBtn.addEventListener("click", playFireplaceSound)

darkModeBtn.addEventListener("click", darkModeOnOff)

forestVolume.addEventListener("change", function(e){volumeControl(e, forestSound)})

rainVolume.addEventListener("change", function(e){volumeControl(e, rainSound)})

coffeeShopVolume.addEventListener("change", function(e){volumeControl(e, coffeeShopSound)})

fireplaceVolume.addEventListener("change", function(e){volumeControl(e, fireplaceSound)})