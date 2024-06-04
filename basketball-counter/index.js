let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let resultHome = 0
let resultGuest = 0

function homeAddOne() {
    resultHome += 1
    homePoints.textContent = resultHome
}

function homeAddTwo() {
    resultHome += 2
    homePoints.textContent = resultHome
}

function homeAddThree() {
    resultHome += 3
    homePoints.textContent = resultHome
}

function guestAddOne() {
    resultGuest += 1
    guestPoints.textContent = resultGuest
}

function guestAddTwo() {
    resultGuest += 2
    guestPoints.textContent = resultGuest
}

function guestAddThree() {
    resultGuest += 3
    guestPoints.textContent = resultGuest
}