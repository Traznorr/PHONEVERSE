<?php

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$rawBody = file_get_contents("php://input"); // Read body
$data = json_decode($rawBody); // Then decode it

//$nombre = $data["nombre"];
//$password = $data["usuario"];

$nombre = $data->{"usuario"};
$password = $data->{"password"};
$email = $data->{"email"};

$respuesta = "";

// nos conectamos a la base de datos:

include_once("datos_bd.php");

// COMPROBAMOS SI EXISTE YA EL USUARIO
$yaexiste = false;

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM login WHERE usuario = :usuario;");
  $stmt->bindParam(':usuario', $nombre); 
  
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  
  $rows = $stmt->fetchAll();
  
  if ( count($rows) > 0 ) {
	  $yaexiste = true;
	  
	  $respuesta = "ya existe el usuario";
  }
  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

// si NO existe, lo introducimos en la base de datos

if ($yaexiste == false) {

	try {
	  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
	  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	  
	  // prepare sql and bind parameters
	  $stmt = $conn->prepare("INSERT INTO login (id, usuario, password, email)
	  VALUES (NULL, :usuario, :password, :email)");
	  $stmt->bindParam(':usuario', $nombre);
	  $stmt->bindParam(':password', $password);
	  $stmt->bindParam(':email', $email);

	  $stmt->execute();
	  
	  $mensaje["operacion"] = "exitosa";
	  
	  $respuesta = "usuario introducido con exito";
	  
	} catch(PDOException $e) {
		
	  echo "Error: " . $e->getMessage();
	  
	  $respuesta = "ERROR al intentar introducir usuario y password";
	  
	}

}

$conn = null;

// fin de la conexión


$unjson = json_encode(array( // Return data
  'respuesta' => $respuesta
));


echo $unjson;

?>


