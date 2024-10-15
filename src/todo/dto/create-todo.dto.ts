import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {

    @IsNotEmpty()
    @ApiProperty({
        description: '순서',
        required: true,
        example: 1
    })
    sequence: number;

    @IsNotEmpty()
    @ApiProperty({
        description: '내용',
        required: true,
        example: '오늘 할 일'
    })
    contents: string;
}