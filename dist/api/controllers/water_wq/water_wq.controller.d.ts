import { WaterWqService } from 'src/api/services/water_wq/water_wq.service';
import { WaterWQDocument } from 'src/waterModelQt';
export declare class WaterWqController {
    private readonly waterService;
    constructor(waterService: WaterWqService);
    create(payload: any, res: any): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(res: any, id: string): Promise<WaterWQDocument>;
    update(res: any, id: string, payload: WaterWQDocument): Promise<WaterWQDocument>;
    remove(response: any, id: string): Promise<any>;
}
