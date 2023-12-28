import { Expose } from 'class-transformer';

export class LoginDto {
  @Expose()
  username: string;

  @Expose()
  name: string;

  @Expose()
  password: string;

}
