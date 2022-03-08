
/*
Copyright 2022  Sleepless Software Inc.  All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let sw = canvas.width;
let sh = canvas.height;
let font = load_font( "Arial", 30, "turquoise" );

let assets = {};

function game() {

}

// title/loading screen
title = new Thing();
load_progress = 0;
load_file = "";

title.listen( "draw_4", ( mouse_x, mouse_y ) => {
    if( load_progress < 1.0 ) {
        draw_text( "The Chronicles of Squiddick", sw * 0.5, sh * 0.3, font, "center", 1 );
        draw_text( "Loading: "+round(load_progress * 100)+"% "+load_file, sw * 0.5, sh * 0.4, font, "center", 0.5 );
    } else  {
        draw_text( "The Chronicles of Squiddick", sw * 0.5, sh * 0.3, font, "center", 0.5 );
        draw_text( "Click to Start ", sw * 0.5, sh * 0.4, font, "center", 1 );

        draw_text( "WASD to drive submarine. ", sw * 0.5, sh * 0.60, font, "center", 0.5 );
        draw_text( "M to turn off music.", sw * 0.5, sh * 0.65, font, "center", 0.5 );
        draw_text( "Click squid for ink.", sw * 0.5, sh * 0.70, font, "center", 0.5 );
    }
} );

tick( true ); // turn on ticking; tick handlers will be called

