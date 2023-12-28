import {Body, Controller, Post} from "@nestjs/common";
import {AuthBody, AuthService} from "./auth.service";
import {RegisterDto} from "../dto";
import {LoginDto} from "../dto/login.dto";


@Controller('auth')
export class AuthController {

    constructor(private  authService: AuthService) {}

    @Post('registration')
    async register(@Body() registerBody: RegisterDto):Promise<AuthBody> {
        return this.authService.register(registerBody)
    }

    @Post('login')
    async login(@Body() loginBody: LoginDto ){
        return this.authService.login(loginBody)
    }

}






