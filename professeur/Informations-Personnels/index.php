<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/css/bootstrap.min.css">
    
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <!-- <link rel="stylesheet" href="css/bootstrap.min.css" /> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>.modifier {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .modifier:hover {
    background-color: #0056b3;
    opacity: 1.5;
  }</style>
   <link rel="stylesheet" href="../style1.css" />

    </head>

<body>
<nav class="navbar">
<!-- LOGO -->
<div class="logo" ><a href="../HOME/index.php" >HOME</a></div>
<div class="logo" ><a href="../../login1.php" >log out</a></div>

<!-- NAVIGATION MENU -->
<ul class="nav-links">
<div class="menu">
<li><a href="../Informations-Personnels/index.php">Informations Personnels</a></li>
<li><a href="../listes-paiement/index1.php">listes paiement</a></li>
<li><a href="../listesModules/index.php">listes des Modules</a></li>
<li><a href="../modulesparetat/index3.php">modules par état</a></li>
</ul>
</div>
</nav>

<div>
<div class="container" style="padding: 20px;">
<h1>Les informations personnelles : </h1>
</div>

<div class="container" style="padding: 20px;">
    <form id="formulaire2">
    <label for="nom">Nom :</label>
    <input type="text" class="form-control" id="nom" disabled name="nom" required><br>
    <label for="prenom">Prénom :</label>
    <input type="text" id="prenom" name="prenom" disabled class="form-control" required><br>
    <label for="adresse">Adresse :</label>
    <input type="text" id="adresse" name="adresse" disabled class="form-control" required><br>
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" disabled class="form-control" required><br>
    <label for="telephone">Téléphone :</label>
    <input type="text" id="telephone" name="telephone" disabled class="form-control" required><br>
    <small id="sTelephone" style="color:red" hidden>Ce champs doit etre rempli par 06*****</small>
<br>

    <input type="submit" class="modifier" value="Modifier">
  </form>
  <h3 id="validation"></h3>

</div>
<script src="script2.js" type="module"></script>
</div>
</body>
</html>