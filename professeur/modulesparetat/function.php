<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}

function getListesPaie()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements order by ID");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getListesPaieProf($Professeur)
{
    $db = connectionDB();
    $res = $db->query("SELECT  Module, Montant FROM paiements where Professeur = '" . $Professeur . "'");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
function getListesEtatProf($Professeur)
{
    $db = connectionDB();
    $res = $db->query("SELECT  Module, Etat FROM paiements where Professeur = '" . $Professeur . "'");
    //parcourir $res qui contient beaucoups de ligne et le retouner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
function getByModule($Module){

    $db = connectionDB();
    $res = $db->query("SELECT Module,Montant FROM paiements WHERE Module = '" . $Module . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getByMontant($Montant){

    $db = connectionDB();
    $res = $db->query("SELECT Module,Montant FROM paiements WHERE Montant = '" . $Montant . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getByEtatP($Etat,$Professeur){
    $db = connectionDB();
    $res = $db->query("SELECT Module FROM paiements WHERE Etat = '" . $Etat . "' AND Professeur = '" . $Professeur . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
function getByEtatNonP($Etat,$Professeur){

    $db = connectionDB();
    $res = $db->query("SELECT Module FROM paiements WHERE Etat = '" . $Etat . "'and Professeur = '" . $Professeur . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
function getAll($Professeur){

    $db = connectionDB();
    $res = $db->query("SELECT Module FROM paiements where Professeur = '" .$Professeur . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
