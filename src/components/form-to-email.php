<?php
if($_POST["sendMail"]) {
    $email_from = "krishma_bhatia@outlook.com";
    $visitor_email = $_POST['email'];
    
  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

mail("krishma_bhatia@outlook.com", "New Form Submission",
$_POST['message'],$headers);
}
?>