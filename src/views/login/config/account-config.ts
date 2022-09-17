//账号表单验证
export const rules = {
  name: [
    {
      required: true,
      message: '账号不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号只能是5-10位字母或数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,8}$/,
      message: '账号只能是6-8位字母或数字~',
      trigger: 'blur'
    }
  ]
};
