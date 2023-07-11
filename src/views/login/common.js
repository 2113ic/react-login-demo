export const validRules = {
  usernameRule: [
    { required: true, message: '请输入用户名' },
    { type: 'string', max: 6, message: '用户名不能超过6位数' },
    {
      pattern: /^(?:\d+|[a-zA-Z]+|\d+[a-zA-Z]+|[a-zA-Z]+\d+)$/,
      message: '用户名为数字、字母的组合',
    },
  ],
  phoneRule: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
  ],
  codeRule: [
    { required: true, message: '请输入验证码' },
    {
      pattern: /^\d{6}$/,
      message: '验证码必须是6位数字',
    },
  ],
  passwordRule: [
    { required: true, message: '请输入密码' },
    { type: 'string', min: 6, message: '密码至少6位数' },
    {
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
      message: '密码应含有大小写字母、数字、特殊字符',
    },
  ],
}

export function sendValidCode(form) {
  const errorMsg = form.getFieldError('phone')
  const phone = form.getFieldValue('phone')
  const codeField = form.getFieldInstance('code')

  if (phone && errorMsg.length === 0) {
    const sendBtn = codeField.querySelector('[type=button]')
    let count = 60

    sendBtn.disabled = true
    sendBtn.innerHTML = `${count}s`
    const timer = setInterval(() => {
      sendBtn.innerHTML = `${count--}s`

      if (count == 0) {
        sendBtn.disabled = false
        sendBtn.innerHTML = '重新发送'
        clearInterval(timer)
      }
    }, 1000)
  }
}
