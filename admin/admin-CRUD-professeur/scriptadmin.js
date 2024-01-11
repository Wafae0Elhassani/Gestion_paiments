import getXhr from './php/utilities.js';
////variables//////
var id=-1;
/////////functions/////////////
function telValide(tel) {
   const regex = /^06\d{8}$/;
   return regex.test(tel);
}
/////////////////
function affichertout(){
   //pour ajouter la liste des profs existant dans le tableau
   var xhrInstance = getXhr();
       xhrInstance.onreadystatechange=function(){
              if(this.readyState == 4 && this.status==200){
                 console.log(this.response);
                 let tabPers = JSON.parse( xhrInstance.responseText);
                 addexistedprofs(tabPers);
              }
       };
       xhrInstance.open("POST","./php/traitementadmin.php",true);
       xhrInstance.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhrInstance.send("action=afficherTous");
   }
   affichertout();
//////////vider tab
function VIDERTA(){
   const  tbody = document.getElementById("listprofs");
   console.log(tbody);
   while (tbody.rows.length > 0) {
      tbody.deleteRow(0);
    }
   }
////////////suprimer prof  ////////////e
function supprimerprofback(idprof){
   ////////////suprimer prof back  ////////////e
   var xhrInstance = getXhr();
    xhrInstance.onreadystatechange=function(){
           if(this.readyState == 4 && this.status==200){
              console.log(this.response);
              VIDERTA();
              affichertout();
           }
    };
    const data = new FormData();
    data.append("action","supprimer");
    data.append("id",idprof);
    xhrInstance.open("POST","./php/traitementadmin.php",true);
    xhrInstance.send(data);
};

function supprimerproffront(here){
   document.getElementById("ajouter").innerText="Ajouter";
   viderchamps();
   ////////////suprimer prof front ////////////
   var tr=here.parentNode.parentNode;
   console.log(tr.id);
   let children=tr.children;
   let removeid=children[0].innerText;
   let confirmer=confirm("voulez vous suprimer "+children[1].innerText+"?");
   if(confirmer){
      ////////suprimer de front///////
   supprimerprofback(removeid);
  //}
   }
}
///////////play what to modify in form
function ajoutactionmodif(here){
   let but=document.getElementById("ajouter");
   but.innerText="modifier";
      var tr=here.parentNode.parentNode;
      console.log(tr.id);
      let children=tr.children;
      console.log(children[0].innerText);
      
      document.getElementById("nom").value=children[1].innerText;;
      document.getElementById("prenom").value=children[2].innerText;
      document.getElementById("Adresse").value=children[3].innerText;
      document.getElementById("email").value=children[4].innerText;
      document.getElementById("Telephone").value=children[5].innerText;
      document.getElementById("Tauxhoraire").value=children[6].innerText;
      return children[0].innerText;
}
//////////////////////////
 ///////creat row suprimer
 function addexistedprofs(list){
   let tbody= document.getElementById('listprofs');
      for(let note of list){
    let ligne = document.createElement('tr');
    
    ligne.id=parseInt(note.ID);
    ligne.name="lines";
    //let br = document.createElement('br');
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');
    let col4 = document.createElement('td');
    let col5 = document.createElement('td');
    let col6 = document.createElement('td');
    let col7 = document.createElement('td');
    let col8 = document.createElement('td');
    let bot1= document.createElement('button');
    let bot2= document.createElement('button');
    // Définir le contenu textuel des cellules
    col1.textContent = note.ID;
    col2.textContent = note.Nom;
    col3.textContent = note.Prenom;
    col4.textContent = note.Adresse;
    col5.textContent = note.Email;
    col6.textContent = note.Telephone;
    col7.textContent = note.Tauxhoraire;
    bot1.className="btn btn-primary mx-1";
    bot1.textContent="Modifier"; 
    bot1.addEventListener("click",function(e){id=ajoutactionmodif(this)});
    bot2.addEventListener("click",function(e){id=supprimerproffront(this)});
    bot2.className="btn btn-danger";
    bot2.textContent="Supprimer";
    // Ajouter les cellules à la ligne
    ligne.appendChild(col1);
    ligne.appendChild(col2);
    ligne.appendChild(col3);
    ligne.appendChild(col4);
    ligne.appendChild(col5);
    ligne.appendChild(col6);
    ligne.appendChild(col7);
    col8.appendChild(bot1);
    col8.appendChild(bot2);
    ligne.appendChild(col8);
    // Ajouter la ligne au tableau
    tbody.appendChild(ligne);
    //pour empecher l'ajout de l'etudiant 
    }
    }

