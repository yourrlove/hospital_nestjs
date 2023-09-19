import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Patient } from "src/patients/schemas/patient.schema";

@Schema({ versionKey: false })
export class DoctorRoom {

    @Prop({required: true})
    doctor: string;

    @Prop()
    cur_slot: number;

    @Prop({required: true})
    max_slot: number;

    @Prop({required: true})
    specialist: string;

    @Prop({})
    patients: [Patient];
}

export const DoctorRoomSchema = SchemaFactory.createForClass(DoctorRoom);