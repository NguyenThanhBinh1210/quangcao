import bg1 from '~/assets/images/ice-2025-kv-d-PDF5LQUW.jpg'
import bg2 from '~/assets/images/ice-2025-kv-m-RKZQP7XK.jpg'
import bg3 from '~/assets/images/ice-2025-map-m-OUCZQ63H.png'
import bg4 from '~/assets/images/galaxy-bg-d-YR5OWZAY.jpg'
import bg5 from '~/assets/images/galaxy-bg-m-FMFRW5NC.jpg'
import bg6 from '~/assets/images/galaxy-kv-OQPHODRA.png'
import useDeviceType from '~/hooks/UseSize'
const News = () => {
  const size = useDeviceType()

  return (
    <div className='w-full'>
      <div className='relative w-full'>
        <img className='w-full' src={`${size === 'mobile' ? bg2 : bg1}`} alt='' />
        <div className='absolute top-40 md:top-56 left-8 md:left-32'>
          <p className='text-purple-500 text-3xl font-medium'>Meet Us At</p>
          <div className='text-white text-3xl md:text-6xl font-medium'>
            Stand
            <span className='text-5xl ml-2 md:text-8xl'>4D34</span>
          </div>
          <div className='text-white bg-purple-300 md:text-2xl md:py-2 md:font-medium md:px-5 bg-opacity-15 px-3 mt-2'>
            Fira Barcelona Gran Via | 20-22 January 2025
          </div>
          <button className='text-white md:text-3xl md:px-6 md:pb-3 rounded-full bg-gradient-to-b from-purple-400 text-sm py-0.5 px-5 mt-5 pb-1 hover:shadow-sm hover:opacity-80 transition-all to-purple-900'>
            Learn more
          </button>
          <img className='w-[150px] md:w-[300px] mt-5' src={bg3} alt='bg3' />
        </div>
      </div>
      <div className={`w-full  md:min-h-0 relative`}>
        <img className='w-full' src={`${size === 'pc' ? bg4 : bg5}`} alt='áds' />
        <img src={bg6} alt="bg6" className='absolute top-1/2 md:left-20 md:-translate-y-1/2 md:max-w-[781px]' />
        <div className='md:py-[240px] text-white w-[300px] md:w-auto md:px-10 absolute top-0  left-1/2  -translate-x-1/2 md:left-0 md:-translate-x-0  md:right-16'>
          <div className='md:max-w-[590px] ml-auto pt-20 md:pt-0'>
            <p className='uppercase  text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
              All New Galaxy
            </p>
            <ul className='list-disc ml-4'>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Upgraded User Experience</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Primary Sport UI</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Lightning-fast Response</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Customizable Layout</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Add to Favorites</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Quick Bet Mode</li>
              <li className='mb-3 text-sm md:text-lg  md:text-start'>Seamless Single and Parlay Bets</li>
            </ul>
            <button
              style={{ backgroundImage: 'linear-gradient(#c7c7c7, #c7c7c7)' }}
              className=' rounded-full text-lg px-8 py-2 text-orange-600 border border-[#c7c7c7]'
            >
              Try It Now
            </button>
          </div>
        </div>
      </div>
      <div className='md:py-[240px] hidden md:flex text-black w-[300px] mx-auto md:w-auto md:px-10  top-0 '>
        <div className='md:max-w-[590px] mx-auto pt-20 md:pt-0'>
          <p className='uppercase  text-[28px] md:text-6xl w-full font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
            Media Interview

          </p>


        </div>
      </div>
    </div>
  )
}

export default News
