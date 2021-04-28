### @activities true
### @explicitHints true

# 128x64 Display Tutorial

## Introduction
### Introduction @unplugged
Learn how to plot readings on the Kitronik :VIEW 128x64 Display to draw a graph. 
Make sure that the BBC micro:bit is plugged into the :VIEW 128x64 Display and a micro USB is connected to the BBC micro:bit.
Once the hardware is setup, we can advance to the code.
![Accessbit image](https://KitronikLtd.github.io/pxt-kitronik-accessbit/assets/accessbit-angle.png)

## Setup
### Step 1
The first block that is always required before using any of the blocks is the ``||kitronik_VIEWOLED.Setup||``.  This block should be placed in the ``||basic.onStart||`` bracket.
#### ~ tutorialhint
```blocks
kitronik_VIEWOLED.init()
```

### Display setup @unplugged
With the setup block at the start of our code we can now look into how to get information onto the display.  
The graph that will be plotting will have the current reading shown in the display as well as the grapg being plotted.

## Plotting data
### Step 2 @unplugged
All the code from this point will be in the ``||basic.forever||`` bracket.  Firstly a variable will be created called ``||RollReading||``.  
This will take the reading from the accelorometer on the BBC micro:bit.  Add a ``||set.RollReading||`` into the ``||basic.forever||`` bracket.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = 0
})
```

### Step 3
Next will select the ``||input.roll||`` block into the ``||set RollReading||`` block.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
})
```

### Step 4
Insert a ``||kitronik_VIEWOLED.Show||`` block next with placing the varbale block ``||RollReading||`` .
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEWOLED.show(RollReading)
})
```

### Step 5
Now let's check the code is showing the roll value on the display.   
Click ``|Download|`` to program the BBC micro:bit and check your display.  When testing move the BBC micro:bit around to see the value change.


### Step 6
We able to seethe current reading from the BBC micro:bit, but there is no history of how the value has changed.
This is where the ``||kitronik_VIEWOLED.Plot||`` block can be useful.  
Insert the ``||kitronik_VIEWOLED.Plot||`` and add the varbale block ``||RollReading||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEWOLED.show(RollReading)
    kitronik_VIEWOLED.plot(RollReading, kitronik_VIEWOLED.GraphSelection.scrolling)
})
```

### Step 7
Click ``|Download|`` and see the previous plots of the values recorded.

### Step 8
The ``||kitronik_VIEWOLED.Plot||`` block has two types of graphs that plot.  The first 'scrolling' would have been seen in the previous step.
This is where the graph shifts along the display.  The other option is 'static'.  This is where the plot will restart at the end of screen.  
Change the option in the ``||kitronik_VIEWOLED.Plot||`` block and click ``|Download|`` to view the difference.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEWOLED.show(RollReading)
    kitronik_VIEWOLED.plot(RollReading, kitronik_VIEWOLED.GraphSelection.stationary)
})
```

### Plot tutorial complete @unplugged
We have shown how simple it can be to plot a graph of a variable on to the 128x64 Display.  
Other parameters such as temperature or light levels could be used.  
More text could be added to display to give more details.  
We have completed the tutorial.  If you wish to know more on the Kitronik :VIEW 128x64 display visit:  
http://www.kitronik.co.uk/56115