import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {RegisterDto} from "../dto";
import * as bcrypt from 'bcrypt';
import {UserService} from "../user/user.service";
import {UserDto} from "../dto/user-dto";
import {LoginDto} from "../dto/login.dto";
import {plainToInstance} from "class-transformer";
import {User} from "../entities";


interface Payload {
    id: number|string;
    name: string;
    username: string;
}

export interface AuthBody {
    token: string,
    user:UserDto
}

@Injectable()
export class AuthService{
    constructor(
        private jwtService:JwtService,
        private userService:UserService
    ) {}

    async createPasswordDigest(password:string){
        return bcrypt.hash(password,10)
    }

    async register(register:RegisterDto){
        const {password,username,name} = register

        const passwordDigest =  await this.createPasswordDigest(password)

        const user =  await this.userService.createUser({name,username,passwordDigest})

        return this.createAuthBody(user)

    }

    async login(loginBody:LoginDto){

        const user = await this.userService.getUserByUserName(loginBody.username)

        if(!user){
            throw new NotFoundException('User do not exist');
        }

        const isPasswordValid = await this.userService
            .compareUserPassword(loginBody.password,user.passwordDigest)

        if (!isPasswordValid) {
            throw new BadRequestException('INVALID_PASSWORD');
        }

        return this.createAuthBody(user)

    }

    async createAuthBody(user: User):Promise<AuthBody>{
        const {id,name,username} = user
        const payload: Payload = {
            id:id,
            username:username,
            name:name,
        };

        const jwtToken = await this.jwtService.signAsync(payload, {
            secret:process.env.JWT_SECRET,
        });
        return {
            token: 'Bearer '+jwtToken,
            user:plainToInstance(UserDto,user,{
                excludeExtraneousValues:true
            })
        }

    }

}



