import { FormsType } from "./forms_type.model";

export class FormMailDTO {
    id!: number;
    formTypeId!: number;
    isBcc!: boolean;
    mail!: string;
    formType!: FormsType;
  }