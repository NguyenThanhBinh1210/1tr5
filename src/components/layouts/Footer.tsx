import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-[1024px]  mx-auto border-t'>
      <div className='justify-center flex gap-3 bg-white'>
        <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/'}>
          Home
        </Link>
        <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/private'}>
          Privacy Policy
        </Link>
        <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/about'}>
          About
        </Link>
        <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/contact'}>
          Contact Us
        </Link>
        <Link className='py-3 text-sm font-bold hover:text-gray-600 text-gray-400' to={'/term'}>
          Term Of Service
        </Link>
      </div>
      <div className='bg-gray-700 text-white text-center py-8'>Copyright @ 2019 zorelix.com</div>
    </div>
  )
}

export default Footer
