<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}

//insertion module 
function insertModule($Nom, $NombresHeures)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO module (Nom, NombresHeures) VALUES ('" . $Nom . "', '" . $NombresHeures . "')");
    if ($res)
        return "success";
    else
        return "error";
}

//suppression module
function deleteModule($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM module WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}

//modification module
function updateModule($id, $Nom, $NombresHeures)
{
    $db = connectionDB();
    $res = $db->exec("UPDATE module SET Nom = '" . $Nom . "', NombresHeures = '" . $NombresHeures . "' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}

//afficher un module
function getModule($id)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM module WHERE id = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

//afficher tous les modules
function getAllModules()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM module order by id");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

//afficher un module
function getModuleByNom($Nom)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM module WHERE LOWER(Nom) LIKE'%" . $Nom . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getModuleByNomb($NombresHeures){

    $db = connectionDB();
    $res = $db->query("SELECT * FROM module WHERE LOWER(NombresHeures) LIKE '%" . $NombresHeures . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}