<?php
  $errors = array();
  $data = array();

  include 'connection.php';

  if(isset($_POST["firstName"])) {
    $firstName = mysqli_real_escape_string($connection, $_POST["firstName"]);
    $lastName = mysqli_real_escape_string($connection, $_POST["lastName"]);
    $timeframe = mysqli_real_escape_string($connection, $_POST["timeframe"]);
    $email = mysqli_real_escape_string($connection, $_POST["email"]);
    $sql = "INSERT INTO form_submissions(first_name, last_name, email, timeframe) VALUES ('".$firstName."','".$lastName."','".$email."', '".$timeframe."')";
    if (mysqli_query($connection, $sql)) {
      $data = array("success");
    } else {
      $errors['database'] = "Unable to insert into database";
    }
  } else {
    $errors['name'] = "No name";
  }

  if ( ! empty($errors)) {
    $data['success'] = false;
    $data['errors']  = $errors;
  } else {
    $data['success'] = true;
    $data['message'] = 'Success!';
  }

  echo json_encode($data);
?>
