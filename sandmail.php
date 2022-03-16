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
		echo "<!DOCTYPE html>
		<html lang='en'>
		<head>
		<meta charset='UTF-8'>
		<meta http-equiv='X-UA-Compatible' content='IE=edge'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<title>Document</title>
		<style>
		
				@import 'fonts.css';
		
				*{			
					color: rgb(219, 219, 219);
					font-family: 'DINPro';
				}
		
				h1{
					text-align: center;
				}
		</style>
</head>
<body>
<h1>Письмо отправлено</h1>
	<script src='./iframeResizer.contentWindow.min.js'>		
	</script> 
</body>
</html>";
			
	} else {
		echo "<!DOCTYPE html>
		<html lang='en'>
		<head>
		<meta charset='UTF-8'>
		<meta http-equiv='X-UA-Compatible' content='IE=edge'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<title>Document</title>
		<style>
		
				@import 'fonts.css';
		
				*{			
					color: rgb(219, 219, 219);
					font-family: 'DINPro';
				}
		
				h1{
					text-align: center;
				}
		</style>
</head>
<body>
<h1>Письмо не отправлено</h1>
	<script src='./iframeResizer.contentWindow.min.js'>		
	</script> 
</body>
</html>";
	}

	
?>