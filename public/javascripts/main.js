$(document).ready(function(){
	$("form").submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: "/submit-matricule",
			data: $("form").serialize(),
			success: function(res) {
				if(res.success) {
					$("#matricules").append("<li>" + res.matricule +"</li>");
					$("#error").css("background-color", "green");
					$("#error").html("Le matricule" + res.matricule + " a été ajouté");
				} else {
					$("#error").css("background-color", "red");
					$("#error").html("Le matricule" + res.matricule + " n'est pas valide");
				}
			},
		});
	});
});

