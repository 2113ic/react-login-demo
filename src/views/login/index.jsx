import './index.scss'
import { ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'

export default function Login() {
  function test() {
    console.log(11111)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <div className="login-page">
        <Outlet fn={test}></Outlet>
      </div>
    </ConfigProvider>
  )
}
