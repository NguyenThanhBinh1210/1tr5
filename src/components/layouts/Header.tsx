import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showSeach, setShowSeach] = useState(false)
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='max-w-[1024px] bg-white mx-auto relative'>
      <h1 className='py-2 font-bold text-center text-4xl border-b pb-6'>unc.chordam.com</h1>
      <div className='flex py-3 md:py-0 relative items-center justify-between px-6 border-b'>
        <svg
          onClick={() => setShowNav(!showNav)}
          className='w-6 h-6 text-gray-400 md:hidden block'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path stroke='currentColor' strokeLinecap='round' strokeWidth='2' d='M5 7h14M5 12h14M5 17h14' />
        </svg>

        <div
          className={`absolute md:relative md:shadow-none z-10 top-full bg-white w-full md:w-max shadow md:left-0 left-1/2 -translate-x-1/2 md:-translate-x-0 ${
            showNav ? '!flex' : 'hidden'
          } md:flex hidden flex-col md:flex-row items-center gap-3`}
        >
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
        <div onClick={() => setShowSeach(!showSeach)}>
          {showSeach ? (
            <svg
              className='w-6 h-6 text-gray-400 cursor-pointer flex-shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18 18 6m0 12L6 6'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-gray-400 cursor-pointer flex-shrink-0'
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
          )}
        </div>
      </div>
      {showSeach && (
        <form className='bg-white z-10 shadow rounded-md w-[96%]  absolute top-full left-1/2 -translate-x-1/2'>
          <input type='text' placeholder='Search here ...' className='p-2 focus:ring-1 rounded-md ring-black w-full' />
          <svg
            className='w-6 h-6 text-gray-400 cursor-pointer flex-shrink-0 absolute top-1/2 -translate-y-1/2 right-3'
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
        </form>
      )}
    </div>
  )
}

export default Header
