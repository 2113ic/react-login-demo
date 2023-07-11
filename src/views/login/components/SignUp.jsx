import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { save } from '@/store/modules/signUp'
import { validRules, sendValidCode } from '../common'

export default function SignUp() {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const { phone, username, password, code } = useSelector(
    (state) => state.signUp
  )

  function onFinish(info) {
    dispatch(save(info))
  }

  return (
    <div className="sign-up__card">
      <div className="title">注册</div>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ phone, username, password, code }}
      >
        <Form.Item name="phone" rules={validRules.phoneRule}>
          <Input placeholder="手机号" />
        </Form.Item>

        <Form.Item name="username" rules={validRules.usernameRule}>
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item name="password" rules={validRules.passwordRule}>
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item name="code" rules={validRules.codeRule}>
          <Row justify="space-between">
            <Col span={14}>
              <Input placeholder="验证码" />
            </Col>
            <Col>
              <Button
                className="send-code__btn"
                type="primary"
                onClick={sendValidCode.bind(null, form)}
              >
                获取验证码
              </Button>
            </Col>
          </Row>
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
          已有账号？<Link to="/login">立即登录</Link>
        </div>
      </div>
    </div>
  )
}
