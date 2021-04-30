/**
 * Kitronik VIEW 128x64 Display blocks
 * LCD chip SSD1603
 **/
//% weight=100 color=#00A654 icon="\uf26c" block="128x64 Display"
//% groups='["Control", "Show", "Draw", "Delete"]'
namespace kitronik_VIEW128x64 {
    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;


    /**
     * Selecting display
     */
    //export enum DisplaySelection {
    //    //% block="1"
    //    displayOne = 1,
    //    //% block="2"
    //    displayTwo = 2
    //}

    ///**
    // * Selecting graph type
    // */
    //export enum GraphSelection {
    //    //% block="scrolling"
    //    scrolling,
    //    //% block="static"
    //    stationary
    //}

    /**
     * Select the alignment of text
     */
    export enum ShowAlign {
        //% block="Left"
        Left,
        //% block="Centre"
        Centre,
        //% block="Right"
        Right
    }

    /**
     * Selecting direction of drawing line
     */
    export enum LineDirectionSelection {
        //% block="horizontal"
        horiztonal,
        //% block="vertical"
        vertical
    }

    /**
     * Selecting zoom option
     */
    //export enum ZoomSelection {
    //    //% block="in"
    //    zoomIn = 1,
    //    //% block="out"
    //    zoomOut = 0
    //}

    //Screen buffers for sending data to the display
    let screenBuf = pins.createBuffer(1025);
    let ackBuf = pins.createBuffer(2);
    let writeOneByteBuf = pins.createBuffer(2);
    let writeTwoByteBuf = pins.createBuffer(3);
    let writeThreeByteBuf = pins.createBuffer(4);

    let initalised = 0    		//a flag to indicate automatic initalising the display

    //Constants for Display
    let NUMBER_OF_CHAR_PER_LINE = 27

    //default address forthe display
    let DISPLAY_ADDR_1 = 60
    let DISPLAY_ADDR_2 = 10
    let displayAddress = DISPLAY_ADDR_1;

    //text alignment
    let displayShowAlign = ShowAlign.Left
    
    //plot variables
    let plotArray: number[] = []
    let plottingEnable = 0
    let plotData = 0;
    let graphYMin = 0
    let graphYMax = 100
    let graphRange = 100
    let GRAPH_Y_MIN_LOCATION = 63
    let GRAPH_Y_MAX_LOCATION = 20
    let previousYPlot = 0

