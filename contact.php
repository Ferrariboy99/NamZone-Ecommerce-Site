<?php include 'includes/session.php'; ?>
<?php include 'includes/header.php'; ?>
<body class="hold-transition skin-blue layout-top-nav">
<div class="wrapper">

  <?php include 'includes/navbar.php'; ?>
  
  <div class="content-wrapper">
    <div class="container">

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-sm-8">
            <h1>Contact NamZone</h1>
            <p class="lead">We'd love to hear from you!</p>
            
            <div class="box box-solid">
              <div class="box-body">
                <?php
                  if(isset($_SESSION['error'])){
                    echo "
                      <div class='alert alert-danger alert-dismissible'>
                        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                        <h4><i class='icon fa fa-warning'></i> Error!</h4>
                        ".$_SESSION['error']."
                      </div>
                    ";
                    unset($_SESSION['error']);
                  }
                  if(isset($_SESSION['success'])){
                    echo "
                      <div class='alert alert-success alert-dismissible'>
                        <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                        <h4><i class='icon fa fa-check'></i> Success!</h4>
                        ".$_SESSION['success']."
                      </div>
                    ";
                    unset($_SESSION['success']);
                  }
                ?>
                
                <form action="contact_process.php" method="POST">
                  <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                  </div>
                  <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" required>
                  </div>
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary" name="contact">Send Message</button>
                </form>
              </div>
            </div>
            
            <div class="box box-solid">
              <div class="box-body">
                <h4>Our Location</h4>
                <p><i class="fa fa-map-marker"></i> 123 Independence Avenue, Windhoek, Namibia</p>
                <p><i class="fa fa-phone"></i> +264 61 123 4567</p>
                <p><i class="fa fa-envelope"></i> info@namzone.com.na</p>
                
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM to 5:00 PM</p>
                <p>Saturday: 9:00 AM to 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div class="col-sm-4">
            <!-- Most Viewed Today -->
            <div class="row">
              <div class="box box-solid">
                <div class="box-header with-border">
                  <h3 class="box-title"><b>Most Viewed Today</b></h3>
                </div>
                <div class="box-body">
                  <ul id="trending">
                  <?php
                    $now = date('Y-m-d');
                    $conn = $pdo->open();

                    $stmt = $conn->prepare("SELECT * FROM products WHERE date_view=:now ORDER BY counter DESC LIMIT 10");
                    $stmt->execute(['now'=>$now]);
                    foreach($stmt as $row){
                      echo "<li><a href='product.php?product=".$row['slug']."'>".$row['name']."</a></li>";
                    }

                    $pdo->close();
                  ?>
                  <ul>
                </div>
              </div>
            </div>

            <!-- Become a Subscriber -->
            <div class="row">
              <div class="box box-solid">
                <div class="box-header with-border">
                  <h3 class="box-title"><b>Become a Subscriber</b></h3>
                </div>
                <div class="box-body">
                  <p>Get free updates on the latest products and discounts, straight to your inbox.</p>
                  <form method="POST" action="">
                    <div class="input-group">
                      <input type="text" class="form-control">
                      <span class="input-group-btn">
                          <button type="button" class="btn btn-info btn-flat"><i class="fa fa-envelope"></i> </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="row">
              <div class='box box-solid'>
                <div class='box-header with-border'>
                  <h3 class='box-title'><b>Follow us on Social Media</b></h3>
                </div>
                <div class='box-body'>
                  <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                  <a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
                  <a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a>
                  <a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a>
                  <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  </div>
  
  <?php include 'includes/footer.php'; ?>
  
</div>

<?php include 'includes/scripts.php'; ?>
</body>
</html>