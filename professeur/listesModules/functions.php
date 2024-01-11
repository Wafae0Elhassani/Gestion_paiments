<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}
function getModules()
{
    $db = connectionDB();
    $res = $db->query("SELECT id ,Nom FROM module order by id");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
function getModule($id)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM module WHERE id = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getModuleByNom($Nom)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM module WHERE LOWER(Nom) LIKE '%" . $Nom . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
