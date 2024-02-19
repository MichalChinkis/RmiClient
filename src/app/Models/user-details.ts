import { Atar } from "./atar";
import { BaseObject } from "./base-object";
import { Merchav } from "./merchav";
import { User } from "./user";
import { YechidaIrgunit } from "./yechida-irgunit";

export class UserDetails {
    user!: BaseObject<User> | null;
    atar!: BaseObject<Atar> | null;
    merchav!: BaseObject<Merchav> | null;
    yechidotIrguniot!: BaseObject<YechidaIrgunit> | null;
  }