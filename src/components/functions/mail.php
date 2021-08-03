<?php
   
//jsで送られてきたデータを受け取り、変数に入れます。
//PHPでは変数の書き方は$と文字列となります。
$mailarea = htmlspecialchars($_POST['mailarea'], ENT_QUOTES);
$namearea = htmlspecialchars($_POST['namearea'], ENT_QUOTES);
$textboxarea = htmlspecialchars($_POST['textboxarea'], ENT_QUOTES);
   
//以下はメールを送るための1セットのソースコードだと思ってください。
//まずは文字コードを日本語,UTF-8に設定します。
header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");
   
//送信先のメールアドレスを変数に入れておきます。
//ただ、変数という箱に入れただけでこれで送れるとかではありません。
$mail="kentuuuwork@gmail.com";
//タイトルを変数に入れておきます。
$sub1="[自動返信] この度はお問い合わせありがとうございます。";
//$mailareaとは、ユーザーが入力したメールアドレスです。
//$mail_toという変数に入れて、送る時に使います。
$mail_to = $mailarea;
   
//メールの本文を書きます。
//改行しながら変数に一行ずつ書いていきましょう。
$messegeall .= "お問合せありがとうございます。\n";
$messegeall .= "今後とも、何卒、よろしくお願いいたします。\n";
$messegeall .= "\n";
$messegeall .= "─登録内容の確認─────────────────\n";
$messegeall .= "\n";
$messegeall .= "お名前：".$namearea."\n";
$messegeall .= "メールアドレス：".$mailarea."\n";
$messegeall .= "テキスト：\n";
$messegeall .= $textboxarea."\n";
$messegeall .= "\n";
$messegeall .= "─────────────────────────\n";
$messegeall .= "\n";
$messegeall .= "============================================\n";
$messegeall .= "このメールは自動送信です。\n";
$messegeall .= "お心当たりのない方は、お手数をおかけいたしますが、\n";
$messegeall .= "下記メールアドレスまでご連絡ください。\n";
$messegeall .= "メールアドレス：　kentuuuwork@gmail.com\n";
$messegeall .= "============================================\n";
   
//ここでメールを送信します。
//下記のフォーマットの該当箇所にデータの入った変数をいれましょう。
//$success1=mb_send_mail(送り先メアド,タイトル,メッセージ内容,"From:".送り元メアド);
//しかし、これだけでは「自動返信メール」が届きません。
$success1=mb_send_mail($mail_to,$sub1,$messegeall,"From:".$mail);
//自動返信メールは送り先メアドと、送り元メアドを交換すると送れます。
$success2=mb_send_mail($mail,$sub1,$messegeall,"From:".$mail_to);
   
//最後はjsonという形で送信メッセージをjsに戻します。
header('Content-type: application/json');
echo json_encode( "送信が完了しました！" );
   
?>