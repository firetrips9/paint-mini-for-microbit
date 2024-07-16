input.onButtonPressed(Button.A, function () {
    led.plot(ledindex, verticalledindex)
    ledindex += 1
    if (ledindex == 5) {
        verticalledindex += 1
        ledindex = 0
    }
})
input.onButtonPressed(Button.B, function () {
    ledindex += 1
    if (ledindex == 6) {
        verticalledindex += 1
        ledindex = 0
    }
})
let verticalledindex = 0
let ledindex = 0
ledindex = 0
verticalledindex = 0
basic.forever(function () {
	
})
