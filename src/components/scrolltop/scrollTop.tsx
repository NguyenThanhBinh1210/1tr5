import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
  const { pathname } = useLocation()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className=' bg-[#0000007e] z-10 p-1 rounded fixed bottom-10 right-10'>
          <svg
            className='w-6 h-6 text-white '
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m16 17-4-4-4 4m8-6-4-4-4 4'
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
