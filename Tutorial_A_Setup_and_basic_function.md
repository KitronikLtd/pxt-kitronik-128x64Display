### @activities true
### @explicitHints true

# 128x64 Display Tutorial

## Introduction
### Introduction @unplugged
Learn how to use the Kitronik :VIEW 128x64 Display and create programs to take full advantage of the display.  
Make sure that the BBC micro:bit is plugged into the :VIEW 128x64 Display and a micro USB is connected to the BBC micro:bit.  
Once the hardware is setup, we can advance to the code.
![128x64Display image](https://KitronikLtd.github.io/pxt-kitronik-128x64Display/assets/128x64Display.png)


### Starting up the Display @unplugged
There is no setup required for the :VIEW 128x64 Display.  Once the first block is in place, it will detect the display and do the required setup for you. This gives the perfect start to get coding straight away!

## Showing numbers and text on the screen
### Step 1
Within the Kitronik created blocks, there is a ``||kitronik_VIEW128x64.Show||`` block with an empty field. This empty field allows the coder to add anything in.  
Lets start by inserting a ``||text:Text||`` block into this field and typing in a message.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.show("Hello!")
```

### Step 2
Make sure your BBC micro:bit is connected into the :VIEW 128x64 Display edge connector, and connected to your computer via a microUSB cable.  
Click ``|Download|`` and this will program the BBC micro:bit with the code we have just created.  Check out the display for the message written.

### Step 3
The ``||kitronik_VIEW128x64.Show||`` block has expandable parts to it.  On the side of the block there is a '+' icon, if you click on the icon to reveal more.  
Once you have done this, more on to the next step in the tutorial.


### Step 4
The first part of the expandable block allows you to select which line (on the display) the message to be shown on. There is 4 lines that can be used.  Lets change this number to '2' so the message is displayed on line 2.  
NOTE: when this is hidden, the message will default to the first line.  
Click ``|Download|`` to program the BBC micro:bit and check your display.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.show("Hello!", 2)
```

### Step 5
Next let's click on the '+' sign again and see the next feature.  This next feature allows you to align the parameter on screen to be either on the left edge, centred or on the right edge.  
Select 'centre' from the drop down list and change the line value to '3'.  
Remember after doing this, click ``|Download|`` to program the BBC micro:bit and check your display.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.show("Hello World", 3, kitronik_VIEW128x64.ShowAlign.Centre)
```

### Show block complete @unplugged
So far we have covered how to setup the :VIEW 128x64 Display and how to show data with customising where is can be placed.
The next couple of blocks will be for drawing lines

### Step 6
Before we start, let's remove the ``||kitronik_VIEW128x64.Show||`` to only leave the ``||kitronik_VIEW128x64.Setup||`` block remaining.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
```

### Step 7
So we have the ``||kitronik_VIEW128x64.Setup||`` block in the ``||basic.onStart||`` bracket. Below that we will add the ``||kitronik_VIEW128x64.draw horizontal line||`` block.
The block takes in four factors, the first is the direction of the line, to start will use the horizontal selection.  
Next factor is the length of the line.  Lets start with a length of 10 pixels.  
The final inputs are the X and Y co-ordinates of where the line starts.  The line will also draw from left to right.  
Lets make the X co-ordinate '10' and the Y co-ordinates '15'
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 10, 10, 5)
```

### Step 8
Click ``|Download|`` and see the drawn line on the display

### Step 9
Lets add the same ``||kitronik_VIEW128x64.draw line||`` block at the bottom, but select a vertical line instead, keeping the numbers the same
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 10, 10, 5)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 10, 10, 5)
```
### Step 10
Click ``|Download|`` and the two lines should be connected together at the same point.

### Step 11
Since it is halfway there, see if you can add two more blocks with the right co-ordiants to make a square.  
If you think you have completed click ``|Download|`` to see if you have got your co-ordinates correct.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 10, 10, 5)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 10, 10, 5)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 10, 10, 15)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 10, 20, 5)
```

### Step 12
To save four lines of code like there, there is a useful block called ``||kitronik_VIEW128x64.draw rectange||``.
This is similar to the previous blocks just use, there are some inputs required.  
These are the length and height of the shape, and then the X, Y co-ordinates of where the shape will start.  
Enter some values and click ``|Download|`` and see the shape you have drawn.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.init()
kitronik_VIEW128x64.rect(10, 20, 2, 5)
```

### Draw lines and squares complete @unplugged
Well done, you have succeeded in drawing lines and shapes on the display. We have completed the tutorial.  
If you wish to know more on the Kitronik :VIEW 128x64 Display visit:  
http://www.kitronik.co.uk/56115