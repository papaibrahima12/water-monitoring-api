"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const water_controller_1 = require("../api/controllers/water/water.controller");
const water_service_1 = require("../api/services/water/water.service");
const waterModel_1 = require("../waterModel");
let WaterModule = class WaterModule {
};
WaterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Water', schema: waterModel_1.WaterSchema }]),
        ],
        controllers: [water_controller_1.WaterController],
        providers: [water_service_1.WaterService]
    })
], WaterModule);
exports.WaterModule = WaterModule;
//# sourceMappingURL=water.module.js.map