/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 * From: https://github.com/zenorocha/jquery-plugin-patterns
 */


// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {
    
    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.
    
    // window and document are passed through as local variables rather than globals
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'tiles',
        defaults = {
            columns: 12
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or 
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    function reTile (ref) {
        var e = jQuery("<div class='span1'>&nbsp;</div>");
        jQuery(ref.element).prepend(e);
        var columnWidth = e.width();
        e.remove();

        var rowWidth = 0;
        var rowItems = [];
        var columns = 0;
        var rows = [];
        jQuery(ref.element).find(ref.options.childSelector).each(function(){
            var t = jQuery(this);
            for (var i = 0; i < 13; i++) {
                t.removeClass("span"+i);
            }
            columns = Math.ceil(t.width() / columnWidth);
            if(rowWidth + columns > 11){
                rows.push({
                    items: rowItems,
                    width: rowWidth
                });
                rowWidth = 0;
                rowItems = [];
            }
            rowWidth = rowWidth + columns;
            rowItems.push(t[0]);
        });
        rows.push({
            items: rowItems,
            width: rowWidth
        });

        jQuery(rows).each(function(i){
            var maxHeight = 0;
            var items = rows[i].items;
            var delta = 12 - rows[i].width;
            var deltaCeil = Math.ceil(delta / items.length);
            var deltaFloor = Math.floor(delta / items.length);
            jQuery(items).each(function(i){
                var item = jQuery(this);
                item.removeAttr("style");
                var width = Math.ceil(item.width() / columnWidth);
                if(i == 0){
                    item.addClass("span" + (width + deltaCeil) );
                }else{
                    item.addClass("span" + (width + deltaFloor) );
                }
                item.height('auto');
                if(item.outerHeight() > maxHeight)
                    maxHeight = item.outerHeight();
            });
            jQuery(items[0]).css("margin-left", 0);
            jQuery(items).height(maxHeight);
        });
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and the options via the instance, 
        // e.g., this.element and this.options
        reTile(this);
        var ref = this;
        jQuery(window).resize(function(){
            console.log(ref);
            reTile(ref);
        });
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    }

})(jQuery, window);

jQuery(document).ready(function(){
    jQuery("[data-tiles]").each(function(){
        jQuery(this).tiles({
            childSelector: jQuery(this).attr("data-tiles")
        });
    });
});