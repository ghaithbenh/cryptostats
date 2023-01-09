import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserResponse } from 'src/users/dto/response/user-response.dto';
import { UsersService } from './users.service';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/request/create-user-request.dto';
import { GetCurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body() createUserRequestDto: CreateUserRequestDto,
  ): Promise<UserResponse> {
    return this.usersService.createUser(createUserRequestDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@GetCurrentUser() user: UserResponse) {
    return user;
  }
}
