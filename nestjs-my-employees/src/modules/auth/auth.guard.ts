import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const bearerToken = request.headers['authorization'].split(' ')[1];

    if (!bearerToken) {
      throw new UnauthorizedException('auth.UNAUTHORIZED');
    }

    try {
      const { scope } = await this.jwtService.verifyAsync(bearerToken);
      const is_user = request.path.toString().indexOf('api/v1/ambassador') >= 0;
      return (
        (is_user && scope === 'ambassador') || (!is_user && scope === 'admin')
      );
    } catch (e) {
      return false;
    }
  }
}
