import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'todo list'})
export class Todo {
    @ApiProperty({ description: '순서'})
    @PrimaryColumn()
    sequence: number;

    @ApiProperty({ description: '오늘 할 일'})
    @Column()
    contents: string;

    @ApiProperty({ description: '수정일'})
    @UpdateDateColumn()
    updatedAt: Date;

    @ApiProperty({ description: '생성일'})
    @CreateDateColumn()
    createdAt: Date;
}