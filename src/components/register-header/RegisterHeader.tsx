import { Link } from 'react-router-dom'
import ShoppeLogo from '~/assets/ShoppeLogo'
import { PATH } from '~/contants/contants'

export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-end'>
          <Link to={PATH.PRODUCT}>
            <ShoppeLogo />
          </Link>
        </nav>
        <div className='ml-5 text-xl lg:text-2xl'>Đăng ký</div>
      </div>
    </header>
  )
}
