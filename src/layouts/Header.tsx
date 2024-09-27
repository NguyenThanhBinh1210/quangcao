import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/images/sabalogo-2M52YMTI.svg'
const Header = () => {
  const location = useLocation().pathname
  return (
    <div>
      <header className='fixed z-20 top-0 left-0 w-full h-max flex items-center justify-between bg-[#000000] px-2 py-2'>
        <img className='w-[200px] flex-shrink-0' src={logo} alt='logo' loading='lazy' />
        <div className=' text-white text-lg h-full gap-x-14 hidden md:flex'>
          <Link to={'/'} className='relative group'>
            SABA Sports
            <div
              className={` ${location === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-5 left-0`}
            ></div>
          </Link>
          <Link to={'/product'} className='relative group'>
            Products
            <div
              className={` ${location === '/product' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-5 left-0`}
            ></div>
          </Link>
          <Link to={'/services'} className='relative group'>
            Services
            <div
              className={` ${location === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-5 left-0`}
            ></div>
          </Link>
          <Link to={'/news'} className='relative group'>
            News Release
            <div
              className={` ${location === '/news' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-5 left-0`}
            ></div>
          </Link>
          <Link to={'/contact'} className='relative group'>
            Contact Us
            <div
              className={` ${location === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-5 left-0`}
            ></div>
          </Link>
        </div>
        <button
          style={{ backgroundImage: 'linear-gradient(#ff6f5e, #e13b28)' }}
          className='text-white hover:shadow-md mr-4 md:mr-10 transition-all hover:opacity-85 h-max rounded-full text-lg px-3 py-0.5'
        >
          Try It Now
        </button>
      </header>

      <div className='md:hidden fixed h-ơ z-20 top-20 left-0  w-full  flex items-center justify-between bg-[#2c2c2e] px-2 py-2'>
        <div className=' text-white gap-x-3 h-full w-max text-sm flex'>
          <Link to={'/'} className='relative group'>
            SABA Sports
            <div
              className={` ${location === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-2 left-0`}
            ></div>
          </Link>
          <Link to={'/product'} className='relative group'>
            Products
            <div
              className={` ${location === '/product' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-2 left-0`}
            ></div>
          </Link>
          <Link to={'/services'} className='relative group'>
            Services
            <div
              className={` ${location === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-2 left-0`}
            ></div>
          </Link>
          <Link to={'/news'} className='relative group'>
            News Release
            <div
              className={` ${location === '/news' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-2 left-0`}
            ></div>
          </Link>
          <Link to={'/contact'} className='relative group'>
            Contact Us
            <div
              className={` ${location === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-red-500  transition-all  h-1 absolute -bottom-2 left-0`}
            ></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
