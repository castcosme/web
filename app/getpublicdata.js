
function getData() 
{

	sessionStorage.empresa = "castcosme";

    jQuery.support.cors = true;
    try
    {                         
     $.ajax({
        url: "/getAlimentos",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: true,
        data: {empresa: sessionStorage.empresa},                         
        type: 'get',
        crossDomain: true,
        success: function(response) {
	  alimentos = response;
          //alert(response);
          alimentos.forEach(function (alimento) 
          {
             var nombre = "<div class='col-md-3 col-sm-3 wow fadeInUp' " +
  			" data-wow-delay='0.2s'> " +
                        "<img src='" + alimento.urlImage + "'" +
                        " class='img-responsive img-circle' alt='team img' heigth='150' width='150'" +
                        " >" +
                        " <div class='section-title wow bounceIn'> " +
                        "<h3>" + alimento.title + "</h3>" +
                        "<h5>" + alimento.description + "</h5>" +
                        "</div>" +
                        "</div>" 
                       $("#alimentos").append(nombre);
                });
	   
 	 }
        });          
     
    }
 catch(e)
    {
      alert("error : " +  e);
     }
}

