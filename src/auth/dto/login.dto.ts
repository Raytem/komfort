import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/realizations/user/dto/create-user.dto';

export class LoginDto extends PickType(CreateUserDto, ['email', 'password']) {}
