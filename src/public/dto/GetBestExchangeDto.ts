import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class GetBestExchangeDto {
    @ApiModelProperty()
    public btcAmount: number;
    @ApiModelProperty()
    public usdAmount: number;
    @ApiModelProperty()
    public exchange: string;

    constructor(data: any) {
        Object.assign(this, data);
    }
}
