import { AtarDTO } from "./atar_DTO.model";
import { BaseObject } from "./base_object.model";
import { MerchavDTO } from "./merchav_DTO.model";
import { UserDTO } from "./user_DTO.model";
import { YechidaIrgunitDTO } from "./yechida_irgunitDTO.model";

export class UserDetailsDTO {
    user!: BaseObject<UserDTO> | null;
    atar!: BaseObject<AtarDTO> | null;
    merchav!: BaseObject<MerchavDTO> | null;
    yechidotIrguniot!: BaseObject<YechidaIrgunitDTO> | null;
  }