function VerduraObject(myTitle, myDescription) {
    
    this.title = myTitle;
    this.description = myDescription;
    this.token = sessionStorage.token;
    this.urlImage = sessionStorage.urlImage;
    this.toJsonString = function () { return JSON.stringify(this); };

};

function addVerduraDemo()
{
  try
  {


    alert("token : " + sessionStorage.token);

    var myData = new VerduraObject(
     $("#title").val(), 
     $("#description").val() 
     );
    alert(myData.toJsonString());

     jQuery.ajax({
           type: "POST",
//CAMBIAR API
           url: "https://proyectofinalweb8869.appspot.com/_ah/api/verdura_api/v1/verdura/insert",
           data: myData.toJsonString(),
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           success: function (response) {
                // do something
                alert (response.code + " " + response.message);
                window.location="/";
           },
       
           error: function (error) {            
                // error handler
                alert("error :" + error.message)
           }

       });

   }
   catch(error)
   {
    alert(error);
   }

}


function TokenObjectVerdura() {
    
    this.tokenint = sessionStorage.token;
    this.toJsonString = function () { return JSON.stringify(this); };

};


function getVerduraList()
{
  try
  {

    var myData = new TokenObject();
    
    alert(myData.toJsonString());

     jQuery.ajax({
           type: "POST",
           url: "http://localhost:8080/_ah/api/verdura_api/v1/verdura/list",
           data: myData.toJsonString(),
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           success: function (response) {
                // do something
                
                alert (response.data);
           },
       
           error: function (error) {            
                // error handler
                alert("error :" + error.message)
           }

       });

   }
   catch(error)
   {
    alert(error);
   }

}

function uploadDemoVerdura()

{

    var file_data = $("#uploaded_file").prop("files")[0];
    var form_data = new FormData();
    form_data.append("uploaded_file", file_data)

    jQuery.support.cors = true;
    try
    {
     $.ajax({
                url: "/up",
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                crossDomain: true,
                success: function(response){

                                document.getElementById("preview").src=response;

                                sessionStorage.urlImage = response;

                                document.getElementById("url_photo").value = response;
                }
      });
    }
    catch(e)
    {
      alert("error : " +  e);
     }
}
