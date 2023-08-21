import { IsString, IsNotEmpty } from 'class-validator';
export class TweetsDtos {
    @IsString()
    @IsNotEmpty({message: 'Todos os campos são necessários!'})
    username: string;

    @IsString()
    @IsNotEmpty({message: 'Todos os campos são necessários!'})
    tweet: string;
}