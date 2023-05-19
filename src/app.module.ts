import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterModule } from './water/water.module';
import { WaterWqModule } from './water-wq/water-wq.module';

@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb+srv://sowibou032:ibrahima12@cluster0.9egru8k.mongodb.net/'),
    // MongooseModule.forRoot('mongodb://localhost:27017'),
    WaterModule,
    WaterWqModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
