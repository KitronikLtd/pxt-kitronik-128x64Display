// Test file for Kitronik VIEW 128x64
// example code shows a Roll reading from the BBC micro:bit 
// reading is then also plotted onto the screen

let RollReading = 0
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.show(RollReading)
    kitronik_VIEW128x64.plot(RollReading)

})