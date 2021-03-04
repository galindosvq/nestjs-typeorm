import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1614858048503 implements MigrationInterface {
    name = 'CreateUsers1614858048503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "lastName" character varying(25) NOT NULL, "firstName" character varying(25) NOT NULL, "age" integer NOT NULL, "city" character varying(50), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
