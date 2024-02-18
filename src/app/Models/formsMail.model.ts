import { FormsType } from "./formsType.model";

export class FormsMail {
    id!: number;
    formTypeId!: number;
    isBcc!: boolean;
    mail!: string;
    formType!: FormsType;
  }