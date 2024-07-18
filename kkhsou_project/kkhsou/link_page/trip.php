<?php
//  $insert = false;
// if(isset($_POST['reg'])){
//     // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";


//     // Create a database connection
   $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    echo "Successhh connecting to the db";
    

//     // Collect post variables
     $reg = $_POST ['reg'];
     $name = $_POST['name'];
     $age = $_POST['age'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $desc = $_POST['desc'];
   $sql = "INSERT INTO `trip`.`trip` ( `reg`, `name`, `age`,  `email`, `phone`, `desc`, `dt`) VALUES ( '$reg' , '$name',  '$age', '$email', '$phone', '$desc', current_timestamp());";

     // echo $sql;

    // // Execute the query
    // if($con->query($sql) == true){
    // //   echo "Successfully inserted";
    
    //     // Flag for successful insertion
    //     $insert = true;
    //  }
    //  else{
    //      echo "ERROR: $sql <br> $con->error";
    //     }

    // // Close the database connection
    // $con->close();
    // }
    ?>
    


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to summer trip form</title>
   
    <link rel="stylesheet" href= "trip.css">
</head>



<body>
    <img class="bg" src="kkhsou_bg.jpeg" alt="kkhsou">
    <div class="container">
        <h1>Welcome to KKHSOU summer Trip form</h1>
        <p>Enter your details and submit this form to confirm your participation in the trip </p>
      

         
      <?php
      
      if($insert == true){
      echo "<p class='submitMsg'>Thanks for submitting your form. We are happy to see you joining us</p>";}
      ?> 
       --> 

    
        <form action="trip.php" method="post">
          
           <br> <input type="number" name="reg" id="reg" placeholder="Enter your Registration Number">
           <!-- <p >Name:* </p><br> -->
          <input type="text" name="name" id="name" placeholder="Enter your name">
           <!-- <input type="text" name="gender" id="gender" placeholder="Enter your gender"> -->
           <!-- <P>Age:*</p> <br> -->
          <input type="number" name="age" id="age" placeholder="Enter your Age">
           <!-- <P>Mail Id:*</p> <br> -->
           <input type="email" name="email" id="email" placeholder="Enter your email">
           <!-- <P>Mobile:*</p>  -->
           <input type="phone" name="phone" id="phone" placeholder="Enter your phone">
           <!-- <P>Your Comment:*</p>  -->
           <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Enter any other information here"></textarea>
            <button class="btn">Submit</button> 
        </form>
    </div>
    
    
    </body>
    </html>
    