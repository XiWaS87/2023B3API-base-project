<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
    Employee = 'Employee',
    Admin = 'Admin',
    ProjectManager = 'ProjectManager'
=======
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum UserRole {
  Employee = 'Employee',
  Admin = 'Admin',
  ProjectManager = 'ProjectManager'
>>>>>>> 9a79630c5f203314d30986506951bf1ec7f397dd
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    username: string

    @Column({ unique: true })
    email: string

<<<<<<< HEAD
    @Column()
    password: string

    @Column( {default: UserRole.Employee })
    role: UserRole
}
=======
    @Column({ select: false })
    password: string

    @Column({ default: UserRole.Employee })
    role: UserRole
}
>>>>>>> 9a79630c5f203314d30986506951bf1ec7f397dd
