import getXhr from "./Ajax.js";

var selectedRow=null;

var formulaire =document.getElementById("formulaire");

formulaire.addEventListener('submit',function insert(){

  if(selectedRow==null){
  
    event.preventDefault();
    var xhr = getXhr();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          if("success"!=xhr.responseText){
            document.getElementById("res").innerHTML ="error";
          }else{
            document.getElementById("res").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
          }
        }
    };

    const data=new FormData(formulaire);
    data.append("action","ajouter");
    var url=`./php/traitement.php`;
    xhr.open("POST", url, true);
    xhr.send(data);
    supprimerTab();
    getModules();
  }else{
    
    upModule(selectedRow);

  }

    formulaire.reset();
});


//****************************************************************************************************

var tableBody = document.getElementById("listModule");

function getModules() {
  
  var xhr = getXhr();


  const data = new FormData();
  data.append("action", "afficherTous");

  var url = "./php/traitement.php";

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {

      if (xhr.status === 200) {

        var json = JSON.parse(xhr.responseText);
        console.log("getModules+++++++++++++++");
        console.log(json);
        var modulesData = json;

        if(modulesData!=null){

        for (var i = 0; i < modulesData.length; i++) {

          var moduleData = modulesData[i];

          var row = document.createElement("tr");

          row.setAttribute("data-id", modulesData[i].id);

          createCell(row,modulesData[i].id);

          createCell(row,modulesData[i].Nom);

          createCell(row,modulesData[i].NombresHeures);

          var cellActions = document.createElement("td");

          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Supprimer";
          deleteButton.setAttribute("class","supprimer");
          cellActions.appendChild(deleteButton);

          deleteButton.addEventListener("click", function() {
            var moduleRow = this.parentNode.parentNode; 
            var moduleId = moduleRow.getAttribute("data-id");
            console.log("moduleId" + moduleId);
            SupprimerModule(moduleId); 
            
          });

          var editButton = document.createElement("button");
          editButton.textContent = "Modifier";
          editButton.setAttribute("class","modifier");
          cellActions.appendChild(editButton);

          editButton.addEventListener("click", function() {
            var moduleRow = this.parentNode.parentNode; 
            var moduleId = moduleRow.getAttribute("data-id");
            console.log(moduleId);
            ModifierModule();
          });

          row.appendChild(cellActions);

          tableBody.appendChild(row);
        }
      } 
    }
    }
  };

  xhr.open("POST", url, true);
  xhr.send(data);
}
//************************************************************************************************************/
getModules();
//****************************************************************************************************/
function createCell(row,data){

  var cell1 = document.createElement("td");
  cell1.textContent = data;
  row.appendChild(cell1);

}

//*****************************************************************************************************/

  function SupprimerModule(moduleId) {

    event.preventDefault();
    formulaire.reset();

    if(confirm("Voulez-vous supprimer cette enregistrement?")){
  
    var xhr = getXhr();

    var url = "./php/traitement.php";
  
      xhr.onreadystatechange = function() {

      if (xhr.readyState === 4 && xhr.status === 200) {
    
        console.log(xhr.responseText);

      }
    };  

    
    const data = new FormData();
    
    data.append("action","supprimer");

    data.append("id", moduleId);

    xhr.open("POST", url, true);

    xhr.send(data);
    supprimerTab();
    getModules();
  }
  }

  //****************************************************************************************************/

  function ModifierModule() {

    ajoutModifier();
}

//**********************************************************************************************************/

function ajoutModifier(){

  event.preventDefault();

    let row= event.target.closest("tr");
    
    let id= row.cells[0].textContent;
    let nom = row.cells[1].textContent;
    let nbrH = row.cells[2].textContent;

  document.getElementById("Nom").value=nom;

  document.getElementById("NombresHeures").value=nbrH;
    
    selectedRow= row;

}

//******************************************************************************************************/

function upModule(selectedRow){

  event.preventDefault();

     var xhr = getXhr();

    var url = "./php/traitement.php";

    var data = new FormData(formulaire);

    data.append("action","modifier");
  
   /*  xhr.onreadystatechange = function() {

      xhr.responseType = 'json';

      console.log(xhr.responseText);

    } */

    var tdElements = selectedRow.querySelectorAll("td");

    var values = [];
    
    tdElements.forEach(function(element) {

      values.push(element.textContent);

    });


    data.append("id",values[0]);
  
    xhr.open("POST", url, true);

    xhr.send(data);

    supprimerTab();

    getModules();

    selectedRow=null;
}
//*************************************************************************************************
var formulaire1 = document.getElementById("formulaire1");

var buttonAfficher = document.getElementById("afficher");

buttonAfficher.addEventListener("click",function searchById(){

  event.preventDefault();

  var select = document.getElementById("afficherselect").value;

  var valeur = document.getElementById("search").value;

  console.log(select);

  if(select=="id"){
   console.log("vqleur "+valeur);
    supprimerTab();

    getModuleType(select,valeur,"afficher");


  }

  if(select=="nom"){

    supprimerTab();

    getModuleType("Nom",valeur,"afficherNom");

  }
  if(select=="nombresHeures"){

    supprimerTab();
    
    getModuleType("NombresHeures",valeur,"afficherNB");

  }
  if(select=="tous"){

  
    supprimerTab();
    getModules();
  }

});
function disableSearchInput(){
  let selectedColumn= document.getElementById("formulaire1").afficherselect.value;
  let input= document.getElementById("search");
  if(selectedColumn == "tous"){
      document.getElementById("formulaire1").search.value= "";
      input.disabled = true;
  }else{
      input.disabled = false;
  }
  
}

const afficherselect= document.getElementById("afficherselect");
afficherselect.addEventListener("change", disableSearchInput);
//****************************************************************************************************/

  function getModuleType(select,valeur,method){

    var xhr = getXhr();
  
    const data = new FormData();

    data.append("action", method);

    data.append(select,valeur);
  
    var url = "./php/traitement.php";
  
    xhr.onreadystatechange = function() {
  
      if (xhr.readyState == 4) {
  
        if (xhr.status === 200) {

          var json = JSON.parse(xhr.responseText);
  
          var modulesData = json;

          if(modulesData!=null){
            
            console.log(modulesData);
          for (var i = 0; i < modulesData.length; i++) {
          
            //var moduleData = modulesData[i];
  
            var row = document.createElement("tr");
  
            row.setAttribute("data-id", modulesData[i].id);
  
            createCell(row,modulesData[i].id);
  
            createCell(row,modulesData[i].Nom);
  
            createCell(row,modulesData[i].NombresHeures);
  
            var cellActions = document.createElement("td");
  
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.setAttribute("class","supprimer");
            cellActions.appendChild(deleteButton);
  
            deleteButton.addEventListener("click", function() {
              var moduleRow = this.parentNode.parentNode; 
              var moduleId = moduleRow.getAttribute("data-id");
              SupprimerModule(moduleId); 
              
            });
  
            var editButton = document.createElement("button");
            editButton.textContent = "Modifier";
            editButton.setAttribute("class","modifier");
            cellActions.appendChild(editButton);
  
            editButton.addEventListener("click", function() {
              var moduleRow = this.parentNode.parentNode; 
              var moduleId = moduleRow.getAttribute("data-id");
              console.log(moduleId);
              ModifierModule();
            });
  
            row.appendChild(cellActions);
  
            tableBody.appendChild(row);
          }
        } 
      }
      }
    };
  
    xhr.open("POST", url, true);
    xhr.send(data);

  }

  function supprimerTab(){
    // alert("HI");

    while (tableBody.firstChild) {

      tableBody.removeChild(tableBody.firstChild);

    }
  }