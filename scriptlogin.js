import getXhr from './admin/admin-CRUD-professeur/php/utilities.js';
///////variables
var adminlogin="admin@admin.com";
var adminpw="admin";
var submit=document.getElementById("log"); 
//////////fonctions//////////
function emailValide(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isitadmin(log,pw){
    if(log==adminlogin && pw== adminpw){
        return true;
    }else {
        return false;
    }
}
//////////Evenement//////////
document.getElementById("username").addEventListener('blur', function() {
    // Check if the email field is empty
    if (!emailValide(this.value)) {
        document.getElementById("semail").removeAttribute('hidden'); // Show the error message
        this.value="";
    } else {
        document.getElementById("semail").setAttribute('hidden', true); // Hide the error message
    }
});
document.getElementById("loginform").addEventListener("submit",function(e){
    ///////login
    e.preventDefault();
    let logi=document.getElementById("username").value;
    console.log(logi);
    let pw=document.getElementById("password").value;
    console.log(pw);
    if(isitadmin(logi,pw)){
        // alert("wellcome to your account admin");
        this.action = "./admin/HOME/index.php";
        document.getElementById("loginform").submit();
        
    }else{
        var xhrInstance = getXhr();
        xhrInstance.onreadystatechange=function(){
                if(this.readyState == 4 && this.status==200){
                        let nomuser = JSON.parse( xhrInstance.responseText);
                        if(nomuser.length==0){
                            alert("Ce compte n'existe pas");
                            
                        }else{
                            // alert("wellcome to your account professor "+nomuser[0].Nom+" "+nomuser[0].Prenom);
                            sessionStorage.setItem('idprof', nomuser[0].ID);
                            sessionStorage.setItem('prof', nomuser[0].Nom+" "+nomuser[0].Prenom);
                            document.getElementById("loginform").submit();
                    }
                }
        }
                const data= new FormData(this);
                xhrInstance.open("POST","./traitementlogin.php",true);
                xhrInstance.send(data);
                //return false;
    }
});
