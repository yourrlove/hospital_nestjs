import { Module } from '@nestjs/common';
import { DiseasesController } from './diseases.controller';

@Module({
  controllers: [DiseasesController]
})
export class DiseasesModule {}
