<?php 
	$gebruikersnaam = "kristian";
	$wachtwoord = "test";

	if($_POST["username"] == $gebruikersnaam && $_POST["password"] == $wachtwoord){
		echo "correct";
	}
	else{
		echo "Verkeerde gebruikersnaam/wachtwoord";
	}

?>