import { FormsType } from "./forms_type.model";

export class FormsMail {
    id!: number;
    formTypeId!: number;
    isBcc!: boolean;
    mail!: string;
    formType!: FormsType;
  }