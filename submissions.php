<?php
include 'connection.php';

$sql = "SELECT id, first_name, last_name, email, timeframe, createdDate FROM form_submissions";
$result = $connection->query($sql);

$connection->close();
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Sisense Project by Laura Evans | Submissions</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:300,400" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" type="image/png" href="img/favicon.png">
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col">

          <h1>Submissions</h1>

          <?php
          if ($result->num_rows > 0) { ?>

          <table class="table table-bordered table-hover">
            <thead class="bg-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Timeframe</th>
                <th scope="col">Created Date</th>
              </tr>
            </thead>
            <tbody>
              <?php
              while($row = $result->fetch_assoc()) { ?>
                <tr>
                  <th scope="row"><?php echo $row["id"]; ?></th>
                  <td><?php echo $row["first_name"]; ?></td>
                  <td><?php echo $row["last_name"]; ?></td>
                  <td><?php echo $row["email"]; ?></td>
                  <td><?php echo $row["timeframe"]; ?></td>
                  <td><?php echo $row["createdDate"]; ?></td>
                </tr>
              <?php
              } ?>
            </tbody>
          </table>

          <?php
          } else {
              echo "<p>No results</p>";
          }
          ?>

        </div>
      </div>
    </div>
  </body>
</html>
