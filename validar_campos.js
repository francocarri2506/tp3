
//ejercicio numero1
//a
function cupo(cupomin,cupomax) {
    if (cupomax<cupomin) {
       alert("El cupo minimo es mayor que el cupo maximo");
       return false;
    } else {
        //alert("todo viento");
    }
}
//console.log(cupo(2,4))



//b

function validarFecha(fecinicial,fecfinal,mensage) {
    let date1 = new Date(fecinicial);
    let date2 = new Date(fecfinal);

    if (date2<date1) {
       alert(mensage);
       return false;
    } else {
        //alert("todo viento");
    }
}
//console.log(validarFecha("Aug 1, 2019","Aug 2, 2019"))



//c

function validarContrasenia(cont) {
    if (cont.length > 8 || cont.length < 6) {
       alert("Su contraseña debe tener entre 6 y 8 caracteres");
       return false;
    } 

}
//console.log(validarContrasenia("123456"));


//d
function validarReingreso(cont,recon) {
    if (cont != recon) {
       alert("Usted ingreso claves diferentes");
       return false;
    } else {
        //resultado = alert("todo viento");
    }
}
//console.log(validarReingreso("franco7","franco7"));


//ejercicio 2 

function validargestion() {
    var fechadesde,fechaHasta,cupoMaximo,cupoMinimo
    fechadesde=document.getElementById("fechaDesde").value;
    fechaHasta=document.getElementById("fechaHasta").value;
    cupoMaximo=document.getElementById("cupoMaximo").value;
    cupoMinimo=document.getElementById("cupoMinimo").value;
    fechaLimiteInscripcion=document.getElementById("fechaLimiteInscripcion").value;

    var fecha = new Date();//fecha actuall del sistema
    cupo(cupoMinimo,cupoMaximo);
    validarFecha(fechadesde,fechaHasta,"La fecha hasta que se se dicta el curso debe ser mayor a la fecha en que inicia");
    validarFecha(fechaLimiteInscripcion,fecha,"La fecha limite de inscripcion debe ser menor que facha actual");
    
}

//ejercicio 3 
function validarregistro() {
    contrasenia= document.getElementById("contrasenia").value;
    contraseniaNueva = document.getElementById("contraseniaNueva").value;
    contraseniaNueva2= document.getElementById("contraseniaNueva2").value;

    validarContrasenia(contrasenia);
    validarReingreso(contraseniaNueva,contraseniaNueva2);

}


//ejercicio 4  --------------autoridades

//x.setAttribute("required","");
function cambiar(){	
    var div = document.getElementById('autoridades');
    while(div.hasChildNodes()){
    div.removeChild(div.firstChild);
    }
    desbloquear();
    
}

function desbloquear(){
    document.getElementById("cantidadAut").disabled = false;
    document.getElementById('botonmostrar').disabled = false;
}

