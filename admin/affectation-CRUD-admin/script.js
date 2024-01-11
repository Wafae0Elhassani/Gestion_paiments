import getXhr from "./utilities.js";

function affecter(event){
    event.preventDefault();
    var myRequest= getXhr();
    let action;

    const data= new FormData(form);

    let response= document.getElementById("response");

    if(typeof selectedRow === "undefined"){
        action= "affecter";
        console.log("affecter event");
    }else{

        // let form= document.getElementById("affecterForm");

        action= "modifier";
        const nomModule2= document.getElementById("nomModule").value;
        const nomProf2= document.getElementById("nomProf").value;
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++nomModule2: "+ nomProf2);
        data.append("id", selectedRow.cells[0].textContent);
        
        data.append("nomModule", nomModule2);
        console.log("nomModule2: "+nomModule2);
        data.append("nomProf", nomProf2);
        
        
    }

    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
            
                //dans le cas du retour de la réponse
                
                console.log(myRequest.responseText);
                if(typeof selectedRow === "undefined"){
                    // ajoutTableau();
                    // let tableau= document.getElementById("tableAffectations");
                    //ajout d'une seule row ds tableau
                    if(myRequest.responseText != "success"){
                        response.innerHTML= "error";
                    }else{
                        ajoutRow();
                        response.innerHTML= myRequest.responseText;
                    }
                    

                    // let valueProf= document.getElementById("nomProf").value;
                    // for(let i=0; i<document.getElementById("nomProf").options.length; i++){
                    //     if(document.getElementById("nomProf").options[i].value === valueProf){
                    //         document.getElementById("nomProf").options[i].selected= false;
                    //     }
                    // }
                    // document.getElementById("mySelect").value= "";
                    // document.getElementById("mySelect").selected= true;

                    // document.getElementById("mySelect").selectedIndex = -1;


                }
                else{
                    if(myRequest.responseText != "success"){
                        response.innerHTML= "error";
                    }else{
                        console.log(selectedRow);
                        modifierAffectation(selectedRow);
                        console.log(selectedRow);
                        selectedRow= undefined;
                        response.innerHTML= myRequest.responseText;
                    }
                    
                }
                
        }
    };
    
    data.append("action", action);
    console.log("data ci(dessous");
    console.log(data.get("id"));
    var url= `./traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);


}
var form= document.getElementById("affecterForm");
form.addEventListener("submit", affecter);


// function hideChosenChoice(){
//     let nomModule= document.getElementById("nomModule");
//     let valueToHide= selectedRow.
// }


function ajoutRow(){
    var myRequest= getXhr();
    
    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
                //dans le cas du retour de la réponse

                if(myRequest.responseText!=null){
                    // console.log(myRequest.responseText);
                    var response = JSON.parse(myRequest.responseText);
                    if(response!=null){
                        // response est sous forme d'ensemble des données existantes ds la base de données
                        const tableau= document.getElementById("tableAffectations");
                        
                            let newRow= tableau.insertRow();
                            newRow.classList.add("myRowClass");
                            
                            let cell1= newRow.insertCell();
                            cell1.innerHTML= response[response.length-1].ID;

                            let cell2= newRow.insertCell();
                            cell2.innerHTML= response[response.length-1].Module;

                            let cell3= newRow.insertCell();
                            cell3.innerHTML= response[response.length-1].Professeur;
                            
                            let cell4= newRow.insertCell();
                            cell4.innerHTML= `<td>
                            <button class="btn btn-primary" id="modifier${response.length-1}">Modifier</button> 
                            <button class="btn btn-danger" id="supprimer${response.length-1}">Supprimer</button> 
                            </td>`;  

                            
                            let modifierBtn= document.getElementById(`modifier${response.length-1}`);
                            modifierBtn.addEventListener("click", function(event){
                                chargerForm(event);
                            });

                            let supprimerBtn= document.getElementById(`supprimer${response.length-1}`);
                            supprimerBtn.addEventListener("click", function(event){
                                // console.log(response[i].ID);
                                supprimerAffectation(response[response.length-1].ID, event);
                            });

                            //pour module
                            let nomModuleOptions= document.getElementById("nomModule");
                            let valueToHide= response[response.length-1].Module;

                            for(let i=0; i<nomModuleOptions.options.length; i++){
                                let option= nomModuleOptions.options[i];
                                if(option.value === valueToHide){
                                    // option.textContent="";
                                    option.selected= false;
                                    option.style.display= "none";
                                }
                            }

                            
                        
                    }
                    
                }
                
        }
    };

    const data= new FormData();
    data.append("action", "afficherTous");
    var url= `./traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);

}
function ajoutTableau(){

    var myRequest= getXhr();
    
    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
                //dans le cas du retour de la réponse

                if(myRequest.responseText!=null){
                    // console.log(myRequest.responseText);
                    var response = JSON.parse(myRequest.responseText);
                    if(response!=null){
                        const tableau= document.getElementById("tableAffectations");
                        
                        

                        for(let i=0; i<response.length; i++){
                            let newRow= tableau.insertRow();
                            newRow.classList.add("myRowClass");
                            
                            let cell1= newRow.insertCell();
                            cell1.innerHTML= response[i].ID;

                            let cell2= newRow.insertCell();
                            cell2.innerHTML= response[i].Module;

                            let cell3= newRow.insertCell();
                            cell3.innerHTML= response[i].Professeur;
                            
                            let cell4= newRow.insertCell();
                            cell4.innerHTML= `<td>
                            <button class="btn btn-primary" id="modifier${i}">Modifier</button> 
                            <button class="btn btn-danger" id="supprimer${i}">Supprimer</button> 
                            </td>`;  

                            
                            let modifierBtn= document.getElementById(`modifier${i}`);
                            modifierBtn.addEventListener("click", function(event){
                                chargerForm(event);
                            });

                            let supprimerBtn= document.getElementById(`supprimer${i}`);
                            supprimerBtn.addEventListener("click", function(event){
                                // console.log(response[i].ID);
                                supprimerAffectation(response[i].ID, event);
                            });
                        }
                    }
                    
                }
                
        }
    };

    const data= new FormData();
    data.append("action", "afficherTous");
    var url= `./traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
    
}
ajoutTableau();

// function moduleEtat(module){
//         var myRequest= getXhr();

//         myRequest.onreadystatechange= function(){
//             if(myRequest.readyState == 4 && myRequest.status == 200){
                
//             }
//         }

//         const data= new FormData();
//         data.append("nomModule", module);
//         data.append("action", "moduleEtat");
//         var url= `./traitement.php`;
//         myRequest.open("POST", url, true);
//         myRequest.send(data);
// }//////////////////////////////////
function moduleEtat(module) {
    return new Promise(function(resolve, reject) {
        var myRequest = getXhr();

        myRequest.onreadystatechange = function() {
            if (myRequest.readyState == 4) {
                if (myRequest.status == 200) {
                    var result = myRequest.responseText;
                    
                    resolve(result);
                } else {
                    reject(new Error("Request failed. Status: " + myRequest.status));
                }
            }
        };

        const data = new FormData();
        data.append("nomModule", module);
        data.append("action", "moduleEtat");
        var url = `./traitement.php`;
        myRequest.open("POST", url, true);
        myRequest.send(data);
    });
}

// moduleEtat("exampleModule")
//     .then(function(result) {
//         console.log("Result: " + result);
//         return true; // You can perform further actions based on the result
//     })
//     .catch(function(error) {
//         console.error("Error: " + error);
//         return false; // Handle any errors if necessary
//     });
// //2
    // moduleEtat("exampleModule")
    //     .then(function(result) {
    //         let jsonData = JSON.parse(result);
    //         // Handle the parsed JSON data
    //         console.log(jsonData);
    //     })
    //     .catch(function(error) {
    //         // Handle any errors that occurred during the promise
    //         console.error(error);
    //     });

//////////////////////////////
function supprimerAffectation(id, event) {
    event.preventDefault();
///////////////////////////////////
let row= event.target.closest("tr");
if(precedentSelectedRowID === row.cells[0].textContent){
    
    document.getElementById("mySelectModule").textContent= "";
    document.getElementById("mySelectModule").selected= true;
    let m= document.getElementById("nomModule");
    m.disabled= false;

    document.getElementById("mySelect").selected= true;
    let p= document.getElementById("nomProf");
    p.disabled= false;

    // let mySelectEtat = document.getElementById("etat");
    // let etat= mySelectEtat.value;
    // for(let i=0; i<mySelectEtat.options.length; i++){
    //     if(mySelectEtat.options[i].value == etat){
    //         mySelectEtat.options[i].selected= false;
    //     }

    // }
    // document.getElementById("mySelectEtat").slected= true;

    selectedRow= undefined;
}


/////////////////////////////
    document.getElementById("affecterForm").reset();
    let choix = confirm("Voulez-vous vraiment supprimer cette affectation ?");
    if (choix) {
        let row = event.target.closest("tr");
        console.log("+++++++++++++++++++++++++++++++++++++++HHHHHHHHHHHHHHHHHHHHH");
        ///////////////////////////
        moduleEtat(row.cells[1].textContent)
            .then(function(result) {
                console.log(result);
                let jsonData = JSON.parse(result);
                console.log("jsonData=============================");
                console.log(jsonData); //jsonData.length === 0 càd n'existe pas encore ds la table paiements
                if (jsonData.length === 0 || jsonData[jsonData.length - 1].Etat === "Payé") {
                    console.log("peut être supprimé");
                    console.log("id " + id);
                    row.remove();

                    var myRequest = getXhr();

                    myRequest.onreadystatechange = function() {
                        if (myRequest.readyState == 4 && myRequest.status == 200) {
                            //dans le cas du retour de la réponse
                            if (myRequest.responseText != null) {
                                let deletedValue = row.cells[1].textContent;
                                console.log("deletedValue----------------------------" + deletedValue);
                                let selectList = document.getElementById("nomModule");
                                let option = document.createElement("option");
                                option.textContent = deletedValue;
                                
                                option.value = deletedValue;
                                selectList.appendChild(option);
                            }
                        }
                    };

                    const data = new FormData();
                    data.append("id", id);
                    data.append("action", "supprimer");
                    var url = `./traitement.php`;
                    myRequest.open("POST", url, true);
                    myRequest.send(data);
                } else {
                    alert("Ce module n'est pas encore payé");
                }
                // Handle the parsed JSON data
                console.log(jsonData);
            })
            .catch(function(error) {
                // Handle any errors that occurred during the promise
                console.error(error);
            });
        /////////////////////////
    }
}

var precedentSelectedRowID;
var selectedRow;
function chargerForm(event){
    // console.log(event.target.closest("tr"));
    
    // alert();
        let row= event.target.closest("tr");
        let id= row.cells[0].textContent;
        precedentSelectedRowID= id;
        // console.log("idp: "+id);
        let module = row.cells[1].textContent;
        let professeur = row.cells[2].textContent;
        
        let form= document.getElementById("affecterForm");

        // form.nomModule.value= module;
        // form.nomProf.value= professeur;
        // console.log(document.getElementById("mySelect"));

        let mySelectModule = document.getElementById("mySelectModule");
        mySelectModule.textContent= module;
        mySelectModule.value= module;
        mySelectModule.selected= true;

        console.log("mySelectModule---------------------------");
        console.log(mySelectModule);

        let mySelectProf = document.getElementById("mySelect");
        mySelectProf.textContent = professeur;
        mySelectProf.value= professeur;
        mySelectProf.selected= true;

        console.log("mySelectProf----------------------------");
        console.log(mySelectProf);
        // mySelectProf.setAttribute("id", id);?? NOT NECESSARY RIGHT ??
        // console.log(document.getElementById(id));

        selectedRow= row;
}

//modifier dans le tableau de HTML
function modifierAffectation(modifierRow){

    var myRequest= getXhr();

    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){

                console.log("modifierAffectation "+myRequest.responseText);
                
                let response = JSON.parse(myRequest.responseText);
                if(response!=null){

                        // let row= event.target.closest("tr");
                        console.log(modifierRow);
                        modifierRow.cells[0].textContent= response[0].ID;
                        modifierRow.cells[1].textContent= response[0].Module;
                        modifierRow.cells[2].textContent= response[0].Professeur;

                        console.log(modifierRow);

                        let nomModuleOptions= document.getElementById("nomModule");
                        let valueToHide= response[0].Module;
                        // console.log("valueToHide---------------------"+ valueToHide);
                        for(let i=0; i<nomModuleOptions.options.length; i++){
                            let option= nomModuleOptions.options[i];
                            
                            if(option.value === valueToHide){
                                option.textContent="";
                                option.style.display= "none";
                                option.selected= false;
                                
                                
                            }
                        }
                        // option.setAttribute("id", "mySelect")
                        let optionProf= document.getElementById("mySelect");
                        optionProf.textContent= "";
                        optionProf.selected= true;

                        let option= document.createElement("option");
                        option.setAttribute("id", "mySelectModule");
                        option.textContent="";
                        option.selected= true;
                        nomModuleOptions.insertBefore(option, nomModuleOptions.firstChild);
                        // nomModuleOptions.firstChild(option);
                }
        }
    };



    // let row= event.target.closest("tr");

    let id= selectedRow.cells[0].textContent;
    console.log("id: "+id);
    const data= new FormData();
    data.append("id", id);
    data.append("action", "afficher");

    var url= `./traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
}

