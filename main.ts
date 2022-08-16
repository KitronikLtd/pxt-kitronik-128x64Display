/**
 * Kitronik VIEW 128x64 Display blocks
 * OLED chip SSD1603
 **/
//% weight=100 color=#00A654 icon="\uf26c" block="128x64 Display"
//% groups='["Control", "Show", "Draw", "Delete"]'
namespace kitronik_VIEW128x64 {
    // ASCII Code to OLED 5x8 pixel character for display conversion
    let font: number[] = [];
    font[0] = 0x0022d422;   // NUL (null) [non-printable]
    font[1] = 0x0022d422;   // SOH (start of heading) [non-printable]
    font[2] = 0x0022d422;   // STX (start of text) [non-printable]
    font[3] = 0x0022d422;   // ETX (end of text) [non-printable]
    font[4] = 0x0022d422;   // EOT (end of transmission) [non-printable]
    font[5] = 0x0022d422;   // ENQ (enquiry) [non-printable]
    font[6] = 0x0022d422;   // ACK (acknowledge) [non-printable]
    font[7] = 0x0022d422;   // BEL (bell) [non-printable]
    font[8] = 0x0022d422;   // BS (backspace) [non-printable]
    font[9] = 0x0022d422;   // TAB (horizontal tab) [non-printable]
    font[10] = 0x0022d422;  // LF (NL line feed, new line) [non-printable]
    font[11] = 0x0022d422;  // VT (vertical tab) [non-printable]
    font[12] = 0x0022d422;  // FF (NP form feed, new page) [non-printable]
    font[13] = 0x0022d422;  // CR (carraige return) [non-printable]
    font[14] = 0x0022d422;  // SO (shift out) [non-printable]
    font[15] = 0x0022d422;  // SI (shift in) [non-printable]
    font[16] = 0x0022d422;  // DLE (data link escape) [non-printable]
    font[17] = 0x0022d422;  // DC1 (device control 1) [non-printable]
    font[18] = 0x0022d422;  // DC2 (device control 2) [non-printable]
    font[19] = 0x0022d422;  // DC2 (device control 3) [non-printable]
    font[20] = 0x0022d422;  // DC4 (device control 4) [non-printable]
    font[21] = 0x0022d422;  // NAK (negative acknowledge) [non-printable]
    font[22] = 0x0022d422;  // SYN (synchronous idle) [non-printable]
    font[23] = 0x0022d422;  // ETB (end of transmission block) [non-printable]
    font[24] = 0x0022d422;  // CAN (cancel) [non-printable]
    font[25] = 0x0022d422;  // EM (end of medium) [non-printable]
    font[26] = 0x0022d422;  // SUB (substitute) [non-printable]
    font[27] = 0x0022d422;  // ESC (escape) [non-printable]
    font[28] = 0x0022d422;  // FS (file separator) [non-printable]
    font[29] = 0x0022d422;  // GS (group separator) [non-printable]
    font[30] = 0x0022d422;  // RS (record separator) [non-printable]
    font[31] = 0x0022d422;  // US (unit separator) [non-printable]
    font[32] = 0x00000000;  // Space
    font[33] = 0x000002e0;  // !
    font[34] = 0x00018060;  // "
    font[35] = 0x00afabea;  // #
    font[36] = 0x00aed6ea;  // $
    font[37] = 0x01991133;  // %
    font[38] = 0x010556aa;  // &
    font[39] = 0x00000060;  // '
    font[40] = 0x000045c0;  // (
    font[41] = 0x00003a20;  // )
    font[42] = 0x00051140;  // *
    font[43] = 0x00023880;  // +
    font[44] = 0x00002200;  // ,
    font[45] = 0x00021080;  // -
    font[46] = 0x00000100;  // .
    font[47] = 0x00111110;  // /
    font[48] = 0x0007462e;  // 0
    font[49] = 0x00087e40;  // 1
    font[50] = 0x000956b9;  // 2
    font[51] = 0x0005d629;  // 3
    font[52] = 0x008fa54c;  // 4
    font[53] = 0x009ad6b7;  // 5
    font[54] = 0x008ada88;  // 6
    font[55] = 0x00119531;  // 7
    font[56] = 0x00aad6aa;  // 8
    font[57] = 0x0022b6a2;  // 9
    font[58] = 0x00000140;  // :
    font[59] = 0x00002a00;  // ;
    font[60] = 0x0008a880;  // <
    font[61] = 0x00052940;  // =
    font[62] = 0x00022a20;  // >
    font[63] = 0x0022d422;  // ?
    font[64] = 0x00e4d62e;  // @
    font[65] = 0x000f14be;  // A
    font[66] = 0x000556bf;  // B
    font[67] = 0x0008c62e;  // C 
    font[68] = 0x0007463f;  // D 
    font[69] = 0x0008d6bf;  // E 
    font[70] = 0x000094bf;  // F 
    font[71] = 0x00cac62e;  // G 
    font[72] = 0x000f909f;  // H 
    font[73] = 0x000047f1;  // I 
    font[74] = 0x0017c629;  // J 
    font[75] = 0x0008a89f;  // K 
    font[76] = 0x0008421f;  // L
    font[77] = 0x01f1105f;  // M 
    font[78] = 0x01f4105f;  // N 
    font[79] = 0x0007462e;  // O 
    font[80] = 0x000114bf;  // P 
    font[81] = 0x000b6526;  // Q 
    font[82] = 0x010514bf;  // R 
    font[83] = 0x0004d6b2;  // S 
    font[84] = 0x0010fc21;  // T 
    font[85] = 0x0007c20f;  // U 
    font[86] = 0x00744107;  // V
    font[87] = 0x01f4111f;  // W 
    font[88] = 0x000d909b;  // X 
    font[89] = 0x00117041;  // Y 
    font[90] = 0x0008ceb9;  // Z
    font[91] = 0x0008c7e0;  // [
    font[92] = 0x01041041;  // \
    font[93] = 0x000fc620;  // ]
    font[94] = 0x00010440;  // ^
    font[95] = 0x01084210;  // _ 
    font[96] = 0x00000820;  // `
    font[97] = 0x010f4a4c;  // a 
    font[98] = 0x0004529f;  // b 
    font[99] = 0x00094a4c;  // c 
    font[100] = 0x000fd288; // d 
    font[101] = 0x000956ae; // e 
    font[102] = 0x000097c4; // f 
    font[103] = 0x0007d6a2; // g 
    font[104] = 0x000c109f; // h 
    font[105] = 0x000003a0; // i 
    font[106] = 0x0006c200; // j 
    font[107] = 0x0008289f; // k 
    font[108] = 0x000841e0; // l 
    font[109] = 0x01e1105e; // m 
    font[110] = 0x000e085e; // n 
    font[111] = 0x00064a4c; // o 
    font[112] = 0x0002295e; // p 
    font[113] = 0x000f2944; // q 
    font[114] = 0x0001085c; // r 
    font[115] = 0x00012a90; // s 
    font[116] = 0x010a51e0; // t 
    font[117] = 0x010f420e; // u 
    font[118] = 0x00644106; // v 
    font[119] = 0x01e8221e; // w 
    font[120] = 0x00093192; // x 
    font[121] = 0x00222292; // y 
    font[122] = 0x00095b52; // z
    font[123] = 0x0008fc80; // {
    font[124] = 0x000003e0; // |
    font[125] = 0x000013f1; // }
    font[126] = 0x00841080; // ~
    font[127] = 0x0022d422; // DEL


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
     * Select direction for drawing lines
     */
    export enum LineDirectionSelection {
        //% block="horizontal"
        horizontal,
        //% block="vertical"
        vertical
    }

