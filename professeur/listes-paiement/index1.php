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
    <!-- <link rel="stylesheet" href="style.css"> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../style1.css" />

</head>

<body>
<nav class="navbar">
<!-- LOGO -->
<div class="logo" ><a href="../HOME/index.php"  >HOME</a></div>
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
<div class="container" style="padding: 20px;">
<form id="formulaire1">
            <div id ="child1">
            <h5> Choisir le mode de recherche  :</h5>
                  <select class="form-control" id="afficherselect" name="afficher">
                        <option value="Module">Module  </option>
                        <option value="Montant">Montant </option>
                        <option value="tous">Tous </option>
                    </select>
            </div>
            <br>
            <div id ="child2">
            <h5> Veuillez Entrer la valeur à chercher ici : </h5>
            <input type="text"  name="search" id="search" class="form-control" placeholder="Entrer une valeur" required>
            </div>

            <br>
            <button id="afficher" type="submit" class="btn btn-primary col-2">Afficher</button>
</form>
    </div>
      <br>
      <br>
<div class="container" style="padding: 100px;">
<table id="listes-paiementsProf" class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Module</th>
                    <th scope="col">Montant</th>
                </tr>
            </thead>
            <tbody id="listpaieProf">

            </tbody>
        </table>
    </div>
    <script src="script-prof.js" type="module"></script>
</body>

</html>