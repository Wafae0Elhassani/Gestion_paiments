import getXhr from "./ajax.js";

var idsession=sessionStorage.getItem('idprof');
var profsession=sessionStorage.getItem('prof');

var tableBody3 = document.getElementById("listEtatProf");

var buttonAfficher = document.getElementById("afficher");

buttonAfficher.addEventListener("click",function searchBy(){

  event.preventDefault();

  var select = document.getElementById("afficherselect").value;

  if(select=="paye"){

    supprimerTab();
    getModuleType("Etat","Payé","afficherPaye");

  }

  else if(select=="nonpaye"){

    supprimerTab();

    getModuleType("Etat","Non payé","afficherNonpaye");
  } 
  else if(select=="tous"){

    supprimerTab();
    getModuleType1("Professeur",profsession,"afficherTousMP");
  }

});

function disableSearchInput(){
  let selectedColumn= document.getElementById("formulaire1").afficherselect.value;
  let input= document.getElementById("search");
  if(selectedColumn == "tous"){
      document.getElementById("formulaire1").search.value= "";
     
  }
  
}

const afficherselect= document.getElementById("afficherselect");
afficherselect.addEventListener("change", disableSearchInput);

getModuleType1("Professeur",profsession,"afficherTousMP");

function getModuleType1(select,valeur,method){
  
    var xhr = getXhr();
  
    const data = new FormData();

    data.append("action", method);
    data.append(select,valeur);
  
    var url = "./traitement.php";
  
    xhr.onreadystatechange = function() {
  
      if (xhr.readyState == 4) {
  
        if (xhr.status === 200) {
        
          var json = JSON.parse(xhr.responseText);
          console.log(json);
          var modulesData = json;

          if(modulesData!=null){
  
          for (var i = 0; i < modulesData.length; i++) {
  
            var row = document.createElement("tr");
  
            row.setAttribute("data-id", modulesData[i].ID);
  
            createCell(row,modulesData[i].Module);
  
            tableBody3.appendChild(row);
          }
        } 
      }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.send(data);

  }

function getModuleType(select,valeur,method){
  
    var xhr = getXhr();
  
    const data = new FormData();

    data.append("action", method);

    data.append("Professeur",profsession);

    data.append(select,valeur);
  
    var url = "./traitement.php";
  
    xhr.onreadystatechange = function() {
  
      if (xhr.readyState == 4) {
  
        if (xhr.status === 200) {
        
          var json = JSON.parse(xhr.responseText);
          console.log(json);
          var modulesData = json;

          if(modulesData!=null){
  
          for (var i = 0; i < modulesData.length; i++) {
  
            var row = document.createElement("tr");
  
            row.setAttribute("data-id", modulesData[i].ID);
  
            createCell(row,modulesData[i].Module);
  
            tableBody3.appendChild(row);
          }
        } 
      }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.send(data);

  }

  function createCell(row,data){

    var cell1 = document.createElement("td");
    cell1.textContent = data;
    row.appendChild(cell1);
  
  }

  function supprimerTab(){

    while (tableBody3.firstChild) {

        tableBody3.removeChild(tableBody3.firstChild);

    }
  }