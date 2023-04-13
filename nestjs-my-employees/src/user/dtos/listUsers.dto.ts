import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ListUsersDto {
  @ApiPropertyOptional()
  @IsString()
  search?: string;
}
