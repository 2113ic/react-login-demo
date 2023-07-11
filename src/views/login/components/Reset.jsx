import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { save } from '@/store/modules/reset'
import { validRules, sendValidCode } from '../common'

export default function Reset() {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const { phone, password, code } = useSelector((state) => state.reset)

  function onFinish(info) {
    dispatch(save(info))
  }

  return (
    <div className="reset__card">
      <div className="title">忘记密码</div>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ phone, password, code }}
      >
        <Form.Item name="phone" rules={validRules.phoneRule}>
          <Input placeholder="手机号" />
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
            确定
          </Button>
        </Form.Item>
      </Form>
      <div className="login__foot">
        <Link to="/login">立即登录</Link>
        <div className="to-right">
          没有账号？<Link to="/login/signUp">立即注册</Link>
        </div>
      </div>
    </div>
  )
}
