import { Prop } from '@nestjs/mongoose';

export class CoinBaseAuth {
  @Prop()
  accessToken: string;
  @Prop()
  refreshToken: string;
  @Prop()
  expires: Date;
}
