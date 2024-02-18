import { Atar } from "./atar.model";

export class MerchavDTO {
    kodMerchav!: number;
    shemMerchav!: string;
    typeMerchav!: number;
    kodAtarRashi?: number | null;
    shemLoazi!: string;
    isRmiteck!: number;
    menahelMerchavId?: number | null;
    kodAtarRashiNavigation?: Atar | null;
  }
  