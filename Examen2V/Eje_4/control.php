<?php
    header('Access-Control-Allow-Origin: *');
    $array = [
        "primavera" => "./magnolia-trees-g53f83c1d8_1280.jpg",
        "verano" => "./flowers-g2365bd8f7_1280.jpg",
        "otonio" => "./road-g424600fc5_1280.jpg",
        "invierno" => "./iceland-gf20acfea8_1280.jpg",
    ];
    

    echo json_encode($array[$_POST["imagen"]]);

?>