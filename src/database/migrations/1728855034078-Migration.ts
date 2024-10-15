import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728855034078 implements MigrationInterface {
    name = 'Migration1728855034078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo list" RENAME COLUMN "name" TO "sequence"`);
        await queryRunner.query(`ALTER TABLE "todo list" DROP COLUMN "sequence"`);
        await queryRunner.query(`ALTER TABLE "todo list" ADD "sequence" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo list" DROP COLUMN "sequence"`);
        await queryRunner.query(`ALTER TABLE "todo list" ADD "sequence" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo list" RENAME COLUMN "sequence" TO "name"`);
    }

}
