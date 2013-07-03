$(document).ready(function(){
  $('#get_color').on('click', function() {
  	$.post('/color', function(results) {
  		var cell = results["cell"];  		
  		var color = results["color"];
  		$("#color_me li:nth-child("+cell+")").css("background", color);
  	});
  })
});