function mostrarAutoridades() {
    let divAutoridades = document.getElementById("autoridades");
    let cantidad = document.getElementById("cantidadAut").value;

    var br = document.createElement("br");
    
    for (let i = 0; i< cantidad; i++) {
       
        let contAutoridad=document.createElement("h4");

          //div para autoridades
          let autoridad  = document.createElement("div");
          autoridad.className = "col-md-6";
          autoridad.id = "auto"+(i+1);

        contAutoridad.appendChild(document.createTextNode("Autoridad N°: " +(i+1)));
        autoridad.appendChild(contAutoridad);
        autoridad.appendChild(br);



      
        

       //apellido



        var labelApe = document.createElement("label");
        labelApe.setAttribute("for","apellidoAut"+(i+1));
        labelApe.appendChild(document.createTextNode("Apellido"));

        var inputApe = document.createElement("input");
        inputApe.setAttribute("type","text");
        inputApe.setAttribute("name","apellidoAut"+(i+1));
        inputApe.setAttribute("required","");
        inputApe.className="form-control";

        var divconformApe =  document.createElement("div");
        divconformApe.className= "form-group";


        divconformApe.appendChild(labelApe);
        divconformApe.appendChild(inputApe);

        autoridad.appendChild(divconformApe);
        //document.getElementById("auto").appendChild(divconformApe);


        //nombre

        var labelNom = document.createElement("label");
        labelNom.setAttribute("for","nombreAut"+(i+1));
        labelNom.appendChild(document.createTextNode("Nombre"));

        var inputNom = document.createElement("input");
        inputNom.setAttribute("type","text");
        inputNom.setAttribute("name","nombreAut"+(i+1));
        inputNom.setAttribute("required","");
        inputNom.className="form-control";

        var divconformNom =  document.createElement("div");
        divconformNom.className= "form-group";


        divconformNom.appendChild(labelNom);
        divconformNom.appendChild(inputNom);
        autoridad.appendChild(divconformNom);
   
        //cargo

        var labelCar = document.createElement("label");
        labelCar.setAttribute("for","cargoAut"+(i+1));
        labelCar.appendChild(document.createTextNode("Cargo"));

        var inputCar = document.createElement("input");
        inputCar.setAttribute("type","text");
        inputCar.setAttribute("name","cargoAut"+(i+1));
        inputCar.setAttribute("required","");
        inputCar.className="form-control";

        var divconformCar =  document.createElement("div");
        divconformCar.className= "form-group";


        divconformCar.appendChild(labelCar);
        divconformCar.appendChild(inputCar);
        autoridad.appendChild(divconformCar);

        //firma digital

        var labelFirma = document.createElement("label");
        labelFirma.setAttribute("for","firmaAut"+(i+1));
        labelFirma.appendChild(document.createTextNode("Firma Digital"));
        autoridad.appendChild(labelFirma);

        
        var inputFirma = document.createElement("input");
        inputFirma.setAttribute("type","text");
        inputFirma.setAttribute("name","firmaAut"+(i+1));
        inputFirma.setAttribute("required","");
        inputFirma.className="custom-file-input";

        var labelFirma1 = document.createElement("label");
        labelFirma1.setAttribute("for","firmaAut"+(i+1));
        labelFirma1.className= "custom-file-label";
        labelFirma1.setAttribute("data-browse","Elegir");
        labelFirma1.appendChild(document.createTextNode("Seleccionar archivo"));

        var divFirma =  document.createElement("div");
        divFirma.className= "custom-file";

        divFirma.appendChild(inputFirma);
        divFirma.appendChild(labelFirma1);
        autoridad.appendChild(divFirma);

        document.getElementById("autoridades").appendChild(autoridad);

}

document.getElementById("cantidadAut").disabled = true;
document.getElementById('botonmostrar').disabled = true;
var boton = document.createElement('input');
boton.setAttribute('type','button');
boton.setAttribute('value','Modificar cantidad');
boton.setAttribute('onclick',"cambiar()");

divAutoridades.appendChild(boton);

//console.log(autoridad);
    
}

function cambiar1(){	
    var div = document.getElementById("expositores");
    while(div.hasChildNodes()){
    div.removeChild(div.firstChild);
    }
    desbloquear1();
    
}

function desbloquear1(){
    document.getElementById("cantidadExp").disabled = false;
    document.getElementById("botonmostrarexp").disabled = false;
}

