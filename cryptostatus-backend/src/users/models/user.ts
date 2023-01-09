import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CoinBaseAuth } from './CoinbaseAuth';

@Schema({ versionKey: false })
export class User extends Document {
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop()
  coinbaseAuth?: CoinBaseAuth;
}

export const UserSchema = SchemaFactory.createForClass(User);
