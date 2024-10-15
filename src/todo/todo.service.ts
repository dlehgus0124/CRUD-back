import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
    ) {}

    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    async findOne(sequence: number): Promise<Todo> {
        return this.todoRepository.findOne({
            where: { sequence },
        });
    }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = new Todo();
        todo.sequence = createTodoDto.sequence;
        todo.contents = createTodoDto.contents;
        return this.todoRepository.save(todo);
    }

    async update(sequence: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        const todo = await this.todoRepository.findOne({
            where: { sequence },
        });
        todo.sequence = updateTodoDto.sequence;
        todo.contents = updateTodoDto.contents;
        return this.todoRepository.save(todo);
    }

    async remove(sequence: number): Promise<void> {
        await this.todoRepository.delete(sequence);
    }
}
