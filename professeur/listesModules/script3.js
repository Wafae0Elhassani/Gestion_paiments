export default function getXhr() {
    let xhr = null;
    try {
      xhr = new XMLHttpRequest();
      console.log("Your browser support AJAX!");
    } catch (e) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          console.log("Your browser does not support AJAX!");
        }
      }
    }
    return xhr;
  }

  var tableBody = document.getElementById("listModule");

function getModules() {
  var xhr = getXhr();

  const data = new FormData();

  data.append("action", "afficherModules");

  var url = "./traitement.php";

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {

      if (xhr.status === 200) {

        var json = JSON.parse(xhr.responseText);

        var modulesData = json;

        if(modulesData!=null){

        for (var i = 0; i < modulesData.length; i++) {

          var row = document.createElement("tr");

          row.setAttribute("data-id", modulesData[i].id);

          createCell(row,modulesData[i].id);

          createCell(row,modulesData[i].Nom);


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

function createCell(row,data){

    var cell1 = document.createElement("td");
    cell1.textContent = data;
    row.appendChild(cell1);
  
  }

  var buttonAfficher = document.getElementById("afficher");

  buttonAfficher.addEventListener("click",function searchById(){

    event.preventDefault();
  
    var select = document.getElementById("afficherselect").value;
  
    var valeur = document.getElementById("search").value;

  
    console.log(select);
  
    if(select=="id"){
      console.log(valeur);
  
      supprimerTab();
  
      getModuleType(select,valeur,"afficher");
  
  
    }
  
    if(select=="nom"){
  
      supprimerTab();
  
      getModuleType("Nom",valeur,"afficherNom");
  
    }
    else if(select=="tous"){
    //   //valeur.disabled=true;
    //   document.getElementById("search").value="";
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

  function getModuleType(select,valeur,method){

    var xhr = getXhr();
  
    const data = new FormData();

    data.append("action", method);

    data.append(select,valeur);
  
    var url = "./traitement.php";
  
    xhr.onreadystatechange = function() {
  
      if (xhr.readyState == 4) {
  
        if (xhr.status === 200) {

          var json = JSON.parse(xhr.responseText);
  
          var modulesData = json;

          if(modulesData!=null){
  
          for (var i = 0; i < modulesData.length; i++) {
  
            var row = document.createElement("tr");
  
            row.setAttribute("data-id", modulesData[i].id);
  
            createCell(row,modulesData[i].id);
  
            createCell(row,modulesData[i].Nom);
  
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

    while (tableBody.firstChild) {

      tableBody.removeChild(tableBody.firstChild);

    }
  }