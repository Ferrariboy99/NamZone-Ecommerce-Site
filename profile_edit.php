<?php
	include 'includes/session.php';

	$conn = $pdo->open();

	if(isset($_POST['edit'])){
		$curr_password = $_POST['curr_password'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$contact = $_POST['contact'];
		$address = $_POST['address'];
		$photo = $_FILES['photo']['name'];
		$proof_res = $_FILES['proof_res']['name'];
		$id_doc = $_FILES['id_doc']['name'];

		if(password_verify($curr_password, $user['password'])){
			// Handle uploads
			$photo_filename = !empty($photo) ? $photo : $user['photo'];
			if (!empty($photo)) {
				move_uploaded_file($_FILES['photo']['tmp_name'], 'images/'.$photo);
			}

			$proof_res_filename = !empty($proof_res) ? $proof_res : $user['proof_of_residence'] ?? '';
			if (!empty($proof_res)) {
				move_uploaded_file($_FILES['proof_res']['tmp_name'], 'documents/'.$proof_res);
			}

			$id_doc_filename = !empty($id_doc) ? $id_doc : $user['id_document'] ?? '';
			if (!empty($id_doc)) {
				move_uploaded_file($_FILES['id_doc']['tmp_name'], 'documents/'.$id_doc);
			}

			if($password == $user['password']){
				$password = $user['password'];
			}
			else{
				$password = password_hash($password, PASSWORD_DEFAULT);
			}

			try{
				$stmt = $conn->prepare("UPDATE users SET email=:email, password=:password, firstname=:firstname, lastname=:lastname, contact_info=:contact, address=:address, photo=:photo, proof_of_residence=:proof_res, id_document=:id_doc WHERE id=:id");
				$stmt->execute([
					'email'=>$email,
					'password'=>$password,
					'firstname'=>$firstname,
					'lastname'=>$lastname,
					'contact'=>$contact,
					'address'=>$address,
					'photo'=>$photo_filename,
					'proof_res'=>$proof_res_filename,
					'id_doc'=>$id_doc_filename,
					'id'=>$user['id']
				]);

				$_SESSION['success'] = 'Account updated successfully';
			}
			catch(PDOException $e){
				$_SESSION['error'] = $e->getMessage();
			}
			
		}
		else{
			$_SESSION['error'] = 'Incorrect password';
		}
	}
	else{
		$_SESSION['error'] = 'Fill up edit form first';
	}

	$pdo->close();

	header('location: profile.php');
?>