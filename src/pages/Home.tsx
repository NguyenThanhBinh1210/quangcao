import Contact from '~/modules/Contact'
import about_bg from '~/assets/images/about_kv_pg__d-EL4HPWFL.jpg'
import about_bg_2 from '~/assets/images/about_img_milestone-SXBJ5PAF.png'
const Home = () => {
  return (
    <div>
      <div className='relative'>
        <img src={about_bg} alt='about_bg' />
        <div className='bg-[#2c2c2e] py-8 md:py-0 md:bg-transparent md:absolute top-0 left-0 w-full h-full'>
          <div className='max-w-[1240px] mx-auto '>
            <div className='max-w-[600px] text-white md:ml-auto px-3 md:px-0  md:mt-40'>
              <p className='md:text-lg font-medium text-center md:text-start'>No. 1 Brand in Asia</p>
              <p className='text-[28px] md:text-6xl w-max font-bold border-b mx-auto md:ml-0 md:mr-auto md:pb-5 mb-4'>
                The SABA Legend
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                Aided by its industry expertise, SABA Sports has been on a mission to provide diverse and successful
                platforms for other like-minded operators since early 2000s. SABA Sports has the largest betting pool in
                the market. We monitor all gaming patterns and can immediately detect any fraudulent bets, ensuring safe
                operation and accurate pricing of the entire platform.
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                Over the years, our brand name and sports platform have become synonymous with Asian sports gaming.
                Thanks to our continued growth and advancement in human resources and technology, the investment
                required for start-ups has now been greatly reduced. Operators can now rest assured that we can take
                care of the logistics, and they in turn can focus on their most precious asset - their players.
              </p>
              <p className='mb-3 text-sm md:text-lg text-center md:text-start'>
                We use the latest technology, artificial intelligence and algorithms. That being said, we have never
                abandoned or neglected the crucial human factors in transactions and trading. This is because AI will
                never replace the judgment and expertise of a human trader. We pay attention to every sports event, and
                take quick actions when necessary, to ensure that our operator's business stays viable and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col md:flex-row md:justify-end max-w-[1300px] mx-auto py-10 pb-28'>
        <img src={about_bg_2} alt='about_bg_2' loading='lazy' />
        <div className='absolute top-10 left-0 md:pt-10 pl-10 md:pl-0'>
          <p className='uppercase font-bold text-[28px] md:text-6xl w-max border-b border-black md:pb-3 md:mb-3'>
            Milestones
          </p>
          <p className='md:text-lg mt-2 md:mt-0'>Industrial pioneer and stays ahead of competitors</p>
        </div>
        <div className='md:absolute top-52 left-0 px-3 md:px-0 space-y-4 md:space-y-0'>
          <div className='w-full md:w-[383px] border-b border-dashed border-black pb-3 md:translate-x-[600px]'>
            <p className='text-orange-600 font-bold md:text-6xl'>05</p>
            <p>
              ABA Virtual Tournament: During the pandemic, we offer virtual video games by PES and FIFA, as well as live
              videos for players
            </p>
          </div>
          <div className='w-full md:w-[383px] border-b border-dashed border-black pb-3 md:translate-x-[450px]'>
            <p className='text-green-400 font-bold md:text-6xl'>04</p>
            <p>
              Number Game: While waiting for the result of the draw, players can enjoy live videos of DJs and dancers
            </p>
          </div>
          <div className='w-full md:w-[383px] border-b border-dashed border-black pb-3 md:translate-x-[330px]'>
            <p className='text-sky-400 font-bold md:text-6xl'>03</p>
            <p>Score: A new and fun way to predict score, used for handicap and over/under</p>
          </div>
          <div className='w-full md:w-[383px] border-b border-dashed border-black pb-3 md:translate-x-[220px]'>
            <p className='text-purple-500 font-bold md:text-6xl'>02</p>
            <p>
              We have created dozens of new gameplay options, such as the first and last corner kicks in the first half,
              the exact number of corner kicks in the first and second halves, the exact number of goals in penalty
              kicks, penalty kick odd/even, video assistant referee, etc.
            </p>
          </div>
          <div className='w-full md:w-[383px] border-b border-dashed border-black pb-3 md:translate-x-[100px]'>
            <p className='text-orange-500 font-bold md:text-6xl'>01</p>
            <p>
              Unique handicap and professional over/under in Asian market: SABA Sports is considered an indispensable
              product creator in the industry, laying the groundwork for its leadership role among Asian sports
              platforms.
            </p>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default Home
