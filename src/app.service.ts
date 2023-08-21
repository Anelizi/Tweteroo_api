import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './entities/users.entity';
import { Tweet } from './entities/tweets.entity';
import { UserDto } from './dtos/users.dtos';

@Injectable()
export class AppService {
  //persistencia em memoria
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  getTweets(page?: number): Tweet[] {
    const limit = 15;

    if (page !== undefined && (isNaN(page) || page < 1)) {
      throw new BadRequestException();
    }
    const start = page !== undefined ? (page - 1) * limit : 0;
    const end = start + limit;

    return  this.tweets.slice(start, end);
  }

  getTweetsUser(username: string): Tweet[]{
    return this.tweets.filter(tweet => tweet.username === username);
  }

  postUser(body: UserDto) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  userExists(username: string): boolean {
    return this.users.some((user) => user.username === username);
  }

  postTwewt(username: string, tweet: string) {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      throw new NotFoundException();
    }
    const tweetInstance = new Tweet(username, tweet, user.avatar);
    return this.tweets.push(tweetInstance);
  }
}
