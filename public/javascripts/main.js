$(document).ready(function(){
	$("form").submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: "/submit-matricule",
			data: $("form").serialize(),
			success: function(data, text) {
				console.log(data);
				if(data.success) {
					$("#matricules").append("<li>" + data.matricule +"</li>");
					$("#error").css("background-color", "green");
					$("#error").html("Le matricule " + data.matricule + " a été ajouté");
				} else {
					$("#error").css("background-color", "red");
					$("#error").html(data.matricule + ": " + data.msg);
				}
			},
		});
	});
});

