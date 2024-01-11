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
function getByModule($Module,$Professeur){

    $db = connectionDB();
    $res = $db->query("SELECT Module, Montant FROM paiements WHERE LOWER(Module) LIKE'%" . $Module . "%' And Professeur = '" . $Professeur . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getByMontant($Montant,$Professeur){

    $db = connectionDB();
    $res = $db->query("SELECT Module,Montant FROM paiements WHERE LOWER(Montant) LIKE'%"  . $Montant . "%' And Professeur = '" . $Professeur . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