///////////////////////////   
/////remove style selected element
function viderstyle(){
   const  tbody=document.getElementById("listprofs");
   console.log(tbody.rows.length);
   for (let i = 0; i < tbody.rows.length; i++) {
      tbody.rows[i].removeAttribute("style");
    }
}
/////style selected element
function selectedelem(row){
  
   const rowToStylemove = document.getElementById(row);
  if (rowToStylemove && rowToStylemove.parentNode) {
   rowToStylemove.parentNode.removeChild(rowToStylemove);
  }
   const table = document.getElementById("listprofs");
   rowToStylemove .style.border = "3px solid blue";
   rowToStylemove .style.backgroundColor = "lightblue";
   table.insertBefore(rowToStylemove , table.firstChild);

} 
////////vider les champs////////////
function viderchamps(){
      document.getElementById("nom").value="";
      document.getElementById("prenom").value="";
      document.getElementById("Adresse").value="";
      document.getElementById("email").value="";
      document.getElementById("Telephone").value="";
      document.getElementById("Tauxhoraire").value="";
} 
///////////////////////////////////////////////////////////////////////////////////////////
/////////////EVENTS//////////
document.getElementById("Telephone").addEventListener('blur', function() {
   // Check if the email field is empty
   if (!telValide(this.value)) {
       document.getElementById("sTelephone").removeAttribute('hidden'); // Show the error message
       this.value="";
   } else {
       document.getElementById("sTelephone").setAttribute('hidden', true); // Hide the error message
   }
 });
/////////pour ajouter ou modifie ///////////////
document.getElementById("formulaire").addEventListener("submit",function(e){
    e.preventDefault();
    const data = new FormData(document.getElementById("formulaire"));
    console.log("sddd");
    console.log(data.get(Telephone));
    var buttonValue=document.getElementById("ajouter" );
    var xhrInstance = getXhr();
    xhrInstance.onreadystatechange=function(){
           if(this.readyState == 4 && this.status==200){
            if(buttonValue.innerText=="Ajouter"){
               VIDERTA();
               affichertout();
               console.log(this.response);
            }else if(buttonValue.innerText=="modifier"){
               VIDERTA();
               affichertout();
               console.log(this.response);
              buttonValue.innerText="Ajouter";
              
            }
           }
    };
    if(buttonValue.innerText=="Ajouter"){
      data.append("action","ajouter");
    }else if(buttonValue.innerText=="modifier"){
      data.append("action","modifier");
      data.append("id",id);
    }
    let confirme =confirm("etes vous sure de "+buttonValue.innerText+" le profrseur?");
    if(confirme){
      console.log(buttonValue.innerText);
      xhrInstance.open("POST","./php/traitementadmin.php",true);
      xhrInstance.send(data);
      alert("le professeur est "+buttonValue.innerText+" avec succes");
      viderchamps();
      return false;
    }else{
      buttonValue.innerText="Ajouter";
      viderchamps();
    }
    

});
////afficher un prof////////
document.getElementById("formulaire1").addEventListener("submit",function(e){
      e.preventDefault();
      const data= new FormData(this);
      var xhrInstance = getXhr();
      xhrInstance.onreadystatechange=function(){
             if(this.readyState == 4 && this.status==200){
                console.log(this.response);
                let tabPers = JSON.parse( xhrInstance.responseText);
                viderstyle();
                for(let row of tabPers){
                  console.log("ffffffffff");
                  selectedelem(row.ID);
                }
               // addexistedprofs(tabPers);
             }
      };
      
      const elem = document.getElementById("aficherselect");
      let c = elem.value;
      data.append("action","afficher");
      data.append("choice",c);
      xhrInstance.open("POST","./php/traitementadmin.php",true);
      xhrInstance.send(data);
     return false;
   });

   
