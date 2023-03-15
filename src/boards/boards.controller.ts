import { Controller, Get, Post, Body } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    

   constructor(private boardsService: BoardsService){ }

    @Get('/')   
    getAllBoard(): Board[]{

    return this.boardsService.getAllBoards();

    }
    
    @Post()
    createBoard(
        @Body() createBoardDto : CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }
}
