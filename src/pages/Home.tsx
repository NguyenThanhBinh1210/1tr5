const Home = () => {
  return (
    <div className='max-w-[1024px] bg-white mx-auto'>
      <div className='p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 border-b'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <div key={item + index} className='rounded border cursor-pointer'>
            <div className='h-[200px]'>
              <img
                src='data:image/jpeg;base64,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'
                alt=''
                className='w-full h-full object-cover rounded'
              />
            </div>
            <div className='px-5 '>
              <div className='bg-white -translate-y-2 p-2 rounded'>
                <div className='flex gap-2 items-center'>
                  <svg
                    className='w-4 h-4 text-gray-400 '
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
                      d='M13.5 8H4m0-2v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z'
                    />
                  </svg>
                  <span className='uppercase text-xs text-gray-400'>ERP Software</span>
                </div>
                <p className='line-clamp-2 font-semibold text-xl mt-2 text-gray-700'>
                  Unlocking the Power of ERP Software for Maximum asdasdsadasd 324234 234243
                </p>
                <p className='text-sm line-clamp-3 text-gray-400 mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem repudiandae placeat beatae deserunt
                  cumque cupiditate, quos quod quaerat minus velit perferendis sed aspernatur in iusto harum dolores
                  corporis eveniet.
                </p>
                <div className='flex items-center justify-between pr-8 mt-3'>
                  <div className='flex items-center gap-0.5'>
                    <svg
                      className='w-5 h-5 text-gray-400 '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        strokeWidth='1'
                        d='M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      />
                    </svg>
                    <span className='text-xs text-gray-400'>dsfsdfds</span>
                  </div>
                  <div className='flex items-center gap-0.5'>
                    <svg
                      className='w-5 h-5 text-gray-400'
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
                        d='M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z'
                      />
                    </svg>
                    <span className='text-xs text-gray-400'>Nov 13, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
