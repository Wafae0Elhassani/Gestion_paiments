<?php

include_once('functions.php');

$nomModule = isset($_POST['nomModule']) ? $_POST['nomModule'] : NULL;
$nomProf = isset($_POST['nomProf']) ? $_POST['nomProf'] : NULL;
$action = isset($_POST['action']) ? $_POST['action'] : NULL;
$id = isset($_POST['id']) ? $_POST['id'] : NULL;
$value = isset($_POST['value']) ? $_POST['value'] : NULL;

if ($action == "affecter") {
    $res = affecter($nomModule, $nomProf);
    if ($res == "success")
        echo "success";
    else
        echo "error";
}else if ($action == "afficherTous") {
        $res = getAllAffectations();
        echo $res;
    }else if ($action == "supprimer") {
        $res = deleteAffectation($id);
        if ($res == "success")
            echo "success";
        else
            echo "error";
    }else if ($action == "modifier") {
        $res = updateAffectation($id, $nomModule, $nomProf);
        if ($res == "success")
            echo "success";
        else
            echo "not updated";
    }
    else if ($action == "afficher") {
        $res = getAffectation($id);
        echo $res;
    }else if ($action == "rechercherByID") {
        $res = getByID($value);
        echo $res;
    }else if ($action == "rechercherByModule") {
        $res = getByModule($value);
        echo $res;
    }else if ($action == "rechercherByProf") {
        $res = getByProfesseur($value);
        echo $res;
    }else if($action == "afficherListProfs"){
        $res= getListProfs();
        echo $res;
    }else if($action == "afficherListModules"){
        $res= getListModules();
        echo $res;
    }else if($action == "isModulePaye"){
        $res= isModulePaye($nomModule);
        echo $res;
    }else if($action == "moduleEtat"){
        $res= moduleEtat($nomModule);
        echo $res;
    }
    else {
        echo "action non reconnue";
    }
