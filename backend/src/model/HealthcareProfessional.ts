import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('healthcare_professional')
class HealthcareProfessioanl {

    @PrimaryGeneratedColumn('uuid')
    id: string; 
    
    @Column()
    name: string; 

    @Column()
    userName: string; 

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 
}

export default HealthcareProfessioanl;