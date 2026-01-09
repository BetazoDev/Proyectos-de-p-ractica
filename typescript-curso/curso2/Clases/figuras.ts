export class Cuadrado {
    lado: number;
    constructor(lado: number) {
        this.lado = lado;
    }
    calcularArea(): string {
        let area = this.lado*this.lado;
        return `El área de este cuadrado es ${area}`
    }
}


export class Circulo {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }
    calcularCircunferencia(){
        const pi = 3.1416;
        let circunferencia = 2*pi*this.radio;
        return `La circunferencia de este círculo es ${circunferencia}`
    }
}