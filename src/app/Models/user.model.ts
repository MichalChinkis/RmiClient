import { Misra } from "./misra.model";
import { StatusUser } from "./statusUser.model";

export class User {
    usrUserId!: number;
    usrMisOved!: number;
    usrMachozMotza!: number;
    usrChativa!: number;
    usrMerchavChativati!: number;
    usrMerchavAgaf!: number;
    usrYechida!: number;
    usrKodAtarLan!: number;
    usrTarichPticha!: Date;
    usrSugUser!: number;
    usrFirstName!: string;
    usrLastName!: string;
    usrShemOved!: string;
    usrShemOvedEnglish!: string;
    usrZehut!: string;
    usrMachlaka!: number;
    usrUsername!: string;
    usrStatusOved!: number;
    usrTarichSgira!: Date;
    usrTelephone1!: string;
    usrTelephone2!: string;
    usrCellular!: string;
    usrMerkaziya!: string;
    usrFax!: string;
    usrEmail!: string;
    usrToar!: number;
    misMisra!: number;
  
    misMisraNavigation!: Misra;
    usrStatusOvedNavigation!: StatusUser;
}