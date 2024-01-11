<?php

include_once('functions.php');

$Nom = isset($_POST['Nom']) ? $_POST['Nom'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL;
if ($action == "afficherModules") {
    $res = getModules();
    echo $res;
}else if ($action == "afficher") {
    $res = getModule($id);
    echo $res;
}else if ($action == "afficherNom"){
    $res = getModuleByNom($Nom);
    echo $res;

}