<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "Od: $name \n Poruka: $message";
$recipient = "nina.kopic2@gmail.com";
$subject = "Blanje";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Greška!");
echo "Poruka poslana!" . " -" . "<a href='../index.html' style='text-decoration:none;color:#72968f;'> Povratak na stranicu</a>";

?>