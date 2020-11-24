import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('patients')
class Patient {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    name: string; 

    @Column()
    email: string; 

    @Column()
    cpf: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 


}

export default Patient;