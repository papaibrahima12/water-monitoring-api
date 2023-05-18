import { Model } from 'mongoose';
import { WaterDocument } from 'src/waterModel';
export declare class WaterService {
    private readonly waterModel;
    constructor(waterModel: Model<WaterDocument>);
    create(payload: any): Promise<WaterDocument>;
    findAll(): Promise<Array<WaterDocument>>;
    findOne(id: string): Promise<WaterDocument>;
    update(id: string, payload: WaterDocument): Promise<WaterDocument>;
    remove(id: string): Promise<WaterDocument>;
}
