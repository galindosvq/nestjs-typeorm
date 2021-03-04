import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  lastName: string;

  @Column({ length: 25 })
  firstName: string;

  @Column()
  age: number;

  @Column({ length: 50, nullable: true })
  city: string;
}
