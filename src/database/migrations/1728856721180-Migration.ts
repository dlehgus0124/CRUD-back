import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728856721180 implements MigrationInterface {
    name = 'Migration1728856721180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo list" DROP CONSTRAINT "PK_00ea1099bef6aab39432ad1c076"`);
        await queryRunner.query(`ALTER TABLE "todo list" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "todo list" ADD CONSTRAINT "PK_eb23938f5cf3a0ef22c562909b3" PRIMARY KEY ("sequence")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo list" DROP CONSTRAINT "PK_eb23938f5cf3a0ef22c562909b3"`);
        await queryRunner.query(`ALTER TABLE "todo list" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo list" ADD CONSTRAINT "PK_00ea1099bef6aab39432ad1c076" PRIMARY KEY ("id")`);
    }

}
