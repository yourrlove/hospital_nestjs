import { Module } from '@nestjs/common';
import { DiseasesController } from './diseases.controller';
import { DiseaseService } from './diseases.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Disease, DiseaseSchema } from './schemas/disease.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Disease.name, schema: DiseaseSchema}])],
  controllers: [DiseasesController],
  providers: [DiseaseService],
  exports: [DiseaseService]
})
export class DiseasesModule {}

