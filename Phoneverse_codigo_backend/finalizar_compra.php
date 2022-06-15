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

$productosCarrito = $data->{"productosCarrito"};
$precioTotal = $data->{"precioTotal"};
$idUsuario = $data->{"idUsuario"};
$idsProductos = $data->{"idsProductos"};

$respuesta = "";

// nos conectamos a la base de datos:

include_once("datos_bd.php");

$yaexiste = false;

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $id_usuario = $idUsuario;
  $precio_total = $precioTotal;
  $fecha = $date = date( 'Y-m-d h:i:s', time() ); //'2022-04-27 20:41:28.000000';
 
  $stmt = $conn->prepare("INSERT INTO `pedidos` (`id`, `id_usuario`, `precio_total`, `fecha`) VALUES (NULL, :id_usuario, :precio_total, :fecha);");
  $stmt->bindParam(':id_usuario', $id_usuario);
  $stmt->bindParam(':precio_total', $precio_total);
  $stmt->bindParam(':fecha', $fecha);
  
  $stmt->execute();

  $id_pedido = $conn->lastInsertId();
 
 
  // guardamos LOS PRODUCTOS del pedido, pero ya desglosado, en una tabla distinta:
  
  foreach ($idsProductos as $idProducto) {
	  
	  try {
		$conn2 = new PDO("mysql:host=$servername;dbname=$dbname", $username_mysql, $password_mysql);
		$conn2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$id_pedido = $id_pedido; //; //  $id_pedido;
		$id_movil = $idProducto; //$idsProductos[0]; // 1; //

		$stmt2 = $conn2->prepare("INSERT INTO `pedidos_desglosados` (`id`, `id_pedido`, `id_movil`) VALUES (NULL, :id_pedido, :id_movil);");
		$stmt2->bindParam(':id_pedido', $id_pedido);
		$stmt2->bindParam(':id_movil', $id_movil);

		$stmt2->execute();
		
	  } catch(PDOException $e) {
		  
		echo "Error: " . $e->getMessage();
		
	  }  

  }

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}


/*

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

*/

$conn = null;

// fin de la conexión

/*
$unjson = json_encode(array( // Return data
  'respuesta' => $respuesta
));
*/

$unjson = json_encode(array( // Return data
  'respuesta' => $productosCarrito,
  
  //'respuesta2' -> debug_zval_dump(&$productosCarrito),
  //'respuesta3' -> var_export($productosCarrito),
  
));

echo $unjson;

// y volcamos a un archivo de texto las variables, para estudiarlas:
/*
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");

$txt = "John Doe\n";
fwrite( $myfile, var_export($productosCarrito, true) );

$txt = "John Doe\n";
fwrite( $myfile, "asdf" );

fwrite( $myfile, $productosCarrito[0]->'id' );

fclose($myfile);
*/


?>


