import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1728853225322 implements MigrationInterface {
    name = 'Migration1728853225322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo list" ("id" integer NOT NULL, "name" character varying NOT NULL, "contents" character varying NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_00ea1099bef6aab39432ad1c076" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo list"`);
    }

}
