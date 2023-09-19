import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { DoctorRoomsService } from 'src/doctor_rooms/doctor_rooms.service';
import { PatientsService } from 'src/patients/patients.service';

@Controller('reception')
export class ReceptionController {
    constructor(
        private patientService: PatientsService,
        private doctorRoomService: DoctorRoomsService
    ) {}


    

    @Get()
    findAllPatients(@Res() res: Response) {
        this.doctorRoomService.getAllRooms()
        .then (rooms => {
            this.patientService.findAllPatient('reception')
            .then(patients => {
                return res.render(
                    'reception',
                    {
                        patients: patients,
                        rooms: rooms,
                        max_slot: 10,
                        start_idx: 0,
                        edit: true
                    }
                );
            });
        });
    } 
}
