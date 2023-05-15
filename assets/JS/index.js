const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
        tipoDeMotor: "4 cilindros en línea",
        bloqueDelMotor: "ALEACIÓN/ALUMINIO",
        desplazamiento: "1.99 / 1996",
        caballosDeFuerza: "155 @ 6500",
        lineaRoja: "6700",
        inyeccionDeCombustible: "Puntos Múltiples"
    }
}

let marca = vehiculo.marca
let modelo = vehiculo.modelo
let tipoDeMotor = vehiculo.motor?.tipoDeMotor
let bloqueDelMotor= vehiculo.motor?.bloqueDelMotor
let presionDeSobrealimentacion = vehiculo.motor?.presionDeSobrealimentacion
let desplazamiento = vehiculo.motor?.desplazamiento
let caballosDeFuerza = vehiculo.motor?.caballosDeFuerza
let lineaRoja = vehiculo.motor?.lineaRoja
let sistemaSmartAssist = vehiculo.motor?.sistemaSmartAssist
let inyeccionDeCombustible = vehiculo.motor?.inyeccionDeCombustible
let encendidoRemotoDelMotor = vehiculo.motor?.encendidoRemotoDelMotor

console.log(marca);
console.log(modelo);
console.log(tipoDeMotor);
console.log(presionDeSobrealimentacion);
console.log(bloqueDelMotor);
console.log(desplazamiento);
console.log(caballosDeFuerza);
console.log(lineaRoja);
console.log(sistemaSmartAssist);
console.log(inyeccionDeCombustible);
console.log(encendidoRemotoDelMotor);
