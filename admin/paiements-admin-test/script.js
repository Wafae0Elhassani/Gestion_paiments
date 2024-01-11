import getXhr from "./utilities.js";

//Afficher la liste des professeurs
function afficherTousProfs() {
    
    var xhr = getXhr();
    
    xhr.onreadystatechange = function () {
        console.log("xhr.readyState=="+xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            if(xhr.responseText != null){
                console.log(xhr.responseText);
                let listProfs= JSON.parse(xhr.responseText);
                console.log("listProfs----------->");
                console.log(listProfs);
                
                //pour prof
                let profSelect= document.getElementById("professeur");
                let option= document.createElement("option");
                option.setAttribute("id", "mySelect");
                profSelect.appendChild(option);

                //pour module
                let select= document.getElementById("module");
                let optionModule= document.createElement("option");
                optionModule.setAttribute("id", "mySelectModule");
                select.appendChild(optionModule);

                

                for(let i=0; i<listProfs.length; i++){
                    let option= document.createElement("option");
                    option.value= listProfs[i].Nom + " " + listProfs[i].Prenom;
                    option.textContent= listProfs[i].Nom + " " + listProfs[i].Prenom;
                    profSelect.appendChild(option);
                }
            }
            
        }

    };

    const data=new FormData();
    
    data.append("action","afficherTousProfs");
    var url=`./php/traitement.php`;
    xhr.open("POST", url, true);
    xhr.send(data);
}
afficherTousProfs();



/////////////////////////////afficherTousPaiementsSelonProf
// function helpFetchListModules(reponse, event){
//     var myRequest= getXhr();
    
//     myRequest.onreadystatechange= function(){
        
//         if(myRequest.readyState === 4 && myRequest.status === 200){
            
//             console.log(myRequest.responseText);

//             if(myRequest.responseText != null){
                
//             }
            
//         }
//     }

//     const data= new FormData();
    
//     let nomProf= reponse.;

//     data.append("action", "afficherTousPaiementsSelonProf");
    
//     var url= `./php/traitement.php`;

//     myRequest.open("POST", url, true);
//     myRequest.send(data);
// }

//Afficher la liste des modules
function fetchListModules(event){
    
    var myRequest= getXhr();
    
    myRequest.onreadystatechange= function(){
        console.log("myRequest.readystate: "+myRequest.readyState);
        if(myRequest.readyState === 4 && myRequest.status === 200){
            
            console.log(myRequest.responseText);

            if(myRequest.responseText != null){
                console.log("fetchListModules: "+myRequest.responseText);
                let listModules= JSON.parse(myRequest.responseText);
                console.log("listModules---------------------");
                console.log(listModules);
                if(listModules != null){
                    
                    supprimerSelectOptions();

                    let select= document.getElementById("module");
                    // let option= document.createElement("option");???
                    // option.setAttribute("id", "mySelectModule");
                    // select.appendChild(option);

                    for(let i=0; i<listModules.length; i++){
                        let option= document.createElement("option");
                        option.value = listModules[i].Module;
                        console.log("listModules[i].Module---------------------------------"+ listModules[i].Module);
                        option.textContent= listModules[i].Module;
                        select.appendChild(option);
                    }
                    // let val= document.getElementById("mySelectModule")
                }
            }
            
        }
    }

    const data= new FormData();
    
    let nomProf= event.target.value;

    data.append("action", "afficherListModules");
    data.append("professeur", nomProf);
    var url= `./php/traitement.php`;

    myRequest.open("POST", url, true);
    myRequest.send(data);
}
const listProfs= document.getElementById("professeur");
listProfs.addEventListener("change", fetchListModules);

//supprimer les options de select des modules
function supprimerSelectOptions(){

    let selectModule= document.getElementById("module");
    for(let i=selectModule.options.length-1; i>0; i--){
        selectModule.options[i].remove();
    }
}


