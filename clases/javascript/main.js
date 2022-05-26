// var nombre = "Marcos Soto";
// var altura = 1.93;

// var concatenacion = nombre + " " + altura;

// var datos = document.getElementById("datos");
// datos.innerHTML = 
// `
// <h1> Data BOX </h1>
// <p> Nombre: ${nombre} </p>
// <p> Altura: ${altura} </p>
// `;

// if(altura >= 1.93){
//     datos.innerHTML += "<p> Eres alto </p>";
// }else{
//     datos.innerHTML += "<p> Eres bajo </p>";
// }

function showName(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = 
    `
    <h1> Data BOX </h1>
    <p> Nombre: ${nombre} </p>
    <p> Altura: ${altura} </p>
    `;

}

showName("Marcos", 1.93);