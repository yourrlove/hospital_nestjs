import { Controller, Get, Res} from '@nestjs/common';
import { Response } from 'express';

@Controller('diseases')
export class DiseasesController {
    @Get()
    root(@Res() res : Response) {
        return res.render(
            'index',
            { message: 'Hello world!' }
        );  
    }
}
