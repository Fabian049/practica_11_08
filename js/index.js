
//Primer punto

function add_li(){
  var entrada = document.getElementById("entrada").value.toLowerCase();

  if(entrada.length>0)
  {
      var li=document.createElement('li');
      li.id=entrada;
      var text=document.createTextNode(entrada);
      li.appendChild(text);
      document.getElementById("lista").appendChild(li);
     
    
  }
  document.getElementById("entrada").value = "";
  return false


}

function eliminar(){
  let ele = document.querySelectorAll('li');
  let cant = ele.length;
  if (cant > 0){
    ele = ele[0];
    ele.remove();
  }
 
  return false;
 }

 