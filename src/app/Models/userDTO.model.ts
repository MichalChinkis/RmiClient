import { Misra } from "./misra.model";

export class UserDTO {
  userId!: number;
  misOved!: number;
  machozMotza!: number;
  chativa?: number | null;
  merchavChativati?: number | null;
  merchavAgaf?: number | null;
  yechida?: number | null;
  kodAtarLan!: number;
  tarichPticha!: Date;
  sugUser!: number;
  firstName!: string;
  lastName!: string;
  shemOved!: string;
  shemOvedEnglish?: string | null;
  zehut!: string;
  machlaka!: number;
  username!: string;
  statusOved!: number;
  tarichSgira?: Date | null;
  telephone1?: string | null;
  telephone2?: string | null;
  cellular?: string | null;
  merkaziya?: string | null;
  fax?: string | null;
  email?: string | null;
  toar?: number | null;
  misMisra?: number | null;

  misMisraNavigation?: Misra;
}
