import { Injectable } from '@nestjs/common';
import { PatientDTO } from 'src/patients/dto/patient.dto';

@Injectable()
export class LobbyService {


    async Heapify(listPatients: PatientDTO[], curIndex: number): Promise<PatientDTO[]> {

        let highest_prior: number = listPatients[curIndex].priority;
        let highest_prior_Indx: number = curIndex;
        let len: number = listPatients.length;

        let leftchildIndx: number = 2 * curIndex + 1;
        let rightchildIndx: number = 2 * curIndex + 2;

        if(leftchildIndx < len && listPatients[leftchildIndx].priority < highest_prior) {
            highest_prior = listPatients[leftchildIndx].priority;
            highest_prior_Indx = leftchildIndx;
        }

        if(rightchildIndx < len && listPatients[rightchildIndx].priority < highest_prior) {
            highest_prior = listPatients[rightchildIndx].priority;
            highest_prior_Indx = rightchildIndx;
        }
        if(highest_prior_Indx !== curIndex) {
           
            this.swap(listPatients, curIndex, highest_prior_Indx);
            // countine Heapify
            this.Heapify(listPatients, highest_prior_Indx);
        } else {
            return listPatients;
        }
    }

    sinkDown(listPatients: PatientDTO[], len: number) : string {
        const patient_move = listPatients[0];
        listPatients[0] = listPatients[len - 1];
        listPatients.pop();
        return patient_move._id;
    }

    heapSort(listPatients: PatientDTO[]) : string {

        let len: number = listPatients.length;
        let i: number = Math.floor(len / 2) - 1;
        for(; i >= 0; i--) {
            this.Heapify(listPatients, i);
        }
        return this.sinkDown(listPatients, len);
    }

    swap(listPatients: PatientDTO[], index_1: number, index_2: number): PatientDTO[] {
        [listPatients[index_1], listPatients[index_2]] =  [listPatients[index_2], listPatients[index_1]];
        return listPatients;
    }
}
