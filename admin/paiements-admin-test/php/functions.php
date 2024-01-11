<?php

//Connection a la base de donnée
function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}

//afficher tous les professeurs
function getAllProfs()
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM professeurs");
    //parcourir $res qui contient beaucoups de ligne et le retourner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}
// AND Module NOT IN (SELECT Module FROM paiements)
function getAllModules($nomProf){
    $db = connectionDB();
    //AND Module NOT IN (SELECT Module FROM paiements WHERE Etat = 'Payé') NON puisque les anciens affectations seront auto supprimer apres paiement
    $res = $db->query("SELECT Module FROM affectation WHERE Professeur= '" . $nomProf . "'");//module est unique
    //parcourir $res qui contient beaucoups de ligne et le retourner sous format de json
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function getAllPaiements(){
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements order by ID asc");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function ajouter($module, $professeur, $montant, $etat){
    $db = connectionDB();
    $res = $db->exec("INSERT INTO paiements (Module, Professeur, Montant, Etat) VALUES ('" . $module . "', '" . $professeur . "', '" . $montant ."', '" . $etat . "' )");
    if ($res)
        return "success";
    else
        return "error";
}

function modifier($id, $montant, $etat){
    $db = connectionDB();
    $res = $db->exec("UPDATE paiements SET Montant = '" . $montant . "', Etat = '" . $etat . "' WHERE ID = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "Not updated";
}

function getPaiement($id){
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE ID = '" . $id . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($rows);
}

function deletePaiement($id){
    $db = connectionDB();
    $res = $db->exec("DELETE FROM paiements WHERE ID = '" . $id . "'");
    if ($res)
        return "success";
    else
        return "error";
}

//Rechercher par ID
function getByID($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE ID = '" . $value . "'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//Rechercher par Module
function getByModule($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE LOWER(Module) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//Rechercher par Professeur
function getByProfesseur($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE LOWER(Professeur) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//Rechercher par Montant
function getByMontant($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE LOWER(Montant) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//Rechercher par Etat
function getByEtat($value)
{
    $db = connectionDB();
    $res = $db->query("SELECT * FROM paiements WHERE LOWER(Etat) LIKE '%" . $value . "%'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
    return json_encode($rows);//ecriver pour chacune methode soundex
}

//supprimer affectation
function deleteAffectation($module){
    $db = connectionDB();
    $res = $db->exec("DELETE FROM affectation WHERE Module = '" . $module . "'");
    if ($res)
        return "success";
    else
        return "error";
}


function recreerAffectation($module, $professeur){
    $db = connectionDB();
    $res = $db->exec("INSERT INTO affectation (Module, Professeur) VALUES ('" . $module . "', '". $professeur ."')");
    if ($res)
        return "success";
    else
        return "error";
}

// function getAllPaiements($professeur, $etat){
//     $db = connectionDB();
//     $res = $db->query("SELECT * FROM paiements WHERE Professeur= '" . $professeur."' AND Etat= '" . $etat . "'");
//     $rows = $res->fetchAll(PDO::FETCH_ASSOC);//me retourne liste vide
//     return json_encode($rows);//ecriver pour chacune methode soundex
// }