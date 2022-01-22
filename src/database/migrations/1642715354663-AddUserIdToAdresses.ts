import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddUserIdToAdresses1642715354663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createForeignKey(
            'adresses',
            new TableForeignKey({
              name: 'AdressesUser',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('adresses', 'AdressesUser');

    }

}
