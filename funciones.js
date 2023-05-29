var totPagar = document.getElementById("pagar");
var cantidad = document.getElementById("cantidad");
var borrar = document.getElementById("borrar");
var categoria = document.getElementById("categoria");

borrar.addEventListener('click',function(){
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    cantidad.value = null;
    document.getElementById("email").value = "";
    categoria.value = null;
    totPagar.value = `Total a pagar: $`;

});

function calcular(){
    if(categoria.value == 'estudiante'){
        valor(0.8);
        return 0;
    } 
    if(categoria.value == 'trainee'){
        valor(0.5);
        return 0;
    } 
    if(categoria.value == 'junior'){
        valor(0.15);
        return 0;
    }    
}

function valor(cat){
    totPagar.value = `Total a pagar: $${(cantidad.value*200) - (cantidad.value*200*cat)}` ;
}
