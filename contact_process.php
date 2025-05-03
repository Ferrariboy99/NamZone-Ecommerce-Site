<?php
include 'includes/session.php';

if(isset($_POST['contact'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Validate inputs
    if(empty($name) || empty($email) || empty($subject) || empty($message)){
        $_SESSION['error'] = 'All fields are required';
        header('location: contact.php');
        exit();
    }
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $_SESSION['error'] = 'Invalid email format';
        header('location: contact.php');
        exit();
    }
    
    // Process the message (in a real app, you would send an email or save to database)
    $to = 'info@namzone.com.na';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $email_body = "You have received a new message from $name.\n\n".
                  "Subject: $subject\n\n".
                  "Message:\n$message";
    
    // In production, you would uncomment this:
    // mail($to, $subject, $email_body, $headers);
    
    $_SESSION['success'] = 'Thank you for your message! We will get back to you soon.';
    header('location: contact.php');
    exit();
}
else{
    $_SESSION['error'] = 'Please fill up the contact form first';
    header('location: contact.php');
    exit();
}
?>