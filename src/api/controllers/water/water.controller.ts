import { Body, Controller, HttpStatus, Post,Get, Res, Delete, Param, Put } from '@nestjs/common';
import { WaterService } from 'src/api/services/water/water.service';
import { WaterDocument } from 'src/waterModel';
import { WaterWQDocument } from 'src/waterModelQt';

@Controller('api/waterTT')
export class WaterController {
    constructor(private readonly waterService: WaterService) {
    }
    @Post()
    async create(@Body() payload:any, @Res() res:any): Promise<WaterDocument> {
        const docWater = await this.waterService.create(payload);
        return res.status(HttpStatus.CREATED).json(docWater);
    }
    @Get()
    async findAll(@Res() res:any): Promise<WaterDocument> {
        const docWater = await this.waterService.findAll();
        return res.status(HttpStatus.OK).json(docWater);
    }

    @Get(':id')
    async findOne(@Res() res, @Param('id') id:string): Promise<WaterDocument> {
        const docWater = await this.waterService.findOne(id);
        return res.status(HttpStatus.OK).json(docWater);
    }   

    @Put(':id')
    async update(@Res() res:any, @Param('id') id:string, @Body() payload:WaterDocument): Promise<WaterDocument> {
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
