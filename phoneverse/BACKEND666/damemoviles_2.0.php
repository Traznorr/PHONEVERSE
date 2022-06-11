<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$movil0 = [
    [
        "id"=> "1",
        "nombre"=> "Iphone 11",
        "procesador"=> "Apple A13 Bionic de 7nm",
        "ram"=> "4",
        "almacenamiento"=> "128",
        "precio"=> "589",
        "color"=> "negro",
        "marca"=> "Apple",
        "enlace_detalles"=> "/detalles-movil/1",
        "imagen_preview"=> "1.0.PNG",
        "fotos_carrusel"=> "1.0.PNG,1.1.PNG,1.3.PNG"
    ],
    [
        "id"=> "2",
        "nombre"=> "iPhone SE 2022",
        "procesador"=> "A15 Bionic",
        "ram"=> "2",
        "almacenamiento"=> "64",
        "precio"=> "379",
        "color"=> "rojo",
        "marca"=> "Apple",
        "enlace_detalles"=> "/detalles-movil/2",
        "imagen_preview"=> "2.0.PNG",
        "fotos_carrusel"=> "2.0.PNG,2.1.PNG,2.2.PNG"
    ],
    [
        "id"=> "4",
        "nombre"=> "iPhone 13",
        "procesador"=> "Apple A15 Bionic GPU cuatro núcleos Neural Engine",
        "ram"=> "4",
        "almacenamiento"=> "512",
        "precio"=> "909",
        "color"=> "rosa",
        "marca"=> "Apple",
        "enlace_detalles"=> "/detalles-movil/4",
        "imagen_preview"=> "3.0.PNG",
        "fotos_carrusel"=> "3.0.PNG"
    ],
    [
        "id"=> "5",
        "nombre"=> "Samsung Galaxy S10e",
        "procesador"=> "Samsung Exynos 9820 (Octa-core, 8 nm)",
        "ram"=> "8",
        "almacenamiento"=> "256",
        "precio"=> "439",
        "color"=> "multicolor",
        "marca"=> "Samsung",
        "enlace_detalles"=> "/detalles-movil/5",
        "imagen_preview"=> "4.0.PNG",
        "fotos_carrusel"=> "4.0.PNG,4.1.PNG,4.2.PNG"
    ],
    [
        "id"=> "6",
        "nombre"=> "Samsung Galaxy S9",
        "procesador"=> "Samsung Exynos 9810, 10 nm, 64 bits",
        "ram"=> "4",
        "almacenamiento"=> "64",
        "precio"=> "318",
        "color"=> "Purpura",
        "marca"=> "Samsung",
        "enlace_detalles"=> "/detalles-movil/6",
        "imagen_preview"=> "5.0.PNG",
        "fotos_carrusel"=> "5.0.PNG,5.1.PNG,5.2.PNG"
    ],
    [
        "id"=> "7",
        "nombre"=> "Samsung Galaxy S8",
        "procesador"=> "Exynos 8895 o Qualcomm Snapdragon 835",
        "ram"=> "4",
        "almacenamiento"=> "64",
        "precio"=> "575",
        "color"=> "gris",
        "marca"=> "Samsung",
        "enlace_detalles"=> "/detalles-movil/7",
        "imagen_preview"=> "6.0.PNG",
        "fotos_carrusel"=> "6.0.PNG,6.1.PNG,6.2.PNG"
    ],
    [
        "id"=> "8",
        "nombre"=> "Xiaomi Redmi Note 9 Pro",
        "procesador"=> "MediaTek Helio G85 Octa-core a 2.0GHz",
        "ram"=> "4",
        "almacenamiento"=> "64",
        "precio"=> "220",
        "color"=> "verde tropical",
        "marca"=> "Xiaomi",
        "enlace_detalles"=> "/detalles-movil/8",
        "imagen_preview"=> "7.0.PNG",
        "fotos_carrusel"=> "7.0.PNG,7.1.PNG,7.2.PNG,7.3.PNG"
    ],
    [
        "id"=> "9",
        "nombre"=> "Xiaomi Redmi Note 10 Pro",
        "procesador"=> "Qualcomm Snapdragon 732G",
        "ram"=> "6",
        "almacenamiento"=> "128",
        "precio"=> "268",
        "color"=> "gris",
        "marca"=> "Xiaomi",
        "enlace_detalles"=> "/detalles-movil/9",
        "imagen_preview"=> "8.0.PNG",
        "fotos_carrusel"=> "8.0.PNG,8.1.PNG,8.2.PNG"
    ],
    [
        "id"=> "10",
        "nombre"=> "Xiaomi Redmi 9",
        "procesador"=> "Media Tek Helio G80",
        "ram"=> "4",
        "almacenamiento"=> "64",
        "precio"=> "153",
        "color"=> "morado",
        "marca"=> "Xiaomi",
        "enlace_detalles"=> "/detalles-movil/10",
        "imagen_preview"=> "9.0.PNG",
        "fotos_carrusel"=> "9.0.PNG,9.1.PNG"
    ]
];

$unjson = json_encode($movil0);

echo $unjson;

?>

