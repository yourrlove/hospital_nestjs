import { Module } from '@nestjs/common';
import { LobbyController } from './lobby.controller';
import { LobbyService } from './lobby.service';
import { PatientsModule } from 'src/patients/patients.module';
import { DiseasesModule } from 'src/diseases/diseases.module';

@Module({
  imports: [
    PatientsModule,
    DiseasesModule
  ],
  controllers: [LobbyController],
  providers: [LobbyService]
})
export class LobbyModule {}
