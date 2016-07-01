# The `window.print()` Method

This `print` method of the `window` object opens up the `Print` dialog in your browser so that you can print the current page's contents using an actual printer.

This is very useful in instances where you need a button that allows the user to print your webpage. It can be called directly from the HTML  through the `onClick` attribute as well, making it very suitable for use with forms.

###Examples

	<form>
		<input type="button" onClick="window.print()">
	</form>

Images can also be embedded with the print function to create clickable icons. This can be achieved using `return false` in an image link.

	<a href="index.html" onClick="window.print();return false"><img src="print-icon.jpg"></a>

And it can also be done using a javascript URL in an image link.

	<a href="javascript:window.print()"><img src="print-logo.jpg"></a>

