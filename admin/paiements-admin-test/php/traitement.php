<?php
include_once('functions.php');

$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$professeur = isset($_POST['professeur']) ? $_POST['professeur'] : NULL;
$module= isset($_POST['module']) ? $_POST['module'] : NULL;
$etat= isset($_POST['etat']) ? $_POST['etat'] : NULL;
$montant= isset($_POST['montant']) ? $_POST['montant'] : NULL;
$id= isset($_POST['id']) ? $_POST['id'] : NULL;
$value= isset($_POST['value']) ? $_POST['value'] : NULL;

if ($action == "afficherTousProfs") {
    $res = getAllProfs();
    echo $res;
}else if($action == "afficherListModules"){
    $res = getAllModules($professeur);
    echo $res;
}else if($action == "afficherTousPaiements"){
    $res = getAllPaiements();
    echo $res;
}else if($action == "ajouter"){
    $res= ajouter($module, $professeur, $montant, $etat);
    echo $res;
}else if($action == "modifier"){
    $res= modifier($id, $montant, $etat);
    echo $res;
}else if($action == "afficher"){
    $res= getPaiement($id);
    echo $res;
}else if($action == "supprimer"){
    $res = deletePaiement($id);
    if ($res == "success")
        echo "success";
    else
        echo "error";
}else if($action == "rechercherByID"){
    $res = getByID($value);
    echo $res;
}else if($action == "rechercherByModule"){
    $res = getByModule($value);
    echo $res;
}else if($action == "rechercherByProfesseur"){
    $res = getByProfesseur($value);
    echo $res;
}else if($action == "rechercherByMontant"){
    $res = getByMontant($value);
    echo $res;
}else if($action == "rechercherByEtat"){
    $res = getByEtat($value);
    echo $res;
}else if($action == "supprimerAffectation"){
    $res = deleteAffectation($module);
    if ($res == "success")
        echo "success";
    else
        echo "error";
}else if($action == "recreerAffectation"){
    $res= recreerAffectation($module, $professeur);
    echo $res;
}else if($action == "afficherTousPaiementsSelonProf"){
    $res = getAllPaiements($professeur, $etat);
    echo $res;
} else {
    echo "Choisir une action valide";
}
