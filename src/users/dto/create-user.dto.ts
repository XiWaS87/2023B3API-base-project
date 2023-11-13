import { IsEmail, MinLength, IsEnum } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
    @MinLength(3)
    username!: string;

    @MinLength(8)
    password!: string;

    @IsEmail()
    email!: string;

    @IsEnum(UserRole)
    role?: UserRole;
}
