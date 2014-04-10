# Quick Bars #
I was working on a personal project about a favorite PC game of mine and I needed some chart plug-in to build bars and pies for me. While [Highcharts](http://www.highcharts.com/) are super awesome, they are not responsive (at the moment of writing this) and offer a bit more than what I need. So I decided to learn jQuery plugins and write my own.

Quick Bars is a jQuery plug-in that takes an array of objects and builds horizontal bars based on the information. It is very basic and needs a lot of cleaning and work to add more meaningful options.

Here is a [Demo](http://codepen.io/Danman7/pen/dtjaB).

## How does it work? ##
```html
$( "#element" ).quickBars({
	data: [{"name":"Attribute1", "size": integer1},
	       {"name":"Attribute2", "size": integer2}
	      ]
});
```

I will work on the specific syntax , but at the moment what you do is populate the data array with an object for each bar you want. The name value is the name of the bar's label while the size is the width of the bar in percentage of the parent element. This is the biggest limitations I believe, but it works for my needs so far. I will expand this.

## Stylesheet?
I deliberately chose to do the styling within the script, because I don't enjoy additional stylesheets that I should add to my project, just to make the plugin work. However, feel free to modify the `.h_bar` class that the horizontal bars are using in any way that you wish.

## Options ##
* `data` - this is the only mandatory option for the plugin to work
* `animated ` - boolean - if false the horizontal bars won't display an animation on load
* `tooltips ` - boolean - sets whether the bars will use their name value as tooltips
* `units ` - string - at the momen this setting accepts only **percent** and **pixels**

### Cosmetic ###
* `markings` - boolean - enables or disables the 0, 50 and 100% markings, leaving only the bars
* `container_margin` - string - sets the margin of the target element
* `bar_margin` - integer - sets margin between bars
* `bar_padding ` - string - sets padding inside the bars
* `border_radius ` - integer - sets bars rounded edges
* `lables_color` - string - sets color of the labels
* `bold` - boolean - whether the labels are bold or not
* `bar_shadows` - string - probably the most visual setting of all - sets the box shadows of individual bars

## To be done ##
Like I said this needs a lot of work. For example:
* Increase customization and public access to defaults
* The user should be able to choose the units the bars will take for width, rather than have percentage of parent width.
* Add the ability to display values.
* Lots more that I can't think of now...