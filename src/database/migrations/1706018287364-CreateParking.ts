import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateParking1706018287364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "parkings",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            isNullable: true,
          },
          {
            name: "plate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "paid",
            type: "boolean",
            isNullable: true,
          },
          {
            name: "left",
            type: "boolean",
            isNullable: true,
          },
          {
            name: "start_time",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "end_time",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("parkings");
  }
}

