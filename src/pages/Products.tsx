import Contact from '~/modules/Contact'
import bg1 from '~/assets/images/product_intelligence__d-WJZNADBH.jpg'
import bg2 from '~/assets/images/product_intelligence__m2-KMMCLJDT.jpg'
import bg3 from '~/assets/images/product_galaxy_d-UPAKJ5PI.jpg'
import bg4 from '~/assets/images/product_galaxy_m-OXW7RKO4.jpg'
import bg5 from '~/assets/images/product_kv_pg__d-L5TJTBH2.jpg'
import bg6 from '~/assets/images/product_kv_pg__m-5AI2UT4Y.jpg'
import useDeviceType from '~/hooks/UseSize'
import AnimatedSection from '~/components/AnimatedSection'
const Products = () => {
  const size = useDeviceType()

  return (
    <div className='w-full'>
      <div className={`w-full  md:min-h-0 relative`}>
        <img className='w-full' src={`${size === 'pc' ? bg1 : bg2}`} alt='ád' />
        <div className='md:py-[240px] text-white px-10 absolute top-0'>
          <div className='max-w-[590px] pt-20 md:pt-0'>
            <p className='uppercase  text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
              SABA Sports Intelligence
            </p>
            <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
              SABA Sports Intelligence revolutionizes profit optimization by providing data-driven solutions. These
              solutions efficiently manage risks, identify high-value players, and streamline operations through
              independent system queries.
            </p>
            <button
              style={{ backgroundImage: 'linear-gradient(#c7c7c7, #c7c7c7)' }}
              className=' rounded-full text-lg px-8 py-2 text-orange-600 border border-[#c7c7c7]'
            >
              Client Review{' '}
            </button>
          </div>
        </div>
      </div>
      <div className={`w-full  md:min-h-0 relative`}>
        <img className='w-full' src={`${size === 'pc' ? bg3 : bg4}`} alt='áds' />
        <div className='md:py-[240px] text-white px-10 absolute top-0 md:right-0'>
          <AnimatedSection>
            <div className='max-w-[590px] ml-auto pt-20 md:pt-0'>
              <p className='uppercase  text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
                SABA Galaxy View
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                SABA Galaxy View merges youthful visuals with future technology style. It prioritizes user experience
                with an uncluttered interface primarily focused on sporting events. It supports multiple platform
                screens, allowing users to freely switch between card-style or list-style layouts. With one-click quick
                betting, the ability to place various betting options simultaneously on single matches or parlays in one
                order, and the My Favorites function, users can enjoy a new, silky-smooth betting experience.
              </p>
              <button
                style={{ backgroundImage: 'linear-gradient(#c7c7c7, #c7c7c7)' }}
                className=' rounded-full text-lg px-8 py-2 text-orange-600 border border-[#c7c7c7]'
              >
                Client Review{' '}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className={`w-full  md:min-h-0 relative`}>
        <img src={`${size === 'pc' ? bg5 : bg6}`} alt='áds' className='w-full' />
        <div className='md:py-[240px] text-white px-10 absolute top-0 '>
          <AnimatedSection>
            <div className='max-w-[590px] ml-auto pt-7 md:pt-0 '>
              <p className='uppercase  text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
                FIRST PIONEER
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                Through years of continuous development, testing and product innovation, SABA Sports has become a leader
                in Asian sports platforms.
              </p>
              <button
                style={{ backgroundImage: 'linear-gradient(#c7c7c7, #c7c7c7)' }}
                className=' rounded-full text-lg px-8 py-2 text-orange-600 border border-[#c7c7c7]'
              >
                Client Review{' '}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className='md:py-[100px] text-black px-10 mb-20'>
        <AnimatedSection>
          <div className='max-w-[640px] mx-auto pt-7 md:pt-0 '>
            <p className='uppercase  text-[28px] md:text-6xl w-full text-center font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
              REVOLUTIONIZED THE GAMING INDUSTRY
            </p>
            <p className='mb-3 text-sm md:text-lg text-center '>
              We have created dozens of new gameplay options, such as the first and last corner kicks in the first half,
              the exact number of corner kicks in the first and second halves, the exact number of goals in penalty
              kicks, penalty kick odd/even, video assistant referee and more.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <Contact></Contact>
    </div>
  )
}

export default Products
