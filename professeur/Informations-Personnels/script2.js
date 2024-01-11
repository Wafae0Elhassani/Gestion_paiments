
var idsession=sessionStorage.getItem('idprof');

function telValide(tel) {
  const regex = /^06\d{8}$/;
  return regex.test(tel);
}
document.getElementById("telephone").addEventListener('blur', function() {
  // Check if the email field is empty
  if (!telValide(this.value)) {
      document.getElementById("sTelephone").removeAttribute('hidden'); // Show the error message
      this.value="";
  } else {
      document.getElementById("sTelephone").setAttribute('hidden', true); // Hide the error message
  }
});



// alert("idsession "+idsession);
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

  var formulaire2 = document.getElementById("formulaire2");

  function afficherInfo(){

  var xhr = getXhr();
  
  const data = new FormData();

  data.append("action", "afficher");

  data.append("id",idsession);
  
  var url = "./traitement.php";
  
    xhr.onreadystatechange = function() {
  
      if (xhr.readyState == 4 && xhr.status === 200) {

          var json = JSON.parse(xhr.responseText);
  
          var modulesData = json;

           if(modulesData!=null){
  
             for (var i = 0; i < modulesData.length; i++) {

              document.getElementById("nom").value=modulesData[i].nom;
              document.getElementById("prenom").value=modulesData[i].prenom;
              document.getElementById("adresse").value=modulesData[i].adresse;
              document.getElementById("email").value=modulesData[i].email;
              document.getElementById("telephone").value=modulesData[i].telephone;


             }
            }
     
     
        }
    };
    
    xhr.open("POST", url, true);
    xhr.send(data);

  }
  afficherInfo();

  var select = 1;

  formulaire2.addEventListener('submit',function modifier(event){

    event.preventDefault();
   
    if(select==1){
       
        disable(false);
    
    select = 2;
    }

    else{

        modifierDonnee();
        disable(true);
        select=1;

    }


  });

  function modifierDonnee(){

  var xhr = getXhr();

  var url = "./traitement.php";

  var data = new FormData(formulaire2);

  xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
        
        console.log(xhr.responseText);
        if(xhr.responseText!="success"){
          document.getElementById("validation").innerHTML="error";
        }else{
          let n=document.getElementById("nom").value;
          let p=document.getElementById("prenom").value;
          sessionStorage.setItem("prof",n+" "+p);
          document.getElementById("validation").innerHTML="success";
        }

    }
};

  data.append("action","modifier");

  data.append("id",idsession);

  xhr.open("POST", url, true);

  xhr.send(data);

}

  function disable(bool){

    document.getElementById("nom").disabled=bool;
    document.getElementById("prenom").disabled=bool;
    document.getElementById("adresse").disabled=bool;
    document.getElementById("email").disabled=bool;
    document.getElementById("telephone").disabled=bool;
  }