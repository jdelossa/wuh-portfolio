
//Resize iframe in modal
$('.tablet').on('click', function(){
	$('iframe.modal-frame').removeClass('resize-desktop');
    $('iframe.modal-frame').addClass('resize-tablet');
});



//Frame Loading 

$(document).ready(function () {
    $('.frame, .modal-frame').on('load', function () {
        $('.loader').hide();
    });
});