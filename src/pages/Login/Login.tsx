import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '~/components/Input'
import { PATH } from '~/contants/contants'

const Login = () => {
  const {
    handleSubmit,
  } = useForm()

  const onSubmit = (data: any) => {
    console.log('data:::', data)
  }

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng nhập</div>
              <Input errorMessage='asdasd' placeholder='Email' name='email' />
              <Input errorMessage='asdasd' placeholder='Password' type='password' name='password' />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center text-sm mt-8'>
                <span className='text-slate-400'>Bạn đã chưa tài khoản?</span>
                <Link className='text-red-400' to={PATH.REGISTER}>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
