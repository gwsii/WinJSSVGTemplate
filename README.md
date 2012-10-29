WinJSSVGTemplate
================

Sample project that demonstrates the use of SVG in a WinJS Template control.

This is a Windows Store app that illustrates the use of SVG in a 
WinJS.Binding.Template control and how to write custom converters to control
the SVG element's size and color.

When creating my Windows Store application Gamer Dice, I wanted to provide a 
compelling visual representation of the dice the player was using that scaled 
well when the dice were shown at different sizes, in different colors (tints) 
and could show the numeric result of the roll. After thinking about a number 
of different approaches, the one chosen uses SVG to describe the shape of the 
die in a WinJS.Binding.Template control, and binds the size, color and value 
of the die. 

This project illustrates how to use this pattern in a Win8 JavaScript application. 
I'm going to assume working knowledge of Windows Web Applications (WWA) and 
Scalable Vector Graphics (SVG).

