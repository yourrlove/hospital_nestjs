import { Module } from '@nestjs/common';
import { ReceptionController } from './reception.controller';
import { PatientsModule } from 'src/patients/patients.module';
import { DoctorRoomsModule } from 'src/doctor_rooms/doctor_rooms.module';
import { ReceptionService } from './reception.service';

@Module({
  imports: [
    PatientsModule,
    DoctorRoomsModule
  ],
  controllers: [ReceptionController],
  providers: [ReceptionService]
})
export class ReceptionModule {}
