
> Open this page at [https://kitronikltd.github.io/pxt-kitronik-128x64display/](https://kitronikltd.github.io/pxt-kitronik-128x64display/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/kitronikltd/pxt-kitronik-128x64display** and import

## Edit this project ![Build status badge](https://github.com/kitronikltd/pxt-kitronik-128x64display/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/kitronikltd/pxt-kitronik-128x64display** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/kitronikltd/pxt-kitronik-128x64display/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>


# pxt-kitronik-128x64Display

Custom blocks for www.kitronik.co.uk/56115 :VIEW 128x64 Display for BBC micro:bit.  There are easy to use blocks to take full usage of the display

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
kitronik_VIEW128x64.drawLine(16)
```
## drawRect()
```blocks
kitronik_VIEW128x64.drawRect(16)
```
## plot()
```blocks
kitronik_VIEW128x64.plot(16)
```
## controlDisplayOnOff()
```blocks
kitronik_VIEW128x64.controlDisplayOnOff(16)
```
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