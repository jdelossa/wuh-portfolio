
//Resize iframe in modal
$('.tablet').on('click', function(){
	$('iframe.modal-frame').removeClass('resize-desktop');
    $('iframe.modal-frame').addClass('resize-tablet');
});



/*
*
*	This doesn't work as well as intended. Might want to rethink this.
*
*/

// $(document).ready(function () {
//     $('.frame, .modal-frame').on('load', function () {
//         $('.loader').hide();
//     });
// });