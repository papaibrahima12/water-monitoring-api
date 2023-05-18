import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterWqController } from 'src/api/controllers/water_wq/water_wq.controller';
import { WaterWqService } from 'src/api/services/water_wq/water_wq.service';
import { WaterWQSchema } from 'src/waterModelQt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Waterwq', schema: WaterWQSchema }]),
      ],
      
      controllers: [WaterWqController],
      providers: [WaterWqService]
})
export class WaterWqModule {}