function supprimerRowsTable(){
    let rows= document.getElementsByClassName("myRowClass");
    console.log("rows: ");
    console.log(rows);
    for(let i=rows.length-1; i>-1; i--){
        rows[i].remove();
        console.log("i= ",i);
    }
    
}

function search(event){
    event.preventDefault();

    var myRequest= getXhr();

    const data= new FormData();

    // let selectedColumn = event.target.value;
    let selectedColumn= searchForm.afficherselect.value;
    console.log("selectedColumn: "+ selectedColumn);
    let action;
    

    if(selectedColumn === "Tous"){
        
        action="afficherTous";
        
    }else if(selectedColumn === "ID"){
        action= "rechercherByID";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
    }else if(selectedColumn === "Module"){
        action= "rechercherByModule";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
    }else if(selectedColumn === "Professeur"){
        action= "rechercherByProf";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
        
    }

    myRequest.onreadystatechange= function(){

        if(myRequest.readyState == 4 && myRequest.status == 200){
        
            if(myRequest.responseText!=null){
                console.log("response not null");
                console.log(myRequest.responseText);
                let responses = JSON.parse(myRequest.responseText);
                // console.log("responses+++++++++++++++++++++++++++++++++++++++++++++++");
                
                console.log(responses);
                //function that delete elements of the table
                supprimerRowsTable();
                console.log("after supprimerrows");
                console.log(responses);
                if(responses!=null){
                        const tableau= document.getElementById("tableAffectations");

                        for(let i=0; i<responses.length; i++){
                            let newRow= tableau.insertRow();
                            newRow.classList.add("myRowClass");
                            
                            let cell1= newRow.insertCell();
                            cell1.innerHTML= responses[i].ID;

                            let cell2= newRow.insertCell();
                            cell2.innerHTML= responses[i].Module;

                            let cell3= newRow.insertCell();
                            cell3.innerHTML= responses[i].Professeur;
                            
                            let cell4= newRow.insertCell();
                            cell4.innerHTML= `<td>
                            <button class="btn btn-primary" id="modifier${i}">Modifier</button> 
                            <button class="btn btn-danger" id="supprimer${i}">Supprimer</button> 
                            </td>`;  

                            
                            let modifierBtn= document.getElementById(`modifier${i}`);
                            modifierBtn.addEventListener("click", function(event){
                                chargerForm(event);
                            });

                            let supprimerBtn= document.getElementById(`supprimer${i}`);
                            supprimerBtn.addEventListener("click", function(event){
                                // console.log(response[i].ID);
                                supprimerAffectation(responses[i].ID, event);
                            });
                        }
                    }
            }   
        }
    }

    
    data.append("action", action);
    

    var url= `./traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
}

const searchForm= document.getElementById("searchForm");
searchForm.addEventListener("submit", search);

function disableSearchInput(){
    let selectedColumn= document.getElementById("searchForm").afficherselect.value;
    let input= document.getElementById("search");
    if(selectedColumn === "Tous"){
        searchForm.search.value= "";
        input.disabled = true;
    }else{
        input.disabled = false;
    }
    
}

const afficherselect= document.getElementById("afficherselect");
afficherselect.addEventListener("change", disableSearchInput);

//Afficher la liste des professeurs
function fetchListProfesseur(){
    var myRequest= getXhr();
    console.log("fetchListProfesseur");


    myRequest.onreadystatechange= function(){
        console.log("myRequest.readystate: "+myRequest.readyState);
        if(myRequest.readyState === 4 && myRequest.status === 200){
            console.log("fetchListProfesseur");
            console.log(myRequest.responseText);

            if(myRequest.responseText != null){
                let listProfesseurs= JSON.parse(myRequest.responseText);
                if(listProfesseurs != null){
                    let select= document.getElementById("nomProf");

                    let option= document.createElement("option");
                    option.setAttribute("id", "mySelect");
                    select.appendChild(option);

                    for(let i=0; i<listProfesseurs.length; i++){
                        let option= document.createElement("option");
                        option.value = listProfesseurs[i].Nom + " " + listProfesseurs[i].Prenom;
                        option.textContent= listProfesseurs[i].Nom + " " + listProfesseurs[i].Prenom;
                        select.appendChild(option);
                    }
                }
            }
            
        }
    }

    const data= new FormData();
    data.append("action", "afficherListProfs");
    var url= `./traitement.php`;

    myRequest.open("POST", url, true);
    myRequest.send(data);
}

fetchListProfesseur();


//Afficher la liste des modules
function fetchListModules(){
    var myRequest= getXhr();
    
    myRequest.onreadystatechange= function(){
        console.log("myRequest.readystate: "+myRequest.readyState);
        if(myRequest.readyState === 4 && myRequest.status === 200){
            
            console.log(myRequest.responseText);

            if(myRequest.responseText != null){
                let listModules= JSON.parse(myRequest.responseText);
                console.log("66666666666666666666listModules---------------------");
                console.log(listModules);
                if(listModules != null){
                    let select= document.getElementById("nomModule");

                    let option= document.createElement("option");
                    option.setAttribute("id", "mySelectModule");
                    select.appendChild(option);

                    for(let i=0; i<listModules.length; i++){
                        let option= document.createElement("option");
                        option.value = listModules[i].Nom;
                        console.log("listModules[i].Nom---------------------------------"+ listModules[i].Nom);
                        option.textContent= listModules[i].Nom;
                        select.appendChild(option);
                    }
                }
            }
            
        }
    }

    const data= new FormData();
    data.append("action", "afficherListModules");
    var url= `./traitement.php`;

    myRequest.open("POST", url, true);
    myRequest.send(data);
}

fetchListModules();