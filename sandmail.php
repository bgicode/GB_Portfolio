<?php
	$to = "bgdesigner@yandex.ru";
	$from = trim($_POST['email']);

	$name = htmlspecialchars($_POST['name']);
	$name = urldecode($name);
	$name = trim($name);

	$message = htmlspecialchars($_POST['message']);
	$message = urldecode($message);
	$message = trim($message);

	$headers = "From: $from" . "\r\n" . 
	"Reply-To: $from" . "\r\n" . 
	"X-Mailer: PHP/" . phpversion();

	if(mail($to, $name, $message, $headers)) {
		echo 'Письмо отправлено';		
	} else {
		echo 'Письмо не отправлено';
	}
?>