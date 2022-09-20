type IFormType = 'input' | 'password' | 'select' | 'datepicker';

export interface IFormItems {
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: string;
  //select配置
  options?: any[];
  //其他配置
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItems[];
  labelWidth?: string;
  itemStyle?: object;
  colLayout?: object;
}
