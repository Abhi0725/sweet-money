<?php
$name = $email = $mobile = $message = $nameErr = $emailErr = "";
if($_SERVER["REQUEST_METHOD"] == "POST")
{
$name = test_input($_POST['name']);
if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
  $nameErr = "Only letters and white space allowed"; 
}
$email = test_input($_POST['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Invalid email format"; 
}
$mobile = test_input($_POST['mobile']);
$message = test_input($_POST['message']);

if($nameErr == "" && $emailErr == "")
{
   $to = "abhi072592@gmail.com";
   $subject = "New Message From SWEET MONEY contact form";
   $message = "Name: ".$name.", Email: ".$email.", Mobile: ".$mobile.", Message: ".$message;
   $response = mail ($to,$subject,$message);
   
   if( $response == true )  
   {
      echo "true";
   }
   else
   {
      echo "false";
   }
 }
else if($nameErr != ""){
 echo "false name";
 }
else if($emailErr != ""){
 echo "false email";
 }

}



function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>