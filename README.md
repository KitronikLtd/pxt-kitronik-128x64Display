
# Kitronik :VIEW 128x64 Display for BBC micro:bit

## Use as Extension and Tutorials

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for "128x64Display" or enter **https://github.com/kitronikltd/pxt-kitronik-128x64display** and import

There are additional tutorials to guide through how to use the blocks.

[Tutorial - Setup and basic functions](https://makecode.microbit.org/#tutorial:github:kitronikltd/pxt-kitronik-128x64display/Tutorial_A_Setup_and_basic_function)
[Tutorial - Plot a Graph](https://makecode.microbit.org/#tutorial:github:kitronikltd/pxt-kitronik-128x64display/Tutorial_B_Plot_Graph)

# pxt-kitronik-128x64Display Blocks

Custom blocks for www.kitronik.co.uk/56115 :VIEW 128x64 Display for BBC micro:bit.  There are easy to use blocks to take full usage of the display
Below are a list of the different blocks and their functions.

## show()
```blocks
kitronik_VIEW128x64.show()
```
Show will allow a number, text or variable to display on the screen.  There is also expandable parts to select which line on the screen to display on, aswell as alignment of the information.

## clear()
```blocks
kitronik_VIEW128x64.clear()
```
Clear will remove all data from the screen to be completely blank.

## setPixel()
```blocks
kitronik_VIEW128x64.setPixel(0, 0)
```
Set Pixel will turn on a particular pixel from an X-Y co-ordinates. Range for the X is 0-127, range for the Y is 0-63

## clearPixel()
```blocks
kitronik_VIEW128x64.clearPixel(0, 0)
```
Clear Pixel will clear a a particular pixel from an X-Y co-ordinates. Range for the X is 0-127, range for the Y is 0-63

## drawLine()
```blocks
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 10, 0, 0)
```
Draw line will  give the option of drawing vertical or horiztonal line on screen.  The required parameters needed are the length (which is the number of pixels) followed by an X-Y co-ordinates.
The length is between 0-127, if a vertical line is required any number over 63 will be limited to 63
Range for the X is 0-127, range for the Y is 0-63

## drawRect()
```blocks
kitronik_VIEW128x64.drawRect(60, 30, 0, 0)
```
Draw line will  give the option of drawing rectangle shape on screen.  The required parameters needed are the width and height (which is the number of pixels) followed by an X-Y co-ordinates.
Range for the X is 0-127, range for the Y is 0-63

## plot()
```blocks
basic.forever(function () {
    kitronik_VIEW128x64.plot(input.rotation(Rotation.Pitch))
})
```
The input for the Plot block is a number input.  The block will take into account any scaling of the graph on screen.  THe block must be called when a new or updated value is wanting to be plotted to the graph.
This would be ideally be used in a loop

## controlDisplayOnOff()
```blocks
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(false))
```
The control display block, allow the user to switch the information on the screen on and off.  This does not remove any data, it only stops displaying the whole screen.
## invert()
```blocks
kitronik_VIEW128x64.invert(16)
```
Invert will change the colours of the screen from either white pixels on a black screen, or black pixels on a white screen

## refresh()
```blocks
kitronik_VIEW128x64.refresh()
```
Refresh will update the display with any new data that has been stored in the display memory buffer.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)