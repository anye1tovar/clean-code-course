/*
DRY: Dont Repeat Yourself, 
Evitar duplicida de código
Simplica las pruebas (por que solo se hace en un bloque)
Ayuda a centralizar procesos
Para aplicar DRY usualmente hay que refactorizar
*/

type Size = '' | 'S' | 'M' | 'XL'
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if (!this[key]) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if (this[key] <= 0) throw Error(`${key} is invalid`);
                    break;
                default: throw Error(`${typeof this[key]} is not suported.`)
            }
        }
        return true;
    }

    toString() {
        if (this.isProductReady())
            return `${this.name} (${this.price}), ${this.size}`;
        return;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10);
    console.log(bluePants.toString());
})();