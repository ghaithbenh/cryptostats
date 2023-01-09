import { ConfigService } from '@nestjs/config';
import { UserResponse } from './../users/dto/response/user-response.dto';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

export interface TokenPayload {
  userId: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(user: UserResponse, response: Response): Promise<void> {
    response.cookie('user', user, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    const tokenPayload: TokenPayload = {
      userId: user._id,
      email: user.email,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign({
      sub: tokenPayload.userId,
      ...tokenPayload,
    });

    response.cookie('Authentication', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      expires,
    });
  }
}
