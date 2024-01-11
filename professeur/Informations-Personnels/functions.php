<?php

function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}
function getinfo($id)
{
    $db = connectionDB();
    $res = $db->query("SELECT nom, prenom, adresse, email,telephone FROM professeurs WHERE id = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function modifier($id,$nom, $prenom, $adresse, $email, $telephone)
{
    $db = connectionDB();
    $res = $db->exec("UPDATE professeurs SET nom = '" . $nom . "', prenom = '" . $prenom . "', adresse = '" . $adresse ."', email = '" .$email ."', telephone = '" . $telephone . "' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}