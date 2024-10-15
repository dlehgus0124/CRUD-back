import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service'; 
import { ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ValidationPipe } from '@nestjs/common';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
@ApiTags('TODO')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    async findAll() {
        return this.todoService.findAll();
    }

    @Get(':sequence')
    async findOne(@Param('sequence', ParseIntPipe) sequence: number) {
        return this.todoService.findOne(sequence);
    }

    @Post()
    async create(@Body(new ValidationPipe()) createTodoDto: CreateTodoDto) {
        return this.todoService.create(createTodoDto);
    }

    @Put(':sequence')
    async update(@Param('sequence', ParseIntPipe) sequence: number, @Body(new ValidationPipe()) updateTodoDto: UpdateTodoDto) {
        return this.todoService.update(sequence, updateTodoDto);
    }

    @Delete(':sequence')
    async remove(@Param('sequence', ParseIntPipe) sequence: number) {
        return this.todoService.remove(sequence);
    }
}
