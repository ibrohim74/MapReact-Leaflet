<?php

/* https://api.telegram.org/bot5199768262:AAEgRRyugxm7hjKRs4tnN2oHo0Qze-fpQFs/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$email = $_POST['email_adres'];
$massage = $_POST['massage'];
$token = "5160162847:AAEJzLRQ4iAtv1s1YkatGJ84mwCsTJljb_8";
$chat_id = "-601124054";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $email,
  'xabar:' => $massage
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: indexPages.js');
} else {
  echo "Error";
}
?>