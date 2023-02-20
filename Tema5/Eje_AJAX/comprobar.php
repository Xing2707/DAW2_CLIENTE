<?php
    require_once("./SRC/init.php");

    $username= $_GET['nombre'];
    
    $MyDataBase -> ejecuta("SELECT username FROM PerfilUsuario WHERE username=?",$username);
    $nombre = $MyDataBase -> obtenDatos();

    if($nombre==null){
        echo "el nombre de usuario no esta repetido";
    }else{
        echo "el nombre de usuario esta repetido";
    }
?>