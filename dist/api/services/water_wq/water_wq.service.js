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
exports.WaterWqService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let WaterWqService = class WaterWqService {
    constructor(waterModel) {
        this.waterModel = waterModel;
    }
    async create(payload) {
        const newWaterDocument = new this.waterModel(payload);
        return await newWaterDocument.save();
    }
    async findAll() {
        return await this.waterModel.find();
    }
    async findOne(id) {
        const existingWaterDoc = await this.waterModel.findById(id).exec();
        if (!existingWaterDoc) {
            throw new common_1.NotFoundException(`Water's ID #${id} not found`);
        }
        return existingWaterDoc;
    }
    async update(id, payload) {
        return await this.waterModel.findByIdAndUpdate(id, payload, { new: true });
    }
    async remove(id) {
        const deletedWaterDoc = this.waterModel.findByIdAndRemove(id);
        if (!deletedWaterDoc) {
            throw new common_1.NotFoundException(`Water's ID #${id} not found`);
        }
        return deletedWaterDoc;
    }
};
WaterWqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Waterwq')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WaterWqService);
exports.WaterWqService = WaterWqService;
//# sourceMappingURL=water_wq.service.js.map