<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.0/dist/css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    
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
                <div class="form-group col">
                    <label for="professeur">Professeur</label>
                    <select class="form-control" id="professeur" name="professeur" required>
                        
                    </select>
                </div>

                <div class="form-group col">
                    <label for="module">Module</label>
                    <select class="form-control" id="module" name="module" required>
                        
                    </select>
                </div>
            </div>
            
            
            <div class="row">
                <div class="form-group col">
                    <label for="montant">Montant</label>
                    <input type="number" class="form-control" name="montant" id="montant" placeholder="montant" required>
                    
                </div>

                <div class="form-group col">
                    <label for="etat">Etat</label>
                    <select class="form-control" id="etat" name="etat" required>
                        <option id="mySelectEtat"></option>
                        <option value="Payé">Payé</option>
                        <option value="Non payé">Non payé</option>
                    </select>
                </div>
            </div>

            
            <div class="col-12 d-flex justify-content-center">
                <button id="ajouter" type="submit" class="btn btn-primary col-2">Ajouter</button>
            </div>
        </form>
        <h3 id="res" class="my-3 text-center" style="color:green" ></h3><br>


        <h2 class="my-3 text-center">Liste des paiements</h2>
        <div class="container" style="padding: 20px;">
            <form id="searchForm">
                <div id ="child1">
                    
                    <select class="form-control" id="afficherselect" name="afficherselect">
                        <option selected>Choisir</option>
                        <option value="Tous">Tous</option>
                        <option value="ID">ID</option>
                        <option value="Module">Module</option>
                        <option value="Professeur">Professeur</option>
                        <option value="Montant">Montant</option>
                        <option value="Etat">Etat</option>
                    </select>
                </div><br><br>

                <div id ="child2">
                    
                    <input type="text"  name="search" id="search" class="form-control" placeholder="search" required>
                </div>

                <br>
                <button id="recherecher" type="submit" class="btn btn-primary col-2">Rechercher</button>
            </form>
        </div><br>
        <h3 id="action" class="my-3 text-center" style="color:red" ></h3><br>

        <table id="paiements" class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Module</th>
                    <th scope="col">Professeur</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Etat</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody id="listPaiement">
                
            </tbody>
        </table>



        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/js/bootstrap-select.js"></script>
        

        <script src="script.js" type="module"></script>
    
    </div>
</body>

</html>