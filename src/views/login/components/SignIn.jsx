import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { save } from '@/store/modules/login'
import { validRules } from '../common'

export default function SignIn() {
  const dispatch = useDispatch()
  const { username, password } = useSelector((state) => state.login)

  const onFinish = (info) => {
    dispatch(save(info))
  }

  return (
    <div className="sign-in__card">
      <div className="title">登录</div>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ username, password }}
      >
        <Form.Item name="username" rules={validRules.usernameRule}>
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item name="password" rules={validRules.passwordRule}>
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="login__foot">
        <Link to="/login/reset">忘记密码</Link>
        <div className="to-right">
          没有账号？<Link to="/login/signUp">立即注册</Link>
        </div>
      </div>
    </div>
  )
}
