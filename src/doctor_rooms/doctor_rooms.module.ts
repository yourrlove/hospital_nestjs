import { Module } from '@nestjs/common';
import { DoctorRoomsController } from './doctor_rooms.controller';
import { DoctorRoomsService } from './doctor_rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorRoom, DoctorRoomSchema } from './schemas/doctor_room.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: DoctorRoom.name, schema: DoctorRoomSchema}])],
  controllers: [DoctorRoomsController],
  providers: [DoctorRoomsService],
  exports: [DoctorRoomsService]
})
export class DoctorRoomsModule {}