//ajouter un paiement
function ajoutPaiement(event){
    event.preventDefault();

    var myRequest= getXhr();
    let action;
    console.log("form----------------");
    console.log(form);
    const data= new FormData(form);

    if(typeof selectedRow === "undefined"){

        action= "ajouter";

    }else{

        action= "modifier";
        const montant2= document.getElementById("montant").value;
        const etat2= document.getElementById("etat").value;
        console.log("montant2: "+montant2);
        console.log("etat2: "+ etat2);
        
        data.append("id", selectedRow.cells[0].textContent);
        
        data.append("montant", montant2);
        
        data.append("etat", etat2);
        
        
    }

    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){

                let response= document.getElementById("res");
                response.innerHTML= myRequest.responseText;
                console.log("ajoutPaiement: " + myRequest.responseText);

                if(typeof selectedRow === "undefined"){
                    if(myRequest.responseText != "success"){
                        let res= document.getElementById("res");
                        res.innerHTML= "ce module déjà existe dans le journal de paiement";
                    }else{
                        let res= document.getElementById("res");
                        res.innerHTML= "success";
                        ajoutRow();
                        document.getElementById("mySelectModule").textContent= "";//////////////////????
                        document.getElementById("mySelectModule").selected= true;
                        let m= document.getElementById("module");
                        m.disabled= false;

                        document.getElementById("mySelect").selected= true;
                        let p= document.getElementById("professeur");
                        p.disabled= false;

                        document.getElementById("montant").value= "";

                        // document.getElementById("mySelectEtat").slected= true;

                        let etat= document.getElementById("etat").value;
                        let mySelectEtat = document.getElementById("etat");
                        for(let i=0; i<mySelectEtat.options.length; i++){
                            if(mySelectEtat.options[i].value == etat){
                                mySelectEtat.options[i].selected= false;
                            }

                        }
                        selectedRow= undefined;
                    }
                    

                }
                else{
                    console.log(selectedRow);
                    modifierAffectation(selectedRow);////////////////ICI
                    console.log(selectedRow);
                    selectedRow= undefined;

                    // document.getElementById("etat").selected= "";//////////////////????
                    
                    let etat= document.getElementById("etat").value;
                    let mySelectEtat = document.getElementById("etat");
                    for(let i=0; i<mySelectEtat.options.length; i++){
                        if(mySelectEtat.options[i].value == etat){
                            mySelectEtat.options[i].selected= false;
                        }

                    }
                    document.getElementById("mySelectEtat").selected= true;

                    document.getElementById("mySelectModule").selected= true;
                    let m= document.getElementById("module");
                    m.disabled= false;

                    document.getElementById("mySelect").selected= true;
                    let p= document.getElementById("professeur");
                    p.disabled= false;

                    document.getElementById("montant").value= "";

                    

                    selectedRow= undefined;
                }
                
        }
    };
    
    data.append("action", action);
    
    
    var url= `./php/traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);

}
const form= document.getElementById("formulaire");
form.addEventListener("submit", ajoutPaiement);


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
                            const tableau= document.getElementById("paiements");
                            console.log("ajoutRow: response[response.length-1]---------------------");
                            console.log(response[response.length-1]);

                            let newRow= tableau.insertRow();
                            newRow.classList.add("myRowClass");
                            
                            let cell1= newRow.insertCell();
                            cell1.innerHTML= response[response.length-1].ID;

                            let cell2= newRow.insertCell();
                            cell2.innerHTML= response[response.length-1].Module;

                            let cell3= newRow.insertCell();
                            cell3.innerHTML= response[response.length-1].Professeur;

                            let cell4= newRow.insertCell();
                            cell4.innerHTML= response[response.length-1].Montant;

                            let cell5= newRow.insertCell();
                            cell5.innerHTML= response[response.length-1].Etat;

                            if(response[response.length-1].Etat === "Payé"){
                                supprimerAffectation(response[response.length-1].Module);
                            }
                            
                            let cell6= newRow.insertCell();
                            cell6.innerHTML= `<td>
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
                                supprimerPaiement(response[response.length-1].ID, event);
                            });

                            let nomModuleOptions= document.getElementById("module");
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
    data.append("action", "afficherTousPaiements");
    var url= `./php/traitement.php`;
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
                        const tableau= document.getElementById("paiements");
                        
                        

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
                            cell4.innerHTML= response[i].Montant;

                            let cell5= newRow.insertCell();
                            cell5.innerHTML= response[i].Etat;
                            
                            let cell6= newRow.insertCell();
                            cell6.innerHTML= `<td>
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
                                supprimerPaiement(response[i].ID, event);
                            });
                        }
                    }
                    
                }
                
        }
    };

    const data= new FormData();
    data.append("action", "afficherTousPaiements");
    var url= `./php/traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
    
}
ajoutTableau();

