import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { QueryPaginationDto } from 'src/common/dto/query-pagination.dto';
import { ListUsersDto } from './dtos/listUsers.dto';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Get(['admin/users', 'ambassador/users'])
  async users(@Req() request) {
    const { limit, page, search } = request.query as QueryPaginationDto &
      ListUsersDto;
    const metadata = {
      limit,
      page,
    };

    const queryBuilder = this.userService
      .repositoryAbstract()
      .createQueryBuilder('users');

    if (search) {
      queryBuilder.andWhere(
        'users.first_name LIKE :search OR users.last_name LIKE :search OR users.email LIKE :search',
        { search },
      );
    }

    Object.assign(metadata, { queryBuilder });

    const data = await this.userService.listPaged(metadata);

    const users = data.data.map((item) => {
      return {
        email: item.email,
        firstName: item.first_name,
        id: item.id,
        isAmbassador: item.is_ambassador,
        lastName: item.last_name,
      };
    });

    return {
      ...data,
      data: users,
    };
  }

  @UseGuards(AuthGuard)
  @Get(['admin/user/info/:id', 'ambassador/user/info/:id'])
  async userInfo(@Param('id', new ParseIntPipe()) id) {
    const user = await this.userService.findOne({
      where: { id },
    });

    return {
      email: user.email,
      firstName: user.first_name,
      id: user.id,
      isAmbassador: user.is_ambassador,
      lastName: user.last_name,
    };
  }

  @UseGuards(AuthGuard)
  @Get(['admin/profile', 'ambassador/profile'])
  async profile(@Req() request: Request) {
    const jwt = request.headers['authorization'].split(' ')[1];
    const { id } = await this.jwtService.verifyAsync(jwt);

    const user = await this.userService.findOne({
      where: { id },
    });

    return {
      email: user.email,
      firstName: user.first_name,
      id: user.id,
      isAmbassador: user.is_ambassador,
      lastName: user.last_name,
    };
  }

  @UseGuards(AuthGuard)
  @Put(['admin/users/info', 'ambassador/users/info'])
  async updateInfo(
    @Req() request: Request,
    @Body('first_name') first_name: string,
    @Body('last_name') last_name: string,
  ) {
    const jwt = request.headers['authorization'].split(' ')[1];

    const { id } = await this.jwtService.verifyAsync(jwt);

    await this.userService.update(id, {
      first_name,
      last_name,
    });

    const user = await this.userService.findOne({ where: { id } });

    return {
      email: user.email,
      firstName: user.first_name,
      id: user.id,
      isAmbassador: user.is_ambassador,
      lastName: user.last_name,
    };
  }

  @UseGuards(AuthGuard)
  @Put(['admin/users/password', 'ambassador/users/password'])
  async updatePassword(
    @Req() request: Request,
    @Body('password') password: string,
    @Body('password_confirm') password_confirm: string,
  ) {
    if (password !== password_confirm) {
      throw new BadRequestException('Passwords do not match!');
    }
    const jwt = request.headers['authorization'];

    const { id } = await this.jwtService.verifyAsync(jwt);

    await this.userService.update(id, {
      password: await bcrypt.hash(password, 12),
    });

    return this.userService.findOne({ id });
  }
}
