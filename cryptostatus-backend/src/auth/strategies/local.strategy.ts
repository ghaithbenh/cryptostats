import { UserResponse } from './../../users/dto/response/user-response.dto';
import { UsersService } from './../../users/users.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly usersService: UsersService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserResponse> {
    const user = await this.usersService.validateUser(email, password);

    // req.user = user;
    return user;
  }
}
