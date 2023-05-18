import { WaterService } from 'src/api/services/water/water.service';
import { WaterDocument } from 'src/waterModel';
export declare class WaterController {
    private readonly waterService;
    constructor(waterService: WaterService);
    create(payload: any, res: any): Promise<WaterDocument>;
    findAll(res: any): Promise<WaterDocument>;
    findOne(res: any, id: string): Promise<WaterDocument>;
    update(res: any, id: string, payload: WaterDocument): Promise<WaterDocument>;
    remove(response: any, id: string): Promise<any>;
}
