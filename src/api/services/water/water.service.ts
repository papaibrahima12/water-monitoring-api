import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterDocument } from 'src/waterModel';

@Injectable()
export class WaterService {
    constructor(
        @InjectModel('Water')
        private readonly waterModel: Model<WaterDocument>,)
        {}
     
  async create(payload: any): Promise<WaterDocument>{
        const newWaterDocument = new this.waterModel(payload);
        return await newWaterDocument.save();
    }

    async findAll(): Promise<Array<WaterDocument>> {
        return await this.waterModel.find();
    }   

    async findOne(id: string) :Promise<WaterDocument> {
        const existingWaterDoc = await this.waterModel.findById(id).exec();
        if (!existingWaterDoc) {
          throw new NotFoundException(`Water's ID ${id} not found`);
        }
        return existingWaterDoc;
    }

    async update(id: string, payload: WaterDocument): Promise<WaterDocument> {
      return await this.waterModel.findByIdAndUpdate(id, payload,{new:true});
    }

    async remove(id: string):Promise<WaterDocument> {
        const deletedWaterDoc = this.waterModel.findByIdAndRemove(id);
       if (!deletedWaterDoc) {
         throw new NotFoundException(`Water's ID ${id} not found`);
       }
       return deletedWaterDoc;
      }
}

