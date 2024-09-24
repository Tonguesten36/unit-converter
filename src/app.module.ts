import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnitConvertModule } from './unit-convert/unit.convert.module';

@Module({
  imports: [UnitConvertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
