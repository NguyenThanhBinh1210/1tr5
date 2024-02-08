import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='max-w-[1024px] bg-white mx-auto'>
      <h1 className='py-2 font-bold text-center text-4xl border-b pb-6'>unc.chordam.com</h1>
      <div className='flex items-center justify-between px-6 border-b'>
        <div className='flex items-center gap-3 '>
          <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
            Cloud Marketing
          </Link>
          <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
            CRM Software
          </Link>
          <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
            ERP Software
          </Link>
          <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
            MRP Software
          </Link>
          <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
            HRIS Software
          </Link>
        </div>
        <svg
          className='w-6 h-6 text-gray-400 cursor-pointer'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth='2'
            d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
          />
        </svg>
      </div>
    </div>
  )
}

export default Header
