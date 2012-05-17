var parseMusicForm = function(data){
	// uses form data here;
	console.log(data);
};
$(document).ready(function(){

	var fmform = $('#funmusicform');
	
	fmform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = fmform.serializeArray();
			parseMusicForm(data);
		}	
	});

});