( function($) {
	$.fn.wideText = function() {
		return this.each( function() {
			// Add "wtext" class to each element and then set up the magic
			var	obj = $(this),
				rtext = obj.addClass( 'wtext' );

			// Work that magic each time the browser is resized
			$(window).on( 'resize', function() {
				obj.css( { 'fontSize': parseInt( obj.css( 'fontSize' ) ) * ( obj.parent().width() / obj.width() ) + 'px', 'visibility' : 'visible' } );
			} ).resize();
		});
	};
} )(jQuery);