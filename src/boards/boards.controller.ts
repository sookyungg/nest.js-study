import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';


@Controller('boards')
export class BoardsController {
    

   constructor(private boardsService: BoardsService){ }

    @Get('/')   
    getAllBoard(): Board[]{

    return this.boardsService.getAllBoards();

    }
    
    @Post('/')
    createBoard(
        @Body() createBoardDto : CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string){
        return this.boardsService.getBoardByID(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id:string,
        @Body('status') status: BoardStatus,
    ) {
        return this.boardsService.updateBoardStatus(id, status)
    }

}
