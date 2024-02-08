import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className='mb-40'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout
