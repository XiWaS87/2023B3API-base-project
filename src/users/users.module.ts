import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
<<<<<<< HEAD

@Module({
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
>>>>>>> 9a79630c5f203314d30986506951bf1ec7f397dd
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
