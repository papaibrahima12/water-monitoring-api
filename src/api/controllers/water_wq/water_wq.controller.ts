import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { WaterWqService } from 'src/api/services/water_wq/water_wq.service';
import { WaterWQDocument } from 'src/waterModelQt';

@Controller('/api/waterWQ')
export class WaterWqController {
    constructor(private readonly waterService: WaterWqService) {
    }
    @Post()
    async create(@Body() payload:any, @Res() res:any): Promise<any> {
        const docWater = await this.waterService.create(payload);
        return res.status(HttpStatus.CREATED).json(docWater);
    }
    @Get()
    async findAll(@Res() res:any): Promise<any> {
        const docWater = await this.waterService.findAll();
        return res.status(HttpStatus.OK).json(docWater);
    }

    @Get(':id')
    async findOne(@Res() res:any, @Param('id') id:string): Promise<WaterWQDocument> {
        const docWater = await this.waterService.findOne(id);
        return res.status(HttpStatus.OK).json(docWater);
    }   

    @Put(':id')
    async update(@Res() res:any, @Param('id') id:string, @Body() payload:WaterWQDocument): Promise<WaterWQDocument> {
        const docWater = await this.waterService.update(id, payload);
        return res.status(HttpStatus.OK).json(docWater);
    }

    @Delete(':id')
    async remove(@Res() response,@Param('id') id: string) {
        try {
        const deletedDocWater = await this.waterService.remove(id);
        return response.status(HttpStatus.OK).json({
            message: 'Water document deleted successfully',
            deletedDocWater,});
        }catch (err){
        return response.status(err.status).json(err.response);
        }
    }
}
