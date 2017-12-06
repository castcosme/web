// contact
function LoginObject(myEmail, myPasswd) {
    this.email = myEmail;
    this.password = myPasswd;
    this.toJsonString = function () { return JSON.stringify(this); };

};

function loginDemo()
{
	//alert("testing...")
	var myData = new LoginObject(
    $("#email").val(), 
    $("#passwd").val());
	
  alert(myData.toJsonString());

	 jQuery.ajax({
         type: "POST",
         url: "https://proyectofinalweb8869.appspot.com/_ah/api/usuarios_api/v1/users/login",
         data: myData.toJsonString(),
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         success: function (response) {
              // do something
              sessionStorage.token = response.token;
              alert ("token generado: " + sessionStorage.token);
              //Agregar 
              window.location = "/menu";

         },
     
         error: function (error) {            
              // error handler
              alert(error)
         }

     });

}
