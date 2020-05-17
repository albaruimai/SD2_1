


function primera_Peticion(){
    
//    var socket = new WebSocket("ws://www.sigua.ua.es/api/agregados/seo/edificio/all/items");



let xhr = new XMLHttpRequest(),
url = 'http://www.sigua.ua.es/api/pub/edificio/all/items';

xhr.open('GET',url,true);
xhr.onload = function(){
  let r = JSON.parse(xhr.responseText);
  console.log(r);
    let html='';
    html+=  `<h2>Tabla lista de edificios</h2>`
    html+=  `<table style="width:100%">`
    r.forEach(function(e){
      html+= `<tr><th>${e.id}</th>`
      html+= `<th>${e.nombre}</th>`
      html+= `<th>${e.plantas}</th></tr>`
      
      
    });
   
    html+= `</table>`
    document.querySelector('#apartado1').innerHTML = html;
};
xhr.send();
}


function segunda_Peticion(){
    
  //    var socket = new WebSocket("ws://www.sigua.ua.es/api/agregados/seo/edificio/all/items");
  
  
  
  let xhr = new XMLHttpRequest(),
  url = 'http://www.sigua.ua.es/api/agregados/seo/edificio/all/items';
    
  xhr.open('GET',url,true);
  xhr.onload = function(){
    let r = JSON.parse(xhr.responseText);
    console.log(r);
      let html='';
      html+=  `<h2>Tabla volumen de edificios</h2>`
      html+=  `<table style="width:100%">`
      
      html+= `<tr><th>Identificador</th>`
      html+= `<th>Número de estancias</th>`
      html+= `<th>Número de ocupantes</th>`
      html+= `<th>Superficie</th></tr>`

      r.forEach(function(e){
        html+= `<tr><th>${e.id.substring(1, e.id.length-1)}</th>`
        html+= `<th>${e.estancias}</th>`
        html+= `<th>${e.ocupantes}</th>`
        html+= `<th>${e.superficie}</th></tr>`
        
        
      });
    
      html+= `</table>`
      document.querySelector('#apartado2').innerHTML = html;
  };
  xhr.send();

  }





  
function tercera_Peticion(edi){

  //    var socket = new WebSocket("ws://www.sigua.ua.es/api/agregados/seo/edificio/all/items");
 // console.log(document.getElementById("#edificio.validity.value"));

//  console.log(document.getElementById("#edificio2"));

 var x = edi.elements[0].value;


//  let auxi=camb.validity.value;
 // var auxi=document.getElementById("#edificio").value;

  let vari=x;//auxi.split(",")[0];
  let xhr = new XMLHttpRequest(),
  url = 'http://www.sigua.ua.es/api/pub/estancia/edificio/'+vari+'/items';
    
  xhr.open('GET',url,true);
  xhr.onload = function(){

    let r = JSON.parse(xhr.responseText);
    console.log(r);
      let html='';
      html+=  `<h2>Tabla de estancias del edificio con código ${vari}</h2>`
      html+=  `<table style="width:100%">`
      
      html+= `<tr><th>Código estancia</th>`
      html+= `<th>Denominación</th>`
      html+= `<th>Superficie</th>`
      html+= `<th>Actividad destinada</th></tr>`

      r.features.forEach(function(e){
        html+= `<tr><th>${e.properties.codigo}</th>`
        html+= `<th>${e.properties.denominacion}</th>`
        html+= `<th>${e.properties.superficie}</th>`
        html+= `<th>${e.properties.activresum}</th></tr>`
        
        
      });
    
      html+= `</table>`
      document.querySelector('#apartado3').innerHTML = html;
  };
  xhr.send();
  //window.location.reload();
  return false;
  }
  

  
function cuarta_Peticion(depa){
    
  //    var socket = new WebSocket("ws://www.sigua.ua.es/api/agregados/seo/edificio/all/items");
  
  
  vari=depa.elements[0].value;;
  let xhr = new XMLHttpRequest(),
  url = 'http://www.sigua.ua.es/api/agregados/seo/departamento/all/items';
  let contador=0;
  xhr.open('GET',url,true);
  xhr.onload = function(){
    let r = JSON.parse(xhr.responseText);
    console.log(r);
      let html='';
      html+=  `<h2>Tabla de departamentos con ${vari} o más ocupantes</h2>`
      html+=  `<table style="width:100%">`
      
      html+= `<tr><th>Identificador</th>`
      html+= `<th>Número de estancias</th>`
      html+= `<th>Número de ocupantes</th>`
      html+= `<th>Superficie total</th></tr>`

      r.forEach(function(e){
        if(vari<e.ocupantes){
          contador++;
          html+= `<tr><th>${e.id.substring(1, e.id.length-1)}</th>`
          html+= `<th>${e.estancias}</th>`
          html+= `<th>${e.ocupantes}</th>`
          html+= `<th>${e.superficie}</th></tr>`
          
        }
          
        
      });
    
      html+= `</table>`

      if(contador==0){
        html='';
        html+=  `<h2>Tabla de departamentos con ${vari} o más ocupantes</h2>`
        html+=  `<p>No se ha encontrado ningún resultado en la búsqueda.</p>`
      }

      document.querySelector('#apartado4').innerHTML = html;
  };
  xhr.send();
  return false;
  }



  function cargarOpciones(){
      //    var socket = new WebSocket("ws://www.sigua.ua.es/api/agregados/seo/edificio/all/items");
  
  
  let xhr = new XMLHttpRequest(),
  url = 'http://www.sigua.ua.es/api/agregados/seo/edificio/all/items';
    
  xhr.open('GET',url,true);
  xhr.onload = function(){
    let r = JSON.parse(xhr.responseText);
    
      let html='';

      r.forEach(function(e){
        
        html+= `<option value="${e.id.split(",")[0].substring(1)}">${e.id.substring(1, e.id.length-1)}</option>`

        
      });
    
      
      document.querySelector('#items').innerHTML = html;
  };
  xhr.send();

  }