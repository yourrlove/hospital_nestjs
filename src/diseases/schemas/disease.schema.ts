import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Disease {
    @Prop({require: true})
    disease: string;

    @Prop({required: true})
    priority: number;
    
    @Prop({required: true})
    specialist: string;
}

export const DiseaseSchema = SchemaFactory.createForClass(Disease);