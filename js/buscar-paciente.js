 var botaoAdicionar = document.querySelector("#buscar-pacientes");

 botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    });

    xhr.send();
    
 });