### @activities true
### @explicitHints true

# 128x64 Display Tutorial

## Introduction
### Introduction @unplugged
Learn how to plot readings on the Kitronik :VIEW 128x64 Display to draw a graph. 
Make sure that the BBC micro:bit is plugged into the :VIEW 128x64 Display and a micro USB is connected to the BBC micro:bit.
Once the hardware is setup, we can advance to the code.
![Accessbit image](https://KitronikLtd.github.io/pxt-kitronik-accessbit/assets/accessbit-angle.png)

### Starting up the Display @unplugged
There is no setup required for the :VIEW 128x64 Display.  Once the first block is place, it will detect the display and do the required setup for you.  
This gives the perfect start to get coding straight away with no worries on setting it up.  
We can now look into how to get information onto the display.  
The graph that will be plotting will have the current reading shown in the display as well as the graph being plotted.

## Plotting data
### Step 1 @unplugged
All the code from this point will be in the ``||basic.forever||`` bracket.  Firstly a variable will be created called ``||RollReading||``.  
This will take the reading from the accelorometer on the BBC micro:bit.  Add a ``||set.RollReading||`` into the ``||basic.forever||`` bracket.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = 0
})
```

### Step 2
Next will select the ``||input.roll||`` block into the ``||set RollReading||`` block.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
})
```

### Step 3
Insert a ``||kitronik_VIEWOLED.Show||`` block next with placing the varbale block ``||RollReading||`` .
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
We able to seethe current reading from the BBC micro:bit, but there is no history of how the value has changed.
This is where the ``||kitronik_VIEWOLED.Plot||`` block can be useful.  
Insert the ``||kitronik_VIEWOLED.Plot||`` and add the varbale block ``||RollReading||``.
#### ~ tutorialhint
```blocks
basic.forever(function () {
    RollReading = input.rotation(Rotation.Roll)
    kitronik_VIEW128x64.show(RollReading)
    kitronik_VIEW128x64.plot(RollReading)
})
```

### Step 6
Click ``|Download|`` once the program has downloaded, move around the BBC micro:bit to see the plotting of readings.


### Plot tutorial complete @unplugged
We have shown how simple it can be to plot a graph of a variable on to the :VIEW 128x64 Display.  
Other parameters such as temperature or light levels could be used to plot graphs.  
More text could be added to display to give more details on readings.  
We have completed the tutorial.  If you wish to know more on the Kitronik :VIEW 128x64 display visit:  
http://www.kitronik.co.uk/56115