<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>15-contact-us.php</title>
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/21-nav.css">
</head>
<body>
<!--  Add whatever HTML code you need here -->
<?php include 'inc/21-nav.php'; ?>
<?php include 'inc/21-header.php'; ?>
<h1>15-contact-us.php</h1>

<!-- BELOW IS THE START OF THE PHP SEND MAIL CODE -->
<!-- ABOVE IS THE END OF THE PHP SEND MAIL CODE -->

<!-- This HTML form will display if NOT sending an email -->
<form action="" method="post">
   First Name: <input type="text" name="first_name"><br>
   Last Name:  <input type="text" name="last_name"><br>
   Email:      <input type="text" name="email"><br>
   Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
   <input type="submit" name="submit" value="Submit">
</form>

<!--  Okay to put HTML BELOW THIS LINE --> 
<?php include 'inc/21-footer.php'; ?>



</body>
</html> 