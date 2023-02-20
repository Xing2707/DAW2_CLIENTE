<?php
    $persona = [];
    $dni = ["A22283758","76595148L","X8632904S","N4154745F"];
    header('Access-Control-Allow-Origin: *');
    $respuesta;
    if(!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['DNI']) && !empty($_POST['estudio'])){
        array_push($persona,$_POST);
        array_push($dni,$_POST['DNI']);
        $respuesta = "Registro de persona correcto <br>Nombre: ".$_POST['nombre']."<br>Apellido: ".$_POST['apellido']."<br>DNI: ".$_POST['DNI']."<br>estudio: ".$_POST['estudio'];
    }else
        if(isset($_POST['deleteDNI'])){
            if(!empty($_POST['deleteDNI'])){
                if($posicion = array_search($_POST['deleteDNI'],$dni) != false){
                    unset($dni[$posicion]);
                    $respuesta = "Persona con DNI ".$_POST['deleteDNI']." borrado correctamente";
                }else{
                    $respuesta = "No existe persona con DNI ".$_POST['deleteDNI'];
                }   
            }else{
                $respuesta = "No puedes introducir un DNI invalido o dejarlo vacio!";
        }
    }else{
        $respuesta = "Registro de persona incorrecto! falta dato de persona!";
    }

    echo json_encode($respuesta);
?>