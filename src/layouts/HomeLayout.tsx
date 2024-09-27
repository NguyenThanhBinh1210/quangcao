import { LayoutPropsInterface } from '~/types/base.type'
import Header from './Header'
import Footer from './Footer'
import homebg from '~/assets/images/bg_light-S46S7HNN.jpg'
const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div style={{ background: `#fff url(${homebg})`, backgroundSize: 'contain' }}>
      <Header></Header>
      <div className='pt-24 md:pt-16'>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default HomeLayout
