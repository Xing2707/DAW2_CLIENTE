<?php
    require_once("./SRC/config.php");
    require_once("./SRC/BaseDato.php");

    $MyDataBase = BaseDato::obtenerInstancia();

    $MyDataBase -> inicializa($config['db_name'],$config['db_user'],$config['db_passw']);
    
?>