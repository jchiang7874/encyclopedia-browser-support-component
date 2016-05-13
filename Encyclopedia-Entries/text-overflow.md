# The css `text-overflow` Property

The CSS text-overflow property is used to define how text gets clipped off when it overflows its container's box. This only comes in to effect when the parent container has its `overflow` attribute set to `hidden`. According to the CSS MDN, text can overflow when it is prevented from wrapping (e.g., due to ‘white-space: nowrap’) or a single word being too long to fit.

Text-overflow can only happen on block or inline elements because the element needs a specified width for it to overflow.

## Values

### clipped

This is the default value for the property and indicates that the text will be clipped at the boundary of the content box. Truncation can happen in the middle of a character.

### ellipsis

This value will cut off your text by displaying three ellipses `...` before the clipped content. The ellipsis is displayed inside the content box so this value decreases the amount of content displayed.

### string

The string value is used to display a custom string at the point of truncation. This feature however, is currently experimental and is not well supported. 

###Illustration


![](http://i.imgur.com/Ogzpyi3.png)


