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

    .small-select {
        width: 150px;
        height: 30px;
        font-size: 12px;
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
    
<h1>Affectation des modules aux professeurs</h1>
    <!-- <button id="create">create</button>

    <button id="update">update</button>
    <button id="delete">delete</button> -->



    <form id="affecterForm">
        <div class="form-group row">
            <label for="nomModule" class="col-sm-2 col-form-label">Nom du module</label>
            <div class="col-sm-10">
                <!-- <input type="text" class="form-control" id="nomModule" name="nomModule" placeholder="nom du module" required> -->
                <select class="form-control" id="nomModule" name="nomModule" required>

                </select>
            </div>
        </div>

        <div class="form-group row">
            <label for="nomProf" class="col-sm-2 col-form-label">Nom du professeur</label>
            <div class="col-sm-10">
                <!-- <input type="text" class="form-control" id="nomProf" name="nomProf" placeholder="Nom du professeur" required> -->
                <select class="form-control" id="nomProf" name="nomProf" required>

                </select>
            </div>
        </div>
        
        
        <div class="form-group row">
            <div class="col-sm-1">
                <button type="submit" class="btn btn-primary ">Affecter</button>
            </div>
        </div>
    </form>
    <h3 id="response" class="my-3 text-center" style="color:green" ></h3><hr/>

    <div id="alert"></div>
    <!-- <div id="success" class="alert alert-success" role="alert"></div>
    <div id="error" class="alert alert-danger" role="alert"></div> -->

    
    <h2 class="my-3 text-center">Liste des affectations des modules aux professeurs</h2>
    <form id="searchForm">
        <div>
            <select class="form-control" id="afficherselect" name="afficher">
                <option selected>Choisir</option>
                <option value="Tous">Tous</option>
                <option value="ID">ID</option>
                <option value="Module">Nom du modele</option>
                <option value="Professeur">Nom du prefesseur</option>
            </select>
        </div><br><br>
        

        <!-- <h3>Saisir la valeur recherchée reqqqq:</h3> -->
        
        <input type="text" id="search" name="search" placeholder="search">
        <input type="submit" value="rechercher" class="btn btn-primary "><br><br>
    </form>




    <div class="container" style="padding: 20px;">
        

        <table id="tableAffectations" class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Module</th>
                <th scope="col">Nom du professeur</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        
    </div>

    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/js/bootstrap-select.js"></script>
    

    <script src="script.js" type="module"></script>
</body>
</html>