var precedentSelectedRowID;
var selectedRow;
function chargerForm(event){

        let row= event.target.closest("tr");
        let id= row.cells[0].textContent;
        precedentSelectedRowID= id;
        console.log("roooooooooooooooooooooooooooooooooooooooooow");
        console.log(row);
        let module = row.cells[1].textContent;
        let professeur = row.cells[2].textContent;
        let montant = row.cells[3].textContent;
        let etat = row.cells[4].textContent;
        console.log("etat: "+etat);
        console.log("montant: "+montant);

        let mySelectModule = document.getElementById("mySelectModule");//le module à modifier ne sera pas parmi les choix puisqu'il est déjà dans la table de paiement
        mySelectModule.textContent= module;
        mySelectModule.value= module;
        mySelectModule.selected= true;
        let m= document.getElementById("module");//to fix the choice already choosen
        m.disabled= true;

        let mySelectProf = document.getElementById("professeur");
        for(let i=0; i<mySelectProf.options.length; i++){
            if(mySelectProf.options[i].value == professeur){
                mySelectProf.options[i].selected= true;
                
            }
        }
        mySelectProf.disabled= true;
        

        let mySelectEtat = document.getElementById("etat");
        for(let i=0; i<mySelectEtat.options.length; i++){
            if(mySelectEtat.options[i].value == etat){
                mySelectEtat.options[i].selected= true;
            }

        }

        let inputMontant= document.getElementById("montant");
        inputMontant.textContent= montant;
        inputMontant.value= montant;

        selectedRow= row;
}

//modifier dans le tableau de HTML
function modifierAffectation(modifierRow){

    var myRequest= getXhr();
    console.log("modifierRow========================");
    console.log(modifierRow);
    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){

                console.log("modifierAffectation "+myRequest.responseText);
                
                let response = JSON.parse(myRequest.responseText);
                if(response!=null){

                        // let row= event.target.closest("tr");
                        console.log("response[0]---------------------------------------------");
                        console.log(response[0]);
                        modifierRow.cells[3].textContent= response[0].Montant;
                        modifierRow.cells[4].textContent= response[0].Etat;
                        
                        if(response[0].Etat === "Payé"){
                            supprimerAffectation(response[0].Module);
                            console.log("-------------modifierAffectation: affectation supprimer apres modification---------------");
                        }else if(response[0].Etat === "Non payé"){
                            console.log("recreerAffectation+++++++++++++++++++++++++");
                            recreerAffectation(response[0].Module, response[0].Professeur);
                        }

                        console.log(modifierRow);

                        let nomModuleOptions= document.getElementById("module");
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
                }
        }
    };



    // let row= event.target.closest("tr");

    let id= selectedRow.cells[0].textContent;
    console.log("id: "+id);
    const data= new FormData();
    data.append("id", id);
    data.append("action", "afficher");

    var url= `./php/traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
}


function recreerAffectation(module, professeur){
    var myRequest= getXhr();
    myRequest.onreadystatechange= function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
            console.log('recreerAffectation response: '+ myRequest.responseText);
            // alert("Affectation correspondante est recréée avec succès");
        }
    }



    const data= new FormData();
    data.append("module", module);
    data.append("professeur", professeur);
    data.append("action", "recreerAffectation");

    var url= `./php/traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
}

