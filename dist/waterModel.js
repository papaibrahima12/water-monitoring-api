"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterSchema = void 0;
const mongoose_1 = require("mongoose");
exports.WaterSchema = new mongoose_1.Schema({
    temperature_TT: String,
    humidity: String,
    proximity: String,
    pression: String,
    boxes: [String],
}, {
    timestamps: true
});
//# sourceMappingURL=waterModel.js.map