<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$id = $_GET['id'];
$movil = [];

// nos conectamos a la base de datos:

include_once("datos_bd.php");

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT * FROM moviles");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  
  $filas = $stmt->fetchAll();
  
  foreach ($filas as $unafila) {
	  
	  $id_fila = $unafila["id"];
	  
	  if ($id_fila == $id) {
		
		$movil = $unafila;
		
	  }
	  
  }
  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;

// fin de la conexión

$unjson = json_encode($movil);

echo $unjson;

?>

