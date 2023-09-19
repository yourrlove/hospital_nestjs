import { IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateDiseaseDto {
    disease: string;
    priority: number;
    specialist: string; 
}

export class DiseaseID {
    
    @IsString()
    _id: string;
}