$(document).ready(function () {

	/* Stick */
	// basta incluir os seguintes atributos na tag html
	// - data-toggle="affix" -> habilita o stick
	// - data-parent="?" -> nome do wrapper (opcional)
	// - data-offset=? -> distancia em pixels do topo (opcional)
	// - data-stick-class="?" -> classe aplicada quando o stick for aplicado (opcional)
	$('[data-toggle="affix"]').each(function () {
		$(this).stick_in_parent({
			sticky_class: $(this).data('stick-class') || 'affix',
			parent: $(this).data('parent'),
			offset_top: $(this).data('offset')
		});
	});

});

$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});
