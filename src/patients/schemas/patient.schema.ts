import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ versionKey: false })
export class Patient {

    @Prop({require: true})
    name: string;

    @Prop({require: true})
    birth: string;

    @Prop({require: true})
    disease: string;

    @Prop({require: true})
    time: string;

    @Prop({require: true})
    priority: number;

    @Prop({require: true})
    specialist: string;

    @Prop({default: 'lobby'})
    status: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);