<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}

//insertion affectation 
function affecter($nomModule, $nomProf)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO affectation (Module, Professeur) VALUES ('" . $nomModule . "', '" . $nomProf . "')");
    if ($res)
        return "success";
    else
        return "error";
}

//afficher tous les affectations
function getAllAffectations()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM affectation order by ID");
    //parcourir $res qui contient beaucoups de lignes et le retourner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

//suppression affectation
function deleteAffectation($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM affectation WHERE ID = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}

//modification affectation
function updateAffectation($id, $module, $professeur)
{
    $db = connectionDB();
    $res = $db->exec("UPDATE affectation SET Module = '" . $module . "', Professeur = '" . $professeur . "' WHERE ID = '" . $id . "'");
    if ($res)
        return "success";
    else
        // return "error";
        return "not updated";
}

//afficher un affectation
function getAffectation($id)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM affectation WHERE ID = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

//Rechercher par ID
function getByID($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM affectation WHERE ID = '" . $value . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//Rechercher par module
function getByModule($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM affectation WHERE LOWER(Module) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

//Rechercher par Nom du Professeur
function getByProfesseur($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM affectation WHERE LOWER(Professeur) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getListProfs()
{
    $db = connectionDB();
    $res= $db->query("SELECT * From professeurs");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getListModules(){
    $db = connectionDB();
    $res= $db->query("SELECT Nom From module EXCEPT (SELECT Module FROM affectation)");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

// function isModulePaye($module){
//     $db = connectionDB();
//     $res= $db->query("SELECT Etat From paiements WHERE Module = '". $module ."'");
//     $rows = $res->fetchAll(PDO::FETCH_ASSOC);
//     return json_encode($rows);//si module est payé peut être supprimé
// }

function moduleEtat($module){
    $db = connectionDB();
    $res= $db->query("SELECT Module, Etat From paiements WHERE Module = '". $module ."'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}