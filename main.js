
function formValidate() {

var username=document.getElementById("username").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

var error =document.getElementById("error");
var text="";

error.style.backgroundColor = "red";
error.style.color = "#fff";
error.style.fontSize = "30px";
error.style.letterSpacing = "1px";
error.style.padding = "10px ";
error.style.fontweight = "center";
error.style.marginBottom = "2px";
error.style.transition = "all 1.5s ease-in-out";

if( username. length < 5) {
    text = "Please Enter Valid Username ";
    error.innerHTML = text;
    return false ;
}
else if(email.indexOf("@") == -1 || email. length < 6) {
    text = " Please Enter Valid Email";
    error.innerHTML = text;
    return false;
}
else if  (isNaN (phone) || phone.length != 11  ) {
    text = "Please Enter Valid  Phone Number";
    error.innerHTML = text;
    return false;
}
else {
    alert = "Done";
    return true;
}
}




