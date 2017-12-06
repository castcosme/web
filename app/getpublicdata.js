
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


function getDataFrutas() 
{

  sessionStorage.empresa = "castcosme";

    jQuery.support.cors = true;
    try
    {                         
     $.ajax({
        url: "/getFrutas", 
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: true,
        data: {empresa: sessionStorage.empresa},                         
        type: 'get',
        crossDomain: true,
        success: function(response) {
    frutas = response;
          //alert(response);
          frutas.forEach(function (fruta) 
          {
             var nombre = "<div class='col-md-3 col-sm-3 wow fadeInUp' " +
        " data-wow-delay='0.2s'> " +
                        "<img src='" + fruta.urlImage + "'" +
                        " class='img-responsive img-circle' alt='team img' heigth='150' width='150'" +
                        " >" +
                        " <div class='section-title wow bounceIn'> " +
                        "<h3>" + fruta.title + "</h3>" +
                        "<h5>" + fruta.description + "</h5>" +
                        "</div>" +
                        "</div>" 
                       $("#frutas").append(nombre);
                });
     
   }
        });          
     
    }
 catch(e)
    {
      alert("error : " +  e);
     }
}


function getDataVerduras() 
{

  sessionStorage.empresa = "castcosme";

    jQuery.support.cors = true;
    try
    {                         
     $.ajax({
        url: "/getVerduras", 
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: true,
        data: {empresa: sessionStorage.empresa},                         
        type: 'get',
        crossDomain: true,
        success: function(response) {
    verduras = response;
          //alert(response);
          verduras.forEach(function (verdura) 
          {
             var nombre = "<div class='col-md-3 col-sm-3 wow fadeInUp' " +
        " data-wow-delay='0.2s'> " +
                        "<img src='" + verdura.urlImage + "'" +
                        " class='img-responsive img-circle' alt='team img' heigth='150' width='150'" +
                        " >" +
                        " <div class='section-title wow bounceIn'> " +
                        "<h3>" + verdura.title + "</h3>" +
                        "<h5>" + verdura.description + "</h5>" +
                        "</div>" +
                        "</div>" 
                       $("#verduras").append(nombre);
                });
     
   }
        });          
     
    }
 catch(e)
    {
      alert("error : " +  e);
     }
}


function getDataPostres() 
{

  sessionStorage.empresa = "castcosme";

    jQuery.support.cors = true;
    try
    {                         
     $.ajax({
        url: "/getPostres", 
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: true,
        data: {empresa: sessionStorage.empresa},                         
        type: 'get',
        crossDomain: true,
        success: function(response) {
    postres = response;
          //alert(response);
          postres.forEach(function (postre) 
          {
             var nombre = "<div class='col-md-3 col-sm-3 wow fadeInUp' " +
        " data-wow-delay='0.2s'> " +
                        "<img src='" + postre.urlImage + "'" +
                        " class='img-responsive img-circle' alt='team img' heigth='150' width='150'" +
                        " >" +
                        " <div class='section-title wow bounceIn'> " +
                        "<h3>" + postre.title + "</h3>" +
                        "<h5>" + postre.description + "</h5>" +
                        "</div>" +
                        "</div>" 
                       $("#postres").append(nombre);
                });
     
   }
        });          
     
    }
 catch(e)
    {
      alert("error : " +  e);
     }
}

