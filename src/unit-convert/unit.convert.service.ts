import { Injectable } from '@nestjs/common';

enum TempUnitEnum {
    Fahrenheit = '°F',
    Celsius = '°C',
    Kelvin = 'K',
}

enum WeightUnitEnum {
    Pound = 'lb',
    Kilogram = 'kg',
    Gram = 'g',
}

enum LengthUnitEnum {
    Inch = 'in',
    Foot = 'ft',
    Meter = 'm',
    Centimeter = 'cm',
}

@Injectable()
export class UnitConvertService {
    getHello(): string {
        return 'Hello from UnitConvertService!';
    }


    // Temperature Conversion
    async convertTemp(unitFrom: string, unitTo: string, value: number): Promise<number> {
        let result: number = 0;
        if (unitFrom === TempUnitEnum.Fahrenheit && unitTo === TempUnitEnum.Celsius) {
            result = await this.ftoc(value);
        } else if (unitFrom === TempUnitEnum.Celsius && unitTo === TempUnitEnum.Fahrenheit) {
            result = await this.ctof(value);
        } else if (unitFrom === TempUnitEnum.Kelvin && unitTo === TempUnitEnum.Celsius) {
            result = await this.ktoc(value);
        } else if (unitFrom === TempUnitEnum.Celsius && unitTo === TempUnitEnum.Kelvin) {
            result = await this.ctok(value);
        }
        else if (unitFrom === TempUnitEnum.Fahrenheit && unitTo === TempUnitEnum.Kelvin) {
            result = await this.ftok(value);
        }
        else if (unitFrom === TempUnitEnum.Kelvin && unitTo === TempUnitEnum.Fahrenheit) {
            result = await this.ktof(value);
        }
        else{
            // handle cases of same units
            result = value;
        }
        return result;
    }
    async ftoc(fahrenheit: number): Promise<number> {
        return (fahrenheit - 32) * 5 / 9;
    }
    async ctof(celsius: number): Promise<number> {
        return celsius * 9 / 5 + 32;
    }
    async ktoc(kelvin: number): Promise<number> {
        return kelvin - 273.15;
    }
    async ctok(celsius: number): Promise<number> {
        return celsius + 273.15;
    }
    async ftok(fahrenheit: number): Promise<number> {
        return (fahrenheit - 32) * 5 / 9 + 273.15;
    }
    async ktof(kelvin: number): Promise<number> {
        return (kelvin - 273.15) * 9 / 5 + 32;
    }

    // Weight Conversion
    async convertWeight( unitFrom: string, unitTo: string, value: number): Promise<number> {
        let result: number = 0;
        if (unitFrom === 'lb' && unitTo === 'kg') {
            result = await this.lbtokg(value);
        } else if (unitFrom === 'kg' && unitTo === 'lb') {
            result = await this.kgtolb(value);
        } else if (unitFrom === 'g' && unitTo === 'kg') {
            result = await this.gtokg(value);
        } else if (unitFrom === 'kg' && unitTo === 'g') {
            result = await this.kgtog(value);
        }
        else{
            // handle cases of same units
            result = value;
        }
        return result;
    }
    async lbtokg(pounds: number): Promise<number> {
        return pounds * 0.453592;
    }
    async kgtolb(kilograms: number): Promise<number> {
        return kilograms * 2.20462;
    }
    async gtokg(grams: number): Promise<number> {
        return grams / 1000;
    }
    async kgtog(kilograms: number): Promise<number> {
        return kilograms * 1000;
    }

    // Length Conversion
    async convertLength(unitFrom: string, unitTo: string, value: number): Promise<number> {
        let result: number = 0;
        if (unitFrom === 'in' && unitTo === 'cm') {
            result = await this.intocm(value);
        } else if (unitFrom === 'cm' && unitTo === 'in') {
            result = await this.cmtoin(value);
        } else if (unitFrom === 'ft' && unitTo === 'cm') {
            result = await this.fttocm(value);
        } else if (unitFrom === 'cm' && unitTo === 'ft') {
            result = await this.cmtoft(value);
        }
        else if (unitFrom === 'm' && unitTo === 'cm') {
            result = await this.mtocm(value);
        }
        else if (unitFrom === 'cm' && unitTo === 'm') {
            result = await this.cmtom(value);
        }
        else if (unitFrom === 'ft' && unitTo === 'in') {
            result = await this.fttoin(value);
        }
        else if (unitFrom === 'in' && unitTo === 'ft') {
            result = await this.intoft(value);
        }
        else{
            // handle cases of same units
            result = value;
        }
        return result;
    }
    async intocm(inches: number): Promise<number> {
        return inches * 2.54;
    }
    async cmtoin(centimeters: number): Promise<number> {
        return centimeters / 2.54;
    }
    async fttocm(feet: number): Promise<number> {
        return feet * 30.48;
    }
    async cmtoft(centimeters: number): Promise<number> {
        return centimeters / 30.48;
    }
    async mtocm(meters: number): Promise<number> {
        return meters * 100;
    }
    async cmtom(centimeters: number): Promise<number> {
        return centimeters / 100;
    }
    async fttoin(feet: number): Promise<number> {
        return feet * 12;
    }
    async intoft(inches: number): Promise<number> {
        return inches / 12;
    }

}
