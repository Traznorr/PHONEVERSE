<?php

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$rawBody = file_get_contents("php://input"); // Read body
$data = json_decode($rawBody); // Then decode it

$id_usuario = $data->{"id_usuario"};

$datos = [];

// nos conectamos a la base de datos:

include_once("datos_bd.php");

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM pedidos WHERE id_usuario = :id_usuario;");
  $stmt->bindParam(':id_usuario', $id_usuario);
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  
  $filas = $stmt->fetchAll();
  
  foreach ($filas as $unafila) {
	  
	  array_push($datos, $unafila);

  }

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;

// fin de la conexión

$unjson = json_encode($datos);

echo $unjson;

?>