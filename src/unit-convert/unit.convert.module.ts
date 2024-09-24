import { Module } from '@nestjs/common';
import { UnitConvertService } from './unit.convert.service';
import { UnitConvertController } from './unit.convert.controller';

@Module({
  providers: [UnitConvertService],
  controllers: [UnitConvertController]
})
export class UnitConvertModule {}
