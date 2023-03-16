import{ ArgumentMetadata, PipeTransform, BadRequestException } from "@nestjs/common"
import { BoardStatus } from "../boards.model"

export class BoardStatusValidationPipe implements PipeTransform{
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]
    
    transform(value: any){
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`)
        }

    }

    private isStatusValid(status:any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1
    }
    
    
    
    // transform(value: any, metadata: ArgumentMetadata){
    //     console.log('value', value);
    //     console.log('metadata', metadata);

    //     return value;
    // }
}