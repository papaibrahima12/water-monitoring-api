import { Model } from 'mongoose';
import { WaterWQDocument } from 'src/waterModelQt';
export declare class WaterWqService {
    private readonly waterModel;
    constructor(waterModel: Model<WaterWQDocument>);
    create(payload: any): Promise<WaterWQDocument>;
    findAll(): Promise<Array<WaterWQDocument>>;
    findOne(id: string): Promise<WaterWQDocument>;
    update(id: string, payload: WaterWQDocument): Promise<WaterWQDocument>;
    remove(id: string): Promise<WaterWQDocument>;
}
