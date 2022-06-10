input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("startstop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
radio.setGroup(93)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
