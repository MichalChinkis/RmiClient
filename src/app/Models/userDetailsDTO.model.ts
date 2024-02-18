import { AtarDTO } from "./atarDTO.model";
import { BaseObject } from "./baseObject.model";
import { MerchavDTO } from "./merchavDTO.model";
import { UserDTO } from "./userDTO.model";
import { YechidaIrgunitDTO } from "./yechidaIrgunitDTO.model";

export class UserDetailsDTO {
    user!: BaseObject<UserDTO> | null;
    atar!: BaseObject<AtarDTO> | null;
    merchav!: BaseObject<MerchavDTO> | null;
    yechidotIrguniot!: BaseObject<YechidaIrgunitDTO> | null;
  }