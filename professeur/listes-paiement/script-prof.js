import getXhr from "./ajax.js";

var profsession=sessionStorage.getItem('prof');


var tableBody2 = document.getElementById("listpaieProf");

function getListPaieProf() {

  var xhr = getXhr();

  const data = new FormData();

  data.append("action", "afficherProfMontant");

  data.append("Professeur",profsession);

  var url = "./traitement.php";

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {

      if (xhr.status === 200) {

        console.log(xhr.responseText);

         var json = JSON.parse(xhr.responseText);

         var modulesData = json;

        if(modulesData!=null){

        for (var i = 0; i < modulesData.length; i++) {

          var row = document.createElement("tr");

          row.setAttribute("data-id", modulesData[i].ID);

          createCell(row,modulesData[i].Module);

          createCell(row,modulesData[i].Montant);

          tableBody2.appendChild(row);
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

getListPaieProf();

//************************************************************************************/

var buttonAfficher = document.getElementById("afficher");

buttonAfficher.addEventListener("click",function searchBy(){

  event.preventDefault();

  var select = document.getElementById("afficherselect").value;

  var valeur = document.getElementById("search").value;

  if(select=="Module"){

    supprimerTab();

    getModuleType("Module",valeur,"afficherParModule");

  }

   if(select=="Montant"){

    supprimerTab();

    getModuleType("Montant",valeur,"afficherParMontant");

  } 

});
function disableSearchInput(){
  let selectedColumn= document.getElementById("formulaire1").afficherselect.value;
  if(selectedColumn == "tous"){
      document.getElementById("formulaire1").search.value= "";
  }
  
}

const afficherselect= document.getElementById("afficherselect");
afficherselect.addEventListener("change", disableSearchInput);

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

          console.log(xhr.responseText);

          var json = JSON.parse(xhr.responseText);
  
          var modulesData = json;

          if(modulesData!=null){
  
          for (var i = 0; i < modulesData.length; i++) {
  
            var row = document.createElement("tr");
  
            row.setAttribute("data-id", modulesData[i].ID);
  
            createCell(row,modulesData[i].Module);
  
            createCell(row,modulesData[i].Montant);
  
            tableBody2.appendChild(row);
          }
        } 
      }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.send(data);

  }

  function supprimerTab(){

    while (tableBody2.firstChild) {

        tableBody2.removeChild(tableBody2.firstChild);

    }
  }