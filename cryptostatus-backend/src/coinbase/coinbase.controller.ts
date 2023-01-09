import { CoinbaseService } from './coinbase.service';
import { UserResponse } from 'src/users/dto/response/user-response.dto';
import { Controller, Get, Res, UseGuards, Req, Post } from '@nestjs/common';
import { Response, Request } from 'express';
import { GetCurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CoinBaseAuthService } from './coinbase-auth.service';

@Controller('coinbase')
export class CoinbaseController {
  constructor(
    private readonly coinbaseAuthService: CoinBaseAuthService,
    private readonly coinbaseservice: CoinbaseService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('auth')
  authorize(@Res({ passthrough: true }) response: Response): void {
    this.coinbaseAuthService.authorize(response);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/callback')
  handleCallback(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): void {
    this.coinbaseAuthService.handleCallback(request, response);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getcoinbaseData(@GetCurrentUser() user: UserResponse): Promise<any> {
    return this.coinbaseservice.getPrimaryAccountTransactions(user._id);
  }
}
