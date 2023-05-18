import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterController } from 'src/api/controllers/water/water.controller';
import { WaterService } from 'src/api/services/water/water.service';
import { WaterSchema } from 'src/waterModel';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Water', schema: WaterSchema }]),
      ],
      
      controllers: [WaterController],
      providers: [WaterService]
})
export class WaterModule {}
