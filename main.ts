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
    export enum DisplaySelection {
        //% block="1"
        displayOne = 1,
        //% block="2"
        displayTwo = 2
    }

    /**
     * Selecting graph type
     */
    export enum GraphSelection {
        //% block="scrolling"
        scrolling,
        //% block="static"
        stationary
    }

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
    export enum ZoomSelection {
        //% block="in"
        zoomIn = 1,
        //% block="out"
        zoomOut = 0
    }

    let _I2CAddr = 60;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;

    //text alignment
    let displayShowAlign = ShowAlign.Left
    
    //plot variables
    let plotArray: number[] = []
    let plottingEnable = 0
    let plotData = 0;
    let graphYMin = 0
    let graphYMax = 100
    let graphRange = 100
    let GRAPH_Y_MIN_LOCATION = 31
    let GRAPH_Y_MAX_LOCATION = 10
    let previousYPlot = 0



    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col * (_ZOOM + 1)
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    // sorts the value and return the correct address
    function setScreenAddr(selection: any): number {
        let addr = 0
        if (selection == DisplaySelection.displayTwo){
            addr = 61
        }   
        else if (selection == DisplaySelection.displayOne){
            addr = 60
        }
        else {
            addr = 60
        }     
        return addr
    }

    /**
     * Setup of display ready for using
     * @param screen is the selection of which screen to initialise
     */
    //% blockId="VIEW128x64_init" block="setup display|| %screen"
    //% group="Control"
    //% weight=100 blockGap=8
    export function init(screen?: DisplaySelection) {
        
        _I2CAddr = setScreenAddr(screen)

        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 1)    // zoom on
        cmd1(0xAF)       // SSD1306_DISPLAYON
        erase()
        _ZOOM = 1
    }

    /**
     * Using the X Y co-ordinates, it is possible to turn on a selected pixel on the display
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_set_pixel" block="show pixel at x %x|y %y ||on display %screen"
    //% group="Show"
    //% weight=70 blockGap=8
    //% inlineInputMode=inline
    export function setPixel(x: number, y: number, screen?: DisplaySelection) {

        _I2CAddr = setScreenAddr(screen)
        if (_ZOOM){
            if (x > 63)
                x = 63
            if (y > 31)
                y = 31
        }
        else {
            if (x > 127)
                x = 127
            if (y > 63)
                y = 63
        }

        let page = y >> 3
        let shift_page = y % 8
        let ind = x * (_ZOOM + 1) + page * 128 + 1
        let b = 1 ? (_screen[ind] | (1 << shift_page)) : clrbit(_screen[ind], shift_page)
        _screen[ind] = b
        set_pos(x, page)
        if (_ZOOM) {
            _screen[ind + 1] = b
            _buf3[0] = 0x40
            _buf3[1] = _buf3[2] = b
            pins.i2cWriteBuffer(_I2CAddr, _buf3)
        }
        else {
            _buf2[0] = 0x40
            _buf2[1] = b
            pins.i2cWriteBuffer(_I2CAddr, _buf2)
        }
    }


    /**
     * show will allow any number, string or variable to be displayed onto the screen.
     * Additional selection of where the data is to be shown  is used
     * @param displayShowAlign is the alignment of the text, this can be left, centre or right
     * @param line is line the text to be started on, eg: 1
     * @param inputData is the text will be show
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_show" block="show %s|| on line %line| with alignment: %displayShowAlign | on display %screen"
    //% weight=80 blockGap=8
    //% group="Show"
    //% parts=VIEWOLED_I2C trackArgs=0
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1
    export function show(inputData: any,  line?: number, displayShowAlign?: ShowAlign, screen?: DisplaySelection) {
        let y = 0
        let x = 0
        let numberOfCharOnLine = 14
        let s = convertToText(inputData)
        _I2CAddr = setScreenAddr(screen)

        if (!displayShowAlign){//if variable y has not been used, default to y position of 0
            displayShowAlign=ShowAlign.Left
        }

        if (!line){//if variable y has not been used, default to y position of 0
            y=0
        }
        else{
            y = (line-1)
        }
        if (_ZOOM){
            numberOfCharOnLine = 14
            if (y > 3)
                y = 3
        }
        else {
            numberOfCharOnLine = 27
            if (y > 7)
                y = 7
        }

        //sort text into lines
        let lengthOfText = s.length
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

        for (textLoop = 0; textLoop <= s.length; textLoop++) {
            if (s.charAt(textLoop) == " ") {
                let splitStr = s.substr(startOfNewWord, (textLoop - (startOfNewWord - 1)))
                wordArray[numberOfWords] = splitStr
                wordLengthArray[numberOfWords] = splitStr.length
                numberOfWords += 1
                startOfNewWord = textLoop + 1
            }
            else if (textLoop == s.length) {
                let splitStr = s.substr(startOfNewWord, (textLoop - (startOfNewWord - 1)))
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
            else if ((screenLine + wordLengthArray[textLoop]) <= numberOfCharOnLine) {  //check the current string length plus the next word legnth will fit on the LCD line
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
        let p = 0
        let ind = 0
        
        //add for loop for lines
        for (let textLine = 0; textLine <= (numberOfStrings-1); textLine++)
        {
            s = stringArray[textLine]
            
            if (s.length < numberOfCharOnLine)
            {
                //basic.showNumber(0)
                while(s.length < numberOfCharOnLine){
                    if (displayShowAlign == ShowAlign.Left){
                        s = s + " "
                        //basic.showNumber(1)
                    }
                    else if (displayShowAlign == ShowAlign.Centre){
                        if (s.length % 2 == 0){
                            s = " " + s + " "
                            //basic.showNumber(2)
                        }
                        else {
                            s = s + " "
                        }
                    } 
                    else if (displayShowAlign == ShowAlign.Right){
                        s = " " + s
                        //basic.showNumber(3)
                    }
                }
                 
            }

            for (let n = 0; n < s.length; n++) {
                p = font[s.charCodeAt(n)]
                for (let i = 0; i < 5; i++) {
                    col = 0
                    for (let j = 0; j < 5; j++) {
                        if (p & (1 << (5 * i + j)))
                            col |= (1 << (j + 1))
                    }
                    ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1
                    //if (color == 0)
                        //col = 255 - col
                    _screen[ind] = col
                    if (_ZOOM)
                        _screen[ind + 1] = col
                }
            }
            set_pos(x * 5, y)
            let ind0 = x * 5 * (_ZOOM + 1) + y * 128
            let buf = _screen.slice(ind0, ind + 1)
            buf[0] = 0x40
            pins.i2cWriteBuffer(_I2CAddr, buf)
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
    //% blockId="VIEW128x64_draw_line" block="draw a %lineDirection | line with length of %len starting at x %x|y %y ||on display %screen"
    //% weight=72 blockGap=8
    //% group="Draw"
    //% inlineInputMode=inline
    export function drawLine(lineDirection: LineDirectionSelection, len: number, x: number, y: number, screen?: DisplaySelection) {
        if (_ZOOM){
            if (x > 63)
                x = 63
            if (y > 31)
                y = 31
        }
        else {
            if (x > 127)
                x = 127
            if (y > 63)
                y = 63
        }
        if (lineDirection == LineDirectionSelection.horiztonal){
            for (let i = x; i < (x + len); i++)
                setPixel(i, y, screen)
        }
        else if (lineDirection == LineDirectionSelection.vertical){
            for (let i = y; i < (y + len); i++)
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
    //% blockId="VIEW128x64_draw_rect" block="draw a rectangle wide %width|high %height|from position x %x|y %y||on display %screen"
    //% weight=71 blockGap=8
    //% group="Draw"
    //% inlineInputMode=inline
    //% width.min=1 width.max=60
    //% height.min=1 height.max=30
    //% x.min=0 x.max=60
    //% y.min=0 y.max=30
    export function drawRect(width: number, height: number, x: number, y: number, screen?: DisplaySelection) {
        if (_ZOOM){
            if (x > 63)
                x = 63
            if (y > 31)
                y = 31
        }
        else {
            if (x > 127)
                x = 127
            if (y > 63)
                y = 63
        }
        
        if (!x)     //if variable x has not been used, default to x position of 0
            x = 0
        
        if (!y)     //if variable y has not been used, default to y position of 0
            y=0

        //hline(x, y, width - x + 1, screen)
        //hline(x, height, width - x + 1, screen)
        //vline(x, y, height - y + 1, screen)
        //vline(width, y, height - y + 1, screen)

        drawLine(LineDirectionSelection.horiztonal, x, y, width - x + 1, screen)
        drawLine(LineDirectionSelection.horiztonal, x, height, width - x + 1, screen)
        drawLine(LineDirectionSelection.vertical, x, y, height - y + 1, screen)
        drawLine(LineDirectionSelection.vertical, width, y, height - y + 1, screen)
    }

    /**
     * clear screen
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear" block="erase display ||%screen"
    //% group="Delete"
    //% weight=63 blockGap=8
    export function erase(screen?: DisplaySelection) {
        _I2CAddr = setScreenAddr(screen)
        _screen.fill(0)
        _screen[0] = 0x40
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    /**
     * Turn display on and off, information on the screen will be kept when display is turned off and then back on
     * @param output is the boolean output of the pin, either ON or OFF
     * @param screen is screen selection when using multiple screens
     */
    //% blockId=VIEW128x64_display_on_off_control
    //% block="turn %output=on_off_toggle| display ||%screen"
    //% group="Control"
    //% expandableArgumentMode="toggle"
    //% weight=80 blockGap=8
    export function controlDisplayOnOff(output: boolean, screen?: DisplaySelection) {
        _I2CAddr = setScreenAddr(screen)
        
        if (output == true) {
            cmd1(0xAF)
        }
        else {
            cmd1(0xAE)
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
     * @graphType is where the graph is either set to static (once the plot gets to the end of the screen the it will start clean from the start) or scrolling (graph will shift along the screen)
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_plot_request"
    //% group="Draw"
    //% block="plot %plotVariable| with a %graphType| action onto display || %screen"
    //% weight=100 blockGap=8
    export function plot(plotVariable: number, graphType: GraphSelection, screen?: DisplaySelection) {
        let plotLength = plotArray.length
        if (plotLength == 64){
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
            yPlot = pins.map(yPlot, graphYMin, graphYMax, GRAPH_Y_MIN_LOCATION, GRAPH_Y_MAX_LOCATION)
            //vline(x, yPlot, (GRAPH_Y_MIN_LOCATION-yPlot), screen) // solid graph line

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
            
            for (let i = y; i < (y + len); i++)
                setPixel(x, i)

            previousYPlot = yPlot
        }
        if (plotLength == 64){
            if (graphType == GraphSelection.stationary){
                previousYPlot = 0
                plotArray = []
            }
            erase(screen)
        }
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
    //% blockId="VIEW128x64_show_at_position" block="show %inputData shifted by %x|on line %y| display ||%screen"
    //% subcategory=advanced
    //% group="Show"
    //% weight=80 blockGap=8
    //% y.min = 1
    export function showString(inputData: any, x: number, y: number, screen?: DisplaySelection) {
        _I2CAddr = setScreenAddr(screen)
        let s = convertToText(inputData)

        if (y=0){//if variable y has not been used, default to y position of 0
            y=0
        }
        else{
            y = y-1
        }
        //limit the x and y depending on the zoom cause the resolution changes
        if (_ZOOM){
            if (y > 3)
                y = 3
            if (x > 14)
                x=14
        }
        else {
            if (y > 7)
                y = 7
            if (x > 27)
                x = 27
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
                ind = (x + n) * 5 * (_ZOOM + 1) + y * 128 + i * (_ZOOM + 1) + 1
                _screen[ind] = col
                if (_ZOOM)
                    _screen[ind + 1] = col
            }
        }
        set_pos(x * 5, y)
        let ind0 = x * 5 * (_ZOOM + 1) + y * 128
        let buf = _screen.slice(ind0, ind + 1)
        buf[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, buf)
    }

    /**
     * zoom mode
     * @param d true zoom / false normal, eg: true
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_zoom_display" block="zoom %d"
    //% weight=64 blockGap=8
    export function zoom(d: ZoomSelection) {
        if (d == ZoomSelection.zoomIn){
            d = 1
        }
        else if (d == ZoomSelection.zoomOut){
            d = 0
        }
        _ZOOM = (d) ? 1 : 0
        cmd2(0xd6, _ZOOM)
    }

    /**
     * Block will update or efresh the screen if any data has been changed
     * @param screen is screen selection when using multiple screens
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_draw" block="refresh display ||screen?: DisplaySelection"
    //% weight=63 blockGap=8
    export function refresh(screen?: DisplaySelection) {
        _I2CAddr = setScreenAddr(screen)
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    /**
     * invert display
     * @param output toggles between inverting the colours of the display
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_invert_screen" block="inverted display %output=on_off_toggle"
    //% weight=62 blockGap=8
    export function invert(output: boolean) {
        let n = (output) ? 0xA7 : 0xA6
        cmd1(n)
    }

}