    //function write one byte of data to the display
    function writeOneByte(regValue: number) {
        writeOneByteBuf[0] = 0;
        writeOneByteBuf[1] = regValue;
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf);
    }

    //function write two byte of data to the display
    function writeTwoByte(regValue1: number, regValue2: number) {
        writeTwoByteBuf[0] = 0;
        writeTwoByteBuf[1] = regValue1;
        writeTwoByteBuf[2] = regValue2;
        pins.i2cWriteBuffer(displayAddress, writeTwoByteBuf);
    }

    //function write three byte of data to the display
    function writeThreeByte(regValue1: number, regValue2: number, regValue3: number) {
        writeThreeByteBuf[0] = 0;
        writeThreeByteBuf[1] = regValue1;
        writeThreeByteBuf[2] = regValue2;
        writeThreeByteBuf[3] = regValue3;
        pins.i2cWriteBuffer(displayAddress, writeThreeByteBuf);
    }

    function set_pos(col: number = 0, page: number = 0) {
        writeOneByte(0xb0 | page) // page number
        writeOneByte(0x00 | (col % 16)) // lower start column address
        writeOneByte(0x10 | (col >> 4)) // upper start column address    
    }

    // clear bit
    function clearBit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    // sorts the value and return the correct address
    function setScreenAddr(selection: number): number {
        let addr = 0
        if (selection == 1){
            addr = DISPLAY_ADDR_1
        }   
        else if (selection == 2){
            addr = DISPLAY_ADDR_2
        }
        else {
            addr = DISPLAY_ADDR_1
        }     
        return addr
    }

    /**
     * Setup of display ready for using
     * @param screen is the selection of which screen to initialise
     */
    export function initDisplay(screen?: number): void {
        
        displayAddress = setScreenAddr(screen)
        //load the ackBuffer to check is there is a display there before starting initalising of ths display
        ackBuf[0] = 0
        ackBuf[1] = 0xAF
        let ack = pins.i2cWriteBuffer(displayAddress, ackBuf)
        if (ack == -1010){ //ifvalue return back is -1010, there is no display and show error message
            basic.showString("ERROR - no display")
        }
        else{   //start initalising of the display
            writeOneByte(0xAE)       // SSD1306_DISPLAYOFF
            writeOneByte(0xA4)       // SSD1306_DISPLAYALLON_RESUME
            writeTwoByte(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
            writeTwoByte(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
            writeTwoByte(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
            writeOneByte(0 | 0x0)    // line #SSD1306_SETSTARTLINE
            writeTwoByte(0x8D, 0x14) // SSD1306_CHARGEPUMP
            writeTwoByte(0x20, 0x00) // SSD1306_MEMORYMODE
            writeThreeByte(0x21, 0, 127) // SSD1306_COLUMNADDR
            writeThreeByte(0x22, 0, 63)  // SSD1306_PAGEADDR
            writeOneByte(0xa0 | 0x1) // SSD1306_SEGREMAP
            writeOneByte(0xc8)       // SSD1306_COMSCANDEC
            writeTwoByte(0xDA, 0x12) // SSD1306_SETCOMPINS
            writeTwoByte(0x81, 0xCF) // SSD1306_SETCONTRAST
            writeTwoByte(0xd9, 0xF1) // SSD1306_SETPRECHARGE
            writeTwoByte(0xDB, 0x40) // SSD1306_SETVCOMDETECT
            writeOneByte(0xA6)       // SSD1306_NORMALDISPLAY
            writeTwoByte(0xD6, 0)    // zoom is set to off
            writeOneByte(0xAF)       // SSD1306_DISPLAYON
            initalised = 1
            clear()
        }
    }

    /**
     * Using the X Y co-ordinates, it is possible to turn on a selected pixel on the display
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_set_pixel" block="show pixel at x %x|y %y"
    //% group="Show"
    //% weight=70 blockGap=8
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% inlineInputMode=inline
    export function setPixel(x: number, y: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay()
        }

        let page = y >> 3                                       
        let shift_page = y % 8                                  //calculate the page to write to
        let ind = x + page * 128 + 1                            //calculate which register in the page to write to.
        let screenPixel = (screenBuf[ind] | (1 << shift_page))  //set the screen data byte
        screenBuf[ind] = screenPixel                            //store data in screen buffer
        set_pos(x, page)                                        //set the position on the screen to write at 
        writeOneByteBuf[0] = 0x40                               //load buffer with command
        writeOneByteBuf[1] = screenPixel                        //load buffer with byte
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf)    //send data to screen
    }

    /**
     * Using the X Y co-ordinates, it is possible to turn on a selected pixel on the display
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear_pixel" block="clear pixel at x %x|y %y"
    //% group="Show"
    //% weight=70 blockGap=8
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% inlineInputMode=inline
    export function clearPixel(x: number, y: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }   

        let page = y >> 3
        let shift_page = y % 8                                  //calculate the page to write to
        let ind = x + page * 128 + 1                            //calculate which register in the page to write to.
        let screenPixel = clearBit(screenBuf[ind], shift_page)  //clear the screen data byte
        screenBuf[ind] = screenPixel                            //store data in screen buffer
        set_pos(x, page)                                        //set the position on the screen to write at 
        writeOneByteBuf[0] = 0x40                               //load buffer with command
        writeOneByteBuf[1] = screenPixel                        //load buffer with byte
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf)    //send data to screen
    }


    /**
     * show will allow any number, string or variable to be displayed onto the screen.
     * Additional selection of where the data is to be shown  is used
     * @param displayShowAlign is the alignment of the text, this can be left, centre or right
     * @param line is line the text to be started on, eg: 1
     * @param inputData is the text will be show
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_show" block="show %s|| on line %line| with alignment: %displayShowAlign"
    //% weight=80 blockGap=8
    //% group="Show"
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1 line.max=8
    export function show(inputData: any,  line?: number, displayShowAlign?: ShowAlign, screen?: 1) {
        let y = 0
        let x = 0
        let inputString = convertToText(inputData)
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        if (!displayShowAlign){//if variable y has not been used, default to y position of 0
            displayShowAlign=ShowAlign.Left
        }

        //if variable y has not been used, default to y position of 0
        if (!line){
            y=0
        }
        else{
            y = (line-1)
        }

        //sort text into lines
        let lengthOfText = inputString.length
        let textLoop = 0
        let wordArray: string[] = []
        let wordLengthArray: number[] = []
        let stringArray: string[] = []
        let numberOfWords = 0
        let numberOfStrings = 0
        let startOfNewWord = 0
        let charLength = 0
        let word = 0
        let createString = ""

        //for loop takes the input string and splits into single words by checking for spaces
        for (textLoop = 0; textLoop <= inputString.length; textLoop++) {
            if (inputString.charAt(textLoop) == " ") {
                let splitStr = inputString.substr(startOfNewWord, (textLoop - (startOfNewWord - 1)))
                wordArray[numberOfWords] = splitStr
                wordLengthArray[numberOfWords] = splitStr.length
                numberOfWords += 1
                startOfNewWord = textLoop + 1
            }
            else if (textLoop == inputString.length) {
                let splitStr = inputString.substr(startOfNewWord, (textLoop - (startOfNewWord - 1)))
                wordArray[numberOfWords] = splitStr + " "
                wordLengthArray[numberOfWords] = splitStr.length + 1
                numberOfWords += 1
            }
        }
        textLoop = 0
        let screenLine = 0

        //check the length of words added to string fits on the single line of LCD, if it doesnt start a new line
        for (textLoop = 0; textLoop <= numberOfWords; textLoop++) {

            if (textLoop == numberOfWords) {
                stringArray[numberOfStrings] = createString
                numberOfStrings += 1
            }
            else if ((screenLine + wordLengthArray[textLoop]) <= NUMBER_OF_CHAR_PER_LINE) {  //check the current string length plus the next word legnth will fit on the LCD line
                createString = createString + wordArray[textLoop]               //if it does, add it to the string
                screenLine = createString.length                                //increase the displayed string length to check ready for next word
            }
            else {
                stringArray[numberOfStrings] = createString //save the strings to be displayed on the LCD
                numberOfStrings += 1                        //add the total number of lines to be displayed created
                createString = wordArray[textLoop]          //start with next word
                screenLine = wordLengthArray[textLoop]      //start with the next word length             
            }
        }

        let col = 0
        let charDisplayBytes = 0
        let ind = 0
        
        //add for loop for lines
        for (let textLine = 0; textLine <= (numberOfStrings-1); textLine++)
        {
            inputString = stringArray[textLine]
            
            if (inputString.length < NUMBER_OF_CHAR_PER_LINE)
            {
                while(inputString.length < NUMBER_OF_CHAR_PER_LINE){    //Loop will add white spaces on side of string depending on which alignment
                    if (displayShowAlign == ShowAlign.Left){
                        inputString = inputString + " "
                    }
                    else if (displayShowAlign == ShowAlign.Centre){
                        if (inputString.length % 2 == 0){
                            inputString = " " + inputString + " "
                        }
                        else {
                            inputString = inputString + " "
                        }
                    } 
                    else if (displayShowAlign == ShowAlign.Right){
                        inputString = " " + inputString
                    }
                }
                 
            }

            for (let charOfString = 0; charOfString < inputString.length; charOfString++) {
                charDisplayBytes = font[inputString.charCodeAt(charOfString)]
                for (let i = 0; i < 5; i++) {  //for loop will take byte font array and load it into the correct register, the shift to the next byte to load into the next location
                    col = 0
                    for (let j = 0; j < 5; j++) {
                        if (charDisplayBytes & (1 << (5 * i + j)))
                            col |= (1 << (j + 1))
                    }

                    ind = (x + charOfString) * 5 + y * 128 + i + 1
                    screenBuf[ind] = col
                }
            }

            set_pos(x * 5, y)                               //set the start position to write to
            let ind0 = x * 5 + y * 128
            let buf = screenBuf.slice(ind0, ind + 1)
            buf[0] = 0x40
            pins.i2cWriteBuffer(displayAddress, buf)        //send data to the screen
            y += 1 
        }

    }
 
    /**
     * draw a line using the x and y co-ordinates as a starting point and then a given length
     * @param lineDirection is the selection of either horizontal line, vertical line or diaganol
     * @param x is start position on the X axis, eg: 0
     * @param y is start position on the Y axis, eg: 0
     * @param len is the length of line, eg: 10
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_draw_line" block="draw a %lineDirection | line with length of %len starting at x %x|y %y"
    //% weight=72 blockGap=8
    //% group="Draw"
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% len.min=1, len.max=127
    //% inlineInputMode=inline
    export function drawLine(lineDirection: LineDirectionSelection, len: number, x: number, y: number, screen?: 1) {
        if (lineDirection == LineDirectionSelection.horiztonal){
            for (let i = x; i < (x + len); i++) //loop to set the pixel in the horizontal line
                setPixel(i, y, screen)
        }
        else if (lineDirection == LineDirectionSelection.vertical){
            if (len >= 64){          //as length could be max on the x axis, this checks if a vertical lines is draw, max the value to the max of the y axis
                len = 63
            }
            for (let i = y; i < (y + len); i++) //loop to set the pixel in the vertical line
                setPixel(x, i, screen)
        }   
    }

    /**
     * draw a rectangle using the X and Y co-ordiantes as a starting point, then the lenght and height can be enter as the number of pixels
     * @param width is length of the rectange, eg: 60
     * @param height is height of the rectange, eg: 30
     * @param x is the start position on the X axis, eg: 0
     * @param y is the start position on the Y axis, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_draw_rect" block="draw a rectangle wide %width|high %height|from position x %x|y %y"
    //% weight=71 blockGap=8
    //% group="Draw"
    //% inlineInputMode=inline
    //% width.min=1 width.max=127
    //% height.min=1 height.max=63
    //% x.min=0 x.max=127
    //% y.min=0 y.max=63
    export function drawRect(width: number, height: number, x: number, y: number, screen?: 1) {        
        if (!x)     //if variable x has not been used, default to x position of 0
            x=0
        
        if (!y)     //if variable y has not been used, default to y position of 0
            y=0
        //draw the line of each side of the rectangle
        drawLine(LineDirectionSelection.horiztonal, x, y, width - x + 1, screen)
        drawLine(LineDirectionSelection.horiztonal, x, height, width - x + 1, screen)
        drawLine(LineDirectionSelection.vertical, x, y, height - y + 1, screen)
        drawLine(LineDirectionSelection.vertical, width, y, height - y + 1, screen)
    }

    /**
     * clear screen
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear" block="clear display ||%screen"
    //% group="Delete"
    //% weight=63 blockGap=8
    export function clear(screen?: number) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        screenBuf.fill(0)       //fill the screenBuf with 0
        screenBuf[0] = 0x40
        set_pos()               //set position to the start of the screen
        pins.i2cWriteBuffer(displayAddress, screenBuf)  //write clear buffer to the screen
    }

    /**
     * Turn display on and off, information on the screen will be kept when display is turned off and then back on
     * @param output is the boolean output of the pin, either ON or OFF
     * @param screen is screen selection when using multiple screens
     */
    //% blockId=VIEW128x64_display_on_off_control
    //% block="turn %displayOutput=on_off_toggle| display"
    //% group="Control"
    //% expandableArgumentMode="toggle"
    //% weight=80 blockGap=8
    export function controlDisplayOnOff(displayOutput: boolean, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        if (displayOutput == true) {
            writeOneByte(0xAF)      //turn display output on
        }
        else {
            writeOneByte(0xAE)      //turn display output off
        }
    }

    /**
     * Render a boolean as an on/off toggle
     */
    //% blockId=on_off_toggle
    //% block="$on"
    //% on.shadow="toggleOnOff"
    //% blockHidden=true
    export function onOff(on: boolean): boolean {
        return on;
    }


    //////////////////////////////////////
    //
    //      Plotting blocks
    //
    //////////////////////////////////////

    /**
     * Plot Request start or stops the plotting of the graph onto the display
     * @plotVariable is the variable that the user requires to be recorded on a graph onto the display
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_plot_request"
    //% group="Draw"
    //% block="plot %plotVariable| onto display"
    //% weight=100 blockGap=8
    export function plot(plotVariable: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        let plotLength = plotArray.length
        if (plotLength == 127){     //if the length of the array has reach max number of pixels, shift the array and remove the oldest
            plotArray.shift()
        }
        //round the variable to use as ints rather than floats
        plotVariable = Math.round(plotVariable)
        //place on the end of the array
        plotArray.push(plotVariable)

        //if the varibale exceeds the scale of the Y axis, update the in or max limits
        if (plotVariable > graphYMax)
            graphYMax = plotVariable
        if (plotVariable < graphYMin)
            graphYMin = plotVariable
    
        //plotting for loop of graph onto display
        for (let arrayPosition = 0; arrayPosition <= plotLength; arrayPosition++) {
    	    let x = arrayPosition//x is start of screen 
            let yPlot = plotArray[arrayPosition]
            //map the variables to scale between the min and max values to the min and max graph pixel area
            yPlot = pins.map(yPlot, graphYMin, graphYMax, GRAPH_Y_MIN_LOCATION, GRAPH_Y_MAX_LOCATION)

            if (arrayPosition == 0){
                previousYPlot = yPlot
            }
            let y = 0
            let len = 0

            //determine if the line needs to be drawn from the last point to the new or visa-versa, V line can only be drawn down the screen
            if (yPlot < previousYPlot){
                y = yPlot
                len = (previousYPlot-yPlot)
            }
            else if (yPlot > previousYPlot){
                y = previousYPlot
                len = (yPlot-previousYPlot)
            }
            else {
                y = yPlot
                len = 1
            }

            //Clear plots in screenBuffer
            let page = 0
            for (let i = GRAPH_Y_MAX_LOCATION; i <= GRAPH_Y_MIN_LOCATION; i++){
                page = i >> 3
                let shift_page = i % 8
                let ind = x + page * 128 + 1
                let screenPixel = clearBit(screenBuf[ind], shift_page)    //clear the screen data byte
                screenBuf[ind] = screenPixel                            //store data in screen buffer
            }

            //plot new data in screenBuffer
            for (let i = y; i < (y + len); i++){
                page = i >> 3
                let shift_page = i % 8
                let ind = x + page * 128 + 1
                let screenPixel = (screenBuf[ind] | (1 << shift_page))  //set the screen data byte
                screenBuf[ind] = screenPixel                            //store data in screen buffer
            }
            previousYPlot = yPlot
        }
        refresh() //refresh screen with new data in screenBuffer
    }


    //////////////////////////////////////
    //
    //      Expert blocks
    //
    //////////////////////////////////////


    /**
     * show text in OLED
     * @param x is X axis position, eg: 0
     * @param y is Y axis position, eg: 1
     * @param s is the variable or number or text that will be shown on the display
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_show_at_position" block="show %inputData shifted by %x|on line %y"
    //% subcategory=advanced
    //% group="Show"
    //% weight=80 blockGap=8
    //% y.min = 1
    export function showString(inputData: any, x: number, y: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        let s = convertToText(inputData)

        if (y=0){//if variable y has not been used, default to y position of 0
            y=0
        }
        else{
            y = y-1
        }

        let col = 0
        let p = 0
        let ind = 0
        for (let n = 0; n < s.length; n++) {
            p = font[s.charCodeAt(n)]
            for (let i = 0; i < 5; i++) {
                col = 0
                for (let j = 0; j < 5; j++) {
                    if (p & (1 << (5 * i + j)))
                        col |= (1 << (j + 1))
                }
                ind = (x + n) * 5 + y * 128 + i + 1
                screenBuf[ind] = col
                //if (_ZOOM)
                //    _screen[ind + 1] = col
            }
        }
        set_pos(x * 5, y)
        let ind0 = x * 5 + y * 128
        let buf = screenBuf.slice(ind0, ind + 1)
        buf[0] = 0x40
        pins.i2cWriteBuffer(displayAddress, buf)
    }


    /**
     * Block will update or efresh the screen if any data has been changed
     * @param screen is screen selection when using multiple screens
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_draw" block="refresh display"
    //% weight=63 blockGap=8
    export function refresh(screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        set_pos()
        pins.i2cWriteBuffer(displayAddress, screenBuf)
    }

    /**
     * invert display
     * @param output toggles between inverting the colours of the display
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_invert_screen" block="inverted display %output=on_off_toggle"
    //% weight=62 blockGap=8
    export function invert(output: boolean, screen?: 1) {
        let invertRegisterValue = 0
        displayAddress = setScreenAddr(screen)
        if (initalised == 0){
            initDisplay(1)
        }
            
        //let n = (output) ? 0xA7 : 0xA6
        if (output == true){
            invertRegisterValue = 0xA7
        }
        else{
           invertRegisterValue = 0xA7 
        }
        writeOneByte(invertRegisterValue)
    }

}