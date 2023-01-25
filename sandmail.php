<?php
  require 'phpmailer/PHPMailer.php';
	require 'phpmailer/SMTP.php';
	require 'phpmailer/Exception.php';

	$name = $_POST['user_name'];
	$email = $_POST['user_email'];
	$text = $_POST['message'];

	$title = "Письмо с порфолио";
	$body = "
	<h2>Новое письмо</h2>
	<b>Имя:</b> $name<br>
	<b>Почта:</b> $email<br><br>
	<b>Сообщение:</b><br>$text";
	
	$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'desimo123@mail.ru'; // Логин на почте
    $mail->Password   = '#'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('desimo123@mail.ru', 'Имяотправителя'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('bgdesigner@yandex.ru');  
    

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "Сообщение отправлено";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
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
<h1 class='massage'>"
?> 
<?php echo implode(["result" => $result, "status" => $status]);"</h1>
<script src='./iframeResizer.contentWindow.min.js'>		
</script> 
</body>
</html>"

	
?>