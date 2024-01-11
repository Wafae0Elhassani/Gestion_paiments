<?php

include_once('function.php');

$Module = isset($_POST['Module']) ? $_POST['Module'] : NULL;
$Professeur = isset($_POST['Professeur']) ? $_POST['Professeur'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$Montant = isset($_POST['Montant']) ? $_POST['Montant'] : NULL;
$Etat = isset($_POST['Etat']) ? $_POST['Etat'] : NULL;
$ID = isset($_POST['ID']) ? $_POST['ID'] : NULL;

if ($action == "afficherTous") {
    $res = getListesPaie();
    echo $res;
}else if ($action == "afficherProfMontant") {
    $res = getListesPaieProf($Professeur);
    echo $res;
}else if ($action == "afficherProfEtat") {
    $res = getListesEtatProf($Professeur);
    echo $res;
}else if ($action == "afficherParModule"){
    $res = getByModule($Module);
    echo $res;

}else if ($action == "afficherParMontant"){
    $res = getByMontant($Montant);
    echo $res;

}else if ($action == "afficherPaye"){
    $res = getByEtatP($Etat,$Professeur);
    echo $res;

}else if ($action == "afficherNonpaye"){
    $res = getByEtatNonP($Etat,$Professeur);
    echo $res;

}else if ($action == "afficherTousMP"){
    $res = getAll($Professeur);
    echo $res;

}





