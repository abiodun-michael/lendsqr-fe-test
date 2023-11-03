import LoginForm from '@/components/login-form/LoginForm'
import LoginLayout from '@/layouts/auth/LoginLayout'



export default function Home() {
  return (
  <LoginLayout>
       <LoginForm />
  </LoginLayout>
  )
}
