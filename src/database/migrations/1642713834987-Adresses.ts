import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Adresses1642713834987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp" `);

        await queryRunner.createTable(
            new Table({
                name: 'adresses',
                columns:[
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default:'uuid_generate_v4()',
                    },
                    {
                        name:'adress',
                        type:'varchar',
                        isNullable: false,
                    },
                    {
                        name:'user_id',
                        type:'uuid',
                        isNullable: false,
                    },
                    {
                        name:'adress_complement',
                        type:'varchar',
                        isNullable: false,
                    },
                    {
                        name:'zip',
                        type:'varchar',
                        isNullable: false,
                    },
                    {
                        name:'zone',
                        type:'varchar',
                        isNullable: false,
                    },
                    {
                        name:'city',
                        type:'varchar',
                        isNullable: false,
                    },
                    {
                        name:'obs',
                        type:'varchar',
                        isNullable: false,
                    },

                    {
                        name:'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()',
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('adresses');
    }

}
