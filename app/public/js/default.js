$(document).ready(function() {
  
	$('[data-toggle="affix"]').each(function() {

		$(this).stick_in_parent({
			sticky_class: 'affix',
			parent: $(this).data('parent'),
			offset_top: $(this).data('offset')
		});
	});

});
