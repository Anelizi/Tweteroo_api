export class TweetUser {
  private username: string;
  private tweet: string;

  constructor(username: string, tweet: string) {
    this.username = username;
    this.tweet = tweet;
  }
}
export class Tweet extends TweetUser {
  public avatar: string;

  constructor(username: string, tweet: string, avatar: string) {
    super(username, tweet);
    this.avatar = avatar;
  }
}
