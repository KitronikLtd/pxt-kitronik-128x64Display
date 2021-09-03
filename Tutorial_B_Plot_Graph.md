### @activities true
### @explicitHints true

# 128x64 Display - Plotting Graphs Tutorial

## Introduction
### Introduction @unplugged
Learn how to plot readings and draw graphs on the Kitronik :VIEW 128x64 Display.  
Make sure that the BBC micro:bit is plugged into the :VIEW 128x64 Display and a micro USB is connected to the BBC micro:bit.  
Once the hardware is setup, we can advance to the code.
![128x64DisplayPlot image](https://KitronikLtd.github.io/pxt-kitronik-128x64Display/assets/128x64DisplayPlot.png)

### Starting up the Display @unplugged
There is no setup required for the :VIEW 128x64 Display. Once the first block is in place, it will detect the display and do the required setup for you. This gives the perfect start to get coding straight away!  
We can now look into how to get information onto the display.  
The graph that will be plotted will have the current reading shown on the display as well.

## Plotting data
### Step 1
All the code for this tutorial will be in the ``||basic:forever||`` bracket.  
First, a variable needs to be created called ``||variables:RollReading||``. This will take the reading from the accelerometer on the BBC micro:bit.  
Add a ``||variables:set RollReading||`` block into the ``||basic:forever||`` bracket.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = 0
})
```

### Step 2
Next, select the ``||input:rotation||`` block from ``||input:Input||`` and drop it into the ``||variables:set RollReading||`` block. Change the drop-down to ``||input:roll||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
})
```

### Step 3
Insert a ``||kitronik_VIEW128x64.show||`` block next and place the ``||variables:RollReading||`` variable block inside.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.show(RollReading)
})
```

### Step 4
Now let's check the code is showing the roll value on the display.   
Click ``|Download|`` to program the BBC micro:bit and check your display.  When testing move the BBC micro:bit around to see the value change.


### Step 5
We are able to see the current reading from the BBC micro:bit, but there is no history of how the value has changed. This is where the ``||kitronik_VIEW128x64.plot||`` block can be useful.  
Insert the ``||kitronik_VIEW128x64.plot||`` block and add the variable ``||variables:RollReading||`` inside.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.show(RollReading)
    kitronik_VIEW128x64.plot(RollReading)
})
```

### Step 6
Click ``|Download|`` and once the program has downloaded, move the BBC micro:bit around to see the roll readings plotting.

### Plot tutorial complete @unplugged
We have shown how simple it can be to plot a graph of a variable onto the :VIEW 128x64 Display.  
Some ideas of things to do next:  
* Other parameters such as temperature or light levels could be used to plot graphs.  
* More text could be added to the display to give more details on readings.  

We have now completed the tutorial. If you wish to know more about the Kitronik :VIEW 128x64 Display visit:  
http://www.kitronik.co.uk/56115