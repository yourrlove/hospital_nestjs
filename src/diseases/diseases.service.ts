import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Disease } from './schemas/disease.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateDiseaseDto, DiseaseID } from './dto/create-disease.dto';

@Injectable()
export class DiseaseService {
    constructor(@InjectModel(Disease.name) private diseaseModel: Model<Disease>) {}

    async create(createDisease: Disease): Promise<Disease> {
        const createdDisease = await this.diseaseModel.create(createDisease);
        return createDisease;
    }

    async findAllDiseases(): Promise<Disease[]> {
        const diseases = await this.diseaseModel.find();
        return diseases;
    }

    async findByID(diseaseID: DiseaseID): Promise<CreateDiseaseDto> {
        return await this.diseaseModel.findById(diseaseID).select('-_id').lean();
    }

    findNameID() {
        return this.diseaseModel.find().select('_id name');
    }
}