<?php
$password = isset($_POST['password']) ? $_POST['password'] : NULL;
$Prenom = isset($_POST['username']) ? $_POST['username'] : NULL;

function connectionDB()
{
    $db = new PDO('mysql:host=localhost;dbname=db', 'root', '');
    return $db;
}

//findteacher
    $db = connectionDB();
    //$res = $db->exec("SELECT Nom FROM professeurs WHERE PW ='123' and LOG ='123'");
    $res = $db->query("SELECT Nom , Prenom, ID FROM professeurs WHERE PW ='". $password . "' and Email ='".$Prenom."'");
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    $resultat =json_encode($rows);
    header('Content-Type: application/json');
    echo  $resultat;

?>