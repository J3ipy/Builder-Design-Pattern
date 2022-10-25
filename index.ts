/**
 * Criação da interface do builder
 */
 interface Builder {
    carMotor(): void;
    carWheels(): void;
    carDoors(): void;
    carBody(): void;
}

/**
 * Criação do concrete do builder
 */
class ConcreteBuilder implements Builder {
    private car: Carro;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.car = new Carro();
    }

    public carMotor(): void {
        this.car.parts.push('Motor');
    }

    public carWheels(): void {
        this.car.parts.push('Roda');
    }

    public carDoors(): void {
        this.car.parts.push('Portas');
    }

    public carBody(): void {
        this.car.parts.push('Carcaça do Carro');
    }

    public getCar(): Carro {
        const result = this.car;
        this.reset();
        return result;
    }
}


class Carro {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Lista de peças: ${this.parts.join(', ')}\n`);
    }
}


class Director {
    private builder: Builder;


    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }


    public buildMinimalViableProduct(): void {
        this.builder.carMotor();
        this.builder.carBody();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.carMotor();
        this.builder.carWheels();
        this.builder.carDoors();
    }
}


function clientCode(director: Director) {
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);

    console.log('Carro base:');
    director.buildMinimalViableProduct();
    builder.getCar().listParts();

    console.log('Carro com todas as peças:');
    director.buildFullFeaturedProduct();
    builder.getCar().listParts();

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Carro Personalizado: ');
    builder.carMotor();
    builder.carDoors();
    builder.getCar().listParts();
}

const director = new Director();
clientCode(director);