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
There is no setup required for the :VIEW 128x64 Display. Once the first block is in place, it will detect the display and do the required setup for you. This gives the perfect start to get coding straight away!

## Showing Numbers and Text on the Screen
### Step 1
Within the Kitronik created blocks, there is a ``||kitronik_VIEW128x64.show||`` block with an empty field. This empty field allows the coder to add in any data type (e.g. text, numbers etc).  
Lets start by inserting a ``||text:Text||`` block (under **Advanced**) into this field and typing a message.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.show("Hello!")
```

```ghost
basic.showString(convertToText(0))
text.(" ")
```

### Step 2
Make sure your BBC micro:bit is slotted into the :VIEW 128x64 Display edge connector, and connected to your computer via a microUSB cable.  
Click ``|Download|`` and this will program the BBC micro:bit with the code we have just created. Check the display for the message.

### Step 3
The ``||kitronik_VIEW128x64.show||`` block has expandable parts to it. On the side of the block there is a '+' icon - click on it to reveal more options.  
Once you have done this, move onto the next step in the tutorial.

### Step 4
The first part of the expandable block allows you to select which line (on the display) the message will be shown on. There are 4 lines that can be used.  
Let's change this number to '2' so the message is displayed on line 2.  
**NOTE:** When this is hidden, the message will default to the first line.  
Click ``|Download|`` to program the BBC micro:bit and check your display.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.show("Hello!", 2)
```

### Step 5
Now let's click on the '+' sign again and see the next feature.  
This feature allows you to align what is displayed to be either on the left edge, centred or on the right edge.  
Select 'centre' from the drop down list and change the line value to '3'.  
Remember, after doing this, click ``|Download|`` to program the BBC micro:bit and check your display.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.show("Hello World", 3, kitronik_VIEW128x64.ShowAlign.Centre)
```
## Drawing Lines on the Screen
### Show block complete @unplugged
So far we have covered how to setup the :VIEW 128x64 Display and how to show data, customising where it is placed on the screen.  
The next section will look at drawing lines.

### Step 6
Before we start, let's remove the ``||kitronik_VIEW128x64.show||`` so we have a blank starting point.

### Step 7
Add the ``||kitronik_VIEW128x64.draw horizontal line||`` block into the ``||basic:on start||`` bracket. The block takes in four factors.  
The first is the direction of the line - to start with use the ``horizontal`` selection.  
The next factor is the length of the line - start with a length of 20 pixels.  
The final factors are the X and Y coordinates for where the line starts. **Note:** The line will draw from left to right.  
Let's make the X coordinate ``10`` and the Y coordinate ``15``.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 20, 10, 15)
```

### Step 8
Click ``|Download|`` and see the drawn line on the display.

### Step 9
Add a second ``||kitronik_VIEW128x64.draw line||`` block, but this time, select a ``vertical`` line instead, keeping the numbers the same.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 20, 10, 15)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 20, 10, 15)
```

### Step 10
Click ``|Download|`` and check that the two lines are connected together at the same point.

### Step 11
Since it is already halfway complete, see if you can add two more blocks with the right coordinates to make a square.  
If you think you have completed it, click ``|Download|`` to see if your coordinates are correct.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 20, 10, 15)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 20, 10, 15)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.horiztonal, 20, 10, 35)
kitronik_VIEW128x64.drawLine(kitronik_VIEW128x64.LineDirectionSelection.vertical, 20, 30, 15)
```

### Step 12
To save writing four lines of code like here, there is a useful block called ``||kitronik_VIEW128x64.draw rectangle||``. This is similar to the previous blocks used, there are just some different inputs required.  
These are the width and height of the shape, and then the X, Y coordinates for where the shape will start.  
Enter some values and click ``|Download|`` to see the shape you have drawn.
#### ~ tutorialhint
```blocks
kitronik_VIEW128x64.drawRect(20, 40, 2, 5)
```

### Draw lines and squares complete @unplugged
Well done, you have succeeded in drawing lines and shapes on the display! We have completed the tutorial.  
If you wish to know more about the Kitronik :VIEW 128x64 Display visit:  
http://www.kitronik.co.uk/56115