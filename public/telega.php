<?php

$name = $_POST['first-name'];
$phone = $_POST['telephone'];
$email = $_POST['email'];
$token = "5430915875:AAHtzwtLS4TMkXfCyqIiprHGnu3tqlvIsgY";
$chat_id = "-1001575284037";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>