import { IsNumber, IsString } from "class-validator";

export class PatientDTO {
    @IsString()
    _id: string;

    @IsString()
    name: string;

    @IsString()
    birth: string;

    @IsString()
    disease: string;

    @IsString()
    time: string;

    @IsNumber()
    priority: number;

    @IsString()
    specialist: string;

    @IsString()
    status: string;
}