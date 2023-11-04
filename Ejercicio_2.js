function calcularPromedioNotas(alumnos) {
    const resul = alumnos.map(alumnos => {
        const prom = alumnos.notas.reduce((a, b) => a + b, 0) / alumnos.notas.length;

        return { nombre: alumnos.nombre, prom: prom };

    })

    return resul;
}

const alumnos = [
    {nombre: "Alfredo", notas:[63, 85, 99, 74]},
    {nombre: "Alfredina", notas:[88, 86, 79, 94]}
];

const promedio = calcularPromedioNotas(alumnos);
console.log(promedio);