import bgmodel from '~/assets/images/bg_model-N3Y7OWWJ.png'
import bgmodel2 from '~/assets/images/bg-M6F5MNMM.jpg'
import AnimatedSection from '~/components/AnimatedSection'
const Contact = () => {
  return (
    <div className='relative overflow-hidden'>
      <img className='h-[200vw] md:h-auto w-full' src={bgmodel2} alt='' />
      <img className='absolute top-0 right-0' src={bgmodel} alt='' />
      <div className='absolute py-10 bottom-0 md:top-1/2 md:-translate-y-1/2 md:h-max  md:left-[100px] text-black bg-black bg-opacity-10 rounded-2xl   md:max-w-[753px] px-10'>
        <AnimatedSection>
          <div>
            <AnimatedSection defaultX={-50} defaultY={0}>
              <p className='text-[28px] pb-2 w-max mx-auto   md:text-5xl uppercase border-b border-black  font-bold'>
                Contact Us
              </p>
            </AnimatedSection>
            <p className='mt-2 md:text-lg text-center md:text-start'>
              SABA Sports continuously upgrades its core and relevant services. Operators can directly benefit from
              these improved functions without paying extra fees.
            </p>
          </div>
          <div className='grid grid-cols-5'>
            <div className=' col-span-5 md:col-span-3'>
              <p className='md:text-lg text-center md:text-start font-medium mt-8'>
                Please fill in the information and we will contact you as soon as possible.
              </p>
              <div className='mt-2'>
                <p className='text mb-2'>What is your brand name?</p>
                <input
                  placeholder='(Option)'
                  type='text'
                  className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
                />
                <p className='text mb-2'>Remarks</p>
                <input
                  placeholder='(Option)'
                  type='text'
                  className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
                />
                <p className='text mb-2'>Contact Email</p>
                <input
                  placeholder='E-mail'
                  type='text'
                  className='rounded-full mb-3 text-sm px-3 text-black py-2 bg-white w-full'
                />
                <button className='mt-3 transition-all hover:text-white hover:bg-red-600 hover:border-red-600 w-full border rounded-full border-white py-2 p text-lg'>
                  Complete
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Contact
