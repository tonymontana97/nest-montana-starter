import { Module } from '@nestjs/common';

import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';

@Module({
    imports: [SharedModule, PublicModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
