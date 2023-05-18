"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterWqController = void 0;
const common_1 = require("@nestjs/common");
const water_wq_service_1 = require("../../services/water_wq/water_wq.service");
let WaterWqController = class WaterWqController {
    constructor(waterService) {
        this.waterService = waterService;
    }
    async create(payload, res) {
        const docWater = await this.waterService.create(payload);
        return res.status(common_1.HttpStatus.CREATED).json(docWater);
    }
    async findAll(res) {
        const docWater = await this.waterService.findAll();
        return res.status(common_1.HttpStatus.OK).json(docWater);
    }
    async findOne(res, id) {
        const docWater = await this.waterService.findOne(id);
        return res.status(common_1.HttpStatus.OK).json(docWater);
    }
    async update(res, id, payload) {
        const docWater = await this.waterService.update(id, payload);
        return res.status(common_1.HttpStatus.OK).json(docWater);
    }
    async remove(response, id) {
        try {
            const deletedDocWater = await this.waterService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Water document deleted successfully',
                deletedDocWater,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WaterWqController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WaterWqController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WaterWqController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], WaterWqController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WaterWqController.prototype, "remove", null);
WaterWqController = __decorate([
    (0, common_1.Controller)('/api/waterWQ'),
    __metadata("design:paramtypes", [water_wq_service_1.WaterWqService])
], WaterWqController);
exports.WaterWqController = WaterWqController;
//# sourceMappingURL=water_wq.controller.js.map