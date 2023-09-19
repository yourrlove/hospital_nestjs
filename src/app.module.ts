import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiseasesModule } from './diseases/diseases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsModule } from './patients/patients.module';
import { LobbyModule } from './lobby/lobby.module';
import { ReceptionModule } from './reception/reception.module';
import { DoctorRoomsModule } from './doctor_rooms/doctor_rooms.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://nanhvt2708:8Z7tuNJGiZnB8Ihx@hospital.dru8iln.mongodb.net/hospital?retryWrites=true&w=majority'),
      DiseasesModule,
      PatientsModule,
      LobbyModule,
      ReceptionModule,
      DoctorRoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
