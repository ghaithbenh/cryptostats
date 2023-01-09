import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<User>,
  ) {}

  async insertOne(data: Partial<User>): Promise<User> {
    const newUser = new this.user(data);
    return newUser.save();
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.user.findOne({ email });
  }
  async findOneById(_id: string): Promise<User> {
    return this.user.findById(_id);
  }
  async updateOne(userId: string, data: Partial<User>): Promise<User> {
    return this.user.findByIdAndUpdate(userId, data, { new: true });
  }
}
