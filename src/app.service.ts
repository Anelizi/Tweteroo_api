import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { Tweets } from './entities/tweets.entity';

@Injectable()
export class AppService {
  //persistencia em memoria
  private users: User[];
  private tweets: Tweets[];

  constructor(){
    this.users = [];
    this.tweets = [];
  }

  getHello(): string {
    return 'Hello World!';
  }

  getTweets() {
    return this.tweets;
  }
}
