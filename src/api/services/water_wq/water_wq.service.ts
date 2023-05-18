import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterWQDocument } from 'src/waterModelQt';

@Injectable()
export class WaterWqService {
    constructor(
        @InjectModel('Waterwq')
        private readonly waterModel: Model<WaterWQDocument>,)
        {}
     
  async create(payload: any): Promise<WaterWQDocument>{
        const newWaterDocument = new this.waterModel(payload);
        return await newWaterDocument.save();
    }

    async findAll(): Promise<Array<WaterWQDocument>> {
        return await this.waterModel.find();
    }   

    async findOne(id: string) :Promise<WaterWQDocument> {
        const existingWaterDoc = await this.waterModel.findById(id).exec();
        if (!existingWaterDoc) {
          throw new NotFoundException(`Water's ID #${id} not found`);
        }
        return existingWaterDoc;
    }

    async update(id: string, payload: WaterWQDocument): Promise<WaterWQDocument> {
      return await this.waterModel.findByIdAndUpdate(id, payload,{new:true});
    }

    async remove(id: string):Promise<WaterWQDocument> {
        const deletedWaterDoc = this.waterModel.findByIdAndRemove(id);
       if (!deletedWaterDoc) {
         throw new NotFoundException(`Water's ID #${id} not found`);
       }
       return deletedWaterDoc;
      }
}
