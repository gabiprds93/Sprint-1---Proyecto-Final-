var estudiantes = [];

function obtenerListaEstudiantes() 
{
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
    
}

function agregarEstudiante() 
{
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Nombre de la estudiante");;
    var puntosTecnicos = prompt("Porcentaje Técnico");;
    var puntosHSE = prompt("Porcentaje Habilidades Socio-Emocionales");
    while(nombre == "" && puntosTecnicos == "" && puntosHSE == "")
    {
        alert("No se ha ingresado alguno de los datos");
        nombre = prompt("Nombre de la estudiante");
        puntosTecnicos = prompt("Porcentaje Técnico");
        puntosHSE = prompt("Porcentaje Habilidades Socio-Emocionales");
    }
    function Estudiante(nombre, puntosTecnicos, puntosHSE)
    {
        this.nombre = nombre;
        this.puntosTecnicos = puntosTecnicos;
        this.puntosHSE = puntosHSE;
    }
    var estudiante = new Estudiante(nombre, puntosTecnicos, puntosHSE);
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) 
{
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    if(estudiante != undefined)
    {
        if(estudiante.nombre != null && estudiante.puntosTecnicos != null && estudiante.puntosHSE != null)
        {
            resultado += "<div class='row'>";
            resultado += "<div class='col m12'>";
            resultado += "<div class='card blue-grey darken-1'>";
            resultado += "<div class='card-content white-text'>";
            resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
            resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
            resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
            resultado += "</div>";
            resultado += "</div>";
            resultado += "</div>";
            resultado += "</div>";
        }
    }
    return resultado;
}

function mostrarLista(estudiantes)
{
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var resultado = "";
    for(var i in estudiantes)
    {
        resultado += mostrar(estudiantes[i]);
    }
    return resultado;
}

function buscar(nombre, estudiantes)
{
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    if(nombre != null)
    {
        for(var i in estudiantes)
        {
            if(nombre.toLowerCase() == estudiantes[i].nombre.toLowerCase())
            {
                return estudiantes[i];
            }
        }
        alert("Estudiante no encontrada");
    }
}

function topTecnico(estudiantes)
{
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes.sort(function(obj1, obj2){
        return obj2.puntosTecnicos - obj1.puntosTecnicos;
    });
    return estudiantes;
}

function topHSE(estudiantes)
{
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes.sort(function(obj1, obj2){
        return obj2.puntosHSE - obj1.puntosHSE;
    });
    return estudiantes;
}