<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 2 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <title>Put Your Name Here</title>
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
      <script src="js/bootstrap.bundle.min.js"></script>  
      <link rel="stylesheet" type="text/css" href="css/learn-style.css">
   </head>
   <body>
      <main class="container-fluid">
         <div class="container-fluid p-3 bg-primary text-white">
            <h1>
              <?php echo $_SERVER['HTTP_HOST'];?>
              <small class="fw-light">[/learn folder]</small>
            </h1>
         </div>
         <div class="container-fluid p-3 bg-info text-black">
            <img src="img/img-avatar.png" />
            <h2>Your Name Here</h2>
            <p>[Return to: <a href='/'>Home</a> ] </p>
            <h2>MCC Fall 2022 - CSC114 Client-side Web Development</h2>
            <hr>
         </div>
         <!-- DO NOT TOUCH THIS PHP CODE BELOW THIS LINE -->
         <div class="container-fluid p-5 my-5 bg-white border">
            <?php
               $dir = '../learn/';
               if ($handle = opendir($dir)) {
                 while(false !== ($file = readdir($handle))) 
                   {if ($file != "." && $file != ".." && $file != "index.php")
                   {if (is_dir("$dir/$file")) $folder_array[] = $file;
               else
                 $file_array[] = $file;}}closedir($handle);}
               if ($file_array)
               {sort ($file_array);foreach($file_array as $file)
               {echo "<a href='$file'>$file</a><br/>";}}
               ?>
         </div>
         <!-- DO NOT TOUCH THE PHP CODE ABOVE THIS LINE -->
      </main>
   </body>
</html>