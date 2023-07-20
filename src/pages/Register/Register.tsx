import { Link } from 'react-router-dom'
import Input from '~/components/Input'
import { PATH, RULES } from '~/contants/contants'
import { useForm, SubmitHandler } from 'react-hook-form'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormRegister>()

  const onSubmit: SubmitHandler<FormRegister> = (data) => {
    console.log('data::', data)
  }

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng ký</div>
              <Input {...register('email', RULES.EMAIL)} placeholder='Email' errorMessage={errors?.email?.message} />
              <Input
                {...register('password', RULES.PASSWORD)}
                placeholder='Password'
                type='password'
                errorMessage={errors?.password?.message}
              />
              <Input
                {...register('confirm_password', RULES.CONFIRM_PASSWORD)}
                placeholder='Confirm Password'
                type='password'
                errorMessage={errors?.confirm_password?.message}
              />
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='flex items-center justify-center text-sm mt-8'>
                <span className='text-slate-400'>Bạn đã có tài khoản?</span>
                <Link className='text-red-400' to={PATH.LOGIN}>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
