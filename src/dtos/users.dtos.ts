import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Todos os campos são necessários!' })
  username: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty({ message: 'Todos os campos são necessários!' })
  avatar: string;
}
