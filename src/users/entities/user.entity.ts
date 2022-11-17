import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  first_name: string;

  @Column('text')
  last_name: string;

  @Column()
  username: string;

  @Column('text')
  email: string;

  @Column()
  password: string;
}
