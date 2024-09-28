import useDeviceType from '~/hooks/UseSize'
import icon1 from '~/assets/images/service_icon_1-42R3YUXH.svg'
import icon2 from '~/assets/images/service_icon_2-Z5LXJ2GC.svg'
import icon3 from '~/assets/images/service_icon_3-CEWGVFDV.svg'
import icon4 from '~/assets/images/service_icon_4-5MUBIZQP.svg'
import icon5 from '~/assets/images/service_icon_5-XVZ424FX.svg'
import bg1 from '~/assets/images/service_kv_pg__m-MK6PGHDI.jpg'
import bg2 from '~/assets/images/service_kv_pg__d-Z5KWRBLX.jpg'
import Contact from '~/modules/Contact'
import AnimatedSection from '~/components/AnimatedSection'
const Service = () => {
  const size = useDeviceType()

  return (
    <div>
      <div className={`w-full  md:min-h-0 relative`}>
        <img className='md:w-full' src={`${size === 'mobile' ? bg1 : bg2}`} alt='ád' />
        <div className='md:py-[240px] text-white px-10 bg-[#2c2c2e] md:bg-transparent md:absolute top-0'>
          <AnimatedSection>
            <div className='max-w-[590px] py-6 md:py-0'>
              <p className='uppercase text-center md:text-start text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
                REIGNS SUPREME IN ASIA
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                SABA Sports's is proud of its trading team – the best in Asia. The team has 700 professional traders,
                providing the strongest soccer markets in Asia and more than 29 basketball markets. It manages several
                thousand of live games every day. A strong risk control team is working 24 hours a day year-round to
                provide competitive odds. All of these lays a solid foundation for SABA Sports to become an unyielding
                leader in the market.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className='max-w-[720px] mx-auto py-14 '>
        <AnimatedSection>
          <p className='uppercase text-center md:text-start text-[28px] md:text-5xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
            KEEPS PACE WITH THE TIMES
          </p>
        </AnimatedSection>
        <p className='mb-3 text-sm md:text-lg text-center'>
          SABA Sports has the most flexible and adaptable development team. Its overall planning is based on real-time
          global dynamics and market hot topics. And it embodies the fastest customization, the most comprehensive
          technical support, and the friendliest development service.
        </p>
      </div>
      <div className='max-w-[1200px] mx-auto flex flex-wrap justify-center gap-y-4 px-4 md:px-0 mb-20'>
        <div className='w-full sm:w-1/2 bg-white sm:bg-transparent border rounded-md md:border-none md:w-1/3 px-6 py-2'>
          <AnimatedSection>
            <img className='mx-auto' src={icon1} alt='icon1' />
            <p className='text-xl font-bold text-center mt-3 mb-5'>API Seamless Integration</p>
            <p className='text-gray-600 text-center text-lg'>
              We have the strongest technical team that provides a wide variety of customized solutions. From sports API
              to Odds feed, our comprehensive compatibility makes it possible for customers to quickly enjoy the most
              powerful SABA platform.
            </p>
          </AnimatedSection>
        </div>
        <div className='w-full sm:w-1/2 bg-white sm:bg-transparent border rounded-md md:border-none md:w-1/3 px-6 py-2'>
          <AnimatedSection>
            <img className='mx-auto' src={icon2} alt='icon2' />
            <p className='text-xl font-bold text-center mt-3 mb-5'>5-Star Service</p>
            <p className='text-gray-600 text-center text-lg'>
              We have professional services on standby 24 hours a day, all year long, to deliver timely and meticulous
              service to satisfy you every need.
            </p>
          </AnimatedSection>
        </div>
        <div className='w-full sm:w-1/2 bg-white sm:bg-transparent border rounded-md md:border-none md:w-1/3 px-6 py-2'>
          <AnimatedSection>
            <img className='mx-auto' src={icon3} alt='icon3' />
            <p className='text-xl font-bold text-center mt-3 mb-5'>Strong Backend Management</p>
            <p className='text-gray-600 text-center text-lg'>
              Integrated online backend tools allow you to effectively manage your business through real-time monitoring
              of your website, single key report generation and easy offline management.
            </p>
          </AnimatedSection>
        </div>
        <div className='w-full sm:w-1/2 bg-white sm:bg-transparent border rounded-md md:border-none md:w-1/3 px-6 py-2'>
          <AnimatedSection>
            <img className='mx-auto' src={icon4} alt='icon4' />
            <p className='text-xl font-bold text-center mt-3 mb-5'>Data-Based Risk Control</p>
            <p className='text-gray-600 text-center text-lg'>
              By identifying players, measuring bets and monitoring data, we provide the most immediate risk control. A
              strong risk control team maintains competitive odds 24 hours a day year-round. This is what makes SABA
              Sports an unwavering player in this field.
            </p>
          </AnimatedSection>
        </div>
        <div className='w-full sm:w-1/2 bg-white sm:bg-transparent border rounded-md md:border-none md:w-1/3 px-6 py-2'>
          <AnimatedSection>
            <img className='mx-auto' src={icon5} alt='icon5' />
            <p className='text-xl font-bold text-center mt-3 mb-5'>Single Wallet</p>
            <p className='text-gray-600 text-center text-lg'>
              With a single wallet, players no longer need to transfer money to the platform, and instead can play
              directly without any limitation
            </p>
          </AnimatedSection>
        </div>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default Service
