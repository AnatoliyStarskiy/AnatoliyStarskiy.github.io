<?php

$name = $_POST['name'];
$text = $_POST['text'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'smmastar'; // Наш логин
$mail->Password = 'jxjdlewumyhcjkvu'; // Наш пароль от ящика
$mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to                                   // TCP port to connect to

$mail->setFrom('smmastar@yandex.ru', 'Pulse'); // От кого письмо 
$mail->addAddress('AStarskiy@yandex.ru'); // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body = '
Пользователь оставил данные <br> 
Имя: ' . $name . ' <br>
E-mail: ' . $email . ' <br>
Текст письма: ' . $text . '';

if (!$mail->send()) {
	return false;
} else {
	return true;
}

?>