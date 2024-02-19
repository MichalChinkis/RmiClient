import { FormsType } from "./forms_type.model";

export class FormMail {
    id!: number;
    formTypeId!: number;
    isBcc!: boolean;
    mail!: string;
    formType!: FormsType;
  }