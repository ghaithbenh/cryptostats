import { UsersModule } from 'src/users/users.module';
import { AuthModule } from './../auth/auth.module';
import { CoinBaseAuthService } from './coinbase-auth.service';
import { Module } from '@nestjs/common';
import { CoinbaseController } from './coinbase.controller';
import { HttpModule } from '@nestjs/axios';
import { CoinbaseService } from './coinbase.service';

@Module({
  imports: [HttpModule, AuthModule, UsersModule],
  controllers: [CoinbaseController],
  providers: [CoinBaseAuthService, CoinbaseService],
})
export class CoinBaseModule {}