function supprimerPaiement(id, event){
    event.preventDefault();
    console.log("supprimerPaiement--------------------------");
    let choix= confirm("Voulez-vous vraiment supprimer ce paiement ?");
    if(choix){
    
        let row= event.target.closest("tr");
        console.log("id "+id);
        row.remove();

        var myRequest= getXhr();

        myRequest.onreadystatechange= function(){
            if(myRequest.readyState == 4 && myRequest.status == 200){
                //dans le cas du retour de la réponse

                if(myRequest.responseText!=null){
                    if(precedentSelectedRowID === row.cells[0].textContent){
                        //row.cells[0].textContent represents the actual selected row ID

                        //si une ligne est sélectionnée à modifier ensuite elle est supprimée
                        // avant d'être modifiée, les champs du formulaire doivent être vidés
                        document.getElementById("mySelectModule").textContent= "";//////////////////????
                        document.getElementById("mySelectModule").selected= true;
                        let m= document.getElementById("module");
                        m.disabled= false;

                        document.getElementById("mySelect").selected= true;
                        let p= document.getElementById("professeur");
                        p.disabled= false;

                        document.getElementById("montant").value= "";

                        let mySelectEtat = document.getElementById("etat");
                        let etat= mySelectEtat.value;
                        for(let i=0; i<mySelectEtat.options.length; i++){
                            if(mySelectEtat.options[i].value == etat){
                                mySelectEtat.options[i].selected= false;
                            }

                        }
                        document.getElementById("mySelectEtat").slected= true;

                        selectedRow= undefined;
                    }
                    // let deletedValue= row.cells[1].textContent;
                    // console.log("deletedValue----------------------------"+deletedValue);
                    // let selectList= document.getElementById("module");
                    // let option= document.createElement("option");
                    // option.textContent= deletedValue;
                    // option.value= deletedValue;
                    // selectList.appendChild(option);
                }
            }
        }

        const data= new FormData();
        data.append("id", id);
        data.append("action", "supprimer");
        var url= `./php/traitement.php`;
        myRequest.open("POST", url, true);
        myRequest.send(data);
    }
    
}
//////////////////////////////
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
        
        action="afficherTousPaiements";
        
    }else if(selectedColumn === "ID"){
        action= "rechercherByID";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);

    }else if(selectedColumn === "Module"){
        action= "rechercherByModule";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
        
    }else if(selectedColumn === "Professeur"){
        action= "rechercherByProfesseur";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
        
    }else if(selectedColumn === "Montant"){
        action= "rechercherByMontant";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
        
    }else if(selectedColumn === "Etat"){
        action= "rechercherByEtat";
        let writtedValue= searchForm.search.value;
        data.append("value", writtedValue);
        
    }

    myRequest.onreadystatechange= function(){

        if(myRequest.readyState == 4 && myRequest.status == 200){
        
            if(myRequest.responseText === "Choisir une action valide"){
                document.getElementById("action").innerHTML= myRequest.responseText;
            }else{
                document.getElementById("action").style.display = "none";
            }
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
                        const tableau= document.getElementById("paiements");

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
                            cell4.innerHTML= responses[i].Montant;

                            let cell5= newRow.insertCell();
                            cell5.innerHTML= responses[i].Etat;
                            
                            let cell6= newRow.insertCell();
                            cell6.innerHTML= `<td>
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
                                supprimerPaiement(responses[i].ID, event);
                            });
                        }
                    }
            }   
        }
    }

    
    data.append("action", action);
    

    var url= `./php/traitement.php`;
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


function supprimerAffectation(module){//AU CAS DAJOUT ET DE MODIFICATION

    var myRequest= getXhr();
    myRequest.onreadystatechange= function(){

        if(myRequest.readyState == 4 && myRequest.status == 200){
            if(myRequest.responseText === "success"){
                alert("Affectation supprimée avec succès");
            }else{
                alert("Affectation correspondante déjà supprimée");
            }
            
        }
    }

    const data= new FormData();
    data.append("action", "supprimerAffectation");
    data.append("module", module);
    

    var url= `./php/traitement.php`;
    myRequest.open("POST", url, true);
    myRequest.send(data);
}