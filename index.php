<?php
  session_start();
  include "koneksi.php";
  if (!isset($_SESSION['username'])){
    header ("location:login.php");
  }

  if (isset($_SESSION ['username'])){
    $username= $_SESSION['username'];
  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Quizku</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="uts.css">

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">    
  </head>

<style>

  body
  {
      background-image: url("iitam.jpg");
      background-repeat: repeat-x;
      background-size: 40%;
  }

</style>

<body>  

<!--Navbar-->

<div class="navbar navbar-fixed-top navbar-custom ">
  <div class="container" >
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><span class="navbar-logo">Cek Disini!</span></a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#"> Home</a></li>
        <li><a href="quizku.php">Mulai Kuis</a></li>
        <li class="active"><a href="aksi_logout.php"> Logout</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div>
  </div>
</div>
<!--/.Navbar-->
<br></br>
<br><h1><b>Waktunya Kuis!</b></h1></br>     
<br></br>
    
    <div class="container">
      <div class="row">
          <div class="col-sm-3">
              <div class="thumbnail">
                  <a href="artikel.php"><img src="math.jpg"  class="rounded-circle" width="90%" alt="Cinque Terre"></a>
                  <div class="caption">
                  <br><p><a href="artikel.php" class="btn btn-light btn-block" role="button">Selengkapnya</a></p></br>
                  </div>
              </div>
          </div>
          <div class="col-sm-3">
              <div class="thumbnail">
                  <a href="artikel.php"><img src="biologi2.jpg" class="rounded-circle" width="90%" alt="Cinque Terre"></a>
                  <div class="caption">
                  <br><p><a href="artikel.php" class="btn btn-light btn-block" role="button">Selengkapnya</a></p></br>
                  </div>
              </div>
          </div>
          <div class="col-sm-3">
              <div class="thumbnail">
                  <a href="artikel.php"><img src="pisika3.jpeg" class="rounded-circle"  width="90%" alt="Cinque Terre"></a>
                  <div class="caption">
                      <br><p><a href="artikel.php" class="btn btn-light btn-block" role="button">Selengkapnya</a></p></br>
                  </div>
              </div>
          </div>
          <div class="col-sm-3">
              <div class="thumbnail">
                  <a href="artikel.php"><img src="kimia3.jpeg"  class="rounded-circle" width="90%" alt="Cinque Terre"></a>
                  <div class="caption">
                      <br><p><a href="artikel.php" class="btn btn-light btn-block " role="button">Selengkapnya</a></p></br> 
                  </div>
              </div>
          </div>
      </div>
  </div>


    <footer class="text-center mt-3 mb-3">
      <img src="itamm.png" class="logo-center" alt="logo" style="width: 100px;">
      <h5><b>Quizku</b></h5>
      </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
