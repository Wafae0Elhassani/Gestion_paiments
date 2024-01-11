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

    <link rel="stylesheet" href="../style1.css" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        .error {
            border: 1px solid red;
        }

        .success {
            border: 1px solid green;
        }
    </style>
</head>

<body>
<nav class="navbar">
<!-- LOGO -->
<div class="logo" ><a href="../HOME/index.php" >HOME</a></div>
<div class="logo" ><a href="../../login1.php" >log out</a></div>

<!-- NAVIGATION MENU -->
<ul class="nav-links">
<div class="menu">
<li><a href="../admin-CRUD-modules/index.php">modules</a></li>
<li><a href="../admin-CRUD-professeur/index.php">Professeurs</a></li>
<li><a href="../affectation-CRUD-admin/index.php">affectation</a></li>
<li><a href="../paiements-admin-test/index.php">paiement</a></li>
</ul>
</div>
</nav>
    
<div class="container" style="padding: 20px;">
<form id="formulaire1">
            <div id ="child1">
            <h5> Choisir le mode de recherche  :</h5>
                  <select class="form-control" id="afficherselect" name="afficher">
                        <option value="id">id  </option>
                        <option value="nom">Nom </option>
                        <option value="nombresHeures">Nombres d'heures </option>
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
    <div class="container" style="padding: 20px;">
        <form id="formulaire">
            <h1 id="succes" style="background-color: lightgreen; color:darkgreen; font-size: medium; padding :10px;" hidden>Insertion faite avec succes</h1>
            <h1 id="failed" style="background-color: #FFCCCB; color:darkred; font-size: medium; padding :10px;" hidden>Insertion non faite</h1>
            <div class="row">
                <input type="hidden" id="id">
                <div class="form-group col">
                    <label for="name">Nom du module</label>
                    <input type="text" class="form-control" name="Nom" id="Nom" placeholder="Nom du module" required>
                    <small id="sNom" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="NombresHeures">Nombres d'heures</label>
                    <input type="text" class="form-control" name="NombresHeures" id="NombresHeures" placeholder="Nombres d'heures" required>
                    <small id="sNombresHeures" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button id="ajouter" type="submit" class="btn btn-primary col-2">Ajouter</button>
                </div>
            </div>
        </form>
    </div><br>
        <div>
            <h3 id="res" class="my-3 text-center" style="color:green"></h3><br>
        </div>
        <h2 class="my-3 text-center">Liste des modules</h2>
        
        <table id="modules" class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom du module</th>
                    <th scope="col">Nombres d'heures</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="listModule">

            </tbody>
        </table>
        <script src="script.js" type="module"></script>
    </div>
</body>

</html>