import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  age: number;
}
