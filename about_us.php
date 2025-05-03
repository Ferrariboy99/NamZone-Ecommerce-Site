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
            <h1>About NamZone</h1>
            <p class="lead">Connecting Buyers and Sellers Across Namibia</p>
            
            <div class="box box-solid">
              <div class="box-body">
                <h4>Our Story</h4>
                <p>Founded in 2023, NamZone was born out of a need to create a trusted marketplace for second-hand goods in Namibia. We recognized that many Namibians have quality pre-owned items they no longer need, while others are looking for affordable alternatives to new products.</p>
                
                <h4>Our Mission</h4>
                <p>To create Namibia's most reliable and user-friendly platform for buying and selling second-hand goods, fostering a circular economy that benefits both our users and the environment.</p>
                
                <h4>Why Choose NamZone?</h4>
                <ul>
                  <li><strong>Local Focus:</strong> Designed specifically for the Namibian market</li>
                  <li><strong>Trusted Community:</strong> Verified users and secure transactions</li>
                  <li><strong>Wide Variety:</strong> From electronics to furniture and more</li>
                  <li><strong>Eco-Friendly:</strong> Promoting reuse and reducing waste</li>
                </ul>
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