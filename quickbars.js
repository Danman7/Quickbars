$(function() {
//Dan's Quick Bars
	$.fn.quickBars = function(options){
	  var masterElement = this;

	  // Default option values
	  var settings = $.extend({
	    data: [],//The data to be used
	    colors:['#d9534f','#428bca','#5cb85c','#DDDF68','#5bc0de','#f0ad4e', '#99308F'], //Original set of colors

      //Table units
      units: "percent",

	    //Customizing table looks
      container_margin: "10px 0",
      bar_margin: 0,
      bar_padding: "2px 5px",
      border_radius: 3,
      lables_color: '#fff',
      bar_shadows: 'inset 0 -1px 15px #000',
      font_size: "inherit",
      bold: false,
      tooltips: true,
      markings: true,
      animated: true
	  }, options );


    //Create chart marks
    if (settings.markings == true) {
    masterElement.css({"borderTop": "1px solid rgba(0,0,0,.2)", "borderBottom": "1px solid rgba(0,0,0,.2)", "padding": "6px 0","position": "relative"});
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; top: 0; left: 0;"></div>');
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; top: 0; left: 50%;"></div>');
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; top: 0; left: 100%;"></div>');
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; bottom: 0; left: 0;"></div>');
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; bottom: 0; left: 50%;"></div>');
    masterElement.append('<div style="width: 1px; height: 5px; border-left: 1px solid rgba(0,0,0,.2); position: absolute; bottom: 0; left: 100%;"></div>');
    } else {}

	    //Create bars
    $(masterElement).css("margin",settings.container_margin);

    $.each( settings.data, function( key, value) {
        var measurement_unit;
        var singleBar = '<div id="'+masterElement.attr("id")+'_bar_'+key+'" class="h_bar">'+value.name+'</div>',
            thisBar = '#'+masterElement.attr("id")+'_bar_'+key;
        masterElement.append(singleBar);
        $(thisBar).css("background", settings.colors[key%(settings.colors.length)]);
        $(thisBar).css("width", "0");
        if (settings.tooltips == true) {
          $(thisBar).attr("title", value.name);
        } else {
        }

        if (settings.units == "pixels") {
          measurement_unit = value.size+"px";
        } else {
          measurement_unit = value.size+"%";
        }

        //Setting common bar styles
        $(thisBar).css("color", settings.lables_color);
        $(thisBar).css("box-shadow", settings.bar_shadows);
        $(thisBar).css("font-size", settings.font_size);
        $(thisBar).css("border-radius", settings.border_radius+"px");
        $(thisBar).css("overflow", "hidden");
        $(thisBar).css("white-space", "nowrap");
        $(thisBar).css("box-sizing", "border-box");
        $(thisBar).css("margin", settings.bar_margin/2+"px 0");

        if (settings.bold == true){
          $(thisBar).css("font-weight", "bold");
        } else {
          $(thisBar).css("font-weight", "normal");
        }

        //Animations
        if (settings.animated == false) {
            $(thisBar).css("padding", settings.bar_padding);
            $(thisBar).css("width", measurement_unit);
        } else {
          $(thisBar).css("transition", "width ease-in-out 2s");
          setTimeout(function() {
            $(thisBar).css("padding", settings.bar_padding);
            $(thisBar).css("width", measurement_unit);
          }, 1);
        }
    });
	}
});