function mostrarExpositores() {
    let divExpositores = document.getElementById("expositores");
    let cantidadExp = document.getElementById("cantidadExp").value;
    var br = document.createElement("br");
    
    for (let i = 0; i< cantidadExp; i++) {
       
        let contExpositor = document.createElement("h4");

          //div para autoridades
          let expositor  = document.createElement("div");
          expositor.className = "col-md-6";
          expositor.id = "expositor"+(i+1);

        contExpositor.appendChild(document.createTextNode("Expositor N°: " +(i+1)));
        expositor.appendChild(contExpositor);
        expositor.appendChild(br);

       //apellido



        var labelApeExp = document.createElement("label");
        labelApeExp.setAttribute("for","apellidoExp"+(i+1));
        labelApeExp.appendChild(document.createTextNode("Apellido"));

        var inputApeExp = document.createElement("input");
        inputApeExp.setAttribute("type","text");
        inputApeExp.setAttribute("name","apellidoExp"+(i+1));
        inputApeExp.setAttribute("required","");
        inputApeExp.className="form-control";

        var divconformApeExp =  document.createElement("div");
        divconformApeExp.className= "form-group";


        divconformApeExp.appendChild(labelApeExp);
        divconformApeExp.appendChild(inputApeExp);

        expositor.appendChild(divconformApeExp);

        //nombre

        var labelNomExp = document.createElement("label");
        labelNomExp.setAttribute("for","nombreExp"+(i+1));
        labelNomExp.appendChild(document.createTextNode("Nombre"));

        var inputNomExp = document.createElement("input");
        inputNomExp.setAttribute("type","text");
        inputNomExp.setAttribute("name","nombreExp"+(i+1));
        inputNomExp.setAttribute("required","");
        inputNomExp.className="form-control";

        var divconformNomExp =  document.createElement("div");
        divconformNomExp.className= "form-group";


        divconformNomExp.appendChild(labelNomExp);
        divconformNomExp.appendChild(inputNomExp);
        expositor.appendChild(divconformNomExp);
   
        //dni

        var labelDniExp = document.createElement("label");
        labelDniExp.setAttribute("for","dniExp"+(i+1));
        labelDniExp.appendChild(document.createTextNode("DNI "));

        var inputDniExp = document.createElement("input");
        inputDniExp.setAttribute("type","text");
        inputDniExp.setAttribute("name","dniExp"+(i+1));
        inputDniExp.setAttribute("required","");
        inputDniExp.className="form-control";

        var divconformDniExp =  document.createElement("div");
        divconformDniExp.className= "form-group";


        divconformDniExp.appendChild(labelDniExp);
        divconformDniExp.appendChild(inputDniExp);
        expositor.appendChild(divconformDniExp);

        //titulo

        var labelTitulo = document.createElement("label");
        labelTitulo.setAttribute("for","tituloExp"+(i+1));
        labelTitulo.appendChild(document.createTextNode("Titulo "));
        
        var inputTitulo = document.createElement("input");
        inputTitulo.setAttribute("type","text");
        inputTitulo.setAttribute("name","tituloExp"+(i+1));
        inputTitulo.setAttribute("required","");
        inputTitulo.className="form-control";

        var divTitulo=  document.createElement("div");
        divTitulo.className= "form-group";

        divTitulo.appendChild(labelTitulo);
        divTitulo.appendChild(inputTitulo);
        expositor.appendChild(divTitulo);

        document.getElementById("expositores").appendChild(expositor);

}

document.getElementById("cantidadExp").disabled = true;
document.getElementById('botonmostrarexp').disabled = true;
var boton1 = document.createElement('input');
boton1.setAttribute('type','button');
boton1.setAttribute('value','Modificar cantidad');
boton1.setAttribute('onclick',"cambiar1()");

divExpositores.appendChild(boton1);

//console.log(autoridad);
    
}




/**Creamos el enlace */
/*let enlace=document.createElement("a");

/**Creamos la clase */
/*enlace.className="enlace";

/**Le agregamos un id */
/*enlace.id="nuevoId";

/**Le agregamos un atributo href */
/*enlace.setAttribute("href","#");

/**Le agregamos el texto */
/*enlace.appendChild(document.createTextNode("Nuevo Enlace"));

/**Agregamos al Html*/

/*let li = document.createElement("li");
li.appendChild(enlace);

document.getElementById("listaCursosDisponibles").appendChild(li);

*/
