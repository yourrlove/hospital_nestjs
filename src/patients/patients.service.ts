import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './schemas/patient.schema';
import { Model, ObjectId } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { CreateDiseaseDto, DiseaseID } from 'src/diseases/dto/create-disease.dto';
import { DiseaseService } from 'src/diseases/diseases.service';
import { PatientDTO } from './dto/patient.dto';


@Injectable()
export class PatientsService {
    constructor(
        @InjectModel(Patient.name) private patientModel: Model<Patient>,
        private diseaseService: DiseaseService
    ) {}

    async create(createPatient: CreatePatientDto, diseaseID: DiseaseID): Promise<void> {
        
        const disease: CreateDiseaseDto = await this.diseaseService.findByID(diseaseID);
 
        await this.patientModel.create({...createPatient, ...disease});

    }

    async findAllPatient(status: string): Promise<PatientDTO[]> {
        const patients: PatientDTO[] = await this.patientModel
                                    .find({status: {$eq: status }})
                                    .lean();
        return patients;
    }

    countPatients(status: string) : Promise<number> {
        return this.patientModel.count({status: status}); 
    }

    updateStatus(patientID: string, status: string): Promise<PatientDTO> {
        return this.patientModel.findByIdAndUpdate(patientID, { $set: {status: status}});
    }
}
