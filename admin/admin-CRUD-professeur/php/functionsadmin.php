<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
   // $db = new PDO('mysql:host=localhost;dbname=base', 'root', '');
    return $db;
}

//insertion etudiant 
function insertprofesseur($Nom, $Prenom, $Adresse ,$Email, $Telephone, $Tauxhoraire)
{
    $db = connectionDB();
    $res = $db->exec("INSERT INTO professeurs (Nom, Prenom, Adresse, Email, Telephone, Tauxhoraire,PW) VALUES ('" . $Nom . "', '" . $Prenom . "','" . $Adresse . "', '" . $Email . "','" . $Telephone . "','" . $Tauxhoraire . "',UUID())");
    if ($res)
        return "success";
    else
        return "error";
}

//suppression etudiant
function deleteprofesseur($id)
{
    $db = connectionDB();
    $res = $db->exec("DELETE FROM professeurs WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}

//modification etudiant
function updateprofesseur($id,$Nom, $Prenom, $Adresse ,$Email, $Telephone, $Tauxhoraire)
{
    $db = connectionDB();
    $res = $db->exec("UPDATE professeurs SET Nom = '" . $Nom . "', Prenom = '" . $Prenom . "', Email = '" . $Email . "', Telephone = '" . $Telephone . "', Tauxhoraire = '" . $Tauxhoraire . "', Adresse ='".$Adresse."' WHERE id = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}


//afficher un etudiant
function getprofesseur($id,$choice)
{
    $db = connectionDB();
    //$res = $db->query("SELECT * FROM professeurs WHERE ".$choice." = '" . $id . "'");
    $res = $db->query("SELECT * FROM professeurs WHERE LOWER( ".$choice.") LIKE'%" . $id . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}


//afficher tous les etudiants
function getAllprofesseurs()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM professeurs order by id");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
