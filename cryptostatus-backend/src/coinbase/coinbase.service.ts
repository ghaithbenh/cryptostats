import { CoinBaseAuthService } from './coinbase-auth.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CoinbaseService {
  constructor(
    private readonly httpService: HttpService,
    private readonly coinbaseAuthService: CoinBaseAuthService,
  ) {}

  async getPrimaryAccountTransactions(userId: string): Promise<any> {
    const PrimaryAccount = await this.getPrimaryAccount(userId);
  }
  async getPrimaryAccount(userId: string): Promise<any> {
    const PrimaryAccount = await this.getPrimaryAccount(userId);
    return this.getAccountTransactions(userId, PrimaryAccount.id);
  }
  private async getAccountTransactions(userId: string, accountId: string) {
    try {
      const response$ = await this.httpService.get(
        `https://api.coinbase.com/v2/accounts/${accountId}/transactions`,
        {
          headers: await this.getHeaders(userId),
        },
      );
      const response = await lastValueFrom(response$);
      return response.data.data;
    } catch (err) {
      throw err.response.data;
    }
  }
  private async getHeaders(userId: string) {
    return {
      Authorization: `Bearer ${await this.coinbaseAuthService.getAccessToken(
        userId,
      )}`,
    };
  }
}
