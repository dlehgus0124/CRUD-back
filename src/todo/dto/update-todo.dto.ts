import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, MinLength, IsOptional } from "class-validator";
import { CreateTodoDto } from "./create-todo.dto";

export class UpdateTodoDto {
    @IsNotEmpty()
    @ApiProperty({
        description: '순서',
        required: true,
        example: 1
    })
    sequence: number;


    @IsOptional()
    @ApiProperty({  
        description: '내용',
        required: true,
        example: '오늘 할 일'
    })
    contents: string;
}

//export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
//export class UpdateTodoDto extends PickType(CreateTodoDto, ['name']) {};
//export class UpdateTodoDto extends OmitType(CreateTodoDto, ['name']) {}