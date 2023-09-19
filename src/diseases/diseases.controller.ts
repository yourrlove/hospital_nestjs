import { Body, Controller, Get, Post, Res} from '@nestjs/common';
import { Response } from 'express';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { DiseaseService } from './diseases.service';

@Controller('diseases')
export class DiseasesController {
    constructor(private diseaseService: DiseaseService) {}; 

    @Post()
    create(@Body() createDisease: CreateDiseaseDto, @Res() res: Response) {
        this.diseaseService.create(createDisease);
        return res.redirect("/diseases");
    }

    @Get()
    getAllDiseases(@Res() res : Response) {
        this.diseaseService.findAllDiseases()
        .then(val => {     
            return res.render(
            'diseases',
            {
                p: val
            }
        );
    })

    }



}
