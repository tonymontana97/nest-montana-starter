import { Module } from '@nestjs/common';

import { ConfigService } from '../sahred/services/config.service';

@Module({
    providers: [ConfigService],
})
export class SharedModule {}
