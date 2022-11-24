<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 2 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Template Title Here</title>
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
      <script src="js/bootstrap.bundle.min.js"></script>  
      <link rel="stylesheet" type="text/css" href="css/21-nav.css">
   </head>
   <body>
    <main class="container-fluid">

        <?php include 'inc/21-nav.php'; ?>
        <?php include 'inc/21-header.php'; ?>
 
          
         
        <header> 
            <div>
                <h1>My Simple Landing Page</h1>
             </div>
        </header>


          <div class="row">
            <div class="col-md-6">
            <p>My name is Niteesh Kalangi. I am a senior at Glastonbury High School, and I am 17 years old. </p>
            <img src="img/niteesh-kalangi-3.jpg" alt="Not Available" height="400">
            </div>
            <div class="col-md-6">
                <p>I coded this website to tell you a little bit more about about myself, whether you are looking for my experiences, hobbies, or education</p>
                <img src="img/niteesh-kalangi-4.jpeg" alt="Not Available" height="400">
            </div>
          </div>

          <?php include 'inc/21-footer.php'; ?>
          

      </main>
   </body>
</html>