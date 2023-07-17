import Footer from '~/components/footer'
import RegisterHeader from '~/components/register-header'

const RegisterLayout = ({ children }: PropsRegister) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
