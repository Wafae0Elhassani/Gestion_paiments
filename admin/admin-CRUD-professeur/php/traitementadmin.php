<?php

include_once('functionsadmin.php');
$Nom = isset($_POST['nom']) ? $_POST['nom'] : NULL;
$Prenom = isset($_POST['prenom']) ? $_POST['prenom'] : NULL;
$Email = isset($_POST['email']) ? $_POST['email'] : NULL;
$Telephone = isset($_POST['Telephone']) ? $_POST['Telephone'] : NULL;
$Tauxhoraire = isset($_POST['Tauxhoraire']) ? $_POST['Tauxhoraire'] : NULL;
$Adresse = isset($_POST['Adresse']) ? $_POST['Adresse'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL; 
$choice= isset($_POST['choice']) ? $_POST['choice'] : NULL;
$val= isset($_POST['seach']) ? $_POST['seach'] : NULL;
if ($action == "ajouter") {
    $res = insertprofesseur($Nom, $Prenom, $Adresse ,$Email, $Telephone, $Tauxhoraire);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "modifier") {
    $res = updateprofesseur($id,$Nom, $Prenom, $Adresse ,$Email, $Telephone, $Tauxhoraire);
    if ($res == "success")
        echo "success";
    else
        echo $id;
} else if ($action == "supprimer") {
    $res = deleteprofesseur($id);
    if ($res == "success")
        echo "success";
    else
        echo "error";
} else if ($action == "afficher") {
    $res = getprofesseur($val,$choice);
    header('Content-Type: application/json');
    echo $res;
} else if ($action == "afficherTous") {
    $res = getAllprofesseurs();
    header('Content-Type: application/json');
    echo $res;
} else {
    echo "action non reconnue";
}
