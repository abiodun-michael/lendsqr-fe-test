import LoginForm from '@/components/login-form'
import LoginLayout from '@/layouts/auth/LoginLayout'



export default function Home() {
  return (
  <LoginLayout>
       <LoginForm />
  </LoginLayout>
  )
}
