jQuery(document).ready(function($) {
	
	// WP FIX: Comment Form Button Class
	$('#comments .form-submit #submit').addClass('button primary');
	
	function fixPortfolioNav()
	{
		$('.portfolio-nav .left-arrow a').addClass('icon button prev ajax');
		$('.portfolio-nav .right-arrow a').addClass('icon button next ajax');
	}
	
	// WP FIX: PORTFOLIO SINGLE NAV
	fixPortfolioNav();
	
	$(document).ajaxComplete(function(event, request, settings) {
		fixPortfolioNav();
	});
}); // end DOCUMENT READY