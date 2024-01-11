<?php

include_once('functions.php');

$Nom = isset($_POST['Nom']) ? $_POST['Nom'] : NULL;
$NombresHeures = isset($_POST['NombresHeures']) ? $_POST['NombresHeures'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL;
if ($action == "ajouter") {
    $res = insertModule($Nom, $NombresHeures);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "modifier") {
    $res = updateModule($id, $Nom, $NombresHeures);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "supprimer") {
    $res = deleteModule($id);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "afficher") {
    $res = getModule($id);
    echo $res;
} else if ($action == "afficherTous") {
    $res = getAllModules();
    echo $res;
}else if ($action == "afficherNom"){
    $res = getModuleByNom($Nom);
    echo $res;

}else if($action == "afficherNB"){
    $res = getModuleByNomb($NombresHeures);
    echo $res;
}else {
    echo "action non reconnue";
}

