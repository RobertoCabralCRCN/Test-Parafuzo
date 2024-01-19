import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("parkings")
class Parking {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  plate: string;

  @Column()
  paid: boolean;

  @Column()
  left: boolean;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  time: Date;
}

export { Parking };
