import { FormsType } from "./formsType.model";

export class FormMailDTO {
    id!: number;
    formTypeId!: number;
    isBcc!: boolean;
    mail!: string;
    formType!: FormsType;
  }