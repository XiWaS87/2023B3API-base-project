<<<<<<< HEAD
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
=======
import { IsNotEmpty, IsEmail, Length, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {

  @MinLength(3) 
  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  @MinLength(8)
  password!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
>>>>>>> 9a79630c5f203314d30986506951bf1ec7f397dd
}
