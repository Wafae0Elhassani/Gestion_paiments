<?php

include_once('functions.php');

$nom = isset($_POST['nom']) ? $_POST['nom'] : NULL;
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : NULL;
$adresse = isset($_POST['adresse']) ? $_POST['adresse'] : NULL;
$email = isset($_POST['email']) ? $_POST['email'] : NULL;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL;

if ($action == "afficher") {
    $res = getinfo($id);
    echo $res;
} 

else if($action == "modifier") {
    $res = modifier($id, $nom, $prenom, $adresse, $email, $telephone);
    if ($res == "success")
        echo "success";
    else
        echo "error";
}
