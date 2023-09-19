import { Injectable } from '@nestjs/common';
import { DoctorRoom } from './schemas/doctor_room.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DoctorRoomDTO } from './dto/doctorRoom.dto';

@Injectable()
export class DoctorRoomsService {

    constructor(
        @InjectModel(DoctorRoom.name) private roomModel: Model<DoctorRoom>,
    ) {}

    async getAllRooms(): Promise<DoctorRoom[]> {
        const rooms = await this.roomModel.find();
        return rooms;
    }
}
