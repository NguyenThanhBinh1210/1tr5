import email from '~/assets/images/email.png'
const Contact = () => {
  return (
    <div className='max-w-[1024px] bg-white mx-auto p-3 pb-20'>
      <h1 className='text-gray-700 text-2xl font-bold mb-4'>Contact Us</h1>
      <h1 className='text-gray-700 text-2xl font-bold mb-4 text-center'>Welcome to unc.chordam.com!</h1>
      <p className='text-gray-700 mb-4 text-center'>
        Please email us if you have any queries about the site, advertising, or anything else.
      </p>
      <img className='w-[250px] mx-auto ' src={email} alt='email' />
      <a href='' className='mb-4 font-bold text-gray-700 block hover:underline text-center italic'>
        abbasystore1m@gmail.com
      </a>
      <h1 className='text-gray-700 text-2xl font-bold mb-4 text-center'>We will revert you as soon as possible…!</h1>
      <p className='text-gray-700 mb-1 text-center'>Thank you for contacting us!</p>
      <p className='text-gray-700 font-bold mb-4 text-center'>Have a great day</p>
    </div>
  )
}

export default Contact