    /**
     * Select size for drawing text
     */
    export enum FontSelection {
        //% block="Normal"
        Normal,
        //% block="Big"
        Big
    }

    // Variables for Display
    let numberOfCharPerLine = 25
    let fontZoom = 1
    let globalZoomSet = false

    // Default address for the display
    let DISPLAY_ADDR_1 = 60
    let DISPLAY_ADDR_2 = 10
    let displayAddress = DISPLAY_ADDR_1;

    // Text alignment, defaulted to "Left"
    let displayShowAlign = ShowAlign.Left

    // Plot variables
    let plotArray: number[] = []
    let plottingEnable = 0
    let plotData = 0;
    let graphYMin = 0
    let graphYMax = 100
    let graphRange = 100
    let GRAPH_Y_MIN_LOCATION = 63
    let GRAPH_Y_MAX_LOCATION = 20
    let previousYPlot = 0

    // Screen buffers for sending data to the display
    let screenBuf = pins.createBuffer(1025);
    let ackBuf = pins.createBuffer(2);
    let writeOneByteBuf = pins.createBuffer(2);
    let writeTwoByteBuf = pins.createBuffer(3);
    let writeThreeByteBuf = pins.createBuffer(4);

    let initialised = 0    		// Flag to indicate automatic initalisation of the display

    // Function to write one byte of data to the display
    function writeOneByte(regValue: number) {
        writeOneByteBuf[0] = 0;
        writeOneByteBuf[1] = regValue;
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf);
    }

    // Function to write two bytes of data to the display
    function writeTwoByte(regValue1: number, regValue2: number) {
        writeTwoByteBuf[0] = 0;
        writeTwoByteBuf[1] = regValue1;
        writeTwoByteBuf[2] = regValue2;
        pins.i2cWriteBuffer(displayAddress, writeTwoByteBuf);
    }

    // Function to write three bytes of data to the display
    function writeThreeByte(regValue1: number, regValue2: number, regValue3: number) {
        writeThreeByteBuf[0] = 0;
        writeThreeByteBuf[1] = regValue1;
        writeThreeByteBuf[2] = regValue2;
        writeThreeByteBuf[3] = regValue3;
        pins.i2cWriteBuffer(displayAddress, writeThreeByteBuf);
    }

    // Set the starting on the display for writing text
    function set_pos(col: number = 0, page: number = 0) {
        writeOneByte(0xb0 | page) // page number
        writeOneByte(0x00 | (col % 16)) // lower start column address
        writeOneByte(0x10 | (col >> 4)) // upper start column address    
    }

    // Set the particular data byte on the screen for clearing
    function clearBit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }

    // Return the correct display I2C address based on selection
    function setScreenAddr(selection: number): number {
        let addr = 0
        if (selection == 1) {
            addr = DISPLAY_ADDR_1
        }
        else if (selection == 2) {
            addr = DISPLAY_ADDR_2
        }
        else {
            addr = DISPLAY_ADDR_1
        }
        return addr
    }

    /**
     * Setup the display ready for use (function on available in text languages, not blocks)
     * @param screen is the selection of which screen to initialise
     */
    export function initDisplay(screen?: number): void {

        displayAddress = setScreenAddr(screen)
        // Load the ackBuffer to check if there is a display there before starting initalisation
        ackBuf[0] = 0
        ackBuf[1] = 0xAF
        let ack = pins.i2cWriteBuffer(displayAddress, ackBuf)
        if (ack == -1010) {      // If returned value back is -1010, there is no display so show error message
            basic.showString("ERROR - no display")
        }
        else {   // Start initalising the display
            writeOneByte(0xAE)              // SSD1306_DISPLAYOFF
            writeOneByte(0xA4)              // SSD1306_DISPLAYALLON_RESUME
            writeTwoByte(0xD5, 0xF0)        // SSD1306_SETDISPLAYCLOCKDIV
            writeTwoByte(0xA8, 0x3F)        // SSD1306_SETMULTIPLEX
            writeTwoByte(0xD3, 0x00)        // SSD1306_SETDISPLAYOFFSET
            writeOneByte(0 | 0x0)           // line #SSD1306_SETSTARTLINE
            writeTwoByte(0x8D, 0x14)        // SSD1306_CHARGEPUMP
            writeTwoByte(0x20, 0x00)        // SSD1306_MEMORYMODE
            writeThreeByte(0x21, 0, 127)    // SSD1306_COLUMNADDR
            writeThreeByte(0x22, 0, 63)     // SSD1306_PAGEADDR
            writeOneByte(0xa0 | 0x1)        // SSD1306_SEGREMAP
            writeOneByte(0xc8)              // SSD1306_COMSCANDEC
            writeTwoByte(0xDA, 0x12)        // SSD1306_SETCOMPINS
            writeTwoByte(0x81, 0xCF)        // SSD1306_SETCONTRAST
            writeTwoByte(0xd9, 0xF1)        // SSD1306_SETPRECHARGE
            writeTwoByte(0xDB, 0x40)        // SSD1306_SETVCOMDETECT
            writeOneByte(0xA6)              // SSD1306_NORMALDISPLAY
            writeTwoByte(0xD6, 0)           // Zoom is set to off
            writeOneByte(0xAF)              // SSD1306_DISPLAYON
            initialised = 1
            clear()
        }
    }

    /**
     * Using (x, y) coordinates, turn on a selected pixel on the screen.
     * @param x is the X axis value, eg: 0
     * @param y is the Y axis value, eg: 0
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
        if (initialised == 0) {
            initDisplay()
        }

        let page = y >> 3
        let shift_page = y % 8                                  // Calculate the page to write to
        let ind = x + page * 128 + 1                            // Calculate which register in the page to write to
        let screenPixel = (screenBuf[ind] | (1 << shift_page))  // Set the screen data byte
        screenBuf[ind] = screenPixel                            // Store data in screen buffer
        set_pos(x, page)                                        // Set the position on the screen to write at 
        writeOneByteBuf[0] = 0x40                               // Load buffer with command
        writeOneByteBuf[1] = screenPixel                        // Load buffer with byte
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf)    // Send data to screen
    }

    /**
     * Using the (x, y) coordinates, clear a selected pixel on the screen.
     * @param x is the X axis value, eg: 0
     * @param y is the Y axis value, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear_pixel" block="clear pixel at x %x|y %y"
    //% group="Delete"
    //% weight=70 blockGap=8
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% inlineInputMode=inline
    export function clearPixel(x: number, y: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        let page2 = y >> 3
        let shift_page2 = y % 8                                     // Calculate the page to write to
        let ind2 = x + page2 * 128 + 1                              // Calculate which register in the page to write to
        let screenPixel2 = clearBit(screenBuf[ind2], shift_page2)   // Clear the screen data byte
        screenBuf[ind2] = screenPixel2                              // Store data in screen buffer
        set_pos(x, page2)                                           // Set the position on the screen to write at 
        writeOneByteBuf[0] = 0x40                                   // Load buffer with command
        writeOneByteBuf[1] = screenPixel2                           // Load buffer with byte
        pins.i2cWriteBuffer(displayAddress, writeOneByteBuf)        // Send data to screen
    }

    /**
     * Change the font size between normal and big. Font size is double in big.
     * @param fontSize is the size that will be used for the text shown
     * @param screen is screen selection when using multiple screens
     */
    //% blockId=VIEW128x64_set_font_size
    //% block="Set font size to %fontSize"
    //% group="Control"
    //% weight=80 blockGap=8
    export function setFontSize(fontSize: FontSelection, screen?: 1) {

        displayAddress = setScreenAddr(screen)

        if (initialised == 0)
            initDisplay(1)

        globalZoomSet = true

        if (fontSize == FontSelection.Big) {

            numberOfCharPerLine = 12
            fontZoom = 2
        } else {

            numberOfCharPerLine = 25
            fontZoom = 1
        }
    }

    /**
     * 'show' allows any number, string or variable to be displayed on the screen.
     * The block is expandable to set the line and alignment.
     * @param displayShowAlign is the alignment of the text, this can be left, centre or right
     * @param line is line the text to be started on, eg: 1
     * @param inputData is the text will be show
     * @param fontSize is the size that will be used for the text shown
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_show" block="show %s || on line %line | with alignment: %displayShowAlign | and size: %fontSize""
    //% weight=80 blockGap=8
    //% group="Show"
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1 line.max=8
    export function show(inputData: any, line?: number, displayShowAlign?: ShowAlign, fontSize?: FontSelection, screen?: 1) {

        let x = 0
        let y = 0
        let inputString = convertToText(inputData)

        displayAddress = setScreenAddr(screen)

        if (initialised == 0)
            initDisplay(1)

        // If text alignment has not been specified, default to "Left"
        if (!displayShowAlign)
            displayShowAlign = ShowAlign.Left

        // If font size not selected font zoom default to 1
        if (!globalZoomSet && fontSize && fontSize == FontSelection.Big) {

            numberOfCharPerLine = 12
            fontZoom = 2
        } else if (!globalZoomSet) {

            numberOfCharPerLine = 25
            fontZoom = 1
        }

        // If the screen line has not bee specified, default to top line (i.e. y = 0)
        // Otherwise, subtract '1' from the line number to return correct y value
        if (!line)
            y = 0

        else if (fontZoom == 1)
            y = line - 1

        else {

            if (line == 1)
                y = 0

            else if (line == 2)
                y = 2
            
            else if (line == 3)
                y = 4
            
            else
                y = 6
        }

        // Sort text into lines
        let stringArray: string[] = []
        let numberOfStrings = 0
        let i = 0

        while (i < inputString.length)
            if (inputString.length - i <= numberOfCharPerLine) {

                stringArray[numberOfStrings] = inputString.substr(i, inputString.length - i)
                numberOfStrings++
                i = inputString.length
            } else {

                stringArray[numberOfStrings] = inputString.substr(i, numberOfCharPerLine)
                numberOfStrings++
                i += numberOfCharPerLine
            }

        let charBytes = 0
        let column1 = 0
        let column2 = 0
        let bufferIndex = 0

        // Set text alignment, fill up the screenBuffer with data and send to the display
        for (let textLine = 0; textLine < numberOfStrings; textLine++) {

            let displayString = stringArray[textLine]

            if (displayString.length < numberOfCharPerLine)
                if (displayShowAlign == ShowAlign.Left)
                    x = 0

                else if (displayShowAlign == ShowAlign.Centre)
                    x = Math.round((numberOfCharPerLine - displayString.length) / 2)

                else if (displayShowAlign == ShowAlign.Right)
                    x = numberOfCharPerLine - displayString.length

            for (let charOfString = 0; charOfString < displayString.length; charOfString++) {

                charBytes = font[displayString.charCodeAt(charOfString)]

                for (let xIndex = 0; xIndex < 5; xIndex++) {

                    column1 = 0
                    column2 = 0

                    for (let yIndex = 0; yIndex < 5; yIndex++)
                        if (charBytes & (1 << 5 * xIndex + yIndex))
                            if (fontZoom == 1)
                                column1 |= 1 << yIndex + 1

                            else if (yIndex < 3) {

                                column1 |= 1 << yIndex * fontZoom + 1
                                column1 |= 1 << yIndex * fontZoom + 2
                            } else if (yIndex == 3) {

                                column1 |= 1 << yIndex * fontZoom + 1
                                column2 |= 1 << (yIndex - 3) * fontZoom
                            } else {

                                column2 |= 1 << (yIndex - 4) * fontZoom + 1
                                column2 |= 1 << (yIndex - 4) * fontZoom + 2
                            }

                    bufferIndex = (x + charOfString) * 5 * fontZoom + y * 128 + xIndex * fontZoom + 1

                    if (fontZoom == 1)
                        screenBuf[bufferIndex] = column1

                    else {

                        screenBuf[bufferIndex] = column1
                        screenBuf[bufferIndex + 1] = column1
                        screenBuf[bufferIndex + 128] = column2
                        screenBuf[bufferIndex + 129] = column2
                    }

                    if (fontZoom == 2)
                        bufferIndex += 129
                }
            }

            set_pos(x * 5 * fontZoom, y)
            let start = x * 5 * fontZoom + y * 128
            let buf2 = screenBuf.slice(start, bufferIndex + 1)
            buf2[0] = 0x40
            pins.i2cWriteBuffer(displayAddress, buf2)

            if (fontZoom == 1)
                y++

            else
                y += 2
        }
    }

    /**
     * Clear a specific line on the screen (1 to 8).
     * @param line is line to clear, eg: 1
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear_line" block="clear line %line"
    //% weight=80 blockGap=8
    //% group="Delete"
    //% expandableArgumentMode="enable"
    //% inlineInputMode=inline
    //% line.min=1 line.max=8
    export function clearLine(line: number, screen?: 1) {
        let y = 0
        let x = 0
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        // Subtract '1' from the line number to return correct y value
        y = (line - 1)

        let col = 0
        let charDisplayBytes = 0
        let ind = 0

        show("                          ", line) // Write 26 spaces to the selected line to clear it
    }

    /**
     * Draw a line of a specific length in pixels, using the (x, y) coordinates as a starting point.
     * @param lineDirection is the selection of either horizontal line or vertical line
     * @param x is start position on the X axis, eg: 0
     * @param y is start position on the Y axis, eg: 0
     * @param len is the length of line, length is the number of pixels, eg: 10
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_draw_line" block="draw a %lineDirection | line with length of %len starting at x %x|y %y"
    //% weight=72 blockGap=8
    //% group="Draw"
    //% x.min=0, x.max=127
    //% y.min=0, y.max=63
    //% len.min=-127, len.max=127
    //% inlineInputMode=inline
    export function drawLine(lineDirection: LineDirectionSelection, len: number, x: number, y: number, screen?: 1) {
        if (lineDirection == LineDirectionSelection.horizontal) {
            if (len >= 128) { //check line length is not greater than screen length
                len = 127       //if so, set to screen length max
            }
            else if (len < 0) {  //check if the line is a negative number
                if (len <= -128) {   //limit to maximum screen length as a negative number
                    len = -127      //set max negative line limit horizontal
                }
                len = Math.abs(len) //take absolute of the number for the length
                x = x - len         //move the X point to the start of the line as drawing left to riight
                if (x < 0) {         //check if X is now a negative number
                    len = len + x   //if so then length calulated to 0 point
                    x = 0           //x is now 0
                }
            }

            if ((x + len) > 127) {     //check that the length of line from the X start point does not exceed the screen limits
                len = 127 - x       //if so adjust length to the length from X to the end of screen
            }
            for (let hPixel = x; hPixel < (x + len); hPixel++)      // Loop to set the pixels in the horizontal line
                setPixel(hPixel, y, screen)
        }
        else if (lineDirection == LineDirectionSelection.vertical) {
            if (len >= 64) {          // check for max vertical length
                len = 63            //if so, set to screen height max
            }
            else if (len < 0) {     //check if the line is a negative number
                if (len <= -63) {    //limit to maximum screen length as a negative number
                    len = -63       //set max negative line limit vertically
                }
                len = Math.abs(len) //take absolute value of length and adjust the y value
                y = y - len         //move the Y point to the start of the line as drawing left to riight
                if (y < 0) {    //check the y has not gone below 0
                    len = len + y   //if so then length calulated to 0 point
                    y = 0           //y is now 0
                }
            }

            if ((y + len) > 63) {   //check that the length of line from the Y start point does not exceed the screen limits
                len = 63 - x        //if so adjust length to the length from X to the end of screen
            }
            for (let vPixel = y; vPixel < (y + len); vPixel++)      // Loop to set the pixels in the vertical line
                setPixel(x, vPixel, screen)
        }
    }

    /**
     * Draw a rectangle with a specific width and height in pixels, using the (x, y) coordinates as a starting point.
     * @param width is width of the rectangle, eg: 60
     * @param height is height of the rectangle, eg: 30
     * @param x is the start position on the X axis, eg: 0
     * @param y is the start position on the Y axis, eg: 0
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_draw_rect" block="draw a rectangle %width|wide %height|high from position x %x|y %y"
    //% weight=71 blockGap=8
    //% group="Draw"
    //% inlineInputMode=inline
    //% width.min=1 width.max=127
    //% height.min=1 height.max=63
    //% x.min=0 x.max=127
    //% y.min=0 y.max=63
    export function drawRect(width: number, height: number, x: number, y: number, screen?: 1) {
        if (!x) {    // If variable 'x' has not been used, default to x position of 0
            x = 0
        }

        if (!y) {    // If variable 'y' has not been used, default to y position of 0
            y = 0
        }

        // Draw the lines for each side of the rectangle
        drawLine(LineDirectionSelection.horizontal, width, x, y, screen)
        drawLine(LineDirectionSelection.horizontal, width, x, y + height, screen)
        drawLine(LineDirectionSelection.vertical, height, x, y, screen)
        drawLine(LineDirectionSelection.vertical, height, x + width, y, screen)
    }

    /**
     * Clear all pixels, text and images on the screen.
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_clear" block="clear display"
    //% group="Delete"
    //% weight=63 blockGap=8
    export function clear(screen?: number) {
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        screenBuf.fill(0)       // Fill the screenBuf with all '0'
        screenBuf[0] = 0x40
        set_pos()               // Set position to the start of the screen
        pins.i2cWriteBuffer(displayAddress, screenBuf)  // Write clear buffer to the screen
    }

    /**
     * Turn the screen on and off. The information on the screen will be kept when it is off, ready to be displayed again.
     * @param displayOutput is the boolean setting for the screen, either ON or OFF
     * @param screen is screen selection when using multiple screens
     */
    //% blockId=VIEW128x64_display_on_off_control
    //% block="turn %displayOutput=on_off_toggle| display"
    //% group="Control"
    //% expandableArgumentMode="toggle"
    //% weight=80 blockGap=8
    export function controlDisplayOnOff(displayOutput: boolean, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        if (displayOutput == true) {
            writeOneByte(0xAF)      // Turn display output on
        }
        else {
            writeOneByte(0xAE)      // Turn display output off
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
     * Start plotting a live graph of the chosen variable or input on the screen. 
     * @param plotVariable is the variable to be recorded on a graph on the display
     * @param screen is screen selection when using multiple screens
     */
    //% blockId="VIEW128x64_plot_request"
    //% group="Draw"
    //% block="plot %plotVariable| onto display"
    //% weight=100 blockGap=8
    export function plot(plotVariable: number, screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        let plotLength = plotArray.length
        if (plotLength == 127) {     // If the length of the array has reached the max number of pixels, shift the array and remove the oldest value
            plotArray.shift()
        }
        // Round the variable to use ints rather than floats
        plotVariable = Math.round(plotVariable)
        // Add the value to the end of the array
        plotArray.push(plotVariable)

        // If the variable exceeds the scale of the y axis, update the min or max limits
        if (plotVariable > graphYMax)
            graphYMax = plotVariable
        if (plotVariable < graphYMin)
            graphYMin = plotVariable

        // 'for' loop plots the graph on the display
        for (let arrayPosition = 0; arrayPosition <= plotLength; arrayPosition++) {
            let x3 = arrayPosition  // Start of the screen (x-axis)
            let yPlot = plotArray[arrayPosition]
            // Map the variables to scale between the min and max values to the min and max graph pixel area
            yPlot = pins.map(yPlot, graphYMin, graphYMax, GRAPH_Y_MIN_LOCATION, GRAPH_Y_MAX_LOCATION)

            if (arrayPosition == 0) {
                previousYPlot = yPlot
            }
            let y3 = 0
            let len = 0

            // Determine if the line needs to be drawn from the last point to the new or visa-versa (vertical lines can only be drawn down the screen)
            if (yPlot < previousYPlot) {
                y3 = yPlot
                len = (previousYPlot - yPlot)
            }
            else if (yPlot > previousYPlot) {
                y3 = previousYPlot
                len = (yPlot - previousYPlot)
            }
            else {
                y3 = yPlot
                len = 1
            }

            // Clear plots in screenBuffer
            let page3 = 0
            for (let pixel = GRAPH_Y_MAX_LOCATION; pixel <= GRAPH_Y_MIN_LOCATION; pixel++) {
                page3 = pixel >> 3
                let shift_page3 = pixel % 8
                let ind5 = x3 + page3 * 128 + 1
                let screenPixel3 = clearBit(screenBuf[ind5], shift_page3)   // Clear the screen data byte
                screenBuf[ind5] = screenPixel3                              // Store data in screenBuffer
            }

            // Plot new data in screenBuffer
            for (let pixel = y3; pixel < (y3 + len); pixel++) {
                page3 = pixel >> 3
                let shift_page4 = pixel % 8
                let ind6 = x3 + page3 * 128 + 1
                let screenPixel4 = (screenBuf[ind6] | (1 << shift_page4))   // Set the screen data byte
                screenBuf[ind6] = screenPixel4                              // Store data in screen buffer
            }
            previousYPlot = yPlot
        }
        refresh() // Refresh screen with new data in screenBuffer
    }


    //////////////////////////////////////
    //
    //      Expert blocks
    //
    //////////////////////////////////////

    /**
     * Update or refresh the screen if any data has been changed.
     * @param screen is screen selection when using multiple screens
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_draw" block="refresh display"
    //% weight=63 blockGap=8
    export function refresh(screen?: 1) {
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        set_pos()
        pins.i2cWriteBuffer(displayAddress, screenBuf)
    }

    /**
     * Invert the colours on the screen (black to white, white to black)
     * @param output toggles between inverting the colours of the display
     */
    //% subcategory=advanced
    //% group="Control"
    //% blockId="VIEW128x64_invert_screen" block="inverted display %output=on_off_toggle"
    //% weight=62 blockGap=8
    export function invert(output: boolean, screen?: 1) {
        let invertRegisterValue = 0
        displayAddress = setScreenAddr(screen)
        if (initialised == 0) {
            initDisplay(1)
        }

        if (output == true) {
            invertRegisterValue = 0xA7
        }
        else {
            invertRegisterValue = 0xA6
        }
        writeOneByte(invertRegisterValue)
    }

}
