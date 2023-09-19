import { IsString } from "class-validator";
import { ObjectId } from "mongoose";

export class CreatePatientDto {
    @IsString()
    name: string;

    @IsString()
    birth: string;

    @IsString()
    time: string; 
}