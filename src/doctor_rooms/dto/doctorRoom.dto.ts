import { IsNumber, IsString } from "class-validator";
import { PatientDTO } from "src/patients/dto/patient.dto";

export class DoctorRoomDTO {
    @IsString()
    _id: string;

    @IsString()
    doctor: string;

    @IsString()
    cur_slot: number;

    @IsString()
    max_slot: number;

    @IsString()
    specialist: string;

    patients: [PatientDTO];
}