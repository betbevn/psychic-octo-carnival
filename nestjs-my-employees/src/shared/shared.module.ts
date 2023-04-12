import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'very-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [],
  exports: [JwtModule],
})
export class SharedModule {}
