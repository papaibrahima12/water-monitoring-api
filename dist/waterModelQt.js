"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterWQSchema = void 0;
const mongoose_1 = require("mongoose");
exports.WaterWQSchema = new mongoose_1.Schema({
    temperature_WQ: String,
    turbidity: String,
    conductivity: String,
    ph: String,
    oxygen: String,
}, {
    timestamps: true
});
//# sourceMappingURL=waterModelQt.js.map