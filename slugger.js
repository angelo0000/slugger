(function( $ ){
  $.fn.slugger = function(options) {
	$this = $(this);
	config = { target: '.slug' }
	
	if(options){
		$.extend(config, options);
	}
	
	return $this.keyup(function(){
		$(config.target).html($this.val().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase());
	});
  };
})( jQuery );
