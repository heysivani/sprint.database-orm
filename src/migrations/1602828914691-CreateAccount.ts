import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAccount1602828914691 implements MigrationInterface {
    name = 'CreateAccount1602828914691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "ownerId" uuid NOT NULL, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_2cb7f7a1dc3b84c8cde2b930944" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_2cb7f7a1dc3b84c8cde2b930944"`, undefined);
        await queryRunner.query(`DROP TABLE "accounts"`, undefined);
    }

}
