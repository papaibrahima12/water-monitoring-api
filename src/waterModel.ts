import { Document, Schema } from "mongoose";
import { Water } from "./water/water.interface";

export type WaterDocument = Water & Document

export const WaterSchema = new Schema<Water>({
    temperature_TT: String,
    humidity:String,
    proximity:String,
    pression:String,
    boxes:[String],
},
    {
    timestamps: true },
)

