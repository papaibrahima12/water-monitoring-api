import { Document, Schema } from "mongoose";
import { Waterwq } from "./waterqt/waterqt.interface";

export type WaterWQDocument = Waterwq & Document

export const WaterWQSchema = new Schema<Waterwq>({
    temperature_WQ: String,
    turbidity:String,
    conductivity:String,
    ph:String,
    oxygen:String,
},
    {
    timestamps: true },
)

