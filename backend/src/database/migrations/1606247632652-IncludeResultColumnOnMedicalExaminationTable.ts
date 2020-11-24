import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class IncludeResultColumnOnMedicalExaminationTable1606247632652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('medical_exams', 'name');
        await queryRunner.addColumn('medical_exams', new TableColumn({
            
            name: 'result',
            type: 'varchar',
            
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('medical_exams', 'result');
        await queryRunner.addColumn('medical_exams', new TableColumn({
            
            name: 'name',
            type: 'varchar',
            
        }));

    }

}
