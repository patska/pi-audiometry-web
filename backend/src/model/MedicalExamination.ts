import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import Patient from './Patient';

@Entity('medical_exams')
class MedicalExamination {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    result: string; 

    @ManyToOne(() => Patient)
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

    @CreateDateColumn()
    created_at: Date; 

    @UpdateDateColumn()
    updated_at: Date; 


}

export default MedicalExamination;