import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { UnitConvertService } from './unit.convert.service';
import { ConvertValueDto } from './dtos/convert-value.dto';
import { ConvertTempResult } from 'src/share/common/types';

@Controller('unit-convert')
export class UnitConvertController {
    constructor(private readonly unitConvertService: UnitConvertService) {}

    @Get()
    getHello(): string {
        return this.unitConvertService.getHello();
    }

    @Get('temp_conversion')
    @Render('pages/temperature') // Render the empty form when navigating to this URL
    showTempConversionForm(): void {
        return;
    }

    @Get('weight_conversion')
    @Render('pages/weight') // Render the empty form when navigating to this URL
    showWeightConversionForm(): void {
        return;
    }

    @Get('length_conversion')
    @Render('pages/length') // Render the empty form when navigating to this URL
    showLengthConversionForm(): void {
        return;
    }

    // Temperature Conversion
    @Post('temp_conversion')
    @Render('pages/temperature')
    async convertTemp(@Body() convertValueDto: ConvertValueDto): Promise<ConvertTempResult> {
        // TODO: send the user input from the html form (somehow) and then convert

        let converted_value = await this.unitConvertService.convertTemp(
            convertValueDto.unitFrom, 
            convertValueDto.unitTo, 
            convertValueDto.originalValue
        );

        return { 
            value: convertValueDto.originalValue, 
            unitFrom: convertValueDto.unitFrom, 
            unitTo: convertValueDto.unitTo,
            result: converted_value,
        };
    }    

    // Weight Conversion
    @Post('weight_conversion')
    @Render('pages/weight')
    async convertWeight(@Body() convertValueDto: ConvertValueDto): Promise<ConvertTempResult> {
        // TODO: send the user input from the html form (somehow) and then convert

        let converted_value = await this.unitConvertService.convertWeight(
            convertValueDto.unitFrom, 
            convertValueDto.unitTo, 
            convertValueDto.originalValue
        );

        return { 
            value: convertValueDto.originalValue, 
            unitFrom: convertValueDto.unitFrom, 
            unitTo: convertValueDto.unitTo,
            result: converted_value,
        };
    }        

    // Length Conversion
    @Post('length_conversion')
    @Render('pages/length')
    async convertLength(@Body() convertValueDto: ConvertValueDto): Promise<ConvertTempResult> {

        let converted_value = await this.unitConvertService.convertLength(
            convertValueDto.unitFrom, 
            convertValueDto.unitTo, 
            convertValueDto.originalValue
        );

        return { 
            value: convertValueDto.originalValue, 
            unitFrom: convertValueDto.unitFrom, 
            unitTo: convertValueDto.unitTo,
            result: converted_value,
        };
    }    
}
