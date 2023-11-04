function contarPalabras(Txt){
    let separar = Txt.split(' ');

    separar = separar.filter(separar => separar !== '');

    return separar.length;
}
const texto = prompt("Escriba un Texto: ");
console.log(texto)
const cantidadPalabras = contarPalabras(texto);
console.log("El Texto tiene " + cantidadPalabras + " palabras");