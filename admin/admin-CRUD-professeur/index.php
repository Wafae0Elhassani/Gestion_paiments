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


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .error {
            border: 1px solid red;
        }

        .success {
            border: 1px solid green;
        }
    </style>
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
<li><a href="../admin-CRUD-modules/index.php">modules</a></li>
<li><a href="../admin-CRUD-professeur/index.php">Professeurs</a></li>
<li><a href="../affectation-CRUD-admin/index.php">affectation</a></li>
<li><a href="../paiements-admin-test/index.php">paiement</a></li>
</ul>
</div>
</nav>
    
    <div class="container" style="padding: 20px;">
    
        <form id="formulaire">
            <h1 id="succes" style="background-color: lightgreen; color:darkgreen; font-size: medium; padding :10px;" hidden>Insertion faite avec succes</h1>
            <h1 id="failed" style="background-color: #FFCCCB; color:darkred; font-size: medium; padding :10px;" hidden>Insertion non faite</h1>
            <div class="row">
                <input type="hidden" id="id">
                <div class="form-group col">
                    <label for="name">Nom</label>
                    <input type="text" class="form-control" name="nom" id="nom" placeholder="Votre nom" required>
                    <small id="snom" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="lastname">Prenom</label>
                    <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Votre prenom" required>
                    <small id="sprenom" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>

                <div class="form-group col">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
                </div>
            </div>

            
                <div class="form-group col">
                    <label for="Telephone">Telephone</label>
                    <input type="number" class="form-control" name="Telephone" id="Telephone" placeholder="Telephone" required>
                    <small id="sTelephone" style="color:red" hidden>Ce champs doit etre rempli par 06*****</small>
                </div>
                
                <div class="form-group col">
                    <label for="Adresse">Adresse</label>
                    <input type="text" class="form-control" name="Adresse" id="Adresse" placeholder="Adresse" required>
                    <small id="sAdresse" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>
                <div class="form-group col">
                    <label for="Tauxhoraire">Tauxhoraire</label>
                    <input type="number" class="form-control" name="Tauxhoraire" id="Tauxhoraire" placeholder="Tauxhoraire" required>
                    <small id="sTauxhoraire" style="color:red" hidden>Ce champs doit etre rempli</small>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <button id="ajouter" type="submit" class="btn btn-primary col-2">Ajouter</button>
            </div>
        </form>
        <form id="formulaire1">
            <div id ="child1">
            <h5> select :</h5>
                  <select class="form-control" id="aficherselect" name="aficher">
                        <option value="id" selected>id</option>
                        <option value="Email">Email</option>
                        <option value="Nom">Nom</option>
                        <option value="Prenom">Prenom</option>
                        <option value="Adresse">Adresse</option>
                        <option value="Telephone">Telephone</option>
                        <option value="Tauxhoraire">Tauxhoraire</option>
                    </select>
            </div>
            <div id ="child2">
            <h5> veuillez ecrir ici</h5>
            <input type="text"  name="seach" id="seach" placeholder="ecrir ici" required>
            <!--<small id="semail" style="color:red" hidden>Ce champs doit etre rempli</small>-->
            </div>
    <br>
            <button id="aficher" type="submit" class="btn btn-primary col-2">Aficher</button>
        </form>
       
        <h3 id="res" class="my-3 text-center" style="color:green" hidden></h3>

        <h2 class="my-3 text-center">Liste des professeurs</h2>

        <table id="personnes" class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Tauxhoraire</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="listprofs">
                <!--
                <tr id = "cc">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>James</td>
                    <td>mark.james@gmail.com</td>
                    <td>2000</td>
                    <td>GI</td>
                    <td>
                        <button class="btn btn-primary mx-1">Modifier</button>
                        <button class="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
                -->
            </tbody>
        </table>
        <script src="scriptadmin.js" type="module"></script>
    </div>
</body>

</html>