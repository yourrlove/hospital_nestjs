import { Controller, Post, Body, Res, Get, Query } from "@nestjs/common";
import { DiseaseService } from "src/diseases/diseases.service";
import { DiseaseID } from "src/diseases/dto/create-disease.dto";
import { CreatePatientDto } from "src/patients/dto/create-patient.dto";
import { PatientsService } from "src/patients/patients.service";
import { Request, Response, query } from 'express';
import { PatientDTO } from "src/patients/dto/patient.dto";
import { LobbyService } from "./lobby.service";
import { Disease } from "src/diseases/schemas/disease.schema";

@Controller('lobby')
export class LobbyController {
    constructor(
        private diseaseService: DiseaseService,
        private patientService: PatientsService,
        private lobbyService: LobbyService
    ) {}
        
    @Post()
    async create(
        @Body() createPatient: CreatePatientDto,
        @Body() diseaseID: DiseaseID,
        @Res() res: Response
    ) {
        
        await this.patientService.create(createPatient, diseaseID);
        return res.redirect("/lobby");
    }

    @Get()
    async findAllPatients(
        @Res() res: Response,   
        @Query('move') move: boolean,
        @Query('success') success: boolean
    ) {

        // Move each patient from Lobby to Reception  
        if(move) {
        //check if reception is FULL or Lobby is EMPTY - using flag
        const [len_lobby, len_reception] : [number, number] = await Promise.all ([
            this.patientService.countPatients('lobby'),
            this.patientService.countPatients('reception')
        ]);

        let flag : number = 1;
        if(len_lobby == 0 || len_reception == 10) {
            flag = 0;
        } 
        else {
            const listPatients : PatientDTO[] = await this.patientService.findAllPatient('lobby');
            const patient_move_Id : string = this.lobbyService.heapSort(listPatients);    
            await this.patientService.updateStatus(patient_move_Id, 'reception');
        }
        res.redirect(`/lobby?success=${flag}`);
    } 
    else {

        // flag to indicate whether transfer is successful or failed
        let flag : boolean = null ?? success;

        const [listDisease, patients] : [Disease[], PatientDTO[]] = await Promise.all([
                this.diseaseService.findAllDiseases(),
                this.patientService.findAllPatient('lobby')
            ]);    
        
        return res.render('lobby',
        {
            pageTitle: 'Lobby',
            path: '/lobby',
            diseases: listDisease,
            patients: patients,
            success: flag
        });
    }

    } 
    
}
